<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 6</title>
    <link rel="stylesheet" href="src/index.css">
    <link rel="stylesheet" href="src/task.css">
</head>

<body>
    <header>
        <h1>6. Poggyász / Luggage</h1>
    </header>

    <div id="content">
        <div id="grid">
            <div>
                <h2>Új bőrönd / New bag</h2>
                <form action="" method="post" novalidate>
                    <div class="input">
                        <label for="name">Név / Name</label>
                        <input type="text" name="name" id="name" placeholder="Bőrönd neve / Bag name">
                    </div>
                    <div class="input">
                        <label for="capacity">Kapacitás / Capacity</label>
                        <input type="number" name="capacity" id="capacity" placeholder="Kapacitás / Capacity">
                    </div>
                    <div class="input">
                        <button type="submit">Save / Mentés</button>
                    </div>
                </form>
            </div>
            <div>
                <h2>Új tárgy / New item</h2>
                <form action="" method="post" novalidate>
                    <div class="input">
                        <label for="name">Név / Name</label>
                        <input type="text" name="name" id="name" placeholder="Tárgy neve / Item name">
                    </div>
                    <div class="input">
                        <label for="size">Size / Méret</label>
                        <input type="number" name="size" id="size" placeholder="Size / Méret">
                    </div>
                    <div class="input">
                        <label for="bag">Bag / Bőrönd</label>
                        <select name="bag" id="bag">
                        </select>
                    </div>
                    <div class="input">
                        <button type="submit">Save / Mentés</button>
                    </div>
                </form>
            </div>
        </div>

        <h2>Tartalom / Contents</h2>
    </div>
</body>

</html>