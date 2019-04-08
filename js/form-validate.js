'use strict';
    
document.getElementById('user_login').addEventListener('click', function() {
    var      user_name_field = document.getElementById('user_name'),
         user_password_field = document.getElementById('user_password');
    // Get input values
    var username = user_name_field.value,
        userpass = user_password_field.value;
    // set user password and password
    var password = 'Access123', 
          person = 'level';

    // Make sure there aren't already alerts and clear aria-invalids
    removeAlerts();
    user_name_field.removeAttribute('aria-invalid');
    user_password_field.removeAttribute('aria-invalid');

    function usernameAlert() {
        // Create the message element for empty user name field
        var myAlertDiv = document.createElement('div'); // Create container div with attributes
        myAlertDiv.setAttribute('role', 'alert');
        myAlertDiv.setAttribute('tabindex', 0);
        myAlertDiv.setAttribute('class', 'error-alert');
        myAlertDiv.setAttribute('id', 'fire-alert');
        myAlertDiv.style.height = '0';
        var myAlertH = document.createElement('h1'); // Create message header
        var myAlertHeader = document.createTextNode('Login error.');
        myAlertH.appendChild(myAlertHeader);
        var myAlertP = document.createElement('p'); // Create message paragraph
        var myAlertText = document.createTextNode('User name field cannot be blank.');
        // Append all the items to each other
        myAlertP.appendChild(myAlertText);
        myAlertDiv.appendChild(myAlertH);
        myAlertDiv.appendChild(myAlertP);
        // Append to the user name div
        document.getElementById('username_item').appendChild(myAlertDiv);
        user_name_field.setAttribute('aria-invalid', true);

        setTimeout(function () {
            document.getElementById('fire-alert').style.height = '13rem';
        }, 10);
    }

    function passwordAlert() {
        // Create the message element for empty password field
        var myAlertDiv = document.createElement('div'); // Create container div with attributes
        myAlertDiv.setAttribute('role', 'alert');
        myAlertDiv.setAttribute('tabindex', 0);
        myAlertDiv.setAttribute('class', 'error-alert');
        myAlertDiv.setAttribute('id', 'fire-alert');
        myAlertDiv.style.height = '0';
        var myAlertH = document.createElement('h1'); // Create message header
        var myAlertHeader = document.createTextNode('Login error.');
        myAlertH.appendChild(myAlertHeader);
        var myAlertP = document.createElement('p'); // Create message paragraph
        var myAlertText = document.createTextNode('Password field cannot be blank.');
        // Append all the items to each other
        myAlertP.appendChild(myAlertText);
        myAlertDiv.appendChild(myAlertH);
        myAlertDiv.appendChild(myAlertP);
        // Append to the password div
        document.getElementById('password_item').appendChild(myAlertDiv);
        user_password_field.setAttribute('aria-invalid', true);

        setTimeout(function () {
            document.getElementById('fire-alert').style.height = '13rem';
        }, 10);
    }

    function bothAlert() {
        // Create the message element both so there is only one alert
        var myAlertDiv = document.createElement('div'); // Create div with attributes
        myAlertDiv.setAttribute('role', 'alert');
        myAlertDiv.setAttribute('tabindex', 0);
        myAlertDiv.setAttribute('class', 'error-alert');
        myAlertDiv.setAttribute('id', 'fire-alert');
        myAlertDiv.style.height = '0';
        var myAlertH = document.createElement('h1'); // Create message header
        var myAlertHeader = document.createTextNode('Login error');
        myAlertH.appendChild(myAlertHeader);
        var myAlertP = document.createElement('p'); // Create message paragraph
        var myAlertText = document.createTextNode('User name and password cannot be blank.');
        // Append all the items to each other
        myAlertP.appendChild(myAlertText);
        myAlertDiv.appendChild(myAlertH);
        myAlertDiv.appendChild(myAlertP);
        // Append to the password div
        document.getElementById('password_item').appendChild(myAlertDiv);
        user_name_field.setAttribute('aria-invalid', true);
        user_password_field.setAttribute('aria-invalid', true);

        setTimeout(function () {
            document.getElementById('fire-alert').style.height = '13rem';
        }, 10);

    }

    function passPasswordAlert() {
        // Create the message element for invalid password format
        var myAlertDiv = document.createElement('div'); // Create div with attributes
        myAlertDiv.setAttribute('role', 'alert');
        myAlertDiv.setAttribute('tabindex', 0);
        myAlertDiv.setAttribute('class', 'error-alert');
        myAlertDiv.setAttribute('id', 'fire-alert');
        myAlertDiv.style.height = '0';
        var myAlertH = document.createElement('h1'); // Create message header
        var myAlertHeader = document.createTextNode('Login invalid password format.');
        myAlertH.appendChild(myAlertHeader);
        var myAlertP = document.createElement('p'); // Create message paragraph
        var myAlertText = document.createTextNode('Password must include one capital letter, one lower case letter, and at least one number.');
        // Append all the items to each other
        myAlertP.appendChild(myAlertText);
        myAlertDiv.appendChild(myAlertH);
        myAlertDiv.appendChild(myAlertP);
        // Append to the password div
        document.getElementById('password_item').appendChild(myAlertDiv);
        user_password_field.setAttribute('aria-invalid', true);

        setTimeout(function () {
            document.getElementById('fire-alert').style.height = '13rem';
        }, 10);
    }

    function userPassAlert() {
        // Create the message element for incorrect user and password combination
        var myAlertDiv = document.createElement('div'); // Create div with attributes
        myAlertDiv.setAttribute('role', 'alert');
        myAlertDiv.setAttribute('tabindex', 0);
        myAlertDiv.setAttribute('class', 'error-alert');
        myAlertDiv.setAttribute('id', 'fire-alert');
        myAlertDiv.style.height = '0';
        var myAlertH = document.createElement('h1'); // Create message header
        var myAlertHeader = document.createTextNode('Login failed');
        myAlertH.appendChild(myAlertHeader);
        var myAlertP = document.createElement('p'); // Create message paragraph
        var myAlertText = document.createTextNode('User name and password combination is not recognized.');
        // Append all the items to each other
        myAlertP.appendChild(myAlertText);
        myAlertDiv.appendChild(myAlertH);
        myAlertDiv.appendChild(myAlertP);
        // Append to the password div
        document.getElementById('password_item').appendChild(myAlertDiv);

        setTimeout(function () {
            document.getElementById('fire-alert').style.height = '13rem';
        }, 10);
    }

    // Remove all alerts
    function removeAlerts() {
        var erralerts = document.getElementsByClassName('error-alert');
        while (erralerts[0]) {
            erralerts[0].parentNode.removeChild(erralerts[0]);
        }
    }

    // Input check logic
    if (username !== '' && userpass !== '') {
        // Check password parameters
        var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
        var passPassword = passwordRegex.test(userpass);
        if (!passPassword) {
            passPasswordAlert();
            return false;
        }

        else if ( passPassword === true ) {
            // Check for correct user and password
            if (username === person && userpass === password) {
                // alert and redirect
                alert('Login successful! You will now be redirected to a new page');
                window.location = 'loggedin.html';
            }
            else {
                userPassAlert();
                return false;
            }
        }
    }
    else if (username !== '' && userpass === '') {
        passwordAlert();
        return false;
    }
    else if (username === '' && userpass !== '') {
        usernameAlert();
        return false;
    }
    else {
        bothAlert();
        return false;
    }
   
});