<?php

$weight = $_POST["txtWeight"];
$height = $_POST["txtHeight"];
$unit = $_POST["optUnit"];
$metric = ($weight / ($height * $height));
$imperial = (($weight * 703)/($height * $height));

if ($unit == "metric") {
  echo "A height of $height Meters and a weight of $weight Kilograms = " . round($metric, 1) . " BMI.<br />";

  if ($metric <= 18.5) {
    echo "Your BMI is below normal";
  } else if ($imperial >= 18.5 && $imperial <= 24.9) {
    echo "Your BMI is normal";
  } else {
    echo "Your BMI is above normal";
  }
}

if ($unit == "imperial") {
  echo "A height of $height Inches and a weight of $weight Pounds = " . round($imperial, 1) . " BMI.<br />";

  if ($imperial <= 18.5) {
    echo "Your BMI is below normal";
  } else if ($imperial >= 18.5 && $imperial <= 24.9) {
    echo "Your BMI is normal";
  } else {
    echo "Your BMI is above normal";
  }
}

?>
