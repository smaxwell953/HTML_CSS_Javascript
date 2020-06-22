// Listen for submit
document.getElementById('calc-form').addEventListener('submit', function(e){
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate Results
function calculateResults(){
    console.log('Calculating...');
    // UI Vars
    const celsius = document.getElementById('celsius');
    const fahrenheit = document.getElementById('fahrenheit');
    const kelvin = document.getElementById('kelvin');
    const rankine = document.getElementById('rankine');

    const inputtedC = parseFloat(celsius.value);
    const calculatedF = parseFloat(celsius.value) * 1.8 + 32
    const calculatedK = parseFloat(celsius.value) + 273.15;
    const calculatedR = parseFloat(celsius.value) * 1.8 + 491.67;

    if(isFinite(inputtedC)) {
        inputtedC.value = inputtedC.toFixed(2);
        fahrenheit.value = calculatedF.toFixed(2);
        kelvin.value = calculatedK.toFixed(2);
        rankine.value = calculatedR.toFixed(2);

        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide loader
        document.getElementById('loading').style.display = 'none';
        }
}

// Show Error
function showError(error) {
    // Hide results
    document.getElementById('results').style.display = 'none';

    // Hide loader
    document.getElementById('loading').style.display = 'none';

    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
    document.querySelector('.alert').remove();
}