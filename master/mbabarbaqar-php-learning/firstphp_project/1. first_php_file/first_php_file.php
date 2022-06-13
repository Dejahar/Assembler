<?php 
//Comment First
# Second comment

/*
echo "Hello World";
echo "here";
*/

//Variable:

$arrayValues = array("test", 123213, "test2", "test 3", 33, "test4");

// if(in_array(33, $arrayValues)){
//     echo "Yes, it is.";
// }


foreach($arrayValues as $arrayValue){
    if($arrayValue == 33){
        echo "Yes, it is.";
    }
}


?>

<!--Hello Word-->