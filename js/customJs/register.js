const firestore = firebase.firestore();
const settings = { /* your settings... */
    timestampsInSnapshots: true
};
firestore.settings(settings);

//when you click the submit button
document.getElementById('registerForm').onsubmit = function (e) {
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

    //createUser(phEmail, password);
    saveOwnerData(ownerFName, ownerLName, ownerEmail, phName, phRegistrationNo);
    savePhData(phName, phEmail, phRegistrationNo, phRegistrationDate);
    


    console.log('form submitted');

    window.setTimeout(loadLogin, 3000);

}

function createUser(useremail, userpass) {

    firebase.auth().createUserWithEmailAndPassword(useremail, userpass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
}


// Store owner details
function saveOwnerData(ownerFName, ownerLName, ownerEmail, phName, phRegistrationNo) {
    firestore.collection('/OwnerDetails')
        .doc(phRegistrationNo)
        .set({
            First_Name: ownerFName,
            Last_Name: ownerLName,
            Owner_Email: ownerEmail,
            Pharmacy_Name: phName,
        }).then(function () {
            console.log("Saved Owner Details")
        }).catch(function (err) {
            console.log(err);
        });
}

// Store pharmacy details in database
function savePhData(phName, phEmail, phRegistrationNo, phRegistrationDate) {
    firestore.collection('/PharmacyDetails')
        .doc(phRegistrationNo)
        .set({
            Pharmacy_Name: phName,
            Pharmacy_Email: phEmail,
            Registration_Number: phRegistrationNo,
            Registration_Date: phRegistrationDate,
        }).then(function () {
            console.log("Saves Pharmacy Details")
        }).catch(function (err) {
            console.log(err);
        });

}

//Function to get values from form
function getData(id) {
    return document.getElementById(id).value;
}
// Load login form after registration complete
function loadLogin() {
    window.open("./index.html", "_self");
}