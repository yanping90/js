<?php

error_reporting(7);

$filename = __DIR__ . "/files/" . trim($_REQUEST['filename']);

$result = [
    "code" => 0,
    "data" => [
        "file" => $filename,
    ],
];


if (! is_file($filename)) {
    $result["code"] = 2;
} else {
    $result["data"]["content"] = @file_get_contents($filename);
}

header("Content-type: application/json; charset=UTF-8");

echo json_encode($result);