const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",() => {
    // Toggle mobile menu visibillity
    document.body.classList.toggle("show-mobile-menu");
});
// Close menu when the close button is clicked
menuCloseButton.addEventListener("click",() => menuOpenButton.click
());

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
