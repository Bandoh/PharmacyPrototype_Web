firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
        document.getElementById('myBody').style.visibility = 'visible';

    } else {
        window.location.href = 'index.html';
    }
});
/*(function(){
    var user = firebase.auth().currentUser;

    if (user) {
        window.location.href = 'home.html';
    } 
    else {
        window.location.href = 'index.html';
    }

})();*/