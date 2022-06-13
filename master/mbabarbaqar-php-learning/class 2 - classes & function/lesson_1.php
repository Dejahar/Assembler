<?php

//How to create an instanse of a class or object
$calc = new Calculator(50, 30);

//Show an object
var_dump($calc);

//Show addition of that object 
//or how to call a function of a class or object
var_dump($calc->addition());

var_dump($calc->subtraction());

var_dump($calc->division());


var_dump($calc->multiplication());


//How to declare a class or object
class Calculator {
	//Global variables
	public $first_number;
	public $second_number;//private, protected, public
	
	//Step 1
	//How to pass parameters to a class or object
	function __construct($num1, $num2) {
		$this->first_number = $num1;
		$this->second_number = $num2;
		//echo "Hello";
	}
	
	//how to pass parameter or argumanent to a function
	public function addition(){
		$result = $this->first_number + $this->second_number;
		return "Addition: " . $result;
	}
	
	function subtraction(){
		$result = $this->first_number - $this->second_number;
		return "Subtraction:" . $result;
	}
	
	function division(){
		$result = $this->first_number / $this->second_number;
		return "Division: " . round($result, 2);
	}
	
	function multiplication(){
		$result = $this->first_number * $this->second_number;
		return "Multiplication: " . $result;
	}
}


?>