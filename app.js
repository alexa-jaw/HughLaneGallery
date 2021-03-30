"use strict";

function topFunction(){

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//ToDo Pragya: Trying to implement re-usable footer
$(document).ready(function(){
  $('#footer').load('components/footer.html');
});