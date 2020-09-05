<?php
$email = $_POST['email'];
$name = $_POST['name'];
$username = $_POST['username'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];
$school = $_POST['school'];
$category = $_POST['category'];


//make connetion to database
$dbhost = '127.0.0.1';
$dbusername = 'root';
$dbpassword = '123456';
$dbname = "discussion_group_website";
$conn = new mysqli($dbhost, $dbusername, $dbpassword, $dbname);
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    echo $category;
    $stmt = $conn->prepare("INSERT INTO users(name, username, password, email, school, major) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $name, $username, $password, $email, $school, $category);
    $execval = $stmt->execute();
    echo $execval;
    echo "Registration successfully............";
    $stmt->close();
    $conn->close();
}
?>

