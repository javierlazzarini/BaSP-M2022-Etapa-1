window.onload = function () {
  var email = document.getElementById('email');
  var password = document.getElementById('pass');
  var logIn = document.getElementById('b-signin')
  var msgContainer = document.getElementsByClassName('msg-container');


  email.addEventListener('focus', emailFocus);
  email.addEventListener('blur', emailBlur);
  password.addEventListener('focus', passwordFocus);
  password.addEventListener('blur', passwordBlur);
  logIn.addEventListener('click', logInClick);

  function validateEmail() {
      var emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      var emailValue = email.value;
      var validMail = emailFormat.test(emailValue);
      if (!validMail) {
          return false;
      }

      return true
  }

  function emailBlur() {
      if (!validateEmail(email.value)) {
          msgContainer[0].classList.remove('hide');
          msgContainer[0].classList.add('error');
          msgContainer[0].innerHTML = 'Email incorrect';
          email.style.border = '3px solid red';
      } else {
          msgContainer[0].classList.remove('error');
          email.style.border = '3px solid green';
      }
  }

  function emailFocus() {
      msgContainer[0].classList.add('hide');
      email.style.border = '3px solid grey';
  }


  function validatePassword() {
      var passwordFormat = /^[A-Za-z0-9_-]*$/;
      var passwordValue = password.value;
      var validPassword = passwordFormat.test(passwordValue);
      if (passwordValue.length < 7 || !validPassword) {
          return false;
      }

      return true
  }

  function passwordBlur() {
      if (!validatePassword(password.value)) {
          msgContainer[1].classList.remove('hide');
          msgContainer[1].classList.add('error');
          msgContainer[1].innerHTML = 'Password incorrect';
          password.style.border = '3px solid red';
      } else {
          msgContainer[1].classList.remove('error');
          password.style.border = '3px solid green';
      }
  }

  function passwordFocus() {
      msgContainer[1].classList.add('hide');
      password.style.border = '3px solid grey';
  }


  function logInClick() {
      if (!validateEmail(email.value)) {
          alert('Email Incorrect: ' + email.value);
      } else if (!validatePassword(password.value)) {
          alert('Password incorrect: ' + password.value);
      } else if (validateEmail && validatePassword) {
          alert('CONGRATULATIONS\n YOU HAVE SUCCESSFULLY LOGED IN' + '\nEmail: ' + email.value +
              '\nPassword: ' + password.value)
      }
  }
}

