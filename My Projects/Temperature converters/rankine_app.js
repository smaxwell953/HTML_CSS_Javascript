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
    const rankine = document.getElementById('rankine');
    const fahrenheit = document.getElementById('fahrenheit');
    const celsius = document.getElementById('celsius');
    const kelvin = document.getElementById('kelvin');

    const inputtedR = parseFloat(rankine.value);
    const calculatedF = parseFloat(rankine.value) - 459.67;
    const calculatedC = parseFloat(rankine.value) - 273.15;
    const calculatedK = parseFloat(rankine.value) / 1.8;

    if(isFinite(inputtedR)) {
        inputtedR.value = inputtedR.toFixed(2);
        fahrenheit.value = calculatedF.toFixed(2);
        celsius.value = calculatedC.toFixed(2);
        kelvin.value = calculatedK.toFixed(2);

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