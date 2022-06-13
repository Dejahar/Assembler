<!DOCTYPE html>
<html lang="en">
    <head>
        <title>PHP Multiple File upload</title>
    </head>

    <body>

        <form action="" method="post" enctype="multipart/form-data">
            <input type="file" name="my_files[]" multiple />

            <input type="submit" name="form_submit" value="Upload Files" />
        </form>
    </body>
</html>

<?php 

if(isset($_POST['form_submit'])){
    if(isset($_FILES['my_files'])){
        foreach($_FILES['my_files']['name'] as $key=>$value){
            $path_whereToUpload = "upload/". basename($value);
            $path_whichToUpload = $_FILES["my_files"]["tmp_name"][$key];
            $testing = move_uploaded_file($path_whichToUpload, $path_whereToUpload);
        }
    }
}

?>