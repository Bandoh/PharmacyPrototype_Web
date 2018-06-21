var config = {
    apiKey: "AIzaSyALIwec8h-ZbYJ2ZJoqlq8mgq3y0ho0M9o",
    authDomain: "virtualpharm-73624.firebaseapp.com",
    databaseURL: "https://virtualpharm-73624.firebaseio.com",
    projectId: "virtualpharm-73624",
    storageBucket: "virtualpharm-73624.appspot.com",
    messagingSenderId: "356469878815"
};
var done = firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);
const ownerdet = firestore.collection('/OwnerDetails');
const pharmdet = firestore.collection('/PharmacyDetails');
//when you click the submit button
document.getElementById('registerForm').onsubmit = function(e){
    e.preventDefault();

    
    //get values
    const ownerFName = getData('ownerFName');
    const ownerLName = getData('ownerLName');
    const ownerEmail = getData('ownerEmail');
    const phName = getData('phName');
    const phEmail = getData('phEmail');
    const password = getData('phPassword');
    const confirmPassword = getData('phPasswordConfirm');
    const phRegistrationNo = getData('phRegistrationNumber');
    const phRegistrationDate = getData('phRegistrationDate');

    // TODO: Validate data before sending out to firebase

    //saveOwnerData(ownerFName, ownerLName, ownerEmail, phName);
    //savePhData(phName, phEmail, phRegistrationNo, phRegistrationDate);
    createUser(phEmail, password);


    console.log('form submitted');   
    
    window.setTimeout(loadLogin, 3000);
    
}

function createUser(useremail, userpass){

    firebase.auth().createUserWithEmailAndPassword(useremail, userpass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
}


// Store owner details
function saveOwnerData(fname,lname,email,pharmName) {
    ownerdet.add({
        First_Name: fname,
        Last_Name: lname,
        Owner_Email: email,
        Pharmacy_Name : pharmName,
    }).then(function(){
        console.log("Saved Owner Details")
    }).catch(function(err){
        console.log(err);
    });
}

// Store pharmacy details in database
function savePhData(phname,phemail,phregnumber,phregdate) {
    pharmdet.add({
        Pharmacy_Name : phname,
        Pharmacy_Email: phemail,
        Registration_Number : phregnumber,
        Registration_Date : phregdate,
    }).then(function(){
        console.log("Saves Pharmacy Details")
    }).catch(function(err){
        console.log(err);
    });

}

//Function to get values from form
function getData(id) {
    return document.getElementById(id).value;
} 
// Load login form after registration complete
function loadLogin(){
    window.open("./index.html","_self");
}
