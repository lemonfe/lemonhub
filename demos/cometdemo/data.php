<?php
header("Content-type:application/json;charset=utf-8");
header("Cache-Control:max-age=0"); // 因为要实时返回数据，所以这里不是用缓存

$i = 0;
while ($i < 9) {
	# code...
	$i ++;
	sleep(1);
	$random = rand(1,999);
	echo $random;
	echo "\n";
	ob_flush(); // 释放buffer中的数据
	flush(); // 把释放出来的数据发送给
}

// sleep(1);
// $res = array('success' => 'ok', 'test' => '我是测试的一段代码');
// echo json_encode($res);
?>