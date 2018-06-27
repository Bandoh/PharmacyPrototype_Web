//Variables
let addStock = document.getElementById("products");

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

    //reset Add stock if open
    hideAddStock();
}

function stockPage() {
    
    let addProdDiv = document.getElementById("addProducts");
    let pageText = document.getElementById("pageText");
    let newRowBtn = document.getElementById("newRow");

    addProdDiv.style.position = "relative";
    addProdDiv.style.visibility = "visible";
    pageText.style.width = "40%";
    document.getElementById("singleInput").style.visibility = "visible";
    document.getElementById("updateMode").value = "snglMd";

    
    newRow(newRowBtn);

    /*var contactpage = document.getElementById('contact');
    var settingspage = document.getElementById('settings');
    var stockpage = document.getElementById('stock');
    var mypharmacypage = document.getElementById('mypharmacy');
    var profilepage = document.getElementById('profile');
    profilepage.style.display = 'none';
    mypharmacypage.style.display = 'none';
    contactpage.style.display = 'none';
    stockpage.style.display = 'block';
    settingspage.style.display = 'none';*/
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

    //reset Add stock if open
    hideAddStock();
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

    //reset Add stock if open
    hideAddStock();
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

    //reset Add stock if open
    hideAddStock();
}

function hideAddStock(){
    document.getElementById("addProducts").style.visibility = "hidden";
    document.getElementById("addProducts").style.position = "absolute";
    document.getElementById("pageText").style.width = "100%";
    document.getElementById("multipleInput").style.visibility = "hidden";
    document.getElementById("singleInput").style.visibility = "hidden";
}

function newRow(btn){
    

    btn.addEventListener('click', function(){
    let rowGroup = document.getElementById("rowGroup");
    let medicationDiv = document.createElement("div");
    let priceDiv = document.createElement("div");
    let medicationInput = document.createElement("input");
    let priceInput = document.createElement("input")
    
    medicationDiv.setAttribute("class", "col-xs-12 col-lg-8");
    medicationDiv.setAttribute("id", "products"); 
    priceDiv.setAttribute("class", "col-xs-12 col-lg-4");
    priceDiv.setAttribute("id","products");

    medicationInput.setAttribute("class","form-control");
    medicationInput.setAttribute("id","medication");
    medicationInput.setAttribute("type","text");
    medicationInput.setAttribute("placeholder","Medication");

    priceInput.setAttribute("class","form-control");
    priceInput.setAttribute("type","text");
    priceInput.setAttribute("placeholder","Ghs....");

    medicationDiv.appendChild(medicationInput);
    priceDiv.appendChild(priceInput);
        
        rowGroup.appendChild(medicationDiv);
        rowGroup.appendChild(priceDiv);
        console.log("added")
        
    });

    
}