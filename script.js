let logoSwitched = false;

document.getElementById("lucky-btn").addEventListener("click", () => {
  const logo = document.getElementById("logo");
  const newSrc = logoSwitched
    ? "./img/logo/google-logo.png"
    : "./img/logo/oddity-logo.png";

  logo.style.transition = "opacity 0.15s";
  logo.style.opacity = 0;

  setTimeout(() => {
    const img = new Image();
    img.src = newSrc;

    img.onload = () => {
      logo.src = newSrc;
      logo.style.opacity = 1;
      logo.style.transition = "opacity 0.15s";
      logoSwitched = !logoSwitched;
    };
  }, 150);
});
