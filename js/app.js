document.addEventListener('DOMContentLoaded', function(e) {

    checkWhichKeyPressed = (event) => {

        let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        let button = document.querySelector(`div[data-key="${event.keyCode}"]`);
        console.log(button)
        button.classList.add('playing');
    }
    
    
    window.addEventListener('keydown', checkWhichKeyPressed);
    
})