var overViewList = document.getElementById("mypharmacy");
var db = firebase.firestore();
db.collection("PharmacyDetails").where("E-mail", "==", 'something@gh.com')
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            overViewList.innerHTML += "<div id='StockItems'><h4>"+ doc.data().Stock.StockName + "</h4><h4>"+ doc.data().Stock.StockPrice +"</h4><h4>"+ doc.data().Stock.Available +"</h4></div>"

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
