//Preloader timer
setTimeout(function () {
    $('#Preloader').fadeToggle ();
  },2000);

  //***dark mode function***
  const checkbox = document.getElementById('checkbox');

  checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
    // document.body.classList.toggle('#Preloader');
  })
  //***End of dark mode function***
 

//**To the Top button function code**

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 //**End of To the Top button function***