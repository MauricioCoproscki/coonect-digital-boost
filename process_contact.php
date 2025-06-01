<?php
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(0);

require 'vendor/autoload.php';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Configurações do servidor
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com'; // Servidor SMTP do Gmail
    $mail->SMTPAuth   = true;
    $mail->Username   = 'mauricio@coonect.com.br'; // Seu e-mail
    $mail->Password   = 'M@uricio1988'; // Sua senha de aplicativo do Gmail
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    // Adiciona debug para ajudar na identificação de problemas
    $mail->SMTPDebug = 2; // Habilita debug detalhado

    // Remetente e destinatário
    $mail->setFrom('mauricio@coonect.com.br', 'Site Coonect');
    $mail->addAddress('contato@coonect.com.br'); // Vai para você

    // Conteúdo
    $mail->isHTML(true);
    $mail->Subject = 'Novo contato via formulário';
    $mail->Body    = "
        <strong>Nome:</strong> {$_POST['nome']}<br>
        <strong>Empresa:</strong> {$_POST['empresa']}<br>
        <strong>Email:</strong> {$_POST['email']}<br>
        <strong>Telefone:</strong> {$_POST['telefone']}<br>
        <strong>Mensagem:</strong> {$_POST['mensagem']}
    ";

    $mail->AltBody = "Nome: {$_POST['nome']}\nEmpresa: {$_POST['empresa']}\nEmail: {$_POST['email']}\nTelefone: {$_POST['telefone']}\nMensagem: {$_POST['mensagem']}";

    $mail->send();
    echo json_encode([
        'success' => true,
        'message' => 'Mensagem enviada com sucesso!'
    ]);
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => "Erro ao enviar mensagem: {$mail->ErrorInfo}",
        'php_error' => $e->getMessage()
    ]);
}
?>
