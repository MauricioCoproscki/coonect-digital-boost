<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers to handle JSON response
header('Content-Type: application/json');

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize form data
    $nome = isset($_POST['nome']) ? sanitize_input($_POST['nome']) : '';
    $empresa = isset($_POST['empresa']) ? sanitize_input($_POST['empresa']) : '';
    $email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
    $telefone = isset($_POST['telefone']) ? sanitize_input($_POST['telefone']) : '';
    $mensagem = isset($_POST['mensagem']) ? sanitize_input($_POST['mensagem']) : '';

    // Validate required fields
    if (empty($nome) || empty($empresa) || empty($email) || empty($telefone)) {
        echo json_encode([
            'success' => false,
            'message' => 'Por favor, preencha todos os campos obrigatórios.'
        ]);
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            'success' => false,
            'message' => 'Por favor, insira um endereço de e-mail válido.'
        ]);
        exit;
    }

    // Prepare email content
    $to = 'contato@coonect.com.br';
    $subject = 'Novo contato via formulário - ' . $empresa;
    
    $email_content = "Nome: $nome\n";
    $email_content .= "Empresa: $empresa\n";
    $email_content .= "E-mail: $email\n";
    $email_content .= "Telefone: $telefone\n\n";
    $email_content .= "Mensagem:\n$mensagem\n";

    // Set email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode([
            'success' => true,
            'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Desculpe, ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.'
        ]);
    }
} else {
    // If not POST request
    echo json_encode([
        'success' => false,
        'message' => 'Método de requisição inválido.'
    ]);
}
?> 