<?php
$colour_name_1 = "Thistle";
$colour_name_2 = "Lavender";
$colour_name_3 = "LightSeaGreen";

$cookie_colour_name = "bgndColour";
$cookie_colour_expiry = time() + 86400 * 1;
$cookie_colour_default_value = $colour_name_1;

if (isset($_GET[$cookie_colour_name])) {
  $cookie_colour_value = $_GET[$cookie_colour_name];
}
elseif (!isset($_COOKIE[$cookie_colour_name])) {
  $cookie_colour_value = $cookie_colour_default_value;
}
else {
  $cookie_colour_value = $_COOKIE[$cookie_colour_name];
}

setcookie($cookie_colour_name, $cookie_colour_value, $cookie_colour_expiry);
?>
<!DOCTYPE html>
<html>

<head>
  <title>3-Colour Page</title>
  <style>
    body {
      background-color: <?= $cookie_colour_value ?>
    }
    a.selected {
      cursor: default;
      font-weight: bold;
      pointer-events: none;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <h2>Background Colour: <?= $cookie_colour_value ?></h2>
  <ul>
    <li><a href="?<?= "$cookie_colour_name=$colour_name_1" ?>" class="<?= $cookie_colour_value == $colour_name_1 ? 'selected' : '' ?>"><?= $colour_name_1 ?></a></li>

    <li><a href="?<?= "$cookie_colour_name=$colour_name_2" ?>" class="<?= $cookie_colour_value == $colour_name_2 ? 'selected' : '' ?>"><?= $colour_name_2 ?></a></li>
    
    <li><a href="?<?= "$cookie_colour_name=$colour_name_3" ?>" class="<?= $cookie_colour_value == $colour_name_3 ? 'selected' : '' ?>"><?= $colour_name_3 ?></a></li>
  </ul>
</body>

</html>