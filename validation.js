'use strict';


    function validar () {
      console.log("wei");
      var name = document.getElementById("name").value;


      var email = document.getElementById("email").value;
      var filtro = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //Es la regular expresion para val Email


      var telf = document.getElementById("telf").value;
      var patron = /^\d{9}$/; // Hay que poner 9 digitos


      if(!name) {
        alert("Put the name please.");
        return false;
      }
      
      if(!patron.test(telf)) {
        alert("Put a valid telf number please (9 digits)");
        return false;
      }

      if(!filtro.test(email)) {
        alert("Put a valid e-mail please.");
        return false;
      }

      else {
        alert(`Good job, ${name}. Valid Form!`);
        return true;
      }      
      // alert("Your name is " +name);
      // return false;
    }
