<?php

//This is single line comment

/*
 there are comments
Line two in comments
 */
 
#This is single line comment

/**
* First Lesson
* How to print/show strings or variable
*/
echo "<h1>ECHO STATEMENTS</h1>";

echo "Hello World!";

echo "<br />";

echo('Hello World!');


/**
* Step 2: Variable
*/
echo "<br />";

$variable1 = "Hello World, variable.";
$variable2 = " testing.";

echo $variable1 . "/" . $variable2;
echo "<br />";

echo strtoupper($variable1);
echo strtolower($variable1);
echo strtolower($variable1);

echo "<br />";


$price = 10.01;
echo number_format($price, 2);

/**
* Step 3: How Variables work
*/
echo "<br />";

//Test case 1
$testNumber1 = 10;
$testNumber2 = 30;
$testNumber3 = $testNumber1 + $testNumber2;
echo ($testNumber3);

echo "<br />";
//Test case 2
$testNumber4 = 10;
$testNumber5 = "ss3sd4sadads";

$int = (int)filter_var($testNumber5, FILTER_SANITIZE_NUMBER_INT); 

$testNumber6 = $testNumber4 + $int;
echo ($testNumber6);


/**
* Step 3: How function work
*/
include "testing.php";

echo "<br />";
echo '<h1 style="">Functions</h1>';
echo "<script>alert('test')</script>";
echo "<br />";

echo calculate(12, 12);

?>