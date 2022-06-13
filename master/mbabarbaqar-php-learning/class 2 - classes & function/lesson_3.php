<?php 

/**
* IF
* Statements
*/
$test  = 'sdds';


if($test == 3){
	echo "First";
}elseif($test == 4){
	echo "Second";
}elseif($test == 2){
	echo "third";
}else{
	echo "last";
}


/**
* Switch statement
*/
switch($test){
	case 1:
		echo "1st";
		break;
	case 2:
		echo "second";
		break;
	case 2:
		echo "4th";
		break;
	
	default:
		echo "last";
		break;
}

echo("<br /><h1>Loops</h1>");

/**
* 
*/
$simpleArr = array(2132, 3212, 22, 54, 4533, 2111);

$simpleArr2 = array("ali", "sabir", "muaz", "babar");

$objectArr = array(
	"name" => "Ali",
	"email" => "admin@mail.com",
	"addr" => "abc",
	"other_details" => array(
		"phone" => "12321376",
		"fax" => "12323",
	)
);

$arraOfArrays = array(
	array(
		"name" => "Ali",
		"email" => "admin@mail.com",
		"addr" => "abc",
		"other_details" => array(
			"phone" => "12321376",
			"fax" => "12323",
		)
	),
	array(
		"name" => "Sabir",
		"email" => "Sabir@mail.com",
		"addr" => "xyz",
		"other_details" => array(
			"phone" => "53322112",
			"fax" => "444",
		)
	),
	array(
		"name" => "Muaz",
		"email" => "Muaz@mail.com",
		"addr" => "errty",
		"other_details" => array(
			"phone" => "13332321376",
			"fax" => "44",
		)
	)
);

foreach($arraOfArrays as $key0 => $value0){
/*	echo "<h2>Student ".($key0+1)."</h2> ";
	if(is_array($value0)){
		foreach($value0 as $key =>$value ){
			if(is_array($value)){
				echo $key . ": <br />";
				foreach($value as $key2 => $value2){
					echo $key2 ." : " .$value2 . "<br/>";
				}
				
			}else{
				echo $key ." : " .$value . "<br/>";
				
			}
		}
	}*/
		
}





?>