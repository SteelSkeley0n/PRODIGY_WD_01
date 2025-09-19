window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const body = document.body;
  const navbar = document.getElementById("navbar");
  const logo = document.querySelector(".logo");
  const topBtn = document.getElementById("toTop");

  if (scrollY > 150) {
    body.style.backgroundColor = "#fff8e1"; // light court tone
    navbar.classList.add("scrolled");
    logo.style.transform = "scale(1.1)";
    logo.style.color = "#ffcc80";
    topBtn.style.display = "block";
  } else {
    body.style.backgroundColor = "#fdfdfb";
    navbar.classList.remove("scrolled");
    logo.style.transform = "scale(1)";
    logo.style.color = "#ffffff";
    topBtn.style.display = "none";
  }
});

// Scroll to top when button clicked
document.getElementById("toTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

});
