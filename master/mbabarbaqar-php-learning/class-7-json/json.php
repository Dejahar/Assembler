<?php
//Array
$ages = array("Peter"=>35, "Ben"=>37, "Joe"=>43);


//Array to string convert
$jsonString =  json_encode($ages);
echo $jsonString . "<br />";


//String to array convert
$arra = json_decode($jsonString);

//Display array
var_dump($arra);



$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

var_dump(json_decode($jsonobj));



/**
* Read json from json file
*/


//File read
$myfile = fopen("example.json", "r") or die("Unable to open file!");
$json =  fread($myfile, filesize("example.json"));
fclose($myfile);


//Display json
var_dump($json);

//Decode to array
$arrayData = json_decode($json, 'ARRAY_A');

var_dump($arrayData['choose-1']);
?>