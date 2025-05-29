let logoSwitched = false;

document.getElementById("lucky-btn").addEventListener("click", () => {
  const logo = document.getElementById("logo");

  if (logoSwitched) {
    logo.src = "./img/logo/google-logo.png";
  } else {
    logo.src = "./img/logo/oddity-logo.png";
  }

  logoSwitched = !logoSwitched;
});
