let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
/* artcicles dans le slide acceuil */
var artmyslide = document.getElementById("slide01") 
var buttonDiv = document.getElementById("btn-plusinfo")[0];

artmyslide.onmouseover = function() {
    document.getElementById("slide01").style.visibility = 'visible';
    document.getElementById("btn-plusinfo").style.visibility = 'visible';
}
artmyslide.onmouseout = function() {
  document.getElementById("slide01").style.visibility = 'hidden';
    document.getElementById("btn-plusinfo").style.visibility = 'hidden'; 
    
  }

  var artmyslide2 = document.getElementById("slide02") 
var buttonDiv = document.getElementById("btn-plusinfo")[0];

artmyslide2.onmouseover = function() {
    document.getElementById("slide02").style.visibility = 'visible';
    document.getElementById("btn-plusinfo").style.visibility = 'visible';
}
artmyslide2.onmouseout = function() {
  document.getElementById("slide02").style.visibility = 'hidden';
    document.getElementById("btn-plusinfo").style.visibility = 'hidden'; 
    
  }

  var artmyslide3 = document.getElementById("slide03") 
var buttonDiv = document.getElementById("btn-plusinfo")[0];

artmyslide3.onmouseover = function() {
    document.getElementById("slide03").style.visibility = 'visible';
    document.getElementById("btn-plusinfo").style.visibility = 'visible';
}
artmyslide3.onmouseout = function() {
  document.getElementById("slide03").style.visibility = 'hidden';
    document.getElementById("btn-plusinfo").style.visibility = 'hidden'; 
    
  }

  var artmyslide4 = document.getElementById("slide04") 
  var buttonDiv = document.getElementById("btn-plusinfo")[0];
  
  artmyslide4.onmouseover = function() {
      document.getElementById("slide04").style.visibility = 'visible';
      document.getElementById("btn-plusinfo").style.visibility = 'visible';
  }
  artmyslide4.onmouseout = function() {
    document.getElementById("slide04").style.visibility = 'hidden';
      document.getElementById("btn-plusinfo").style.visibility = 'hidden'; 
      
    }
    /* */


//Validation de formulaire avec regex
function getForm() {
  // Ajout des Regex
  let form = document.querySelector(".cart__order__form");

  //Création des expressions régulières
  let pseudoRegExp = new RegExp("^([a-zA-Z0-9-_]{5,40})$");
  let passwordRegExp = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,30})");
  let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
  
  

  // Ecoute de la modification du pseudo
  form.pseudo.addEventListener('change', function () {
      validPseudo(this);
  });

  // Ecoute de la modification du mot de passe
  form.password.addEventListener('change', function () {
      validPassword(this);
  });

  // Ecoute de la modification de la confirmation de passe
  form.passwordBis.addEventListener('change', function () {
      validPasswordBis(this);
  });

  // Ecoute de la modification de l'email
  form.email.addEventListener('change', function () {
      validEmail(this);
  });

  //validation du pseudo
  const validPseudo = function (inputPseudo) {
      let pseudoErrorMsg = inputPseudo.nextElementSibling;

      if (pseudoRegExp.test(inputPseudo.value)) {
          pseudoErrorMsg.innerHTML = '';
      } else {
          pseudoErrorMsg.innerHTML = 'Votre pseudo doit contenir entre 5 et 40 caractères.';
      }
  };

  //validation du mot de passe
  const validPassword = function (inputPassword) {
      let passwordErrorMsg = inputPassword.nextElementSibling;

      if (passwordRegExp.test(inputPassword.value)) {
          passwordErrorMsg.innerHTML = '';
      } else {
          passwordErrorMsg.innerHTML = "Votre mot de passe doit contenir au moins une majuscule, une minuscule ainsi qu'un chiffre et un caractère spécial et doit faire entre 8 et 30 caractères.";
      }
  };

  //validation de la validation de mot de passe
  const validPasswordBis = function (inputPasswordBis) {
      let passwordBisErrorMsg = inputPasswordBis.nextElementSibling;

      if (passwordRegExp.test(inputPasswordBis.value)) {
          passwordBisErrorMsg.innerHTML = '';
      } else {
          passwordBisErrorMsg.innerHTML = 'Vos mot de passe ne correspondent pas. Veuillez ré-essayer.';
      }
  };

  //validation de l'email
  const validEmail = function (inputEmail) {
      let emailErrorMsg = inputEmail.nextElementSibling;

      if (emailRegExp.test(inputEmail.value)) {
          emailErrorMsg.innerHTML = '';
      } else {
          emailErrorMsg.innerHTML = 'Veuillez renseigner votre email.';
      }
  };
}
getForm();

    