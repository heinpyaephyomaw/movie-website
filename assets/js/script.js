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
  let toggleIconChange = document.querySelector(".toggle-icon-change");
  let navBar = document.querySelector(".nav-bar");
  navToggleButton.addEventListener("click",function(){
    navBar.classList.toggle('nav-bar-header');
    navBar.classList.toggle('nav-bar-header-show');
   let classHas = navBar.classList.contains('nav-bar-header-show');
    if(classHas){
      toggleIconChange.classList.remove('ti-menu');
      toggleIconChange.classList.add('ti-close');
    }else{
      toggleIconChange.classList.remove('ti-close');
      toggleIconChange.classList.add('ti-menu');
    }
  });



  let navHeaderNameChange = document.querySelector(".nav-header-name-change");
  let navbarParentBackground = document.querySelector(".navbar-parent-background");
  let logoImageHideChange = document.querySelector(".logo-image-hide-change");
  let screenHeight = $(window).height();
  $(window).scroll(function(){
   let onScroll = $(this).scrollTop();
   if( screenHeight/6 <= onScroll){
     navbarParentBackground.classList.add('navbar-navcontainer');
     navHeaderNameChange.classList.remove('nav-header-name');
     logoImageHideChange.classList.add("logo-image-hide");
   }else{
    navbarParentBackground.classList.remove('navbar-navcontainer');
    navHeaderNameChange.classList.add('nav-header-name');
    logoImageHideChange.classList.remove("logo-image-hide");
   }

})