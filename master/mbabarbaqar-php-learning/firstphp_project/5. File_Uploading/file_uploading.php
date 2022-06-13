<!DOCTYPE html>
<html>
<body>

<form action="" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="my_file">
  <input type="submit" value="Upload Image" name="submit">
</form>

</body>
</html>

<?php 
    if(isset($_POST['submit'])){
        
        $path_whereToUpload = "upload/". basename($_FILES["my_file"]["name"]);

        $path_whichToUpload = $_FILES["my_file"]["tmp_name"];

        $testing = move_uploaded_file($path_whichToUpload, $path_whereToUpload);

        var_dump($testing);
    }
?>
