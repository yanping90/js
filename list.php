<?php

error_reporting(7);

$files = glob("files/*");

echo json_encode([
    "code" => 0,
    "data" => [
        "files" => array_map(function($v){return substr($v, 6);},$files),
    ]
]);