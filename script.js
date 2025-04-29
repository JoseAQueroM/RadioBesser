document.addEventListener('DOMContentLoaded', function() {
    // Control del reproductor
    const audio = document.getElementById('radioStream');
    const playButton = document.getElementById('playButton');
    const volumeControl = document.getElementById('volumeControl');
    const visualizerBars = document.querySelectorAll('.visualizer-bar');
    
    // Controlar el botón de play/pause
    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
            startVisualizer();
        } else {
            audio.pause();
            playButton.innerHTML = '<i class="fas fa-play"></i>';
            stopVisualizer();
        }
    });
    
    // Controlar el volumen
    volumeControl.addEventListener('input', function() {
        audio.volume = this.value;
    });
    
    // Actualizar la canción/programa actual
    function updateNowPlaying() {
        const programas = [
            "Matutino Empresarial",
            "Música para Trabajar",
            "Entrevistas del Mediodía",
            "Revista Vespertina",
            "Música Relajante"
        ];
        const ahora = new Date().getHours();
        let programaActual;
        
        if (ahora >= 7 && ahora < 10) programaActual = programas[0];
        else if (ahora >= 10 && ahora < 12) programaActual = programas[1];
        else if (ahora >= 12 && ahora < 14) programaActual = programas[2];
        else if (ahora >= 16 && ahora < 18) programaActual = programas[3];
        else programaActual = programas[4];
        
        document.getElementById('currentSong').textContent = `Transmitiendo: bla bla`;
    }
    
    // Visualizador de audio (simulado)
    let visualizerInterval;
    
    function startVisualizer() {
        visualizerInterval = setInterval(() => {
            visualizerBars.forEach(bar => {
                const randomHeight = Math.floor(Math.random() * 80) + 20;
                bar.style.height = `${randomHeight}px`;
            });
        }, 200);
    }
    
    function stopVisualizer() {
        clearInterval(visualizerInterval);
        visualizerBars.forEach(bar => {
            bar.style.height = '20px';
        });
    }
    
    // Inicializar
    updateNowPlaying();
    setInterval(updateNowPlaying, 60000); // Actualizar cada minuto
    
    // Inicializar volumen
    audio.volume = volumeControl.value;
});