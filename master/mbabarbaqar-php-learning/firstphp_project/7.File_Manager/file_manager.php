<?php
    session_start();
    //Listing of files and folders
    $dir = 'Home';
    $urlPath = $dir;
    $messageShow = false;

    if(isset($_GET['path'])){
        $urlPath = $_GET['path'];
    }

    if(isset($_GET['message'])){
        $messageShow = true;
    }else{
        unset($_SESSION['messages']);
    }
    //Delete functionality
    if(isset($_GET['delete'])){
        $deleteFile = $_GET['delete'];
        $fullDeletePth = $urlPath . '/' . $deleteFile;
        if(file_exists($fullDeletePth)){
            unlink($fullDeletePth);
        }
        header('Location: '. '?path='.$urlPath);exit;
    }
    //New folder functionality
    if(isset($_GET['folder']) && !empty($_GET['folder']) && $_GET['folder'] != 'null'){
        $folderName = $_GET['folder'];
        $fullFolderPath = $urlPath . '/' . $folderName . '/';

        if(!file_exists($fullFolderPath)){
            mkdir($fullFolderPath, 0777);
        }else{
            $_SESSION['messages'] = "Folder already exists.";
            $messageShow = true;
        }
        header('Location: '. '?path='.$urlPath . '&message='.$messageShow);exit;
    }

        //New file functionality
        if(isset($_GET['file']) && !empty($_GET['file']) && $_GET['file'] != 'null'){
            $fileName = $_GET['file'];
            $fullFilePath = $urlPath . '/' . $fileName . '.txt';
    
            if(!file_exists($fullFilePath)){
                $myfile = fopen($fullFilePath, "w") or die("Unable to open file!");
                $txt = "testing";
                fwrite($myfile, $txt);
                fclose($myfile);
                $_SESSION['messages'] = "File created successfully.";
                $messageShow = true;
            }else{
                $_SESSION['messages'] = "File already exists.";
                $messageShow = true;
            }
            header('Location: '. '?path='.$urlPath . '&message='.$messageShow);exit;
        }

        //View file functionality
        $content = "";
        if(isset($_GET['view']) && !empty($_GET['view'])){
            $fileName = $_GET['view'];
            $fullFilePath = $urlPath . '/' . $fileName;
    
            if(file_exists($fullFilePath)){
                $myfile = fopen($fullFilePath, "r") or die("Unable to open file!");
                // Output one line until end-of-file
                while(!feof($myfile)) {
                    $content .= fgets($myfile) . "<br>";
                }
                fclose($myfile);
            }else{
                $_SESSION['messages'] = "File already exists.";
                $messageShow = true;
            }
        }

        if($_FILES){
            $path_whereToUpload =  $urlPath ."/". basename($_FILES["new_file"]["name"]);
            $path_whichToUpload = $_FILES["new_file"]["tmp_name"];
            move_uploaded_file($path_whichToUpload, $path_whereToUpload);
        }
        //File upload funnctionality
        if(isset($_POST['file_upload'])){
            var_dump($_FILES);exit;
        }
    

    $bredCrumbsNames = explode("/", $urlPath);


    $fileListing = array_diff(scandir($urlPath), array('..', '.'));

    $folders = array();
    $files = array();
    foreach($fileListing as $file){
        $fileInfo = $urlPath . "/" . $file;
        if(is_dir($fileInfo)){
            $folders[] = $file;
        }else{
            $files[] = $file;
        }
    }
    rsort($folders);
    rsort($files);
?>


<html>
    <title>File Manager</title>
    <style>
        body{
            padding: 0;
            margin: 0;
        }
        a{
            color: black;
            text-decoration: none;
        }
        .row{
            width: 100%;
            display: block;
            height: auto;
        }
        .file_manager{
            width: 800px; 
            height: auto; 
            min-height: 500px;
            margin: 0 auto;
            background-color: rgb(215, 213, 213);
        }
        .top_buttons{
            list-style-type: none;
        }
        .top_buttons li{
            display: block;
            display: block;
            float: left;
            padding: 5px;
            font-size: 20px;
        }
        .top_buttons li img{
            width: 15px;
        }
        .bred_crumbs{
            list-style-type: none;
        }
        .bred_crumbs li{
            display: block;
            float: left;
            padding: 5px;
            font-size: 15px;
        }
        .files_listing{
            list-style-type: none;
        }
        .files_listing li{
            display: block;
            padding: 5px;
            font-size: 15px;
        }
        .delete_btn{
            color:red;
            margin-left: 10px;
        }
        .view_btn{
            color:green;
            margin-left: 10px;
        }
        .message{
            width: 95%;
            min-height: 30px;
            color: green;
            display: block;
            padding-left: 44px;
            padding-top: 10px;
            background: azure;
        }
    </style>
    <body>
        <div class="file_manager">
            <?php if(!empty($_SESSION['messages'])){ ?>
                <div class="row message" id="message"><?php echo $_SESSION['messages']; ?> <span onclick="document.getElementById('message').style.display = 'none'">Close</span></div>
            <?php } ?>
            
            <div class="row">
                <ul class="top_buttons">
                    <li>
                        <input type="hidden" id="folder-name" name="prompt">
                        <img src="./images/create_folder_icon.png"  /> <a onclick="location.href = '?path=<?php echo $urlPath ?>&folder=' + prompt('Enter folder name.', '');" href="javascript:;">Create Folder</a>
                    </li>
                    <li>
                        <img src="./images/create_file_icon.png"  /> <a onclick="location.href = '?path=<?php echo $urlPath ?>&file=' + prompt('Enter folder name.', '');" href="javascript:;">Create File</a>
                    </li>
                    <li>
                        <form action='' method='post' id="uploadForm"  enctype="multipart/form-data" style="display:none;" >
                            <input id='fileid' type='file' name="new_file"  onChange="document.getElementById('uploadForm').submit();" hidden/>
                            <input type="submit" name="file_upload"  hidden/>
                        </form>
                        
                        <img src="./images/upload_file_icon.png"  /> <a onclick="document.getElementById('fileid').click();" href="javascript:;">Upload File</a>
                    </li>
                </ul>  
            </div>
            
            <br />

            <div class="row">
                <ul class="bred_crumbs">
                    <?php 
                        $breadCPath = "";
                        foreach($bredCrumbsNames as $key=>$bredCrumb){
                            if(!empty($breadCPath)){
                                $breadCPath .= "/" .$bredCrumb;
                            }else{
                                $breadCPath = $bredCrumb;
                            }

                            $more = "";
                            if((count($bredCrumbsNames) - 1) != $key){
                                $more = "<span> > </span>";
                            }
                            
                            echo "<li><img src='./images/folder_icon.png' width='12' /> <a  href='?path=$breadCPath'>$bredCrumb</a> &nbsp; 
                            $more
                            </li>";
                        }
                    ?>
                </ul>
            </div>

            <br /><br /> 

            <div class="row">
                <ul class="files_listing">
                    <?php 
                        if(count($folders) == 0 && count($files) == 0){
                            echo "<div>Folder is empty.</div>";
                        }
                        foreach($folders as $fileName){
                            $fileInfo = $dir . "/" . $fileName;
                            $filePath = $urlPath . '/' . $fileName;
                            echo "<li> <img src='./images/folder_icon.png' width='12' /> <a href='?path=$filePath'>$fileName</a></li>";
                        }
                        //var_dump("<pre>",$_SERVER);exit;
                        foreach($files as $fileName){
                            $fileInfo = $dir . "/" . $fileName;
                            $fullUrl = $_SERVER['REQUEST_URI'];
                            $deleteUrl = $fullUrl . '&' . 'delete='.  $fileName; 
                            $viewFile = $fullUrl . '&' . 'view='.  $fileName;
                            echo "<li> <img src='./images/file_icon.png' width='12' /> <a href='javascript:;'>$fileName</a> 
                                <a href='$viewFile' class='view_btn'>View</a>    
                                <a href='$deleteUrl' class='delete_btn'>Delete</a>
                            </li>";
                        }
                    ?>
                </ul>
            </div>

            <br />
            
            <?php if(!empty($content)){ ?>
                <div class="content"><?php echo $content; ?></div>
             <?php } ?>
            

        </div>

    </body>
</html>