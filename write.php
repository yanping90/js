<?php

error_reporting(7);

$filename = __DIR__ . "/files/" . trim($_REQUEST['filename']);
$content = trim($_REQUEST['content']);

@mkdir(dirname($filename), 0777, true);

$result = [
    "code" => 0,
    "data" => [
        "file" => $filename,
    ],
];

if ($filename) {
    if (! $result["data"]["length"] = @file_put_contents($filename, $content)) {
        $result["code"] = 1;
    }
}
echo json_encode($result);