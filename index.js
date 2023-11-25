const swiper = new Swiper('.swiper', {
  autoplay:{
      delay:3000,
      disableOnInteraction:false,
  },
  loop: true,

  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


var swiper1 = new Swiper(".swiper-container", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper2 = new Swiper(".mySwiper", {
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    868: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1250: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var swiper3 = new Swiper(".mySwiper2", {
  slidesPerGroup: 1,

  loop: true,
  fade: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    868: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


// -----------Countdown timer-------------//

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =  hours + "h "
  + minutes + "m " + seconds + "s " + "remaining";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
  
}, 1000);
var nam=localStorage.getItem("namesign");
var logout=document.getElementById("user")
// logout.addEventListener("click",gologout)
if(nam){
    document.getElementById("user").textContent=nam
}else{
  document.getElementById("user").textContent="Sign In/Sign Out";
}