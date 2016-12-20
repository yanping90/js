<?php
header("Content-type: application/json; charset=UTF-8");
echo json_encode($_REQUEST, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);
