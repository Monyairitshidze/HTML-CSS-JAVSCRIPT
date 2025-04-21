
//accesing the ellements
var getButton = document.getElementById('submit');

getButton.addEventListener("click",submit);

//create the function for submiting filled info
function submit(){

    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('c-password');

    if(!name.value || !surname.value || !username.value || 
    !email.value ||  !password.value || !confirmPassword.value){

        alert("Please fill all the spaces")
    }

    else if(name.value && surname.value && username.value && 
        email.value &&  password.value && confirmPassword.value){

            if(password.value != confirmPassword.value){

                alert("Password must match")
                password.innerText = " ";
                confirmPassword.innerText = " ";
            }

            else{

                alert("Submited.")
            }

        }



}


// Function to redirect to the Sign-Up page
function redirectToLogin(event) {
    event.preventDefault(); // Prevent default behavior
    window.location.href = "login.html"; // Redirect to the Sign-Up page
}

// Event listener to run after DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    var signUpBtn = document.getElementById("login");
    if (signUpBtn) {
        signUpBtn.addEventListener("click", redirectToLogin);
    }
});
