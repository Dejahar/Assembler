<?php 
#Access form Data

#How to use form actions
if($_POST){
var_dump($_POST);
	
}


//exit();


/* Redirect back to form page */
header("Location: class3-forms.php?success=true"); 
exit();

?>