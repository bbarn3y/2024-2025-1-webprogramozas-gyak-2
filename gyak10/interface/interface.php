<?php

interface PersonAPI {
    function getPersons(): array;
    function getPersonsOverAge(int $age): array;
}

abstract class PersonsFromWhatever {
    abstract function getPersons(): array;

    function getPersonsOverAge(int $age): array {
        return array_filter(
            $this->getPersons(),
            fn($person) => $person['age'] >= $age
        );
    }
}

class PersonsFromJSON extends PersonsFromWhatever {
    function getPersons(): array
    {
        return json_decode(
            file_get_contents('persons.json'),
            true
        );
    }
}

class PersonsFromCSV extends PersonsFromWhatever {
    function getPersons(): array
    {
        $persons = [];
        $csvPointer = fopen('persons.csv', 'r');
        $headers = fgetcsv($csvPointer, null, ",");
        while($row = fgetcsv($csvPointer, null, ",")) {
            $persons[] = array_combine($headers, $row);
        }
        fclose($csvPointer);
        return $persons;
    }
}

$jsonAPI = new PersonsFromJSON();
$personsOver30FromJSON = $jsonAPI->getPersonsOverAge(30);

$csvAPI = new PersonsFromCSV();
$personsOver30FromCSV = $csvAPI->getPersonsOverAge(30);

print_r($personsOver30FromJSON);
echo ('<br>');
print_r($personsOver30FromCSV);
