const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // for getting input values
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the results
        results.innerHTML = `<span>${bmi}</span>`;
    }
    
    

}

);
