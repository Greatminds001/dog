<?php
    if(isset($_POST['send_data'])) {
        $name = $_POST['fname'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $emailSendMessage = $_POST['message'];

        // Content-Type helps email client to parse file as HTML 
        // therefore retaining styles

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $emailSendMessage = $_POST['msg'];
        $message = "<html><head><title>Welcome To Our Shop from our online website contact form</title><head><body><h1>" . $subject . "</h1> <p>".$emailSendMessage."</p></body></html>";
        if(mail('website_owner@domain.com', $subject, $message, $headers)) {
            echo "Send Successfully, Good Luck Email";
        } else {
            echo "Sorry, something went wrong! Try again!";
        }
    }
?>
