/* Sparse drifting light dust; no remote video, WebGL or pointer interception.
   Elapsed-time motion at <=30 paints/sec, capped pixels/count, independent of cards. */
(() => {
  const layer = document.querySelector('.hero-atmosphere');
  if (!layer) return;
  const canvas = layer.querySelector('canvas');
  const context = canvas.getContext('2d');
  if (!context) return; // CSS light remains available without canvas or JavaScript.
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, points = [], elapsed = 0;
  let visible = false, frame = 0, lastTime = 0;
  // A repeatable distribution avoids a reshuffle every time the window resizes.
  const noise = n => { const x = Math.sin(n * 127.1 + 31.7) * 43758.5453; return x - Math.floor(x); };
  function draw() {
    context.clearRect(0, 0, width, height);
    points.forEach((point, i) => {
      const x = (point.x * width + elapsed * point.speed * 1.8) % width;
      const y = ((point.y * height - elapsed * point.speed * .7) % height + height) % height;
      const quiet = width >= 1024 && x < width * .52 ? .48 : 1;
      const alpha = (.32 + .22 * Math.sin(elapsed * .35 + i)) * quiet;
      context.fillStyle = `rgba(183,216,255,${alpha})`;
      context.beginPath();
      context.arc(x, y, point.radius, 0, Math.PI * 2);
      context.fill();
      if (i % 9 === 0) {
        context.fillStyle = `rgba(126,187,255,${alpha * .12})`;
        context.beginPath();
        context.arc(x, y, point.radius * 4, 0, Math.PI * 2);
        context.fill();
      }
    });
  }
  function resize() {
    width = layer.clientWidth;
    height = layer.clientHeight;
    if (!width || !height) return;
    const ratio = Math.min(devicePixelRatio || 1, 1.5, Math.sqrt(1800000 / (width * height)));
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);
    const count = Math.min(width < 768 ? 40 : 130, Math.max(24, Math.round(width * height / 11000)));
    points = Array.from({ length: count }, (_, i) => ({ x: noise(i + 1), y: noise(i + 231), radius: .45 + noise(i + 89) * .9, speed: .6 + noise(i + 501) }));
    draw();
  }
  function tick(now) {
    if (!lastTime) lastTime = now;
    if (now - lastTime >= 1000 / 30) {
      elapsed += (now - lastTime) / 1000;
      lastTime = now;
      draw();
    }
    frame = requestAnimationFrame(tick);
  }
  function playback() {
    const running = visible && !document.hidden && !reduced.matches;
    layer.dataset.running = String(running);
    if (running && !frame) { lastTime = 0; frame = requestAnimationFrame(tick); }
    if (!running) { cancelAnimationFrame(frame); frame = 0; lastTime = 0; }
    if (reduced.matches) draw();
  }
  new ResizeObserver(resize).observe(layer);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; playback(); }).observe(layer);
  reduced.addEventListener('change', playback);
  document.addEventListener('visibilitychange', playback);
  resize();
  playback();
})();
