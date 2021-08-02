// alert("awara");
var firstButton = document.querySelector(".first");
var secondButton = document.querySelector(".second");
var thirdButton = document.querySelector(".third");
var firstBoxx = document.querySelector(".firstBox")
var secondBoxx = document.querySelector(".secondBox")
var last = document.querySelector(".thirdBox")

var buttons = document.querySelectorAll(".test");

var miniTitle1 = document.querySelector(".his")
var miniTitle2 = document.querySelector(".vis")
var miniTitle3 = document.querySelector(".gol")



// buttons.forEach(function(btn){
  firstButton.addEventListener("click", function(){
    // alert("hello");
    if(!firstBoxx.classList.contains("showBox")){
      // firstBoxx.classList.remove("showBox");
      firstBoxx.classList.add("showBox");
      secondBoxx.classList.remove("showBox");
      last.classList.remove("showBox");
    }else{
      firstBoxx.classList.add("showBox");
      secondBoxx.classList.remove("showBox");
      last.classList.remove("showBox");
    }
});


secondButton.addEventListener("click", function(){
  // alert("hello");
  if(secondBoxx.classList.contains("showBox")){
    secondBoxx.classList.remove("showBox");
    last.classList.remove("showBox");

  }else{
    secondBoxx.classList.add("showBox");
    firstBoxx.classList.remove("showBox");
    last.classList.remove("showBox");
  }
});

thirdButton.addEventListener("click", function(){
  // alert("hello");
    if(last.classList.contains("showBox")){
      last.classList.remove("showBox");
    }else{
      last.classList.add("showBox");
      firstBoxx.classList.remove("showBox");
      secondBoxx.classList.remove("showBox");
    }
});



//
// buttons.forEach(function(btn){
//   btn.addEventListener("click", function(){
//     alert("hello");
//
//     if(firstBoxx.classList.contains("showBox")){
//       firstBoxx.classList.remove("showBox");
//     }else{
//       firstBoxx.classList.add("showBox");
//       // miniTitle1.innerHTML ="History"
//     }
//
//     if(secondBoxx.classList.contains("showBox")){
//       secondBoxx.classList.remove("showBox");
//     }else{
//       secondBoxx.classList.add("showBox");
//     }
//
//     if(thirdBoxx.classList.contains("showBox")){
//       thirdBoxx.classList.remove("showBox");
//     }else{
//       thirdBoxx.classList.add("showBox");
//     }
//
//   })
// })
