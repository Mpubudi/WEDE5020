<?php
// EcoReach Youth Foundation form handler for coursework demonstration.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit;
}

function clean($value) {
    return trim(strip_tags((string)($value ?? '')));
}

$name = clean($_POST['full_name'] ?? '');
$emailRaw = clean($_POST['email'] ?? '');
$email = filter_var($emailRaw, FILTER_VALIDATE_EMAIL);

if ($name === '' || !$email) {
    http_response_code(400);
    echo 'Please provide a valid name and email address.';
    exit;
}

$fields = ['form_type','full_name','email','phone','organisation','school_organisation','interest','area_of_interest','availability','message'];
$row = [];
foreach ($fields as $field) {
    $row[$field] = clean($_POST[$field] ?? '');
}
$row['submitted_at'] = date('Y-m-d H:i:s');

$file = __DIR__ . '/submissions.csv';
$handle = fopen($file, 'a');
if ($handle === false) {
    http_response_code(500);
    echo 'The form could not be saved. Please try again later.';
    exit;
}

if (filesize($file) === 0) {
    fputcsv($handle, array_keys($row));
}
fputcsv($handle, $row);
fclose($handle);
?>
<!doctype html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Thank You | EcoReach Youth Foundation</title><link rel="stylesheet" href="assets/css/main.css"></head>
<body>
<main class="eco-page"><section class="eco-section form-section"><p class="eyebrow">SUBMISSION RECEIVED</p><h1>Thank you!</h1><p>Your information has been submitted successfully. EcoReach Youth Foundation can review your submission and respond using the contact details provided.</p><a class="button" href="index.html">Return to Home</a></section></main>
</body></html>
