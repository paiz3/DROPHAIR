<?php
$host = "127.0.0.1";
$user = "root";
$password = '123456';
$db_name = "discussion_group_website";

$con = mysqli_connect($host, $user, $password, $db_name);
if(mysqli_connect_errno()) {
    die("Failed to connect with MySQL: ". mysqli_connect_error());
}
//This is a test comment
?>