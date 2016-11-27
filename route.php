<?php
$uri = $_SERVER['REQUEST_URI'];
$path = pathinfo($_SERVER["SCRIPT_FILENAME"]);
$file = $path['dirname'].DIRECTORY_SEPARATOR.$path['basename'];
if ($file != __FILE__ && is_file($file) && substr($uri, -1) != "/") {
    return false;
} else {
    if (substr($uri, -1) == "/" && is_dir(__DIR__ . $uri)) {
        $dir = __DIR__ . rtrim($uri, "/");
    } else {
        $dir = is_dir(__DIR__ . dirname($uri)) ? __DIR__ . dirname($uri) : __DIR__ ;
    }
    $files = glob($dir . DIRECTORY_SEPARATOR . "*", GLOB_MARK );
    $files = array_map(function($v){
        return str_replace([__DIR__, "\\"], ["", "/"], $v);
    }, $files);
    usort($files, function($f){
        return substr($f, -1) == "/" ? -1 : 1;
    });
    print "<pre style='line-height:1.5'>\n";
    print "<a href=\"..\">..</a>\n";
    foreach ($files as $f) printf("<a href=\"%s\">%s</a>\n", $f, $f);
}