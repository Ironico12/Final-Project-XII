function showFeedbackForm() 
{
    document.getElementById('car-rental-section').style.display = 'none';
    document.getElementById('payment-page').style.display = 'none';
    document.getElementById('feedback-section').style.display = 'block';
}

document.getElementById('feedback-form').addEventListener('submit', function(event) 
{
    event.preventDefault();
    var feedback = document.getElementById('feedback').value;
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback!');
    document.getElementById('feedback-form').reset();
    document.getElementById('feedback-section').style.display = 'none';
    document.getElementById('car-rental-section').style.display = 'block';
});

var validCredentials = 
{
    'Aagya': '705',
    'Aakriti': '706',
    'Aarshu': '707',
    'Aarya': '708',
    'Binamra': '738',
    'Dixit': '747',
    'Abhi': '716',
    'Ambu': '723',
};

function authenticateUser(event) {
    event.preventDefault();
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var username = usernameInput.value.trim();
    var password = passwordInput.value;

    if (username && password && validCredentials.hasOwnProperty(username) && validCredentials[username] === password) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('car-rental-section').style.display = 'block';
        usernameInput.value = '';
        passwordInput.value = '';
    } else {
        alert('Invalid username or password. Please try again.');
        passwordInput.value = '';
        usernameInput.focus();
    }
}

function rentCar(carModel, price) {
    var confirmation = confirm('Do you want to rent the ' + carModel + ' for $' + price + ' per day?');
    if (confirmation) {
        document.getElementById('car-rental-section').style.display = 'none';
        document.getElementById('payment-page').style.display = 'block';
        document.getElementById('totalAmount').innerText = price;
        document.getElementById("hiddenTotalAmount").value = price;
    }
}

function completePayment() {
    alert('Payment Successful! Thank you for using our service to rent cars');
    document.getElementById('payment-page').style.display = 'none';
    document.getElementById('car-rental-section').style.display = 'block';
}

function goBackToHub() {
    document.getElementById('payment-page').style.display = 'none';
    document.getElementById('car-rental-section').style.display = 'block';
}

function reportCar(carModel) {
    alert(`Your report review for ${carModel} was submitted. You'll hear soon about the car.`);
}

function searchCars() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var carList = document.querySelectorAll('.car');

    carList.forEach(function(car) {
        var carTitle = car.querySelector('h3').innerText.toLowerCase();
        if (carTitle.includes(searchInput)) {
            car.style.display = 'block';
        } else {
            car.style.display = 'none';
        }
    });
}

function rentCar(carName, carPrice) {
    sessionStorage.setItem("carName", carName);
    sessionStorage.setItem("carPrice", carPrice);

    window.location.href = "payment.html";  
}
