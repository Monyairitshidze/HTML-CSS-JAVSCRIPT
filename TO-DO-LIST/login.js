
var username = document.getElementById('username')

var pssword = document.getElementById('password')




//create the function of when the sign up button is clicked

function redirectToSignup(event){

  event.preventDefault()

    window.location.href = "sign-up.html"
 
}


// Event listener to run after DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    var signUpBtn = document.getElementById("sign")
    if (signUpBtn) {
        signUpBtn.addEventListener("click", redirectToSignup)
    }
})

//create the function of when the login button is clicked

function redirectToLogin(event){


    if(username.value && pssword.value){

   window.location.href = "dashbord.html"
    }

    else if(!username.value || !pssword.value){

        alert("Fill all the fields");
    }
    
}

// Event listener to run after DOM is loaded 

document.addEventListener("DOMContentLoaded",function() {
    
    var login = document.getElementById('log')

    if(login){

        login.removeEventListener("click",redirectToLogin)
    }
})

