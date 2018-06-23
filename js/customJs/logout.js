firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
/*(function(){
    var user = firebase.auth().currentUser;

    if (user) {
    
    } else {
    window.location.href = 'index.html';
    }
})();*/

eventListener();
//Listener
function eventListener(){

    
    document.querySelector('#logoutBTN').addEventListener('click', logout);
    
}

//functions
function logout(){

    console.log('Are you sure you want to logout');

    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        window.location.href = 'index.html';
      }, function(error) {
        console.error('Sign Out Error', error);
      });
}