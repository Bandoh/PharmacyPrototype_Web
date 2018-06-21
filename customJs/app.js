// Initialization



                    
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {       
        //state for user logged in;
        console.log('User is logged in');
    } else {
        //state for user logged out;
        console.log('User is logged out');
        //window.open('index.html','_self');
    }
});


try{
    var login = document.getElementById('loginBtn');

    login.onclick = function login(e){
        
        e.preventDefault();
            
        var useremail = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        
        firebase.auth().signInWithEmailAndPassword(useremail, password).then(user => {
                    window.location = 'home.html';
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
                    
        window.alert('error: ' + errorMessage);
        });    
    }
}catch(e){
    console.log('You are not on the login screen....hence this error' + e);
}finally{
    try{
        var logout = document.getElementById('logoutBTN');

        logout.addEventListener('click', function(e){
            e.preventDefault();

            console.log('logout has been clicked');
    
           
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
            }).catch(function(error) {
                // An error happened.
            });
            window.location = 'index.html';
            console.log("logged out");
        });
    }catch(e){
        console.log('You are not on the home screen....hence this error' + e);
    }
    
}

var logout = document.getElementById('logoutBTN');

       /* logout.addEventListener('click', function(e){
            e.preventDefault();

            console.log('logout has been clicked');
    
           console.log("logging out");
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
            }).catch(function(error) {
                // An error happened.
            });
          
        });*/