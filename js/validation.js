/********w************
    
	Project 4 Javascript
	Name: Liam Fitzpatrick
	Date: April 26, 2023
	Description: Form validation JavaScript for project 4.

*********************/

function validate(e) {
    hideErrors();

    if (checkErrors()) {
        e.preventDefault();

        return false;
    }

    /*Submitting form data to be covered in Web Development 2*/
    e.preventDefault();
    return true;
}

function checkErrors() {
    let hasError = false;

    let nameField = document.getElementById("name");
    let name = nameField.value;
    if (name == null || name.replace(/^\s+|\s+$/g,"") == "") {
        document.getElementById("name_error").style.display = "block";
        if (!hasError) {
            nameField.focus();
            nameField.select();
        }
        hasError = true;
    }

    let phoneNumberField = document.getElementById("phoneNumber");
    let phoneNumber = phoneNumberField.value;
    let regex = new RegExp(/^\d{10}$/);
    if (!regex.test(phoneNumber)) {
        document.getElementById("phoneNumber_error").style.display = "block";
        if (!hasError) {
            phoneNumberField.focus();
            phoneNumberField.select();
        }
        hasError = true;
    }

    let emailField = document.getElementById("email");
    let email = emailField.value;
    regex = new RegExp(/[^\s@]+@[^\s@]+\.[^\s@]+/);
    if (!regex.test(email)) {
        document.getElementById("email_error").style.display = "block";
        if (!hasError) {
            emailField.focus();
            emailField.select();
        }
        hasError = true;
    }

    return hasError;
}

function resetForm(e) {
    hideErrors();

    return true;
}

function hideErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}

function load() {
    document.getElementById("contactForm").addEventListener("submit", validate);
    document.getElementById("contactForm").addEventListener("reset", resetForm);

    hideErrors();
}

document.addEventListener("DOMContentLoaded", load);