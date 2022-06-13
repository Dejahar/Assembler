<?php 

//Folder Create
// if(!file_exists('test/abc')){
//     mkdir("test/abc", 0777, true);
// }

//File Create 
// if(!file_exists('test/abc/testfile2.txt')){
//     $myfile = fopen("test/abc/testfile2.txt", "w");
// }

//File Delete
// if(file_exists('test/abc/testfile2.txt')){
//     unlink("test/abc/testfile2.txt");
//     echo "File Deleted.";
// }

//Folder delete
// if(file_exists('test/abc')){
//     rmdir("test/abc/");
//     echo "Folder Deleted.";
// }


//Listing of files and folders
$dir = 'test/abc';
$files = array_diff(scandir($dir), array('..', '.'));

foreach($files as $file){
    $fileInfo = $dir . "/" . $file;

    if(is_dir($fileInfo)){
        echo "Folder: ";
    }
    echo $file . "<br>";
}

//var_dump("<pre>", $files);

?>