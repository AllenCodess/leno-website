document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-nav-list-container");

  toggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
