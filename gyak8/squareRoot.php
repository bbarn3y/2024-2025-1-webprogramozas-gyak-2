<?php

$errors = [];

$number = $_GET['number'] ?? $_POST['number'] ?? NULL;

if ($number == NULL || $number == '') { // (!$number)
    $errors[] = 'Please provide a valid value!';
}
if (!is_numeric($number)) {
    $errors[] = 'Number is not a number!';
} else if ($number < 0) {
    $errors[] = 'Please provide a number larger than 0!';
}

?>

Number: <?= $number ?>
<br>
<?php if(count($errors) == 0): ?>
    SQRT: <?= sqrt($number) ?>
<?php endif; ?>

<?php foreach ($errors as $error) {
    echo '<div style="color: red">' . $error . '</div>';
}

