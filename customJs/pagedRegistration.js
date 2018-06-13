let currentTab = 0;
showTab(currentTab);

function showTab(n){
    // Grab and display each tab by index
    let myTab = document.getElementsByClassName('tab');
    myTab[n].style.display = 'block';
    console.log(myTab[n].length);

    if(n == 0){
        document.getElementById('prevBtn').style.display = 'none';
    }else{
        document.getElementById('prevBtn').style.display = 'inline';
    }

    if(n == (myTab.length -1)){
        var nextbtn= document.getElementById('nextBtn');
        nextbtn.innerHTML = 'Register';
        //nextbtn.addEventListener("click",submitForm());
    }else{
        document.getElementById('nextBtn').innerHTML = 'Next'
    }

    //stepIndicator();
}

function nextPrev(n){
    
    let x = document.getElementsByClassName('tab');

    if(n == 1 && !validateForm()) return false;

    x[currentTab].style.display = 'none';

    currentTab += n;

    if(currentTab >= x.length){
        document.getElementById('registerForm').submit();
        return false;
    }
    
    showTab(currentTab);
}


function validateForm(){

   let valid = true;
   
   //Vailidate the form here
   
   return valid;
}

function stepIndicator(n){

    let i,x = document.getElementsByClassName('step');
    for(i = 0; i < x.length; i++){
        x[i].className = x[i].className.replace(' active','');
    }

    x[n].className += ' active';
}