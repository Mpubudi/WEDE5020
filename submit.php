<?php
// EcoReach Youth Foundation form handler.
// For a live website, protect this endpoint and configure secure email/database storage.
if ($_SERVER["REQUEST_METHOD"] !== "POST") { header("Location: index.html"); exit; }

function clean($value) { return trim(strip_tags($value ?? "")); }
$formType = clean($_POST["form_type"] ?? "Website Submission");
$name = clean($_POST["full_name"] ?? "");
$email = filter_var($_POST["email"] ?? "", FILTER_VALIDATE_EMAIL);
if ($name === "" || !$email) { http_response_code(400); echo "Please provide a valid name and email address."; exit; }

$fields = ["form_type","full_name","email","phone","organisation","school_organisation","interest","area_of_interest","availability","message"];
$row = [];
foreach ($fields as $field) { $row[$field] = clean($_POST[$field] ?? ""); }
$row["submitted_at"] = date("Y-m-d H:i:s");

$file = __DIR__ . "/submissions.csv";
$newFile = !file_exists($file);
$handle = fopen($file, "a");
if ($newFile) { fputcsv($handle, array_keys($row)); }
fputcsv($handle, $row);
fclose($handle);
?>
<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Thank You | EcoReach Youth Foundation</title><link rel="stylesheet" href="assets/css/main.css"></head><body><main class="eco-page"><section class="eco-section form-section"><p class="eyebrow">SUBMISSION RECEIVED</p><h1>Thank you!</h1><p>Your information has been submitted successfully to EcoReach Youth Foundation. We will review your submission and get back to you using the contact details you provided.</p><a href="index.html"><button>Return to Home</button></a></section></main></body></html>
