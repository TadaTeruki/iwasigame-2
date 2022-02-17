
var scene = "";

function startTitleScene(){
    scene = "title";
    setTitleSceneLabel();
}

function startGameScene(){
    scene = "game";
    initGame();
    setGameSceneLabel();
}

function startResultScene(){
    scene = "result";
    setResultSceneLabel();
}