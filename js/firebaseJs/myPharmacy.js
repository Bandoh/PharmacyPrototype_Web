
/*var isAvailable = document.getElementById('availablity');

isAvailable.addEventListener('change', function(){
       
    if(this.checked){
        console.log('It is checked');
    }else{
        console.log('unchecked');
    }

})*/



const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);


var overViewList = document.getElementById("mypharmacy");
var db = firebase.firestore();
db.collection("PharmacyDetails").where("E-mail", "==", 'rbayor16@gmail.com')
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
           overViewList.innerHTML += "<div id='StockItems'><h4>"+ doc.data().Stock.StockName + "</h4><h4>Ghs "+ doc.data().Stock.StockPrice +"</h4><h4>"+ doc.data().Stock.Available +"</div>"

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

