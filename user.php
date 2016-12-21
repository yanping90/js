<?php
date_default_timezone_set('Asia/Shanghai');
/**
 *
 *  获取用户
 *  接口：GET /user.php
 *  参数:
 *      - username
 *
 *  添加用户
 *  接口: POST /user.php
 *  参数:
 *      - action=add
 *      - username
 *
 *  删除用户
 *  接口：POST /user.php
 *  参数:
 *      - action=delete
 *      - username
 */

function v($v) {
    return isset($_REQUEST[$v]) ? trim($_REQUEST[$v]) : '';
}

function out($code = 0, $message = '', $data = []) {
    header("Content-type: application/json; charset=UTF-8");
    echo json_encode(compact('code', 'message', 'data'), JSON_UNESCAPED_UNICODE); exit;
}

$storage = __DIR__ . '/users.json';
!isset($_REQUEST['username']) and out(1, '缺少参数 username');
!strlen(v('username')) and out(2, '无效参数 username');

$users = is_file($storage) ? (array)json_decode(file_get_contents($storage), true) : [];

switch (v('action')) {
    case 'add':
        isset($users[v('username')]) and out(3, '用户已存在');
        $users[v('username')] = date("Y-m-d H:i:s");
        file_put_contents($storage, json_encode($users));
        out(0, '用户添加成功');
        break;

    case 'delete':
        !isset($users[v('username')]) and out(3, '不存在的用户');
        unset($users[v('username')]);
        file_put_contents($storage, json_encode($users));
        out(0, '用户删除成功');
        break;

    default:
        isset($users[v('username')])
            ? out(0, 'OK', ['username' => v('username'), 'datetime' => $users[v('username')]])
            : out(4, '找不到用户');
}

