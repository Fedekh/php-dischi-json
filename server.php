<?php

$string_value = file_get_contents('./dischi.json');
$dischi_array = json_decode($string_value, true);

// Mi creo un filtro back-end

if (isset($_GET['choise'])) {
    $results = [
        "results" => $dischi_array[$_GET['choise']],
        "success" => true
    ];
}else{
    $results = [
        "results" => $dischi_array,
        "success" => true
    ];

}


header('Content-Type: application/json');
echo json_encode($results);
