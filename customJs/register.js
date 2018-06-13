//import * as firebase from 'firebase';
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

// submiting the form Incomplete
function submitForm(e) {
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

    //Writefunctions to save owner data and pharmacy data.
    saveOwnerData();
    savePhData();


}

function saveOwnerData() {
    ownerdet.add({
        First_Name: ownerFName.value,
        Last_Name: ownerLName.value,
        Owner_Email: ownerEmail.value,
        //Password: password,
        Pharmacy_Name : phName.value,
    }).then(function(){
        console.log("Saved Owner Details")
    }).catch(function(err){
        console.log(err);
    });
}
function savePhData() {
    pharmdet.add({
        Pharmacy_Name : phName.value,
        Pharmacy_Email: phEmail.value,
        Registration_Number : Registration_Number.value,
        Registration_Date : phRegistrationDate.value,
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