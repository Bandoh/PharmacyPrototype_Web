document.querySelector("#addToStockBtnSingle").addEventListener("click", function (e) {
    e.preventDefault();

    addData();
    hideForm();

});
document.querySelector("#addToStockBtnMultiple").addEventListener("click", function (e) {
    e.preventDefault();

    hideForm();

});

//This queryselector listens and changes between the single and multiple input modes;
document.querySelector("#updateMode").addEventListener("change", function (e) {
    e.preventDefault();

    console.log(document.getElementById("updateMode").value);
    if (document.getElementById("updateMode").value == "mulMd") {
        document.getElementById("singleInput").style.visibility = "hidden";
        document.getElementById("multipleInput").style.visibility = "visible";
    } else {
        document.getElementById("singleInput").style.visibility = "visible";
        document.getElementById("multipleInput").style.visibility = "hidden";
    }
});

function hideForm() {
    document.getElementById("addProducts").style.visibility = "hidden";
    document.getElementById("addProducts").style.position = "absolute";
    document.getElementById("pageText").style.width = "100%";
    document.getElementById("singleInput").style.visibility = "hidden";
    document.getElementById("multipleInput").style.visibility = "hidden";
}

db = firesbase.firestore();

function addData() {

    let i = 0;
    do {
        db
            .collection('PharmacyDetails')
            .doc("83645323")
            .set({
                Stock: [{
                    Available: improAvailable[i],
                    Medication: improvItems[i],
                    Price: improvPrice[i]
                }]
            },{
                merge: true
            });

        i++;
    } while (i < len);



    console.log(improvItems);
    console.log(improvPrice);
    console.log(improAvailable);
    console.log(len);
}