<?php 

$arrayElements = array(
    "Ali", 
    "Usman",
    "Fahad",
    "Mustafa"
);

//Check each elemnt in an array
foreach($arrayElements as $key=>$element){
    if($element == "Ali"){
        echo "Ali is available: ";
        break;
    }
    echo " -next-";
}

echo "OUt";

?>