/*var db = firebase.firestore();
const list_div = document.querySelector('#mypharmacy');
db.collection("PharmacyDetails").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
       list_div.innerHTML += "<div>"+ doc.data().Stock.StockName +"</div>"
    });
});*/

// Functions for tab Navigation
function contactPage() {
    var contactpage = document.getElementById('contact');
    var settingspage = document.getElementById('settings');
    var stockpage = document.getElementById('stock');
    var mypharmacypage = document.getElementById('mypharmacy');
    var profilepage = document.getElementById('profile');
    profilepage.style.display = 'none';
    mypharmacypage.style.display = 'none';
    contactpage.style.display = 'block';
    stockpage.style.display = 'none';
    settingspage.style.display = 'none';
}

function stockPage() {
    var contactpage = document.getElementById('contact');
    var settingspage = document.getElementById('settings');
    var stockpage = document.getElementById('stock');
    var mypharmacypage = document.getElementById('mypharmacy');
    var profilepage = document.getElementById('profile');
    profilepage.style.display = 'none';
    mypharmacypage.style.display = 'none';
    contactpage.style.display = 'none';
    stockpage.style.display = 'block';
    settingspage.style.display = 'none';
}

function settingsPage() {
    var contactpage = document.getElementById('contact');
    var settingspage = document.getElementById('settings');
    var stockpage = document.getElementById('stock');
    var mypharmacypage = document.getElementById('mypharmacy');
    var profilepage = document.getElementById('profile');
    profilepage.style.display = 'none';
    mypharmacypage.style.display = 'none';
    contactpage.style.display = 'none';
    stockpage.style.display = 'none';
    settingspage.style.display = 'block';
}


function myPharmacyPage() {
    var contactpage = document.getElementById('contact');
    var settingspage = document.getElementById('settings');
    var stockpage = document.getElementById('stock');
    var mypharmacypage = document.getElementById('mypharmacy');
    var profilepage = document.getElementById('profile');
    profilepage.style.display = 'none';
    mypharmacypage.style.display = 'block';
    contactpage.style.display = 'none';
    stockpage.style.display = 'none';
    settingspage.style.display = 'none';
}

function profilePage() {
    var contactpage = document.getElementById('contact');
    var settingspage = document.getElementById('settings');
    var stockpage = document.getElementById('stock');
    var mypharmacypage = document.getElementById('mypharmacy');
    var profilepage = document.getElementById('profile');
    profilepage.style.display = 'block';
    mypharmacypage.style.display = 'none';
    contactpage.style.display = 'none';
    stockpage.style.display = 'none';
    settingspage.style.display = 'none';
}