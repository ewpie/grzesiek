<?php
// Formularz kontaktowy: wysyła wiadomość ze strony do Grzegorza.
// Działa tylko na hostingu z PHP (jchost), na GitHub Pages i lokalnie nie.
header('Content-Type: application/json; charset=utf-8');

// Adres odbiorcy zakodowany jak w ContactEmail.jsx – repo jest publiczne, a GitHub Pages pokazuje ten plik jako tekst.
define('TO', base64_decode('Z3IucGlla2Fyc2tpQGdtYWlsLmNvbQ=='));
const FROM = 'formularz@gpiekarski.com';
const MIN_SECONDS = 3;

function respond($status, $ok) {
    http_response_code($status);
    echo json_encode(['ok' => $ok]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false);
}

$name = trim(str_replace(["\r", "\n"], ' ', $_POST['name'] ?? ''));
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');
$honeypot = $_POST['website'] ?? '';
$elapsed = (int)($_POST['elapsed'] ?? 0);

// Bot: wypełnił ukryte pole albo wysłał szybciej niż człowiek. Udajemy sukces, nic nie wysyłamy.
if ($honeypot !== '' || $elapsed < MIN_SECONDS) {
    respond(200, true);
}

if ($name === '' || mb_strlen($name) > 100
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || $message === '' || mb_strlen($message) > 5000) {
    respond(400, false);
}

$subject = '=?UTF-8?B?' . base64_encode("Wiadomość ze strony gpiekarski.com – $name") . '?=';
$body = "Od: $name <$email>\n\n$message\n";
$headers = implode("\r\n", [
    'From: =?UTF-8?B?' . base64_encode('Formularz gpiekarski.com') . '?= <' . FROM . '>',
    "Reply-To: $email",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

if (!mail(TO, $subject, $body, $headers, '-f' . FROM)) {
    respond(500, false);
}

respond(200, true);
