<?php
$name_in=$_POST['username'];

$course_in = $_POST['coursename'];

$time_in = $_POST['time'];

$dates_in = $_POST['weekdays'];

$link_in = $_POST['meetinglink'];


echo "$name_in has created a new meeting for $course_in on $time_in every $dates_in <br>";

echo "Please access via the link $link_in <br>";

echo "Your meeting has been recorded. Thank you!"
 
?>