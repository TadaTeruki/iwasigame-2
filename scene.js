
var scene = "";

function startTitleScene(){
    scene = "title";
    setTitleSceneLabel();
}

function startGameScene(){
    audio_table["audio/ready.mp3"].currentTime = 0;
    audio_table["audio/ready.mp3"].play();
    audio_table["audio/battle02.mp3"].currentTime = 0;
    audio_table["audio/battle02.mp3"].play();
    audio_table["audio/battle02.mp3"].loop = true;
    scene = "game";
    initGame();
    setGameSceneLabel();
}

function startResultScene(){
    audio_table["audio/result.mp3"].currentTime = 0;
    audio_table["audio/result.mp3"].play();

    scene = "result";
    setResultSceneLabel();
}