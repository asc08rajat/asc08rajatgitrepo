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


function clickk(event) {
    event.preventDefault();

    const name = document.getElementById('entername').value;
    const birth = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const GENDER = document.querySelector('input[name="Gender"]:checked') ? document.querySelector('input[name="Gender"]:checked').value : '';

    // For Beverage selection (Tea/Coffee)
    const selectedOptions = [];
    if (document.getElementById('tea').checked) {
        selectedOptions.push('Tea');
    }
    if (document.getElementById('coffee').checked) {
        selectedOptions.push('Coffee');
    }
    const Beverage = selectedOptions.join(', ');

    // For Meal selection (Veg/Nonveg/Both)
    const selectedMeal = [];
    if (document.getElementById('veg').checked) {
        selectedMeal.push('Veg');
    }
    if (document.getElementById('nonveg').checked) {
        selectedMeal.push('Nonveg');
    }
    if (document.getElementById('both').checked) {
        selectedMeal.push('Both');
    }
    const Meal = selectedMeal.join(', ');

    // Add a new row to the table
    const table = document.getElementById('tablename');
    const newrow = table.insertRow();

    const namecell = newrow.insertCell(0);
    const dobcell = newrow.insertCell(1);
    const agecell = newrow.insertCell(2);
    const emailcell = newrow.insertCell(3);
    const gendercell = newrow.insertCell(4);
    const Beveragecell = newrow.insertCell(5);
    const Mealcell = newrow.insertCell(6);

    namecell.textContent = name;
    dobcell.textContent = birth;
    agecell.textContent = age;
    emailcell.textContent = email;
    gendercell.textContent = GENDER;
    Beveragecell.textContent = Beverage;
    Mealcell.textContent = Meal;


    const formlocal={
        name:name,
        birth:birth,
        age:age,
        email:email,
        GENDER:GENDER,
        Beverage:Beverage,
        Meal:Meal
    };
    let savedata=JSON.parse(localStorage.getItem('formlocal'))||[];
    savedata.push(formlocal);
    localStorage.setItem('formlocal',JSON.stringify(savedata));


    // Reset form after submission
    document.querySelector('form').reset(); 
}
window.onload=function(){
    let savedata=JSON.parse(localStorage.getItem('formlocal'))||[];
};
