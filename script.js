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


function getForm() {
    // Ajout des Regex
    let form = document.querySelector(".form-detail");

    //Création des expressions régulières
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
    let charRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
    let addressRegExp = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");

    // Ecoute de la modification du pseudo
    form.firstName.addEventListener('change', function () {
        validFirstName(this);
    });

    // Ecoute de la modification du mail
        form.email.addEventListener('change', function () {
          validEmail(this);
      });

    // Ecoute de la modification du password
    form.password.addEventListener('change', function () {
        validPassword(this);
    });

    // Ecoute de la modification du ville
    form.checkPassword.addEventListener('change', function () {
        validConfirmPassword(this);
    });



    //validation du pseudo
    const validFirstName = function (inputFirstName) {
        let firstNameErrorMsg = inputFirstName.nextElementSibling;

        if (charRegExp.test(inputFirstName.value)) {
            firstNameErrorMsg.innerHTML = '';
        } else {
            firstNameErrorMsg.innerHTML = 'Veuillez renseigner ce champ.';
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

    //validation de PassWord
    const validPassword = function (inputAddress) {
        let addressErrorMsg = inputAddress.nextElementSibling;

        if (addressRegExp.test(inputAddress.value)) {
            addressErrorMsg.innerHTML = '';
        } else {
            addressErrorMsg.innerHTML = 'Veuillez renseigner ce champ.';
        }
    };

    //validation de ConfirmPassword
    const validConfirmPassword = function (inputCity) {
        let cityErrorMsg = inputCity.nextElementSibling;

        if (charRegExp.test(inputCity.value)) {
            cityErrorMsg.innerHTML = '';
        } else {
            cityErrorMsg.innerHTML = 'Veuillez renseigner ce champ.';
        }
    };

    