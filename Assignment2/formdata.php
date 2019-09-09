<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="stylesheet.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="function.js"></script>
<title>Malika Tasnim Taky</title>
</head>
<body>
	<div class="wrap">
		<div class="paragraph">
			<header>
			<h1>Fill up the form</h1>
			</header>

			<main>
				<form id="data" action="register.php" method="POST" autocomplete="on">
				 <p>First name: <input type="text" name="first_name" required="required"></p>
				 <p>Last name: <input type="text" name="last_name" required="required"></p>
				 <p>Phone number: <input type="text" name="phone_number" required="required"></p>


				</form>


				 <p>Service:</br>
				 <input type="checkbox" checked name="service[]"  form="data" value="Training"> Training
				 <input type="checkbox" name="service[]"  form="data" value="Consultancy"> Consultancy
				 <input type="checkbox" name="service[]"  form="data" value="Help Desk Service"> Help Desk Service
				 <input type="checkbox" name="service[]"  form="data" value="Programming"> Programming
				 </p>

				 <p>Feedback:
				 <select name="feedback" form="data">
					 <option value="Excellent">Excellent</option>
					 <option value="Good">Good</option>
					 <option value="Satisfactory">Satisfactory</option>
					 <option value="Unacceptable">Unacceptable</option>
				 </select>
			   </p>
			 	</br>

				<input type="submit" name="submit" value="Submit" onclick="register()">


			</main></br>


			<footer>
				<p>&copy; Malika Tasnim Taky</p>
			</footer>

		</div>
	</div>

</body>
</html>
