<!DOCTYPE html>
<html>
<body>

<form action="" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="file1">
  <input type="file" name="file2">
  <input type="file" name="file_testing">
  <input type="submit" value="Upload Image" name="submit">
</form>

</body>
</html>

<?php
if(isset($_POST["submit"])) {
	//Step 1
	$target_dir = "uploads/images";
	//Create upload Directory
	if(!file_exists($target_dir)) {
	  mkdir($target_dir, 0777, true);
	}
	
	foreach($_FILES as $key => $file){
		$unique = uniqid();
		#Step 2
		#Upload first file
		$ext = pathinfo($file["name"], PATHINFO_EXTENSION);
		$fileName = 'test_'.$unique.'.' . $ext;
		#Where to upload file and waht is file name
		$target_file1 = $target_dir . "/" . $fileName;
		#Step 3
		#Upload file
		move_uploaded_file($file["tmp_name"], $target_file1);		
	}
	

}
?>