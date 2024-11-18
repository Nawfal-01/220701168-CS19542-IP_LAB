<?php
include('db_connect.php');


if ($_SERVER["REQUEST_METHOD"] == "POST" && empty($errors)) {
    $cid = $_POST["cid"];
    $cname = $_POST["cname"];

    $sql = "INSERT INTO CUSTOMER (CID, CNAME) VALUES ('$cid', '$cname')";

    if ($conn->query($sql) === TRUE) {
        echo "New customer created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
