<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);

    //от кого письмо
    $mail->setFrom('amanrahim2@gmail.com', 'Аман Берикович');
    // кому отправить
    $mail->addAddress('amanrahim2@gmail.com');
    // Тема письма
    $mail->Subject = 'Привет! Это сообщение из формы!';

    //Тело письма
    $body = '<h1>Данные из формы доставоены!</h1>';

    if(trim(!empty($_post['name']))) {
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_post['phone']))) {
        $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
    }
    if(trim(!empty($_post['email']))) {
        $body.='<p><strong>Почта:</strong> '.$_POST['email'].'</p>';
    }

    // $mail->Body = $body;


    //Отправляем

    if (!$mail->send()) {
        $message = 'проблема';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response)

    // $name = $_POST['name'];
    // $phone = $_POST['phone'];
    // $email = $_POST['email'];

    // $to = "amanrahim2@gmail.com";
    // $date = date("d.m.Y");
    // $time = date("h:i");
    // $from = $email;
    // $subject = "заявка с сайта";

    // $msg="
    // Имя: $name /n
    // Телефон: $phone n/
    // Почта: $email"; 
    // mail($to, $subject, $msg, "From: $from");
    
?>