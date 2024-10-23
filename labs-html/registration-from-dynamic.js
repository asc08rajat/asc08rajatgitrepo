// Function to update the table dynamically while the user types
function updateTable() {
    const name = document.getElementById('entername').value;
    const birth = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const GENDER = document.querySelector("input[name='Gender']:checked") ? document.querySelector("input[name='Gender']:checked").value : '';

    const selectedOptions = [];
    if (document.getElementById('tea').checked) {
        selectedOptions.push('Tea');
    }
    if (document.getElementById('coffee').checked) {
        selectedOptions.push('Coffee');
    }
    const Beverage = selectedOptions.join(', ');

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

    const table = document.getElementById('tablename');

    // Clear table before updating it
    const rows = table.getElementsByTagName('tr');
    for (let i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    // Insert updated data
    const newrow = table.insertRow();
    newrow.insertCell(0).textContent = name;
    newrow.insertCell(1).textContent = birth;
    newrow.insertCell(2).textContent = age;
    newrow.insertCell(3).textContent = email;
    newrow.insertCell(4).textContent = GENDER;
    newrow.insertCell(5).textContent = Beverage;
    newrow.insertCell(6).textContent = Meal;
}

// Function to save data to localStorage and update the table on form submission
function saveData(event) {
    event.preventDefault(); // Prevent form from refreshing

    const name = document.getElementById('entername').value;
    const birth = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const GENDER = document.querySelector("input[name='Gender']:checked") ? document.querySelector("input[name='Gender']:checked").value : '';

    const selectedOptions = [];
    if (document.getElementById('tea').checked) {
        selectedOptions.push('Tea');
    }
    if (document.getElementById('coffee').checked) {
        selectedOptions.push('Coffee');
    }
    const Beverage = selectedOptions.join(', ');

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

    const formlocal = { name, birth, age, email, GENDER, Beverage, Meal };

    // Save data to localStorage
    let savedata = JSON.parse(localStorage.getItem('formlocal')) || [];
    savedata.push(formlocal);
    localStorage.setItem('formlocal', JSON.stringify(savedata));

    // Update the table with saved data
    loadTableData();

    // Reset the form after submission
    document.querySelector('form').reset();
}

// Function to load data from localStorage and populate the table
function loadTableData() {
    const savedata = JSON.parse(localStorage.getItem('formlocal')) || [];
    const table = document.getElementById('tablename');

    // Clear table before updating it
    const rows = table.getElementsByTagName('tr');
    for (let i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    // Populate table with saved data
    savedata.forEach(data => {
        const newrow = table.insertRow();
        newrow.insertCell(0).textContent = data.name;
        newrow.insertCell(1).textContent = data.birth;
        newrow.insertCell(2).textContent = data.age;
        newrow.insertCell(3).textContent = data.email;
        newrow.insertCell(4).textContent = data.GENDER;
        newrow.insertCell(5).textContent = data.Beverage;
        newrow.insertCell(6).textContent = data.Meal;
    });
}

window.onload = function() {
    // Load the saved data into the table when the page loads
    loadTableData();

    // Add event listeners to update table dynamically as the user types
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', updateTable);
    });

    const genderInputs = document.querySelectorAll("input[name='Gender']");
    genderInputs.forEach(input => {
        input.addEventListener('change', updateTable);
    });

    const beverageInputs = document.querySelectorAll("input[name='beverage']");
    beverageInputs.forEach(input => {
        input.addEventListener('change', updateTable);
    });
};

// Add event listener for form submission
document.querySelector('form').addEventListener('submit', saveData);
