<?php
    $file_name = "../blog/comments.txt";
    $search = file($file_name);
    $count = 0;
    $results = "";
    foreach($search as $find){
        if(strpos($find, $_POST["first_name"])){
            $results = $results . $find . "<br>";
        }
    }
    if (empty($results)) {
        echo 'No results found';
    } else {
        echo '<table>' . $results . '</table>';
    }
?>
