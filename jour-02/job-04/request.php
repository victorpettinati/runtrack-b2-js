<?php
function my_insert_student($email, $fullname, $gender, $grade, $birthdate) {
    // Insérer l'étudiant en base de données ici
    // Assurez-vous de sécuriser votre code contre les injections SQL
    // Vous devez remplacer cette partie par votre propre code d'insertion

    // Supposons que l'insertion a réussi
    return true;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $fullname = $_POST['fullname'];
    $gender = $_POST['gender'];
    $grade = $_POST['grade'];
    $birthdate = $_POST['birthdate'];

    $success = my_insert_student($email, $fullname, $gender, $grade, $birthdate);

    $response = ["success" => $success];
    echo json_encode($response);
}
?>
