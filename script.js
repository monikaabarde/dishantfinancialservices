
// // for header search box

var searchform = document.getElementById("search-form");
    document.getElementById("search-btn").onclick = () => {
      searchform.classList.toggle('active');
      nav.classList.remove('active');
    }
    var nav = document.getElementById("nav");
    document.getElementById("menu").onclick = () => {
      nav.classList.toggle('active');
      searchform.classList.remove('active');
    }
    
    window.onscroll = () => {
      searchform.classList.remove('active');
      nav.classList.remove('active');
  
 }



var swiper = new Swiper(".mySwiper",{
      loop:true,
      // slidesPerView: 3,
      spaceBetween: 20,
      autoplay:{
        delay:2500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          // spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          // spaceBetween: 40,
        },
        1020: {
          slidesPerView: 3,
          // spaceBetween: 50,
        },
      },
    });



