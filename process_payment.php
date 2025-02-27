<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "payments";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$cardNumber = $_POST['cardNumber'];
$expiryDate = $_POST['expiryDate'];
$cvv = $_POST['cvv'];
$cardHolder = $_POST['cardHolder'];

$stmt = $conn->prepare("INSERT INTO payments (card_number, expiry_date, cvv, cardholder_name) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $cardNumber, $expiryDate, $cvv, $cardHolder);

if ($stmt->execute()) {
    echo "You hace successfully payed for you car. Be on the look out for your car that will arrive soon!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
