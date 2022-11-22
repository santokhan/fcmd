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
};

window.onload = () => {
  App.showHideDropdown();
};
