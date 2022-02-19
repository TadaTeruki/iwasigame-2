
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightpressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftpressed = true;
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        uppressed = true;
    }
    if(e.key == "1") {
        recover_called = true;
    }
    if(e.key == "2") {
        meteo_called = true;
    }
    if(e.key == "Enter") {
        enterpressed = true;
    }
    
}
    
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightpressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftpressed = false;
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        uppressed = false;
        upreleased = true;
    }
    if(e.key == "1") {
        recover_called = false;
    }
    if(e.key == "2") {
        meteo_called = false;
    }
    if(e.key == "p"){
        pause = !pause;
        if(pause){
            setAnnounce("PAUSE", "Press key [p] to resume");
        } else {
            setAnnounce("Good luck!", "", 50);
        }
    }
    if(e.key == "Enter") {
        if(scene != "title"){
            enterpressed = false;
        }
    }
}

