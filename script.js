let logoSwitched = false;

document.getElementById("lucky-btn").addEventListener("click", () => {
  const logo = document.getElementById("logo");

  logo.style.transition = "opacity 0.3s";
  logo.style.opacity = 0;

  setTimeout(() => {
    if (logoSwitched) {
      logo.src = "./img/logo/google-logo.png";
    } else {
      logo.src = "./img/logo/oddity-logo.png";
    }

    logo.style.opacity = 1;

    logoSwitched = !logoSwitched;
  }, 300);
});
