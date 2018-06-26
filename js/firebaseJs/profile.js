//get variable
profileEmail = document.getElementById('profileEmail');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var name, email, photoUrl, uid, emailVerified;
        
        if (user != null) {
            //get profile values

            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;  
            console.log(email);

            // set profile fields
            profileEmail.innerHTML = "Email: " + email;
        }
        
    } else {
        console.log('User Absent');
    }
});

