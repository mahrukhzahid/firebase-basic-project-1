
//import and do 3 things first (get button, function, addEventListener) , then copy paste code from firebase docs

import { app, auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword , signOut} from './firebase.js'

//validation check

function checkEmail() {

    var emailValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var email = document.getElementById('email').value;


    // Password validation


    var passwordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var password = document.getElementById('password').value;

    if (passwordValid.test(password) === true && emailValid.test(email) === true) {
        alert('Correct Information');
    }
    else if (passwordValid.test(password) === true && emailValid.test(email) === false) {

        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('email').style.backgroundColor = '#ffe7e0';

        alert('Invalid email');

    }
    else if (passwordValid.test(password) === false && emailValid.test(email) === true) {

        document.getElementById('password').style.border = '1px solid red';
        document.getElementById('password').style.backgroundColor = '#ffe7e0';

        alert('Invalid password');
    }
    else {
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('email').style.backgroundColor = '#ffe7e0';

        document.getElementById('password').style.border = '1px solid red';
        document.getElementById('password').style.backgroundColor = '#ffe7e0';

        alert('Invalid Information');
    }
}


/////////////////////////////////////////////////////Firebase Registeration
let registerBtn = document.getElementById('register');

let registerFunc = () => {

    let email = document.getElementById('email');
    let password = document.getElementById('password');

    checkEmail()

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            console.log("User register");
            gotoLogin()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("User registeration failed");
            console.log(errorMessage)
        });
}

registerBtn.addEventListener('click', registerFunc);



///////////////////////////////////////////////
let SignUp = document.getElementById('gotoSignup')
let gotoSignUp = () => {

    let reg = document.getElementById('one');
    let log = document.getElementById('two');

    console.log('hi')

    reg.style.display = 'block'
    log.style.display = 'none'

}
SignUp.addEventListener('click', gotoSignUp)

////////////////////////////////
let gotoLogin = () => {
    let reg = document.getElementById('one');
    let log = document.getElementById('two');

    reg.style.display = 'none'
    log.style.display = 'block'
}

//////////////////////////

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      
      const uid = user.uid;
      console.log("user exist", user);
      
    } else {
      // User is signed out
      console.log("user do not exist", user);
    }
  });

//////////////////////////  Firebase signin ///////////////////////////////

let loginBtn = document.getElementById('login');

let loginFunc = () => {
    let loginEmail = document.getElementById('login-email');
    let loginPassword = document.getElementById('login-password');

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // alert("Login successfully");
            Swal.fire({
                title: "Login Successfully!",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__slower
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__slower
                  `
                }
              });

            setTimeout(()=>{
                window.location.href = "./home.html"
              },3000)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)

        });
}

loginBtn.addEventListener('click', loginFunc)


///////////////////////////////////// firebase Log out
let logout = document.getElementById('log-out')

let logoutFunc = () =>{
    signOut(auth).then(() => {

        // Sign-out successful.

        console.log("user logout successfully");
        
        //sweet alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Logout!",
                text: "Your account has been logout.",
                icon: "success"
              });
            }
          });


      }).catch((error) => {
        // An error happened.
        console.log("Can't Logout")
      });
      
}

logout.addEventListener('click', logoutFunc)
