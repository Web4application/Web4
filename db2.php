<?php
$servername = "localhost";
$username = "root";
$password = "nothing";
$dbname = "db_robot_base";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " 
  . $conn->connect_error);
}

$sql = "SELECT backward, right_button, stop , left_button , forward  FROM robot_base";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "backward " . $row["backward"]. " right_button " . $row["right_button"]. " stop" . $row["stop"]. "left_button" . $row["left_button"].
	"forward " .$row["forward"]. 	"<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>