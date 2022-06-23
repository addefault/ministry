<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language/');
$mail->IsHTML(true);

$mail->setFrom('info@ministry.realty', 'Заявка с сайта');
$mail->AddAddress('info@ministry.realty');


$mail->Subject = 'Заявка с сайта';

$body = '<h1>Заявка с сайта </h1>';

if (trim(!empty($_POST['name']))) {
    $body .= '<p><b>Имя:</b> ' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['phone']))) {
    $body .= '<p><b>Номер телефона:</b> ' . $_POST['phone'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
    $body .= '<p><b>Email:</b> ' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['question']))) {
    $body .= '<p><b>Вопрос:</b> ' . $_POST['question'] . '</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = false;
} else {
    $message = true;
}
$response = ['message' => $message];

header('Content-type: application/json');

echo json_encode($response);
