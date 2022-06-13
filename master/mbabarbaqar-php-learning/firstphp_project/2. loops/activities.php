<?php 

// $staric = "";
// for($i = 1; $i <= 5; $i++){
//     $staric .=  "*";
//     echo $staric;
//     echo "<br />";
// }


// for($i = 1; $i <= 5; $i++){
//     for($j = 1; $j <= $i; $j++){
//         echo "*";
//     }
//     echo "<br />";
// }


/**
 * Second Activity
*/
// $staric = "";
// for($i = 1; $i <= 5; $i++){
//     $staric .=  "*";
//     echo $staric;
//     echo "<br />";
// }

// for($i = 5; $i >= 1; $i--){
//     for($j = 1; $j <= $i; $j++){
//         echo "*";
//     }
//     echo "<br />";
// }

#-----------------------

// $n=5;
// for($i=1; $i<=$n; $i++)
// {
//     for($j=1; $j<=$i; $j++)
//     {
//         echo ' * ';
//     }
//     echo '<br />';
// }
// for($i=$n; $i>=1; $i--)
// {
//     for($j=1; $j<=$i; $j++)
//     {
//         echo ' * ';
//     }
//     echo '<br />';
// }


/**
 * Table generate
 */
$table = 1000;
 for($i = 1; $i <= 10; $i++){
    $result = $i * $table;
    echo $i . ' x ' . $table . ' = ' . $result . '<br />';
 }
 
?>