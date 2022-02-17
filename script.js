
window.onload = function(){

    game_screen.width = 480;
    game_screen.height = 640;
    startTitleScene()

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    loop();
    
}

function loop(){

    switch(scene){
        case "title":
            titleLoop();
            setTimeout(loop, 50); 
            break;
        case "game":
            gameLoop();
            setTimeout(loop, 10);  
            break;
        case "result":
            resultLoop();
            setTimeout(loop, 50);
    }
}

function startGameToPressEnter(){
    if(enterpressed == true){
        enterpressed = false;
        startGameScene();
        setAnnounce("Ready?", "Destroy them all!", 400);
        wait = 100;
    }
}

function resultLoop() {
    drawLabel();
    startGameToPressEnter();
}

function titleLoop() {
    drawLabel();
    startGameToPressEnter();

}

function gameLoop() {    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLabel();
    drawBullets();
    drawPaddle();
    drawblocks();
    drawMagics();
    drawBoss();
    processMagics();
    drawAbility();
    updateGameSceneLabel();
  
    //paddle
    
    for(var i = 0; i<num_of_bullets; i++){
        
        if(bullet[i].x + bullet[i].dx > game_screen.width-bullet[i].radius || bullet[i].x + bullet[i].dx < 0) {
            bullet[i].dx = -bullet[i].dx;
        }

        if(bullet[i].y < 0) {
            bullet[i].dy = 0;
            bullet[i].y = paddle.y;

        }

        if(bullet[i].dy == 0){
            bullet[i].x = paddle.x+15;
        }
    }

    if(uppressed == true){
        if(game.mp > 0){
            bullet[bullet_ad].dy = bullet_speed;
            game.mp--;
            bullet_ad ++;
            if(bullet_ad >= num_of_bullets){
                bullet_ad = 0;
            }
            uppressed = false;
        } else {
            setAnnounce("Recover your MP","", 100);
        }

    }
    
    
    // キー関係
    
    if(rightpressed && paddle.x < game_screen.width-paddle.width) {
        paddle.x += 3-down;
    } else if(leftpressed && paddle.x > 0) {
        paddle.x -= 3-down;
    }

    for(var i = 0; i<num_of_bullets; i++){
        bullet[i].x += bullet[i].dx;
        bullet[i].y += bullet[i].dy;
    }

    if(absa == 40) {
        abya -= 7;
    }

    //ゲーム終了処理
    
    if(game.hp < 1) {
        setAnnounce("Game Over", "You lose");
        paddle.x += paddle.width*(1-0.9)/2;
        paddle.width *= 0.9;
        for(var i = 0; i<num_of_bullets; i++){
            bullet[i].radius *= 0.9;
        }

        for(var i = 0; i<num_of_enemies; i++){
            enemy[i].dx *= 0.9;
            enemy[i].dy *= 0.9;
        }

        if(gameover == false){
            wait = 300;
            gameover = true;
        }
        

    }
    if(boss.hp < 1) {
        setAnnounce("Congulatuations!", "You defeat all enemies");
        if(gameclear == false){
            wait = 300;
            gameclear = true;
        }
    }

    if(gameover || gameclear){
        magictime = 0;
    }
    

    if(wait > 0){
        wait--;
        return;
    }

    // ----------------------------

    if(gameover || gameclear){
        startResultScene();
    }
    
    magictime += 1;
    timeend += 1;

    for(var i = 0; i<num_of_enemies; i++){
        enemy[i].apy = enemy[i].apy*0.95;    
    }

    
    if(boss_flag == 0) {
        mainPhase();
    }

    if(boss_flag == 1) {
        bossPhase();
    }
    
    //ボス戦
    if(score == max_normal_score) {
        wait = 100;
        boss_flag = 1;

        boss.width = 60;
        boss.height = 50;
        boss.x = game_screen.width/2-boss.width/2;
        boss.y = 150;
        score += 20;
        magictime = -wait;
        setAnnounce("Warning", "", 300, 100);
        for(var i = 0; i<num_of_enemies; i++){
            enemy[i].width = 0;
        }
    }
    


    for(var i = 0; i<num_of_magics; i++){
        if(magic[i].x + magic[i].radius > paddle.x+paddle.width/2 &&
           magic[i].x - magic[i].radius < paddle.x+paddle.width/2 &&
           magic[i].y + magic[i].radius > paddle.y+paddle.height/2 &&
           magic[i].y - magic[i].radius < paddle.y+paddle.height/2){
            game.hp -= magic[i].damage;
            game.hp += def;
        }
    }
    
    //アビリティ

    game.ap += game.ult_is_available ? game.boost_dap:game.dap;
    if(game.ap > game.max_ap){
        game.ap = game.max_ap;
    }
    if(game.ap == game.max_ap){
        if(meteo_called == true) {
            aba = 1;
            game.ap = 0;
            setAnnounce("- Meteo Fall -", "", 100);
        }
        if(recover_called == true) {
            game.mp = game.max_mp;
            game.ap = 0;
            setAnnounce("- MP Recovery -", "", 100);
        }
    }

    
    if(aba == 1) {
        abxa = paddle.x + paddle.width/2;
        abya = paddle.y + paddle.height/2;
        absa = 40;
        aba = 0;
    }
    

    if(abya < 0) {
        absa = 0;
        meteo_called = false;
    }
    
    
    game.ult++;
    if(game.ult > game.ult_max){
        game.ult = game.ult_max;
    }
    
    if(enterpressed == true && score >= game.ult_score && game.ult == game.ult_max) {
        enterpressed = false;
        game.ult_is_available = true;
        game.ult = 0;
        setAnnounce("- ULT start -", "", 100);
    }

    if(game.ult_is_available == true && game.ult > game.ult_available_time){
        game.ult_is_available = false;
        setAnnounce("- ULT end -", "", 100);
    }
    
  
}

