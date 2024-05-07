'use strict';
window.onload = function(){
   
let btnClick= document.getElementById("sbtn");
btnClick.onclick=btnClicked;
};
function btnClicked(){
    var u=0;
    let rent = 2.99;
    let nod = document.getElementById("nod").value;
    let charges = rent * nod;
    document.getElementById("carRent").innerHTML="Car rental:  $"+charges;
    let days= document.getElementById(nod);
    var option = document.getElementById("option");
    option.innerHTML= "option:  ";
    if(document.getElementById("eToll").checked){
       option.innerHTML+=" Electronic Toll Tag";
      
    }
    if(document.getElementById("gps").checked){
        option.innerHTML+="   GPS"
    }
    if(document.getElementById("ra").checked){
        option.innerHTML+= "   Roadside Assistance";
    }
    if(document.querySelector("#yes:checked")){
        u = rent*(30/100);
        document.getElementById("us").innerHTML="under 25 surcharge:  "+u;
    }
    else{
        
    }
    let total=charges+u;
    document.getElementById("td").innerHTML="Total due:  "+total;

}
