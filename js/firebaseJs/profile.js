//get variable
//supposed to do for rest of fields but i want you to do that auth part
pharmacyname = document.getElementById('pharmacyname');
city = document.getElementById('city');

var email ;


/*firebase.auth().onAuthStateChanged(function(user) {
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
});*/

var db = firebase.firestore();

db.collection('PharmacyDetails').where("Email","==","rbayor16@gmail.com").get()
.then(function(queryshot){
    queryshot.forEach(function(doc){
        pharmacyname.innerHTML = 'Email: ' + doc.data().Email;
        city.innerHTML = "City: " + doc.data().City; 
    })
});

