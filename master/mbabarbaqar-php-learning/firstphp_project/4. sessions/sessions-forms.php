<?php 
session_start();

//$_SESSION['data'] = [];
//$_SESSION['key'] = "Hello World.";//Store value



// if(isset($_SESSION['key'])){
//     echo $_SESSION['key'];//show

//     unset($_SESSION['key']);//single element remove
// }

if(isset($_GET['delete'])){
    if(isset($_SESSION['data'][$_GET['delete']])){
        unset($_SESSION['data'][$_GET['delete']]);
    }
}

if(isset($_POST['user_name']) && isset($_POST['email'])){
    $userData = array(
        "username" => $_POST['user_name'],
        "email" => $_POST['email'],
    );
    
    $_SESSION['data'][] = $userData;
}




?>

<form action='' method='post'>
    <label>Username</label> <br>
    <input type="text" name="user_name" /> <br>

    <label>Email</label> <br>
    <input type="text" name="email" /> <br> <br>

    <input type="submit" value="Submit" /> <br>
</form>


<?php 
    if(isset($_SESSION['data'])){
        echo "<ul>";
        foreach($_SESSION['data'] as $key=>$value){
            echo "<li> <b>UserName</b>: ". $value['username'] ." <b>Email</b>: ".$value['email']." <a href='?delete=".$key."'>Delete</a></li>";
        }
        echo "</ul>";
    }
?>