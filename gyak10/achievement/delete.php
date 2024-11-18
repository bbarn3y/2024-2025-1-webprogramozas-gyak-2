<?php

require_once("Storage.php");

$achievementStorage = new Storage(
    new JsonIO('data_achievements.json'),
    false
);

$achievementStorage->delete($_GET['id']);

header("Location: index.php");
