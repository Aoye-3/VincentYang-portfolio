import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
process.chdir(root);
const output = 'assets/generated/chroma-current.js';
await build({
  entryPoints: ['src/hero-background.tsx'],
  outfile: output,
  bundle: true,
  minify: true,
  format: 'iife',
  platform: 'browser',
  target: 'es2022',
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'linked',
});

const licenses = await Promise.all(['react', 'react-dom', 'scheduler', 'three'].map(async name =>
  `${name}\n${await readFile(`node_modules/${name}/LICENSE`, 'utf8')}`
));
await writeFile('assets/generated/THIRD-PARTY-LICENSES.txt', licenses.join('\n\n'));

let html = await readFile('index.html', 'utf8');
for (const path of [output, 'hero-atmosphere.css']) {
  const hash = createHash('sha256').update(await readFile(path)).digest('hex').slice(0, 10);
  html = html.replace(new RegExp(`${path.replaceAll('.', '\\.')}\\?v=[a-f0-9]+`, 'g'), `${path}?v=${hash}`);
}
await writeFile('index.html', html);
console.log(`Built ${output} and refreshed homepage asset versions.`);
