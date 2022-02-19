
var scene = "";

function startTitleScene(){
    scene = "title";
    setTitleSceneLabel();
}

function startGameScene(){
    audio_table["audio/ready.mp3"].currentTime = 0;
    audio_table["audio/ready.mp3"].play();
    scene = "game";
    initGame();
    setGameSceneLabel();
}

function startResultScene(){
    scene = "result";
    setResultSceneLabel();
}