<?php 
/**
* What are APIs
*/


$data = array(
	array(
		"id" => 1,
		"name" => "Sabir",
		"email" => "sabir@mail.com",
	),
	array(
		"id" => 2,
		"name" => "Muaz",
		"email" => "muaaz@mail.com",
	),
	array(
		"id" => 3,
		"name" => "Ali",
		"email" => "ali@mail.com",
	),
);


echo json_encode($data);exit;


?>