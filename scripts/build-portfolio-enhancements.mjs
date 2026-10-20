import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

process.chdir(fileURLToPath(new URL('../', import.meta.url)));
await build({
  entryPoints: { 'portfolio-enhancements': 'src/portfolio-enhancements.tsx' },
  outdir: 'assets/generated/interactions',
  bundle: true,
  splitting: true,
  format: 'esm',
  minify: true,
  target: 'es2022',
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'linked',
});
let html = await readFile('index.html', 'utf8');
for (const ext of ['js', 'css']) {
  const path = `assets/generated/interactions/portfolio-enhancements.${ext}`;
  const hash = createHash('sha256').update(await readFile(path)).digest('hex').slice(0, 10);
  html = html.replace(new RegExp(`${path.replaceAll('.', '\\.')}\\?v=[a-z0-9]+`, 'g'), `${path}?v=${hash}`);
}
await writeFile('index.html', html);
console.log('Built progressive portfolio interactions.');
