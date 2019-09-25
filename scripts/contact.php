<?php
   if($_POST) {
       $name = $_POST['name'];
       $email = $_POST['email'];
       $phone = $_POST['phone'];
       $date = $_POST['date'];
       $comments = $_POST['comments'];

        $subject = "New Message from KenzeramaProductions.com";
        $mailTo = "admin@theocodes.dev";
        $headers = "From: ".$email;
        $message = "You have received an email from ".$name.".\n\n"."Their wedding is on ".$date.".\n\n"."Phone Number: ".$phone."\n\n"."Message:\n\n".$comments;

       mail($mailTo, $subject, $message, $headers);
       header('Location:https://theocodes.dev/kenzeramaProductions/contact.html');
   }
?>