document.addEventListener('DOMContentLoaded', () => {
    const radioSelect = document.getElementById('radioSelect');
    const audioPlayer = document.getElementById('audioPlayer');

    // Atualiza o player com o link da rádio selecionada
    radioSelect.addEventListener('change', (event) => {
        const radioUrl = event.target.value;
        if (radioUrl) {
            audioPlayer.src = radioUrl;
            audioPlayer.play();
        }
    });
});
