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
    const kelvin = document.getElementById('kelvin');
    const fahrenheit = document.getElementById('fahrenheit');
    const celsius = document.getElementById('celsius');
    const rankine = document.getElementById('rankine');

    const inputtedK = parseFloat(kelvin.value);
    const calculatedF = (parseFloat(kelvin.value) - 273.15) * 1.8 + 32;
    const calculatedC = parseFloat(kelvin.value) - 273.15;
    const calculatedR = parseFloat(kelvin.value) * 1.8;

    if(isFinite(inputtedK)) {
        inputtedK.value = inputtedK.toFixed(2);
        fahrenheit.value = calculatedF.toFixed(2);
        celsius.value = calculatedC.toFixed(2);
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