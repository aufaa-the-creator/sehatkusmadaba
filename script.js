document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const backgrounds = document.querySelector('.backgrounds');
    const totalBackgrounds = document.querySelectorAll('.background').length;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalBackgrounds;
        backgrounds.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);

    // Teks untuk animasi mengetik
    const textArray = [
        "Pernah dengar? Minum cukup air putih setiap hari membantu tubuh tetap segar dan fokus, serta menjaga metabolisme tetap optimal.",
        "Mungkin belum banyak yang tahu, tapi olahraga ringan seperti berjalan kaki 30 menit sehari bisa mengurangi risiko penyakit jantung secara signifikan.",
        "Jangan anggap remeh! Tidur cukup itu penting karena bisa meningkatkan daya ingat dan suasana hati kita sehari-hari.",
        "Yang menarik adalah sarapan sehat tidak hanya memberi energi, tapi juga membantu menjaga kadar gula darah agar tetap stabil sepanjang hari.",
        "Sudah tahu belum? Sering tertawa ternyata bisa menurunkan kadar stres dan meningkatkan daya tahan tubuh.",
        "Faktanya, konsumsi sayuran hijau setiap hari dapat membantu meningkatkan kekebalan tubuh dan menjaga kesehatan pencernaan.",
        "Menarik untuk dicatat, kebiasaan sederhana seperti mencuci tangan sebelum makan bisa mengurangi risiko infeksi dan menjaga kesehatan secara keseluruhan.",
        "Penting sekali untuk diingat: Meluangkan waktu untuk relaksasi dan hobi dapat membantu kita menjaga kesehatan mental dan mengurangi stres.",
        "Perlu kamu ketahui, mengurangi konsumsi makanan olahan dapat meningkatkan kesehatan jantung dan membantu mengontrol berat badan.",
        "Tahukah kamu? Menghirup udara segar dan melakukan aktivitas luar ruangan terbukti baik untuk kesehatan paru-paru dan meningkatkan mood."
    ];

    let typingElement = document.getElementById('typing-text');
    let typingSpeed = 100; // Waktu untuk mengetik per karakter (ms)
    let delayBetweenTexts = 3000; // Waktu delay antar teks (ms)
    let fadeOutDuration = 1000; // Durasi fade-out (ms)
    let index = 0;

    function typeText() {
        let text = textArray[index];
        typingElement.textContent = '';
        typingElement.style.width = 'auto'; // Reset width before typing
        typingElement.style.whiteSpace = 'normal'; // Allow line breaks

        let i = 0;

        // Start typing animation
        let typingInterval = setInterval(() => {
            typingElement.textContent += text.charAt(i);
            i++;
            if (i === text.length) {
                clearInterval(typingInterval);
                setTimeout(fadeOutText, delayBetweenTexts); // Start fade-out after typing
            }
        }, typingSpeed);
    }

    function fadeOutText() {
        typingElement.classList.add('hidden'); // Apply fade-out
        setTimeout(() => {
            index = (index + 1) % textArray.length; // Loop back to the first text
            typingElement.classList.remove('hidden'); // Remove fade-out effect
            typeText(); // Start typing the next text
        }, fadeOutDuration);
    }

    typeText(); // Initial typing
});