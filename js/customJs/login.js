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
        //console.log('logging in');
        window.location.href = 'home.html';    
    },).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
    });

}

// State of user at login screen
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
        window.location.href = 'home.html';

    } else {
        
    }
});
