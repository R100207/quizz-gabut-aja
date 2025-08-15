let currentSlide = 1;
const totalSlides = 8;

function playClickSound() {
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
}

function showSlide(num) {
    playClickSound();
    let currentEl = document.getElementById(`slide${currentSlide}`);
    let nextEl = document.getElementById(`slide${num}`);
    currentEl.classList.remove('active');
    currentEl.classList.add('fade-out');
    setTimeout(() => {
        currentEl.classList.remove('fade-out');
        document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));
        nextEl.classList.add('active');
        currentSlide = num;
        handleAudio();
        if (num === 6) {
            typePoem();
        }
    }, 300);
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        showSlide(currentSlide + 1);
    }
}

function handleAudio() {
    const audio1 = document.getElementById("audio1");
    const audio2 = document.getElementById("audio2");
    if (currentSlide >= 1 && currentSlide <= 5) {
        audio2.pause();
        audio1.play();
    } else if (currentSlide >= 6 && currentSlide <= 7) {
        audio1.pause();
        audio2.play();
    } else {
        audio1.pause();
        audio2.pause();
    }
}

function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function typePoem() {
    const poemElement = document.getElementById("poemText");
    const text = `kamu memiliki mata seindah langit sore,\nmenatapku—tenang tapi berdentum di dada.\nSenyummu manis, tak perlu bicara,\ncukup untuk membuat dunia lupa kecewa.\n\nKau bukan sekadar cantik rupa,\nkau adalah alasan hati berbunga.
\nJujur saja aku telah jatuh hati padamu\nkamu suka Bpk Habibie dan Prabroro\naku memang tidak bisa jadi seperti itu\ntapi aku bisa menjadi Rangga\npria yang akan selalu ada untukmu.
\n`;
    poemElement.textContent = "";
    let i = 0;
    function typing() {
        if (i < text.length) {
            poemElement.textContent += text.charAt(i);
            i++;
            setTimeout(typing, 60);
        }
    }
    typing();
}

showSlide(1);
