// $(".icon").click(function () {
//     $(".search").toggleClass("form-control");
//     $(".search").toggleClass("expanded", 500);
// });

// banner Slide js
let swiper = new Swiper(".myswiper", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  });


  // video-popup
  $('.video-popup').venobox();

  let navToggleButton = document.querySelector(".nav-toggle-button");
  let navBar = document.querySelector(".nav-bar");
  navToggleButton.addEventListener("click",function(){
    navBar.classList.toggle('nav-bar-header');
    navBar.classList.toggle('nav-bar-header-show');
  })