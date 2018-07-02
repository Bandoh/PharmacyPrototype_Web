//get variable
//supposed to do for rest of fields but i want you to do that auth part
import * as firebase from 'firebase'
pharmacymail = document.getElementById('pharmacyemail');
city = document.getElementById('city');
pharmnum = document.getElementById('phonenumber');
pharmname = document.getElementById('pharmacyname');
fname = document.getElementById('firstname');
lname = document.getElementById('lastname');
personalmail = document.getElementById('personalemail');

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

db.collection('PharmacyDetails').where("Email", "==", "rbayor16@gmail.com").get()
    .then(function (queryshot) {
        queryshot.forEach(function (doc) {
            pharmacymail.style.padding = '1.5px';
            pharmacymail.setAttribute("value", doc.data().Email);
            city.style.padding = '1.5px';
            city.setAttribute("value", doc.data().City);
            pharmnum.style.padding = '1.5px';
            pharmnum.setAttribute('value', doc.data().PhoneNumber);
            pharmname.style.padding = '1.5px';
            pharmname.setAttribute('value', doc.data().PharmacyName);

        })
    });

db.collection('OwnerDetails').where("First_Name", "==", "Kelvin").get()
    .then(function (queryshot) {
        queryshot.forEach(function (doc) {
            fname.style.padding = '1.5px';
            fname.setAttribute('value', doc.data().First_Name);
            lname.style.padding = '1.5px';
            lname.setAttribute('value', doc.data().Last_Name);
            personalmail.style.padding = '1.5px';
            personalmail.setAttribute('value', doc.data().Owner_Email);
        })
    })


function save() {
    console.log('saving')
    var currentdoc= db.collection('PharmacyDetails').where("Email", "==", "rbayor16@gmail.com");
    var thisdoc=currentdoc.get()
    thisdoc.then(function(queryshot){
        console.log(queryshot.docs);
    })
    console.log('clicked');
    var chn = document.getElementsByClassName('change');
    console.log(chn.length);
    for (var i = 0; i <= chn.length; i++) {
        chn[i].readOnly = true;
    }
}

