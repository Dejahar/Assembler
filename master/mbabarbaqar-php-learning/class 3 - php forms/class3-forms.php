<?php
	/*session_start();
	if($_SESSION){
		echo "<pre>";
		print_r($_SESSION);
		unset($_SESSION['your_email']);exit();
	}*/


	if(isset($_POST['email'])){
		$email = $_POST['email'];
		echo "<script>localStorage.setItem('email', '".$email."');</script>";
	}else{
		$email =  "";
	}
 ?>
<form action="" method="post" enctype="multipart/form-data">
	<input type="file" name="upload" />Upload file
	<label>First Name: </label><br />
	<input type="text" required name="first_name" placeholder="First name" value=""/><br/>
	<label>Last Name: </label><br />
	<input type="text" name="last_name" placeholder="Last name" value=""/><br/>
	<label>Email: </label><br />
	<input type="email" name="email" placeholder="Enter Email" value="<?php echo $email; ?>"/><br/>
	<label>Phone: </label><br />
	<input type="tel" name="phone" placeholder="Enter your phone number" value=""/><br/>
	<label>URL: </label><br />
	<input type="url" name="url" placeholder="Phone" value=""/><br/>
	<input type="submit" />
</form>

<script>
	var email = localStorage.getItem('email');
	console.log(email);
</script>

