// function main() {
//     var select = document.getElementById("sel1");
//     if (select.value === "op1") {
//         fun1();
//     } else {
//         fun2();
//     }

// }

// function fun1() {
//     var videoplayer = document.getElementById("i1");
//     videoplayer.src = "https://www.youtube.com/embed/QloWLV5ex3E";
// }
// function fun2() {
//     var videoplayer = document.getElementById("i1");
//     videoplayer.src = "https://www.youtube.com/embed/IVsXzVzqmjs";
// }


function clickk(event){
    event.preventDefault();

    const name=document.getElementById('entername').value;
    const birth=document.getElementById('dob').value;
    const age=document.getElementById('age').value;
    const email=document.getElementById('email').value;
    const GENDER = document.querySelector('input[name="Gender"]:checked') ? document.querySelector('input[name="Gender"]:checked').value : '';
    const Beverage=document.querySelector('input[name="Beverage"]:checked')? document.querySelector('input[name="Beverage"]:checked').value:'';

    
    const table=document.getElementById('tablename');

    const newrow=table.insertRow();

    const namecell=newrow.insertCell(0);
    const dobcell=newrow.insertCell(1);
    const agecell=newrow.insertCell(2);
    const emailcell=newrow.insertCell(3);
    const gendercell=newrow.insertCell(4);
    const Beveragecell=newrow.insertCell(5);
    

    namecell.textContent=name;
    dobcell.textContent=birth
    agecell.textContent=age;
    emailcell.textContent=email;
    gendercell.textContent=GENDER;
    Beveragecell.textContent=Beverage;
    
    
}

clickk();