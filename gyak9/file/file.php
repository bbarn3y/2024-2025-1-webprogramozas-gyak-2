<?php

$personsFile = fopen("persons.json", "r");

$personsAsString =
    fread($personsFile, filesize("persons.json"));
$personsArray = json_decode($personsAsString, true);

fclose($personsFile);

print_r($personsArray);


$adultPersons = array_filter($personsArray, fn($person) => $person['age'] > 18);

print_r($adultPersons);

?>

<ul>
    <?php foreach ($adultPersons as $adultPerson): ?>
        <li><?= $adultPerson['name'] ?></li>
    <?php endforeach; ?>
</ul>

<?php

$adultPersonsJSONFile = fopen("adult_persons.json", "w");
fwrite($adultPersonsJSONFile,
    json_encode($adultPersons, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
fclose($adultPersonsJSONFile);

?>

<!--
name,age
Nagy Balázs, 20
-->
<?php
$adultPersonsCSVFile = fopen("adult_persons.csv", "w");
fwrite($adultPersonsCSVFile, "name,age" . PHP_EOL);
foreach($adultPersons as $adultPerson) {
    fwrite($adultPersonsCSVFile, $adultPerson["name"] . "," . $adultPerson["age"] . PHP_EOL);
}
fclose($adultPersonsCSVFile);







