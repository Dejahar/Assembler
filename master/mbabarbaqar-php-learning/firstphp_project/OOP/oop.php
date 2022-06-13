<?php
//
//1. Base structure of a class
//2. Contructor
//3. Properties and methods
//4. Class parameters

class Calcultor{
    //properties
    public $number_one;
    public $number_two;
    const KEY = "324y3274y2sdbfsdb342343";

    function __construct($param1, $param2){
      //Initial call
      $this->number_one = $param1;
      $this->number_two = $param2;
      echo "The number one is {$this->number_one}.";
    }

    //Methods
    function add(){
      return $this->number_one + $this->number_two;
    }

    function subtract(){
      return $this->number_one - $this->number_two;
    }

    function divide(){
      return $this->number_one / $this->number_two;
    }

    function multiply(){
      return $this->number_one * $this->number_two;
    }

    function __destruct() {
      echo "The number two is {$this->number_two}.";
    }

    public static function test(){
      echo Calcultor::KEY;
    }
}


//Create an object
//Create instanse of a class
//Initialize a class
$calculator1 = new Calcultor(10, 50);

echo $calculator1->subtract();

echo "<br />";

echo $calculator1->number_one;

echo "<br />";

echo $calculator1::test();

echo "<br />";

?>