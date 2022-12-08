<?php
$to      = 'alexandra.bosquee.16578@stu.he-ferrer.eu';
$subject = 'mail_ok';
$message = 'hello';
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);


?>
