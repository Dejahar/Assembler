<?php
//Sessions


// Start the session
session_start();



//Assign value to session
//$_SESSION["test_session"] = "Heloooooo";


if(isset($_SESSION["test_session"])){
	echo $_SESSION["test_session"];
	
}

//Remove a specific value from session
unset($_SESSION["test_session"]);

// remove all session variables
session_unset();

// destroy the session
session_destroy();
?>