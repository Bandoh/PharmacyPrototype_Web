// Listeners
eventListener(loginForm);
function eventListener(button){

    document.querySelector('#loginForm').addEventListener('submit', login);
    
}


// Functions
function login(e){
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        console.log('logging in');
        //window.setTimeout(window.location.href = 'home.html', 10000);    
    },).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
    });

}
