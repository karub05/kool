let tl = gsap.timeline();

function time() {
  let a = 0;
  setInterval(function () {
    a = a + Math.floor(Math.random() * 20);
    if (a < 100) {
      document.querySelector(`#loader h2`).innerHTML = a + `%`;
    } else {
      a = 100;
      document.querySelector(`#loader h2`).innerHTML = a + `%`;
    }
  }, 150); // 1 second = 1000 millisecond
}

tl.to("#loader h2", {
  delay: 0.3,
  onStart: time,
});

tl.to("#loader", {
  top: `-100vh`,
  delay: 1,
  duration: 1.2,
  scrub: 2,
});
