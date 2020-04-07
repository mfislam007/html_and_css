<!DOCTYPE html>
<html lang="en">

<head>
 <title>Assignment 5</title>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
 <link rel="stylesheet" href="../css_sheet.css">
 <link rel="stylesheet" href="survey.css">
</head>

<body>

 <header>
  
  
 </header>

    <main">
        <div class="container">
            <h1 class="main__title lang-changing">
                <span class="lang en">Quality of Living in Vaasa</span>
                <span class="lang fi">Elämänlaatu Vaasassa</span>
            </h1>
            <div class="user_result form lang-changing">
                <table>
                <tr>
                        <td>
                            <span class="lang en">Full Name</span>
                            <span class="lang fi">Nimi</span>
                        </td>
                        <td><?php echo $_POST["name"]?></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="lang en">Age</span>
                            <span class="lang fi">Ika</span>
                        </td>
                        <td><?php echo $_POST["age"]?></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="lang en">Education</span>
                            <span class="lang fi">Koulutus</span>
                        </td>
                        <td><?php echo $_POST["education"]?></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="lang en">Job</span>
                            <span class="lang fi">tyo</span></label>
                        </td>
                        <td><?php echo $_POST["job"]?></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="lang en">Hobbies</span>
                            <span class="lang fi">harrastukset</span></label>
                        </td>
                        <td><?php echo $_POST["hobbies"]?></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="lang en">Type of living</span>
                            <span class="lang fi">Elintaso</span></label>
                        </td>
                        <td><?php echo $_POST["living"]?></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="lang en">Infrastructure feedback</span>
                            <span class="lang fi">lausunto</span></label>
                        </td>
                        <td><?php echo $_POST["infrastructure"]?></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="lang en">Accommodation feedback</span>
                            <span class="lang fi">Majoituspalaute</span></label>
                        </td>
                        <td><?php echo $_POST["accommodation"]?></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="lang en">Transportation feedback</span>
                            <span class="lang fi">Kuljetuspalaute</span></label>
                       </td>
                        <td><?php echo $_POST["transportation"]?></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="lang en">Education feedback</span>
                            <span class="lang fi">Koulutuspalaute</span></label>
                        </td>
                        <td><?php echo $_POST["educationFeedback"]?></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="lang en">Recruitment feedback</span>
                            <span class="lang fi">rekrytoinnin palautetta</span>
                        </td>
                        <td><?php echo $_POST["recruitment"]?></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="lang en">Culture and sports feedback</span>
                            <span class="lang fi">Kulttuurin palaute</span>
                        </td>
                        <td><?php echo $_POST["culture-sports"]?></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="lang en">Recreation possibilities</span>
                            <span class="lang fi">Virkistyspalaute</span>
                        </td>
                        <td><?php echo $_POST["recreation"]?></td>
                    </tr>
                </table>
                <p><a href="surveyForm.html" class="back-btn">
                    <span class="lang en">Back</span>
                    <span class="lang fi">Takaisin</span>
                </a></p>
            </div>
        </div>
    </main>

 <footer></footer>
 <script src="jquery.min.js"></script>
 <script src="bootstrap.min.js"></script>

</body>

</html>
