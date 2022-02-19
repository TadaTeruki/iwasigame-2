
window.onload = function(){

    game_screen.width = 480;
    game_screen.height = 640;

    setCanvas();
    setLoadSceneLabel();
    drawLabel();

    loadResources([
        "resources/back.png",
        "resources/frame.png",
        "resources/girl.png",
        "resources/mini.png",
        "resources/start.png",
        "resources/logo.png",
        "resources/game_bg.png",
        "resources/cloudA.png",
        "resources/cloudB.png",
        "resources/cloudC.png",
        "resources/cloudD.png",
        "resources/cloudE.png",
        "resources/enemy.png",
        "resources/ice.png",
        "resources/robo.png",
        "resources/fire.png",
        "resources/nightmare.png",
        "audio/boss_destroy.mp3",
        "audio/bullet.mp3",
        "audio/destroy_enemy.mp3",
        "audio/fire.mp3",
        "audio/gameover.mp3",
        "audio/ice.mp3",
        "audio/nightmare.mp3",
        "audio/ready.mp3",
        "audio/recovery.mp3",
        "audio/stun.mp3",
        "audio/ult.mp3",
        "audio/caution.mp3",

    ], function(){
        startTitleScene();
        loop();
    })
    
    

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    window.addEventListener("resize", setCanvas, false);

    
    
}

function setCanvas(){
    canvas.width =
        Math.min(window.innerWidth, window.innerHeight/game_screen.height*game_screen.width);// * (1.0-canvas_margin_scale*2)
    canvas.height =
        Math.min(window.innerHeight, window.innerWidth/game_screen.width*game_screen.height);// * (1.0-canvas_margin_scale*2)


    if(canvas.width < game_screen.width || canvas.height < game_screen.height){
        canvas.width = game_screen.width;
        canvas.height = game_screen.height;
    }

}

function loop(){

    switch(scene){
        case "title":
            titleLoop();
            setTimeout(loop, 20); 
            break;
        case "game":
            gameLoop();
            setTimeout(loop, 10);  
            break;
        case "result":
            resultLoop();
            setTimeout(loop, 10);
    }

    recover_called = false;
    meteo_called = false;
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
    
    updateResultSceneLabel();
    startGameToPressEnter();
    
}

function titleLoop() {
    drawLabel();
    updateTitleSceneLabel();
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
    
    drawAbility();
    updateGameSceneLabel();
    drawPtcGroup();
    

    if(pause){
        return;
    }

    processMagics();
    processPtcGroup();

    game.alltime++;

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

    if(uppressed == true && upreleased == true){
        if(game.mp > 0){
            bullet[bullet_ad].dy = bullet_speed;
            game.mp--;
            bullet_ad ++;
            
            if(bullet_ad >= num_of_bullets){
                bullet_ad = 0;
            }
            upreleased = false;
            audio_table["audio/bullet.mp3"].currentTime = 0;
            audio_table["audio/bullet.mp3"].play();
        } else {
            setAnnounce("MP shortage","Press [1] key to Use 'MP recovery'", 100);
            audio_table["audio/caution.mp3"].currentTime = 0;
            audio_table["audio/caution.mp3"].play();
        }

    }
    
    
    // キー関係
    
    if(rightpressed && paddle.x < game_screen.width-paddle.width) {
        paddle.x += (3-down);
    } else if(leftpressed && paddle.x > 0) {
        paddle.x -= (3-down);
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
        if(gameover == false){
            setAnnounce("Game Over", "You lose");
            audio_table["audio/gameover.mp3"].currentTime = 0;
            audio_table["audio/gameover.mp3"].play();
            registerPtcGroup(paddle.x+paddle.width/2, paddle.y+paddle.height/2, "destroy_player");
        }
        
        paddle.width = 0;
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
        setAnnounce("Congratulations!", "You defeat all enemies");
        if(gameclear == false){
            wait = 300;
            gameclear = true;
            audio_table["audio/boss_destroy.mp3"].currentTime = 0;
            audio_table["audio/boss_destroy.mp3"].play();
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
    if(game_point >= max_normal_game_point && boss_flag == 0) {
        wait = 100;
        boss_flag = 1;

        boss.width = 60;
        boss.height = 50;
        boss.x = game_screen.width/2-boss.width/2;
        boss.y = 150;
        game_point += 20;
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
            if(magic[i].type == "stun"){
                down = 2.0;
                audio_table["audio/ice.mp3"].play();
            }
            if(gameover == false){
                
                registerPtcGroup(paddle.x+paddle.width/2, paddle.y+paddle.height/2, 
                    magic[i].type == "ice" ? "damaging_ice" : 
                    (magic[i].type == "fire" ? "damaging_fire" : 
                    (magic[i].type == "nightmare" ? "damaging_nightmare" : "damaging")));
            }
            game.hp += def;
        }
    }

    if(down != 0){
        registerPtcGroup(paddle.x+paddle.width/2, paddle.y+paddle.height/2, "stun");
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
            audio_table["audio/fire.mp3"].currentTime = 0;
            audio_table["audio/fire.mp3"].play();
            meteo_called == false;
        }
        if(recover_called == true) {
            game.mp = game.max_mp;
            game.ap = 0;
            setAnnounce("- MP Recovery -", "MP is now full", 100);
            audio_table["audio/recovery.mp3"].currentTime = 0;
            audio_table["audio/recovery.mp3"].play();
            recover_called == false;
        }
    } else {
        if(meteo_called == true || recover_called == true) {
            setAnnounce("Ability Point is not Full", "Wait", 100);
            audio_table["audio/caution.mp3"].currentTime = 0;
            audio_table["audio/caution.mp3"].play();
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
    
    if(enterpressed == true){
        if(game_point >= game.ult_game_point && game.ult == game.ult_max) {
            enterpressed = false;
            game.ult_is_available = true;
            game.ult = 0;
            if(boss_flag == 0){
                setAnnounce("- ULT start -", "Enemy Lock & Ability Point boost x2", 100);
            } else {
                setAnnounce("- ULT start -", "Ability Point boost x2", 100);
            }
            audio_table["audio/ult.mp3"].currentTime = 0;
            audio_table["audio/ult.mp3"].play();
            
        } else {
            audio_table["audio/caution.mp3"].currentTime = 0;
            audio_table["audio/caution.mp3"].play();
            if(game_point < game.ult_game_point){
                setAnnounce("ULT Point is not Full", "Destroy enemies more", 100);

            } else {
                setAnnounce("ULT Point is not Full", "Wait", 100);
            }
        }
    }

    if(game.ult_is_available == true && game.ult > game.ult_available_time){
        game.ult_is_available = false;
        setAnnounce("- ULT end -", "", 100);
    }
    

  
}


