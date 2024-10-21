<?php
declare(strict_types=1);
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

Hello world!

<?php echo "Hello from PHP" ?>
<?= "Short hello!" ?>

<?php
$bool = true;
$int = 5;
$float = 4.2;
$string = 'Single line string';
$multiLineString = "Multi
Line
String";
$array = ["el1", "el2"];
$callable = function() {};

echo "<br> gettype(bool): " . gettype($bool);
echo "<br> gettype(int): " . gettype($int);
echo "<br> gettype(float): " . gettype($float);
echo "<br> gettype(string): " . gettype($string);
echo "<br> gettype(array): " . gettype($array);
echo "<br> gettype(callable): " . gettype($callable);
echo "<br> is_callable(callable): " . is_callable($callable);

echo "<br>";
echo 5 + 10;
echo 1 ? 2 : 0;
echo 1 ?: 0; // 1 ? 1 : 0
echo NULL ?? 9 ?? 5;
echo 5 <=> 3;

function even(array $numberArray): array {
    $result = [];
    foreach($numberArray as $number) {
        if ($number % 2 == 0) {
            // array_push($result, $number);
            $result[] = $number;
        }
    }
    return $result;
}

$numbers = [1, 3, 12, 5, 8, -2, -4];
$evenNumbers = even($numbers);

print_r($evenNumbers);
echo "<br>";
var_dump($evenNumbers);
?>

<ul>
    <?php foreach ($evenNumbers as $evenNumber): ?>
    <li><?= $evenNumber ?></li>
    <?php endforeach; ?>
</ul>

<?php

function filter(array $numberArray, callable $func): array {
    $result = [];
    foreach($numberArray as $number) {
        if ($func($number)) {
            // array_push($result, $number);
            $result[] = $number;
        }
    }
    return $result;
}

$oddNumbers = filter($numbers, function($n): bool {
    return $n % 2 == 1;
});
print_r($oddNumbers);

$negativeNumbers = array_filter($numbers, function ($num) {
   return $num < 0;
});
print_r($negativeNumbers);

$background = $_GET['color'] ?? 'aqua';
?>

<style>
    html {
        background: <?= $background ?>;
    }
</style>















</body>
</html>

