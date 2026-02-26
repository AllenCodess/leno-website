document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-nav-list-container");

  toggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});


//background on scroll

window.addEventListener("scroll", function () {
  const navbar = this.document.querySelector(".navbar")
  if (this.window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
      navbar.classList.remove("navbar-scroll")
    }
})