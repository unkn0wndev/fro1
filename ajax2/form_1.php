<?php
$firstName = $_GET['firstName'];
$lastName = $_GET['lastName'];
$age = $_GET['age'];
$email = $_GET['email'];
echo "<h2>Response Demo Form</h2><h3> ";
echo "You submitted the following information<br><ul>";
echo "<li>voornaam: <strong> $firstName</strong></li>";
echo "<li>achternaam: <strong> $lastName</strong></li>";
echo "<li>leeftijd: <strong> $age</strong></li>";
echo "<li>Email: <strong> $email</strong></li>";
echo "</ul></h3>";
?>
