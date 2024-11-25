<?php

$game_developers = [
    "Asobi",
    "ATLUS",
    "Bloober Team",
    "Croteam",
    "GSC Game World",
    "LocalThunk",
    "Ryu Ga Gotoku Studio",
    "Square Enix",
    "Supergiant Games",
    "Ubisoft",
    "Valve"
];


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP ZH</title>
    <link rel="stylesheet" href="zh2.css">
</head>

<body>
    <div id="content">
        <div>
            <h2>Lista</h2>
            <h3>
                Átlagos értékelés:
                <!-- #2 -->
                <span id="average_rating">3.625</span>
            </h3>

            <table id="game_list">
                <thead>
                    <tr>
                        <th>Cím</th>
                        <th>Fejlesztő</th>
                        <th>Értékelés</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <!-- #3 -->
                    <tr class="game">
                        <td>
                            Final Fantasy VII: Rebirth
                        </td>
                        <td>
                            Square Enix
                        </td>
                        <td class="star">
                            <img alt="star" src="./icons/star.svg" />
                            <img alt="star" src="./icons/star.svg" />
                            <img alt="star" src="./icons/star.svg" />
                            <img alt="star" src="./icons/star.svg" />
                            <img alt="star" src="./icons/star.svg" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Új játék felvétele</h2>
        <!-- #4 -->
        <form novalidate method="POST">
            <!-- #7 -->
            <div class="input">
                <label for="name">Címe</label>
                <input type="text" name="title" id="title" placeholder="Half-Life Xen">
                <!-- #5 -->
            </div>
            <div class="input">
                <label for="game">Fejlesztő</label>
                <!-- #1 -->
                <select name="developer" id="developers" multiple>
                    <option value="Valve">Valve</option>
                </select>
            </div>
            <div class="input">
                <label for="desc">Értékelés</label>
                <input type="number" name="rating" id="rating" placeholder="5">
                <!-- #6 -->
            </div>
            <div class="input">
                <button type="submit">Hozzáadás</button>
            </div>
        </form>
    </div>
</body>

</html>
