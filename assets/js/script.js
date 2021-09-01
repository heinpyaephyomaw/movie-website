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
  $('.video-popup').venobox({
    // framewidth : '400px',                            
    // frameheight: '300px',                         
    // border     : '10px',                            
    // bgcolor    : '#5dff5e',                          
    // titleattr  : 'data-title',                      
    // numeratio  : true,                              
    // infinigall : true,                               
    // share      : ['facebook', 'twitter', 'download'] 
});