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

    const inputtedLB = parseFloat(pound.value);
    const calculatedOZ = parseFloat(pound.value) * 16;
    const calculatedMG = parseFloat(pound.value) * 453592;
    const calculatedG = parseFloat(pound.value) * 453.592;
    const calculatedKG = parseFloat(pound.value) * 0.453592;

    if(isFinite(inputtedLB)) {
        inputtedLB.value = inputtedLB.toFixed(2);
        ounce.value = calculatedOZ.toFixed(2);
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