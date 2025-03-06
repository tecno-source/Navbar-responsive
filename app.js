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

/* Agregar clase activa al botón actual (resaltarlo) */
var header = document.getElementById("myTopnav");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    // cierra el menu mobile cuando se clikea un link
    var x = document.getElementById("myTopnav");
    var h3 = document.querySelector("header h3");
    var navbutton = document.querySelector(".topnav .icon");
    x.classList.remove('responsive');
    h3.style.display = "block";
    navbutton.classList.add('fa-bars');
    navbutton.classList.remove('fa-xmark');
  });
}

// Asegurarse de que los enlaces cierren el menu'
document.querySelectorAll('.topnav .nav-links a').forEach(link => {
  link.classList.add('nav-link');
  link.addEventListener("click", function() {
    var x = document.getElementById("myTopnav");
    var h3 = document.querySelector("header h3");
    var navbutton = document.querySelector(".topnav .icon");
    x.classList.remove('responsive');
    h3.style.display = "block";
    navbutton.classList.add('fa-bars');
    navbutton.classList.remove('fa-xmark');
  });
});

// validacion de email antes de envio de formulario

let errorMessage = document.querySelector('.error-message');
let form = document.getElementById('contact');
let email = document.getElementById('email');
let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

form.addEventListener('submit', (e) => {
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    errorMessage.style.display = 'block';
    email.style.border = '#dd5353 2px solid';
  } else {
    errorMessage.style.display = 'none';
    email.style.border = '';
  }
});
// local storage

let localData = {
  name: '',
  email: '',
  message: '',
};

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('textform');

function dataLocalStore() {
  localStorage.setItem('name', JSON.stringify(localData));
}

form.addEventListener('input', () => {
  localData.name = nameInput.value;
  localData.email = emailInput.value;
  localData.message = messageInput.value;
  dataLocalStore();
});

if (JSON.parse(localStorage.getItem('name')) !== null) {
  localData = JSON.parse(localStorage.getItem('name'));
  nameInput.setAttribute('value', localData.name);
  emailInput.setAttribute('value', localData.email);
  messageInput.value = localData.message;
}


// document.getElementById('myForm').onsubmit = function(e) {
//   e.preventDefault();
//   var form = e.target;
//   var formData = new FormData(form);
//   var xhr = new XMLHttpRequest();
//   xhr.open(form.method, form.action, true);
//   xhr.onload = function() {
//       if (xhr.status === 200) {
//           window.open('https://formspree.io/thank-you-page', '_blank');
//       }
//   };
//   xhr.send(formData);
// };