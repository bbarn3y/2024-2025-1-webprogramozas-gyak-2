<?php

$formState = [
        1 => [
                'name' => 'Select one',
                'type' => 'radio',
                'options' => [
                        'First option' => true,
                        'Second option' => false
                ]
        ],
        2 => [
                'name' => 'Select multiple',
                'type' => 'checkbox',
                'options' => [
                        'First' => true,
                        'Second' => true,
                        'Third' => false
                ]
        ]
];


?>

<!--
<h3> {{ name }} </h3>
<input type="radio" name="test" value="1" checked> 1
-->

<?php foreach ($formState as $id => $settings): ?>

    <h3><?= $settings['name'] ?></h3>

    <?php foreach ($settings['options'] as $option => $checked): ?>
        <input type="<?= $settings['type'] ?>"
               name="<?= $settings['name'] ?>"
               value="<?= $option ?>"
               <?= $checked ? 'checked' : '' ?>
        /> <?= $option ?>
    <?php endforeach; ?>

<?php endforeach; ?>


<h3>SQRT</h3>
<form action="squareRoot.php" method="POST">
    <label for="number">Number</label>
    <input id="number" type="text" name="number"/>
    <button type="submit">Calculate SQRT</button>
</form>






