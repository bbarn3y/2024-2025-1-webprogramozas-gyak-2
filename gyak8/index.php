<?php

$formState = [
        1 => [
                'name' => 'Select one',
                'type' => 'radio',
                'options' => [
                        'First option' => false,
                        'Second option' => true
                ]
        ],
        2 => [
                'name' => 'Select multiple',
                'type' => 'checkbox',
                'options' => [
                        'First' => true,
                        'Second' => false,
                        'Third' => true
                ]
        ]
];


?>

<!--
<h3> Radio Selector </h3>
<input type="radio" name="test" value="1" checked> 1
-->

<?php foreach ($formState as $id => $settings): ?>

<?php endforeach; ?>



