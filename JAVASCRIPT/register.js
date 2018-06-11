var config = {
    apiKey: "AIzaSyALIwec8h-ZbYJ2ZJoqlq8mgq3y0ho0M9o",
    authDomain: "virtualpharm-73624.firebaseapp.com",
    databaseURL: "https://virtualpharm-73624.firebaseio.com",
    projectId: "virtualpharm-73624",
    storageBucket: "virtualpharm-73624.appspot.com",
    messagingSenderId: "356469878815"
};
  firebase.initializeApp(config);


// submiting the form Incomplete
function submitForm(e){
    e.preventDefault();

    //get values
    let ownerFName = getData('ownerFName');
    let ownerLName = getData('ownerLName');
    let ownerEmail = getData('ownerEmail');
    let phName = getData('ownerFName');
    let phEmail = getData('ownerFName');
    let password = getData('phPassword');
    let confirmPassword = getData('phPasswordConfirm');
    let phRegistrationNo = getData('phRegistrationNumber');
    let phRegistrationDate = getData('phRegistrationDate');

    //Writefunctions to save owner data and pharmacy data.
    saveOwnerData();
    savePhData();


}

function saveOwnerData(){

}
function savePhData(){

}



//Function to get values from form
function getData(id){
    return document.getElementById(id).value;
} 