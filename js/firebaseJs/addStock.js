document.querySelector("#addToStockBtnSingle").addEventListener("click", function(e){
    e.preventDefault();

    hideForm();

});
document.querySelector("#addToStockBtnMultiple").addEventListener("click", function(e){
    e.preventDefault();

    hideForm();

});

document.querySelector("#updateMode").addEventListener("change",function(e){
    e.preventDefault();

    console.log(document.getElementById("updateMode").value);
    if(document.getElementById("updateMode").value == "mulMd"){
        document.getElementById("singleInput").style.visibility = "hidden";
        document.getElementById("multipleInput").style.visibility = "visible";
    }
    else{
        document.getElementById("singleInput").style.visibility = "visible";
        document.getElementById("multipleInput").style.visibility = "hidden";
    }
});

function hideForm(){
    document.getElementById("addProducts").style.visibility = "hidden";
    document.getElementById("addProducts").style.position = "absolute";
    document.getElementById("pageText").style.width = "100%";
    document.getElementById("singleInput").style.visibility = "hidden";
    document.getElementById("multipleInput").style.visibility = "hidden";
}