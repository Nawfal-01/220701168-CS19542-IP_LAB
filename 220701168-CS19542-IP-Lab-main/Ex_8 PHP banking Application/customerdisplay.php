<?php
include('db_connect.php');

$sql = "SELECT * FROM CUSTOMER";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Customer ID: " . $row["cid"]. " - Name: " . $row["cname"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
