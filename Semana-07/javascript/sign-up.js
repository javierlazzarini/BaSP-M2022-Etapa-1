window.onload = function () {

    var inputFname = document.getElementById("first-name");
    var inputLname = document.getElementById("last-name");
    var inputId = document.getElementById("DNI");
    var inputDob = document.getElementById("dob");
    var inputPhone = document.getElementById("phone-number");
    var inputAdress = document.getElementById("adress");
    var inputCity = document.getElementById("city");
    var inputPost = document.getElementById("post-code");
    var inputEmail = document.getElementById("email");
    var inputPass = document.getElementById("password");
    var inputConfirm = document.getElementById("confirm-password");
    var inputCreate = document.getElementById("create");
    var msgContainer = document.getElementsByClassName("msg-container");

    inputFname.addEventListener("blur", fNameBlur);
    inputFname.addEventListener("focus", fNameFocus);
    inputLname.addEventListener("blur", lNameBlur);
    inputLname.addEventListener("focus", lNameFocus);
    inputId.addEventListener("blur", idBlur);
    inputId.addEventListener("focus", idFocus);
    inputDob.addEventListener("blur", dobBlur);
    inputDob.addEventListener("focus", dobFocus);
    inputPhone.addEventListener("blur", phoneBlur);
    inputPhone.addEventListener("focus", phoneFocus);
    inputAdress.addEventListener("blur", adressBlur);
    inputAdress.addEventListener("focus", adressFocus);
    inputCity.addEventListener("blur", cityBlur);
    inputCity.addEventListener("focus", cityFocus);
    inputPost.addEventListener("blur", postBlur);
    inputPost.addEventListener("focus", postFocus);
    inputEmail.addEventListener("blur", eMailBlur);
    inputEmail.addEventListener("focus", eMailFocus);
    inputPass.addEventListener("blur", passBlur);
    inputPass.addEventListener("focus", passFocus);
    inputConfirm.addEventListener("blur", confirmBlur);
    inputConfirm.addEventListener("focus", confirmFocus);
    inputCreate.addEventListener("click", createSend);

    if (localStorage.length > 0){
        setInput()
    }
    function validateName(name) {
        var flag = true;
        var i = 0;

        if (name.length > 3) {
            while (i < name.length && flag === true) {
                if (!isNaN(name[i])) {
                    flag = false;
                }
                i++;
            }
        } else {
            flag = false;
        }
        return flag;
    }

    function fNameBlur() {
        if (!validateName(inputFname.value)) {
            msgContainer[0].classList.remove('hide');
            msgContainer[0].classList.add('error');
            msgContainer[0].innerHTML = "Name incorrect";
            inputFname.style.border = "3px solid red";
        } else {
            msgContainer[0].classList.remove('error');
            inputFname.style.border = "3px solid green";
        }
    }

    function fNameFocus() {
        msgContainer[0].classList.add('hide');
        inputFname.style.border = "3px solid grey";
    }

    function lNameBlur() {
        if (!validateName(inputLname.value)) {
            msgContainer[1].classList.remove('hide');
            msgContainer[1].classList.add('error');
            msgContainer[1].innerHTML = "Name incorrect";
            inputLname.style.border = "3px solid red";
        } else {
            msgContainer[1].classList.remove('error');
            inputLname.style.border = "3px solid green";
        }
    }
    function lNameFocus() {
        msgContainer[1].classList.add('hide');
        inputLname.style.border = "3px solid grey";
    }

    function validateId() {
        var flag = true;
        var i = 0

        if (inputId.value.length > 7) {
            while (i < inputId.value.length && flag === true) {
                if (isNaN(inputId.value[i])) {
                    flag = false;
                }
                i++;
            }
        } else {
            flag = false;
        }
        return flag;
    }

    function idBlur() {
        if (!validateId()) {
            msgContainer[2].classList.remove('hide');
            msgContainer[2].classList.add('error');
            msgContainer[2].innerHTML = "ID incorrect";
            inputId.style.border = "3px solid red";
        } else {
            msgContainer[2].classList.remove('error');
            inputId.style.border = "3px solid green";
        }
    }

    function idFocus() {
        msgContainer[2].classList.add('hide');
        inputId.style.border = "3px solid grey";
    }

    var formatDob = "";
    function formatDate(date) {
        var arDate = date.split('-');
        return arDate[1] + '/' + arDate[2] + '/' + arDate[0];
    }

    function validateDob() {
        if (new Date(inputDob.value).getTime() > new Date().getTime()) {
            return false;
        } else {
            formatDob = formatDate(inputDob.value);
            return true;
        }
    }
    function dobBlur() {
        if (!validateDob()) {
            msgContainer[3].classList.remove('hide');
            msgContainer[3].classList.add('error');
            msgContainer[3].innerHTML = "Date of birth incorrect";
            inputDob.style.border = "3px solid red";
        } else {
            msgContainer[3].classList.remove('error');
            inputDob.style.border = "3px solid green";
        }
    }

    function dobFocus() {
        msgContainer[3].classList.add('hide');
        inputDob.style.border = "3px solid grey";
    }

    function validatePhone() {
        var flag = true;
        var i = 0

        if (inputPhone.value.length > 9) {
            while (i < inputPhone.value.length && flag === true) {
                if (isNaN(inputPhone.value[i])) {
                    flag = false;
                }
                i++;
            }
        } else {
            flag = false;
        }
        return flag;
    }

    function phoneBlur() {
        if (!validatePhone()) {
            msgContainer[4].classList.remove('hide');
            msgContainer[4].classList.add('error');
            msgContainer[4].innerHTML = "Phone incorrect";
            inputPhone.style.border = "3px solid red";
        } else {
            msgContainer[4].classList.remove('error');
            inputPhone.style.border = "3px solid green";
        }
    }

    function phoneFocus() {
        msgContainer[4].classList.add('hide');
        inputPhone.style.border = "3px solid grey";
    }

    function validateAdress() {
        var numbers = false;
        var adressSpaces = inputAdress.value.replaceAll(' ', '');
        for (var i = 0; i < adressSpaces.length; i++) {
            if (isNaN(adressSpaces[i]) == false) {
                numbers = true;
            }
        }
        var letters = false;
        for (var i = 0; i < adressSpaces.length; i++) {
            if (isNaN(adressSpaces[i]) == true) {
                letters = true;
            }
        }
        if (inputAdress.value.length > 5 && numbers == true && letters == true &&
            inputAdress.value.indexOf(' ') > 0 && inputAdress.value.indexOf(' ') < inputAdress.value.length - 1 &&
            inputAdress.value.length > inputAdress.value.lastIndexOf(' ')) {
            return true;
        } else {
            return false;
        }
    }
    function adressBlur() {
        if (!validateAdress()) {
            msgContainer[5].classList.remove('hide');
            msgContainer[5].classList.add('error');
            msgContainer[5].innerHTML = "Adress incorrect";
            inputAdress.style.border = "3px solid red";
        } else {
            msgContainer[5].classList.remove('error');
            inputAdress.style.border = "3px solid green";
        }
    }
    function adressFocus() {
        msgContainer[5].classList.add('hide');
        inputAdress.style.border = "3px solid grey";
    }

    function cityBlur() {
        if (!validateName(inputCity.value)) {
            msgContainer[6].classList.remove('hide');
            msgContainer[6].classList.add('error');
            msgContainer[6].innerHTML = "City incorrect";
            inputCity.style.border = "3px solid red";
        } else {
            msgContainer[6].classList.remove('error');
            inputCity.style.border = "3px solid green";
        }
    }

    function cityFocus() {
        msgContainer[6].classList.add('hide');
        inputCity.style.border = "3px solid grey";
    }
    function validatePost() {
        var flag = true;
        var i = 0

        if (inputPost.value.length >= 4 && inputPost.value.length <= 5) {
            while (i < inputPost.value.length && flag === true) {
                if (isNaN(inputPost.value[i])) {
                    flag = false;
                }
                i++;
            }
        } else {
            flag = false;
        }
        return flag;
    }

    function postBlur() {
        if (!validatePost()) {
            msgContainer[7].classList.remove('hide');
            msgContainer[7].classList.add('error');
            msgContainer[7].innerHTML = "Post Code incorrect";
            inputPost.style.border = "3px solid red";
        } else {
            msgContainer[7].classList.remove('error');
            inputPost.style.border = "3px solid green";
        }
    }

    function postFocus() {
        msgContainer[7].classList.add('hide');
        inputPost.style.border = "3px solid grey";
    }

    function validateEmail() {
        var emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        var emailValue = inputEmail.value;
        var validMail = emailFormat.test(emailValue);
        if (!validMail) {
            return false;
        }

        return true
    }

    function eMailBlur() {
        if (!validateEmail(inputEmail.value)) {
            msgContainer[8].classList.remove('hide');
            msgContainer[8].classList.add('error');
            msgContainer[8].innerHTML = "Email incorrect";
            inputEmail.style.border = "3px solid red";
        } else {
            msgContainer[8].classList.remove('error');
            inputEmail.style.border = "3px solid green";
        }
    }

    function eMailFocus() {
        msgContainer[8].classList.add('hide');
        inputEmail.style.border = "3px solid grey";
    }

    function validatePassword() {
        var passwordFormat = /^[A-Za-z0-9_-]*$/;
        var passwordValue = inputPass.value;
        var validPassword = passwordFormat.test(passwordValue);
        if (passwordValue.length < 7 || !validPassword) {
            return false;
        }

        return true
    }

    function passBlur() {
        if (!validatePassword(inputPass.value)) {
            msgContainer[9].classList.remove('hide');
            msgContainer[9].classList.add('error');
            msgContainer[9].innerHTML = "Password incorrect";
            inputPass.style.border = "3px solid red";
        } else {
            msgContainer[9].classList.remove('error');
            inputPass.style.border = "3px solid green";
        }
    }
    function passFocus() {
        msgContainer[9].classList.add('hide');
        inputPass.style.border = "3px solid grey";
    }

    function reValidatePassword() {
        if (inputConfirm.value == inputPass.value) {

            return true;

        } return false

    }
    function confirmBlur() {
        if (!reValidatePassword(inputConfirm.value)) {
            msgContainer[10].classList.remove('hide');
            msgContainer[10].classList.add('error');
            msgContainer[10].innerHTML = "Password incorrect";
            inputConfirm.style.border = "3px solid red";
        } else {
            msgContainer[10].classList.remove('error');
            inputConfirm.style.border = "3px solid green";
        }
    }

    function confirmFocus() {
        msgContainer[10].classList.add('hide');
        inputConfirm.style.border = "3px solid grey";
    }

    function createSend(e) {
        e.preventDefault()
        var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup?name=" + inputFname.value + "&lastName=" + inputLname.value +
            "&dni=" + inputId.value + "&dob=" + formatDob + "&phone=" + inputPhone.value + "&address=" + inputAdress.value +
            "&city=" + inputCity.value + "&zip=" + inputPost.value + "&email=" + inputEmail.value + "&password=" + inputPass.value;


        if (!validateName(inputFname.value)) {
            alert('Error: Name Incorrect')
        } else if (!validateName(inputLname.value)) {
            alert('Error: Last name Incorrect')
        } else if (!validateId(inputId.value)) {
            alert('Error: ID Incorrect')
        } else if (!validateDob(inputDob.value)) {
            alert('Error: Date of Birth Incorrect')
        } else if (!validatePhone(inputPhone.value)) {
            alert('Error: Phone Number Incorrect')
        } else if (!validateAdress(inputAdress.value)) {
            alert('Error: Address Incorrect')
        } else if (!validateName(inputCity.value)) {
            alert('Error: City Incorrect')
        } else if (!validatePost(inputPost.value)) {
            alert('Error: Post Code Incorrect')
        } else if (!validateEmail(inputEmail.value)) {
            alert('Error: Email Incorrect')
        } else if (!validatePassword(inputPass.value)) {
            alert('Error: Password Incorrect')
        } else if (validateName(inputFname.value) && validateName(inputLname.value) && validateId(inputId.value) &&
            validateDob(inputDob.value) && validatePhone(inputPhone.value) && validateAdress(inputAdress.value) &&
            validateName(inputCity.value) && validatePost(inputPost.value) && validateEmail(inputEmail) &&
            validatePassword(inputPass.value) && reValidatePassword(inputConfirm.value)) {

            fetch(url)
                .then(function (answer) {
                    return answer.json()
                })
                .then(function (answer) {
                    alert(answer.msg + " ID: " + answer.data.id + " Name: " + answer.data.name + " Last name: " + answer.data.lastName + " DNI:" + answer.data.dni +
                        " Date of birth: " + answer.data.dob + " Phone: " + answer.data.phone + " Address: " + answer.data.address + " City: " + answer.data.city +
                        " Post code: " + answer.data.zip + " Email: " + answer.data.email + " Password: " + answer.data.password)
                    localStorage.setItem("id", answer.data.id);
                    localStorage.setItem("name", answer.data.name);
                    localStorage.setItem("last name", answer.data.lastName);
                    localStorage.setItem("dni", answer.data.dni);
                    localStorage.setItem("dob", answer.data.dob);
                    localStorage.setItem("phone", answer.data.phone);
                    localStorage.setItem("address", answer.data.address);
                    localStorage.setItem("city", answer.data.city);
                    localStorage.setItem("zip", answer.data.zip);
                    localStorage.setItem("email", answer.data.email);
                    localStorage.setItem("password", answer.data.password);
                })
                .catch(function (grownAnswer) {
                    alert(grownAnswer.errors[0].msg)

                })
        }

    }
    function setInput() {
        inputFname.setAttribute("value", localStorage.getItem("name"));
        inputLname.setAttribute("value", localStorage.getItem("lastName"));
        inputId.setAttribute("value", localStorage.getItem("dni"));
        inputDob.setAttribute("value", localStorage.getItem("dob"));
        inputPhone.setAttribute("value", localStorage.getItem("phone"));
        inputAdress.setAttribute("value", localStorage.getItem("address"));
        inputCity.setAttribute("value", localStorage.getItem("city"));
        inputPost.setAttribute("value", localStorage.getItem("zip"));
        inputEmail.setAttribute("value", localStorage.getItem("email"));
        inputPass.setAttribute("value", localStorage.getItem("password"));
        inputConfirm.setAttribute("value", localStorage.getItem("password"));
    }
}