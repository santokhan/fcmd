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
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 9, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // document.getElementById("demo").innerHTML =
      //   days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      document.querySelector("header #days").innerHTML = days;
      document.querySelector("header #hours").innerHTML = hours;
      document.querySelector("header #minutes").innerHTML = minutes;
      document.querySelector("header #seconds").innerHTML = seconds;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  },
};

window.onload = () => {
  App.showHideDropdown();
  App.countDownTimer();
};
