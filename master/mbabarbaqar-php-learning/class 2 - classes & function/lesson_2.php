<?php 
echo "<h1>Classes and function</h1>";
echo "<br />";

$calc = new calculator(66, 7);

echo $calc->add();
echo "<br />";
echo $calc->division();






class calculator {
	#Global variables
	public $first_number;
	public $second_number;
	
	function __construct($number1, $number2) {
		//First class Code
		//Ladies first
		$this->first_number = $number1;
		$this->second_number = $number2;
	}
	
	function add(){
		return $this->first_number + $this->second_number;
	}
	
	function subtraction(){
		//Subtraction
		return $this->first_number - $this->second_number;
	}
	
	function multiplication(){
		//
		return $this->first_number * $this->second_number;
	}
	
	function division(){
		return $this->first_number / $this->second_number;
	}
	
	
}


#Second Example
$data = array(
	"id" => "1",
	"first_name" => "Sabir",
	"second_name" => "Rasheed",
	"email" => "mail@mail.com",
);


$student = new student($data);

echo $student->full_name();

class student {
	public $id;
	public $firstname;
	public $lastname;
	public $email;
	
	function __construct($info) {
		$this->id = $info['id'];
		$this->firstname = $info['first_name'];
		$this->lastname = $info['second_name'];
		$this->email = $info['email'];
	}
	
	public function full_name(){
		$full = $this->firstname . " " . $this->lastname;
		return $full;
	}
	
	
	
}



?>