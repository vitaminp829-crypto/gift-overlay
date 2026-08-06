(() => {
  const track = document.getElementById("track");
  const original = document.getElementById("gift-set");

  for (let i = 0; i < 5; i += 1) {
    const clone = original.cloneNode(true);
    clone.removeAttribute("id");
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  }

  const speed = 12; // 1秒に12px。かなりゆっくり
  let offset = 0;
  let previous = performance.now();

  function animate(now) {
    const dt = Math.min((now - previous) / 1000, 0.05);
    previous = now;
    offset += speed * dt;

    const loopWidth = original.getBoundingClientRect().width;
    if (loopWidth > 0 && offset >= loopWidth) offset -= loopWidth;

    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();
