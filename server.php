<?php

$string_value = file_get_contents('./dischi.json');
// var_dump($string_value);
$dischi_array = json_decode($string_value, true);
// var_dump($dischi_array);


// Preparazione della risposta
$results = [
    "results" => $dischi_array,
    "success" => true
];

header('Content-Type: application/json');
echo json_encode($results);