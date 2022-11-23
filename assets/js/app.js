const App = {
  showHideDropdown() {
    document
      .getElementById("dropdownToggler")
      .addEventListener("click", (e) => {
        const target = document.getElementById("dropdownNav");
        if (target.style.display === "none") {
          target.style.display = "block";
        } else {
          target.style.display = "none";
        }
      });
  },
  countDownTimer() {
    let countDownDate = new Date("Dec 9, 2022 15:37:25").getTime();

    let x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.querySelector("header #days").innerHTML = days;
      document.querySelector("header #hours").innerHTML = hours;
      document.querySelector("header #minutes").innerHTML = minutes;
      document.querySelector("header #seconds").innerHTML = seconds;

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  },
  mapParallaxEffect() {
    const elem = document.querySelector("header #map");
    document.addEventListener("mousemove", (e) => {
      let w = window.innerWidth / 2;
      let h = window.innerHeight / 2;
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      // let depth1 = `${50 - (mouseX - w) * 0.01} ${50 - (mouseY - h) * 0.01}`;
      let xAxis = 50 - (mouseX - w) * 0.03;
      let yAxis = 50 - (mouseY - h) * 0.05;
      // let depth3 = `${50 - (mouseX - w) * 0.06} ${50 - (mouseY - h) * 0.06}`;
      console.log({ xAxis, yAxis });
      // elem.style.backgroundPosition = x;
      elem.style.transiton = "ease-out";
      elem.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
    });
  },
};

window.onload = () => {
  App.showHideDropdown();
  App.countDownTimer();
  App.mapParallaxEffect();
};
