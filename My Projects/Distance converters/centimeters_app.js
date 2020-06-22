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
    const meter = document.getElementById('meter');
    const millimeter = document.getElementById('millimeter');
    const centimeter = document.getElementById('centimeter');
    const kilometer = document.getElementById('kilometer');
    const mile = document.getElementById('mile');
    const yard = document.getElementById('yard');
    const foot = document.getElementById('foot');
    const inch = document.getElementById('inch');

    const inputtedCM = parseFloat(centimeter.value);
    const calculatedMM = parseFloat(centimeter.value) * 10;
    const calculatedM = parseFloat(centimeter.value) / 10;
    const calculatedKM = parseFloat(centimeter.value) / 100;
    const calculatedMI = parseFloat(centimeter.value) / 160934;
    const calculatedYD = parseFloat(centimeter.value) / 91.44;
    const calculatedFT = parseFloat(centimeter.value) / 30.48;
    const calculatedIN = parseFloat(centimeter.value) / 2.54;

    if(isFinite(inputtedM)) {
        inputtedCM.value = inputtedM.toFixed(2);
        millimeter.value = calculatedMM.toFixed(2);
        meter.value = calculatedM.toFixed(2);
        kilometer.value = calculatedKM.toFixed(2);
        mile.value = calculatedMI.toFixed(2);
        yard.value = calculatedYD.toFixed(2);
        foot.value = calculatedFT.toFixed(2);
        inch.value = calculatedIN.toFixed(2);

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