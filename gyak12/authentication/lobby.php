<?php

if (!empty($_POST) && isset($_POST['logout'])) {
    session_start();
    unset($_SESSION['user']);
    session_destroy();
    header('Location: login.php');
}

?>

<link rel="stylesheet" href="style.css">

Authenticated as:
<?php
session_start();
print_r($_SESSION['user']);
?>

<button>User button</button>

<?php if(in_array('admin', $_SESSION['user']['roles'])): ?>
<button>Admin button</button>
<?php endif; ?>

<form action="" method="post">
    <input name="logout" hidden />
    <button type="submit">Logout</button>
</form>
