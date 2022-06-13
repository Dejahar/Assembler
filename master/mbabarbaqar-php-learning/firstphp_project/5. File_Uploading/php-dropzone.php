<!DOCTYPE html>
<html lang="en">

    <head>
        <title>PHP File Upload</title>
        <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css" type="text/css" />
    </head>

    <body>
        <form action="http://localhost/firstphp_project/5.%20File_Uploading/php-dropzone.php" class="dropzone"></form>
    </body>
</html>


<?php 
    if(isset($_FILES["file"])){
        
        $path_whereToUpload = "upload/". basename($_FILES["file"]["name"]);
        $path_whichToUpload = $_FILES["file"]["tmp_name"];
        $testing = move_uploaded_file($path_whichToUpload, $path_whereToUpload);

        var_dump($testing);
    }
?>
