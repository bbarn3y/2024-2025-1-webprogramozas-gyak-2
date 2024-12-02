<?php
include_once 'Storage.php';
$storage = new Storage(new JsonIO('recipes.json'));
$recipe = $storage->findById($_GET['name']);
session_start();

if ($recipe !== null) {
    $_SESSION['fridge'] =
        array_diff($_SESSION['fridge'], $recipe);
}
header('Location: index.php');
