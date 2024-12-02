<?php

class UserStorage {

    // @note The password is password
    function findUser($username, $password): array {
        $users = $this->getUsers();
        return array_filter($users, fn($user) =>
            $user['username'] === $username &&
            $user['password'] === md5($password)
        );
    }

    function getUsers(): array {
        return json_decode(file_get_contents('users.json'), true);
    }
}

$userStorage = new UserStorage();

$user = $userStorage->findUser($_POST['username'], $_POST['password']);

if (count($user) === 1) {
    session_start();
    $_SESSION['user'] = array_shift($user);
    header('Location: lobby.php');
    exit();
} else {
    header('Location: login.php');
}


