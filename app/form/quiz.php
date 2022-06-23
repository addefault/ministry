<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language/');
$mail->IsHTML(true);

$mail->setFrom('info@ministry.realty', 'Заявка с квиза');
$mail->AddAddress('info@ministry.realty');


$mail->Subject = 'Заявка с квиза';

$body = '<h1>Заявка с квиза </h1>';

if (trim(!empty($_POST['name']))) {
    $body .= '<p><b>Имя:</b> ' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['phone']))) {
    $body .= '<p><b>Номер телефона:</b> ' . $_POST['phone'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
    $body .= '<p><b>Email:</b> ' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['type']))) {
    $body .= '<p><b>Вид услуги:</b> ' . $_POST['type'] . '</p>';
}
if (trim(!empty($_POST['details']))) {
    $body .= '<p><b>Подробности:</b> ' . $_POST['details'] . '</p>';
}
if (trim(!empty($_POST['result']))) {
    $body .= '<p><b>Стоимость услуг:</b> ' . $_POST['result'] . '</p>';
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
