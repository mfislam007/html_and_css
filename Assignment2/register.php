<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="stylesheet.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="function.js"></script>
<title>Assignment 2</title>
</head>
<body>
	
			<header>
			<h1>Your inputed data:</h1>
			</header>

      <main>
				<form action="feedback.php" method="POST">
        <table border="1">
          <tr>
            <th>First Name</th>
            <td><?php echo $_POST["first_name"]; ?></td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td><?php echo $_POST["last_name"]; ?></td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td><?php echo $_POST["phone_number"]; ?></td>
          </tr>
					<tr>
            <th>Service</th>
            <td>
							</br>
							<?php
							 	$jobs=$_POST["service"]; foreach($jobs as $j) echo $j . ' ';
							 ?>
						</td>
          </tr>
					<tr>
            <th>Feedback</th>
            <td>
							<?php echo $_POST["feedback"]; ?>
							<input type="hidden" value="<?php echo $_POST["feedback"]; ?>" name="feedback_data">
						</td>
          </tr>
        </table>
				<br>
				<input type="submit">
				</form>
      </main>
			</br>
			<footer>
				<p>&copy; Md Farukul Islam</p>
			</footer>

		

</body>
</html>
