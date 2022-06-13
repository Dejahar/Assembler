<?php 

	//$apiURL = "http://localhost/php_learning_repo/php-learning/class-7-json/json-api.php";
	$apiURL = "http://ip-api.com/json/?fields=61439";
	
	//To get data from APIs
	$data = file_get_contents($apiURL);
	
	echo "<pre>";
	print_r($data);exit();
?>