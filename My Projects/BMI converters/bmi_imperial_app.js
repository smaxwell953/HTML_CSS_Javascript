// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
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
    const foot = document.getElementById('foot');
    const inch = document.getElementById('inch');
    const pound = document.getElementById('pound');
    const bmi = document.getElementById('bmi');

    const feet = parseFloat(foot.value);
    const inches = parseFloat(inch.value);
    const weight = parseFloat(pound.value);
    const ft_to_in = feet * 12;

    const totalheight = ft_to_in + inches;

    const bmi1 = (parseFloat(weight) * 703) / (Math.pow(totalheight,2));

//    if(totalheight > 0) {
        bmi.value = bmi1.toFixed(2);

        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide loader
        document.getElementById('loading').style.display = 'none';
//    } else {
//        showError('Please check your numbers.');
//    }
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