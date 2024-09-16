const students = [
    {
        name: "Dezső Kende Barnabás",
        age: 30,
        hobbies: ["Futás", "Hangya égetés", "Hegymászás"],
    },
    {
        name: "Dockál Dominik Bence",
        age: 24,
        hobbies: ["Műanyag villák gyűjtése különböző büfékből", "Úszás"],
    },
    {
        name: "Farkas Bence",
        age: 41,
        hobbies: ["Biciklizés", "LEGO", "Villanykapcsolók fel-le kapcsolgatása"],
    },
    {
        name: "Csanádi Mihály",
        age: 18,
        hobbies: ["LEGO", "Rajzolás"],
    },
    {
        name: "Burián Ábel Tamás",
        age: 21,
        hobbies: ["Ételek betűrendbe rendezése a kamrában"],
    },
    {
        name: "Farkas Bálint",
        age: 21,
        hobbies: ["Biciklizés", "Falmászás", "Golf", "Kavicshajítás", "LEGO", "Motorozás"],
    },
];

// 22 év feletti személyek
const atLeast22YearsOld = students.filter((x) => x.age > 22);

// Az egyetlen 20 év alatti személy
const under20 = students.find((x) => x.age < 20);

// Mindenki 40 év alatti?
const everyoneUnder40 = students.every(x => x.age < 40);

// Legöregebb személy
const oldestPerson = students.reduce((partialMax, s) => {
    return s.age > partialMax.age ? s : partialMax
}, students[0]);

// Az első bicikliző indexe a tömbben
const firstCyclerIndex = students
    .findIndex((s) => s.hobbies.includes('Biciklizés'));

// ABC-rendben a 3. személy
const thirdPerson = students
    .sort((s1, s2) =>
        s1.name.localeCompare(s2.name))[2];

// Szeretnek LEGOzni
const likesLEGO = students
    .filter((s) => s.hobbies.find(hobby => hobby === 'LEGO'));

// Hobbik átlagos száma
const averageHobbyCount = students
    .reduce((partialSum, s) => partialSum + s.hobbies.length, 0) /
        students.length;

// Hobbik egyedi listája
const uniqueHobbies = [
    ...new Set(students
        .flatMap((s) => s.hobbies)
    )
];
// ['LEGO', 'Hangya', ...]
// [ ['LEGO'], ['..'], ...].flatten

// Egyedi keresztnevek
const uniqueNames = students
    .flatMap(s => {
        const nameSplit = s.name.split(' ');
        nameSplit.shift();
        return nameSplit;
    });

console.log(
    `Legalább 22 évesek:`,  atLeast22YearsOld,
    '\nAz egyetlen 20 év alatti személy:', under20,
    '\nMindenki 40 év alatti?', everyoneUnder40,
    '\nLegöregebb személy:', oldestPerson,
    '\nAz első bicikliző indexe a tömbben:', firstCyclerIndex,
    '\nABC-rendben a 3. személy:', thirdPerson,
    '\nSzeretnek LEGOzni: ', likesLEGO,
    '\nHobbik átlagos száma:', averageHobbyCount,
    '\nHobbik egyedi listája:', uniqueHobbies,
    '\nUnique names', uniqueNames,
);
