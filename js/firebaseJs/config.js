// Variables
let userRegID;
let userEmail;



(function () {
    var config = {
        apiKey: "AIzaSyALIwec8h-ZbYJ2ZJoqlq8mgq3y0ho0M9o",
        authDomain: "virtualpharm-73624.firebaseapp.com",
        databaseURL: "https://virtualpharm-73624.firebaseio.com",
        projectId: "virtualpharm-73624",
        storageBucket: "virtualpharm-73624.appspot.com",
        messagingSenderId: "356469878815"
    };
    firebase.initializeApp(config);
})();


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        db.collection("PharmacyDetails").where("Pharmacy_Email", "==", 'rbayor16@gmail.com')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {

                    //userRegID = doc.data().Registration_Number;
                    userEmail = doc.data().Pharmacy_Email
                    //console.log(userEmail);
                    //console.log(userRegID);

                });
            }).catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    } else {
        // No user is signed in.
    }
});