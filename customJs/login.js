var attempt=4; 



function validate(){ 
var username= document.getElementById("exampleInputEmail1").value; 
var password= document.getElementById("exampleInputPassword1").value; 

if((username=="admin@admin")&&(password=="root")){ 
 
alert("you've successfully loged in");
return true;
} 
else{  
    alert("wrong username or password");
    return false;
}

}
