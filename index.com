<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Night Dream</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="stars"></div>
<div class="container">
    <div class="moon"></div>
    <h1>🌙 Selamat Malam Liaa Cantikk🤍</h1>
    <p>
        Semoga malam ini membawa ketenangan,
        jangan lupain aku yaa...
    </p>
    <button id="btn">✨ Buka Pesan</button>
</div>
<div id="popup" class="popup">
    <div class="card">
        <h2>💙 Untuk Kamu Liaa</h2>
        <p>
            Tetap semangat ya...
            Jangan menyerah walaupun hari ini berat.
            Besok pasti akan lebih baik.
        </p>
        <button onclick="closePopup()">Tutup</button>
    </div>
</div>
<script src="script.js"></script>
</body>
</html>
