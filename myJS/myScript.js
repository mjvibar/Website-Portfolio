myButton = document.getElementById("top");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (fname.value == "") {
    if (lname.value == "") {
      document.getElementById("lname").classList.remove("input-valid");
      document.getElementById("lNameError").classList.remove("hidden");
      document.getElementById("lNameError").classList.add("wiggle");
      document.getElementById("lname").classList.add("input-invalid");
    } else {
      document.getElementById("lname").classList.add("input-valid");
      document.getElementById("lNameError").classList.add("hidden");
      document.getElementById("lNameError").classList.remove("wiggle");
      document.getElementById("lname").classList.remove("input-invalid");
    }

    document.getElementById("fname").classList.remove("input-valid");
    document.getElementById("fNameError").classList.remove("hidden");
    document.getElementById("fNameError").classList.add("wiggle");
    document.getElementById("fname").classList.add("input-invalid");
  } else {
    if (lname.value == "") {
      document.getElementById("lname").classList.remove("input-valid");
      document.getElementById("lNameError").classList.remove("hidden");
      document.getElementById("lNameError").classList.add("wiggle");
      document.getElementById("lname").classList.add("input-invalid");
    } else {
      document.getElementById("lname").classList.add("input-valid");
      document.getElementById("lNameError").classList.add("hidden");
      document.getElementById("lNameError").classList.remove("wiggle");
      document.getElementById("lname").classList.remove("input-invalid");
    }

    document.getElementById("fname").classList.add("input-valid");
    document.getElementById("fNameError").classList.add("hidden");
    document.getElementById("fNameError").classList.remove("wiggle");
    document.getElementById("fname").classList.remove("input-invalid");
  }

  //validate the id email if its email using regex expression
      if (email.value == "") {
    document.getElementById("email").classList.remove("input-valid");
    document.getElementById("emailError").classList.remove("hidden");
    document.getElementById("emailError").classList.add("wiggle");
    document.getElementById("email").classList.add("input-invalid");
  } else {
    var regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!regex.test(email.value)) {
      document.getElementById("email").classList.remove("input-valid");
      document.getElementById("emailError").classList.remove("hidden");
      document.getElementById("emailError").classList.add("wiggle");
      document.getElementById("email").classList.add("input-invalid");
    } else {
      document.getElementById("email").classList.add("input-valid");
      document.getElementById("emailError").classList.add("hidden");
      document.getElementById("emailError").classList.remove("wiggle");
      document.getElementById("email").classList.remove("input-invalid");
    }
  }

  if(fname.value != "" && lname.value != "" && regex.test(email.value)){
      document.querySelector(".submitted").classList.remove("hidden");
      form.classList.add("hidden");
  }

});