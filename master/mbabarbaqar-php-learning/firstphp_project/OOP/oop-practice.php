<?php 

class User{
  public $old_names = array();
  public $name;
  public $email;
  public $phone;
  public $address;

  function __construct(){
    $this->name = "Muaaz";
    $this->email = "Muaaz@mail.com";
    $this->phone = "9244788347834";
    $this->address  = "Test address.";
    //
  }


  public function setNewName($newName){
    $this->old_names[] = $this->name;
    $this->name = $newName;
  }

  public function setEmail($newEmail){
    $this->email = $newEmail;
  }

  function __destruct(){
    echo "New Name:". $this->name;
    echo "<br />";
    echo "Email: " . $this->email;
    echo "<br />";

    echo "<br />";
    foreach($this->old_names as $key=>$oldName){
      echo "Old name: " . $key . " - " . $oldName . "<br />";;
    }
    
  }
}


$user = new User();



//Print display
//echo $user->name;
echo "<br />";

$user->setNewName("Ali");
$user->setEmail("Ali@mail.com");

$user->setNewName("Ali 2");

$user->setNewName("Ali 3");

$user->setNewName("Ali 4");
$user->setNewName("Ali 5");

?>