<?php
include('db_connect.php');

$sql = "SELECT ACCOUNT.ano, ACCOUNT.atype, ACCOUNT.balance, CUSTOMER.cname 
        FROM ACCOUNT 
        JOIN CUSTOMER ON ACCOUNT.cid = CUSTOMER.cid";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Account Number: " . $row["ano"]. " - Type: " . $row["atype"]. 
             " - Balance: " . $row["balance"]. " - Customer Name: " . $row["cname"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
