document.addEventListener('DOMContentLoaded', function(e) {

    checkWhichKeyPressed = (event) => {

        let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        let button = document.querySelector(`div[data-key="${event.keyCode}"]`);
        button.classList.add('playing');
    }
    
    removeClass = (event) => {
       if (event.propertyName !== 'transform') return;
        let buttonClicked = event.target;
        buttonClicked.classList.remove('playing');
    }
    
    
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => 
        key.addEventListener('transitionend', removeClass));
    
    window.addEventListener('keydown', checkWhichKeyPressed);
    
})