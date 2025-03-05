/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  var h3 = document.querySelector("header h3");
  var navbutton = document.querySelector(".topnav .icon");
  if (x.className === "topnav") {
    x.classList.add('responsive');
    h3.style.display = "none";
    navbutton.classList.remove('fa-bars');
    navbutton.classList.add('fa-xmark');
  } else {
    x.className = "topnav";
    h3.style.display = "block";
    navbutton.classList.add('fa-bars');
    navbutton.classList.remove('fa-xmark');
  }
}

/* Add active class to the current button (highlight it) */
var header = document.getElementById("myTopnav");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    var h3 = document.querySelector("header h3");
    var navbutton = document.querySelector(".topnav .icon");
    h3.style.display = "block";
    navbutton.classList.add('fa-bars');
    navbutton.classList.remove('fa-xmark');
  });
}

// Ensure the links have the 'nav-link' class
document.querySelectorAll('.topnav .nav-links a').forEach(link => {
  link.classList.add('nav-link');
});