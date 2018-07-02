var updatebutton = document.getElementById('uploadbtn');
var profileimg = document.getElementById('profileimage');
profileimg.addEventListener('mouseover',function(){
    updatebutton.style.visibility = 'visible';
})

profileimg.addEventListener('mouseout',function(){
    updatebutton.style.visibility = 'hidden';
})


function chng(){
    console.log('clicked');
    var chn = document.getElementsByClassName('change');
    console.log(chn.length);
    for(var i=0;i<=chn.length;i++){
        chn[i].readOnly = false;
    }
}


