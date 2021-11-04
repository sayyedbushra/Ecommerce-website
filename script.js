//  JS for menu items //
var menuItems  = document.getElementById("MenuItems");

menuItems.style.maxHeight = "0px";

function menutoggle(){

  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "250px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}
// js for product img //

  var ProductImg = document.getElementById('ProductImg');
  var SmallImg = document.getElementsByClassName('small-img');

  window.onload = function(){

    SmallImg[0].onclick = function(){
      ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function(){
      ProductImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function(){
      ProductImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function(){
      ProductImg.src = SmallImg[3].src;
    }
    SmallImg[4].onclick = function(){
      ProductImg.src = SmallImg[4].src;
    }
  
}

// Js for toggle form.///

const LoginForm = document.getElementById('LoginForm');
const RegForm = document.getElementById('RegForm');
const Indicator = document.getElementById('Indicator');

function register(){
  RegForm.style.transform = "translateX(0px)";

  LoginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";

}
function login() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";

}