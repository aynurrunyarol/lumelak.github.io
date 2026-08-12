const audio = document.getElementById("bg-music");

audio.volume = 0.2;
audio.loop = true;

audio.play();

// Restaurar tiempo
const savedTime = localStorage.getItem("audio-time");
if (savedTime) {
    audio.currentTime = parseFloat(savedTime);
}

// Guardar progreso
setInterval(() => {
    localStorage.setItem("audio-time", audio.currentTime);
}, 1000);

window.addEventListener("beforeunload", () => {
    localStorage.setItem("audio-time", audio.currentTime);
});

// 🔥 BLOQUEO REAL DEL NAVEGADOR → solo se desbloquea con interacción real
function startAudio() {
    audio.play()
        .then(() => {
            console.log("Audio iniciado correctamente");
        })
        .catch(err => {
            console.log("Sigue bloqueado:", err);
        });
}

// 👇 ESTE es el punto clave: primer gesto real del usuario
document.addEventListener("click", startAudio, { once: true });
document.addEventListener("keydown", startAudio, { once: true });