document.addEventListener('DOMContentLoaded', function(e) {
    
//    keybord buttons
    
    const keyA = document.getElementById('65');
    const keyS = document.getElementById('83');
    const keyD = document.getElementById('68');
    const keyF = document.getElementById('70');
    const keyG = document.getElementById('71');
    const keyH = document.getElementById('72');
    const keyJ = document.getElementById('74');
    const keyK = document.getElementById('75');
    const keyL = document.getElementById('76');
    
    checkWhichKeyPressed = (event) => {
//        if (event.keyCode == '65') {
//            console.log(keyA);
//        } else if (event.keyCode == '83') {
//            console.log(keyS);
//        } else if (event.keyCode == '68') {
//            console.log(keyD);
//        } else if (event.keyCode == '70') {
//            console.log(keyF);
//        } else if (event.keyCode == '71') {
//            console.log(keyG);
//        } else if (event.keyCode == '72') {
//            console.log(keyH);
//        } else if (event.keyCode == '74') {
//            console.log(keyJ);
//        } else if (event.keyCode == '75') {
//            console.log(keyK);
//        } else if (event.keyCode == '76') {
//            console.log(keyL);
//        }
        console.log(event.keyCode)
    }
    
    
    window.addEventListener('keydown', checkWhichKeyPressed);
    
})