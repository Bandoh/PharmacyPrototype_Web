const firestore = firebase.firestore();
const settings = { /* your settings... */
    timestampsInSnapshots: true
};
firestore.settings(settings);

var db = firebase.firestore();

db.collection("PharmacyDetails").where("Email", "==", 'rbayor16@gmail.com')
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {

            var i = 0;
            while (i < doc.data().Stock.length) {

                var overViewList = document.getElementById("items");
                var item = document.createElement('div');

                item.setAttribute("id", "StockItems");
                overViewList.appendChild(item);


                var med = doc.data().Stock[i].Medication,
                    price = doc.data().Stock[i].Price,
                    isAvailable = doc.data().Stock[i].Available;

                var medh4 = document.createElement('h4');
                var priceh4 = document.createElement('h4');
                //Elements for available
                var avalbl = document.createElement('label');
                var avainp = document.createElement('input');
                var avaspan = document.createElement('span');
                var line = document.createElement('hr');

                console.log(med);

                avalbl.setAttribute("class", "switch");
                avainp.setAttribute("type", "checkbox");
                avainp.setAttribute("id", "availablity");
                avaspan.setAttribute("class", "slider round")

                medh4.textContent = med;
                priceh4.textContent = price;

                avalbl.appendChild(avainp);
                avalbl.appendChild(avaspan);


                item.appendChild(medh4);
                item.appendChild(priceh4);
                item.appendChild(avalbl);
                item.appendChild(line);
                




                i++;
            }
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });