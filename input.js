
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
    if(e.key == "2"  || e.key == "Down"  || e.key == "ArrowDown") {
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
    }
    if(e.key == "1") {
        recover_called = false;
    }
    if(e.key == "2"  || e.key == "Down"  || e.key == "ArrowDown") {
        meteo_called = false;
    }
    if(e.key == "Enter") {
        enterpressed = false;
    }
}

