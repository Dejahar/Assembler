<?php 
include "connection.php";

/**
* Date time
*/

#Existing date format
$date = "2020-11-24 09:41:50";
echo date('Y - y - m - M - d - D', strtotime($date));

#Current date
echo date('Y - y - m - M - d - D');


/**
* File read
*/
echo "<br />";
echo readfile("test.txt");

?>