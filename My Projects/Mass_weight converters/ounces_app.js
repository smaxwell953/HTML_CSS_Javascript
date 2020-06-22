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
    const pound = document.getElementById('pound');
    const ounce = document.getElementById('ounce');
    const milligram = document.getElementById('milligram');
    const gram = document.getElementById('gram');
    const kilogram = document.getElementById('kilogram');

    const inputtedOZ = parseFloat(ounce.value);
    const calculatedLB = parseFloat(ounce.value) / 16;
    const calculatedMG = parseFloat(ounce.value) * 28349.5;
    const calculatedG = parseFloat(ounce.value) * 28.3495;
    const calculatedKG = parseFloat(ounce.value) * 0.0283495;

    if(isFinite(inputtedOZ)) {
        inputtedOZ.value = inputtedOZ.toFixed(2);
        pound.value = calculatedLB.toFixed(2);
        milligram.value = calculatedMG.toFixed(2);
        gram.value = calculatedG.toFixed(2);
        kilogram.value = calculatedKG.toFixed(2);

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