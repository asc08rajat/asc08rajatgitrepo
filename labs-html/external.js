console.log("external");

function externalscript(){
    console.log("the external script")
}

externalscript();

for(var i=0; i<5;i++){
    console.log(i);
    console.log("the value of i is "+i);
    console.log("value of i is ",i,".");
    alert(i);
    externalscript();
}