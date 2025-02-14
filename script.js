function sendMessage() {
    const messageElement = document.getElementById('message');
    const messages = [
        "Ну чо когда вернёшь деньги",
        "пук пук ",
        "Гострі Картузи, Шелбі Іваннка Олександрівна - головний картуз Херсонської області",
        "1918 год, Смольный, в кабинете Ленина, Горький сосет у вождя мирового пролетариата.Ленин, прищурясь, гладит Горького по голове и шепчет -И кто-же назвал тебя горьким, Сладенький ты мой.",
        "Я люблю тебя"
        
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
}
