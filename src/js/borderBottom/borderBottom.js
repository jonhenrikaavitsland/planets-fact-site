export function changeColorUnderline() {
  const planetButtons = document.querySelectorAll("main ul .nav-link");
  console.log(planetButtons);

  changeActiveBtn();
  runSwitch();

  function runSwitch() {
    switch (location.pathname) {
      case "venus.html":
        changeBorderColor("bs-yellow");
        break;
      case "earth.html":
        changeBorderColor("bs-purple");
        break;
      case "mars.html":
        changeBorderColor("bs-pink");
        break;
      case "jupiter.html":
        changeBorderColor("bs-red");
        break;
      case "saturn.html":
        changeBorderColor("bs-orange");
        break;
      case "uranus.html":
        changeBorderColor("bs-green");
        break;
      case "neptune.html":
        changeBorderColor("bs-blue");
        break;
      case "/":
        buttonAction("bs-cyan");
        break;
    }
  }

  function buttonAction(color) {
    let viewportWidth = window.innerWidth;
    if (viewportWidth >= "768") {
      changeBackgroundColor(color);
    }
    if (viewportWidth <= "767") {
      changeBorderColor(color);
    }

    window.addEventListener("resize", () => {
      viewportWidth = window.innerWidth;
      console.log(viewportWidth);
      if (viewportWidth >= "768") {
        changeBackgroundColor(color);
      }
      if (viewportWidth <= "767") {
        changeBorderColor(color);
      }
    });
  }

  function changeBorderColor(color) {
    const activePlanetBtn = document.querySelector("main .active");
    activePlanetBtn.style = "";
    activePlanetBtn.style.borderBottom = `4px solid var(--${color})`;
  }

  function changeBackgroundColor(color) {
    const activePlanetBtn = document.querySelector("main .active");
    activePlanetBtn.style.backgroundColor = `var(--${color})`;
    activePlanetBtn.style.borderColor = `var(--${color})`;
  }

  function changeActiveBtn() {
    planetButtons.forEach(button => {
      button.addEventListener("click", () => {
        planetButtons.forEach(btn => {
          btn.classList.remove("active");
          btn.style = "";
        });

        button.classList.add("active");
        runSwitch();
      });
    });
  }
}
