

window.onload = function(){

    paddle.width = 30;
    paddle.height = 30;
    paddle.x = (canvas.width-paddle.width)/2;
    paddle.y = (canvas.height-paddle.height);

    for(var i = 0; i<num_of_enemies; i++){
        enemy[i] = {};
    
        enemy[i].type = i >= 4 ? "random":"normal";
    
        switch(enemy[i].type){
            case "random":
                enemy[i].x  = -100;
                enemy[i].y  = 0;
                enemy[i].dx = 0;
                enemy[i].dy = 0;
                break;
            case "normal":
                enemy[i].x = 20 + i*130;
                enemy[i].y = 20;
                enemy[i].dx = 1;
                enemy[i].dy = 1;
                break;
        }
    
        enemy[i].width  = 40;
        enemy[i].height = 30;
    
    }
    

    for(var i = 0; i<num_of_bullets; i++){
        bullet[i] = {};
        bullet[i].x = canvas.width/2;
        bullet[i].y = canvas.height-30;
        bullet[i].dx = 0;
        bullet[i].dy = 0;
        bullet[i].radius = 5;
    }

    for(var i = 0; i<num_of_magics; i++){
        magic[i] = {};
    }
    initMagic();
        
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    setInterval(draw, 10);
}


function mainPhase(){
    if(ulttime < 1 || ulttime > 1000) {
        for(var i = 0; i<num_of_enemies; i++){
            /*
            if(enemy[i].type == "normal"){

            }
            */
            if(enemy[i].type == "random"){
                if(enemy[i].x < -enemy[i].width || enemy[i].x > canvas.width){
                    var from_left = Math.random() < 0.5;
                    if(from_left){
                        enemy[i].x = -enemy[i].width;
                        enemy[i].dx = 3;
                    } else {
                        enemy[i].x = canvas.width;
                        enemy[i].dx = -3;
                    }

                    enemy[i].y = Math.random() < 0.5 ? 200:300;
                }
            }
            enemy[i].x += enemy[i].dx;
            enemy[i].y += enemy[i].dy;

        }
    }

    
    //敵攻撃
    if(magictime == 300){
        random = Math.floor(Math.random()*3);
        do{
            enemyTarget = intRandomByRange(num_of_enemies);
        } while(enemy[enemyTarget].width == 0.0);

        var ex = enemy[enemyTarget].x+enemy[enemyTarget].width/2;
        var ey = enemy[enemyTarget].y+enemy[enemyTarget].height/2;

        switch(random){
            case 0: // 火攻撃
                setFireMagic(ex, ey);
                break;
            case 1: // 氷攻撃
                setIceMagic(ex, ey);
                break;
            case 2: // 雷攻撃
                setStunMagic(ex, ey);
                break;
        }
        
    }
    

    //スコア,ブロックの当たり判定
    for(var i = 0; i<num_of_enemies; i++){
        for(var j = 0; j<num_of_bullets; j++){
            if(enemy[i].x < bullet[j].x && bullet[j].x < enemy[i].x+enemy[i].width && enemy[i].y < bullet[j].y && bullet[j].y < enemy[i].y+enemy[i].height) {
                enemy[i].width = 0;
                score += 1;
            }
            if(enemy[i].x < abxa && abxa < enemy[i].x+enemy[i].width && enemy[i].y < abya && abya < enemy[i].y+enemy[i].height) {
            enemy[i].width = 0;
            score += 1;
            }
            
            if(enemy[i].x < abxa+absa && abxa+absa < enemy[i].x+enemy[i].width && enemy[i].y < abya && abya < enemy[i].y+enemy[i].height) {
            enemy[i].width = 0;
            score += 1;
            }
            
            if(enemy[i].x < abxa-absa && abxa-absa < enemy[i].x+enemy[i].width && enemy[i].y < abya && abya < enemy[i].y+enemy[i].height) {
            enemy[i].width = 0;
            score += 1;
            }
        }
    }

    for(var i = 0; i<num_of_enemies; i++){
        if(score%5 == 0){
            enemy[i].width  = 40;
            enemy[i].height = 30;
            sr = 40;
        }
    }
    
    //ブロック関係

    for(var i = 0; i<num_of_enemies; i++){
        if(enemy[i].type == "normal"){
            if(enemy[3].x > 435 || enemy[0].x < 5) {
                enemy[i].dx = -enemy[i].dx;
            }

            if(enemy[i].y > 200 || enemy[i].y < 10) {
                enemy[i].dy = -enemy[i].dy;
            }
        }

    }
    
    if(setr == 1) {
        randoma = Math.floor( Math.random() * 2 + 1);
        randomb = Math.floor( Math.random() * 2 + 1);
        setr = 0;
    }
}

function bossPhase(){
    bx += dbx;
    by += dby;
    
    //敵攻撃
    //火攻撃

    if(magictime == 200){

        random = Math.floor( Math.random() * 4 );
        var ex = bx+bs/2;
        var ey = by+bs/2;

        switch(random){
            case 0: // 火攻撃
                setFireMagic(ex, ey);
                break;
            case 1: // 氷攻撃
                setIceMagic(ex, ey);
                break;
            case 2: // 雷攻撃
                setStunMagic(ex, ey);
                break;
            case 3: // 闇攻撃
                setNightmareMagic(ex, ey);
                break;
        }
    }

    /*

    if(random == 0) {
        if(magictime == 500) {
        eatkxa = paddle.x;
        eatkya = canvas.height-paddle.height - 30;
        eatksa = 10;
        console.log("300")
        }
    
        if(eatksa > 0) {
        eatksa += 1;
        }
    
        if(eatksa == 90) {
        eatksa = 0;
        magictime = 0;
        random = Math.floor( Math.random() * 4 );
        console.log("ATK処理終了");
        console.log("残りHP");
        console.log(hp);
        console.log(random);
        }
    }

//氷攻撃

    if(random == 1) {
        if(magictime == 500) {
        eatkxb = paddle.x;
        eatkyb = 500;
        eatksb = 50;
        console.log("500")
        }
        if(eatksb == 50) {
        eatkyb += 2;
        }
        if(eatkyb > 640) {
        eatksb = 0;
        magictime = 0;
        console.log("ATK処理終了");
        eatkyb = 0;
        random = Math.floor( Math.random() * 4 );
        console.log("残りHP");
        console.log(hp);
        console.log(random);
        }
    }

//電攻撃

    if(random == 2) {
        if(magictime == 500) {
        eatkxc = paddle.x-70;
        eatkxd = paddle.x+100;
        eatkyc = canvas.height-paddle.height;
        eatksc = 30;
        }
        if(eatksc == 30) {
        atktime += 1;
        }
        if(atktime > 350) {
        eatksc = 0;
        eatkxc = 0;
        eatkyc = 0;
        eatkxd = 0;
        atktime = 0;
        magictime = 0;
        down = 0;
        random = Math.floor( Math.random() * 4 );
        console.log("ATK処理終了");
        console.log("残りHP");
        console.log(hp);
        console.log(random);
        }
    }
    
//闇攻撃

    if(random == 3) {
        if(magictime == 450) {
            batkx = paddle.x;
            batky = 400;
            batks = 70;
        }
        if(batks == 70) {
            batky += 1;
        }
        if(batky > 640) {
            batkx = 0;
            batky = 0;
            batks = 0;
            magictime = 0;
            random = Math.floor( Math.random() * 4 );
            console.log("ATK処理終了");
            console.log("残りHP");
            console.log(hp);
            console.log(random);
        }
    }
    */

    for(var i = 0; i<num_of_bullets; i++){
        if(bx < bullet[i].x  && bullet[i].x  < bx+bs && by < bullet[i].y && bullet[i].y < by+bs-10) {
            bshp -= 1;
        }
    }
    if(bx < abxa && abxa < bx+bs && by < abya && abya < by+bs-10) {
    bshp -= 2;
    }
    if(bx < abxa-absa && abxa-absa < bx+bs && by < abya && abya < by+bs-10) {
    bshp -= 2;
    }
    if(bx < abxa+absa && abxa+absa < bx+bs && by < abya && abya < by+bs-10) {
    bshp -= 2;
    }
    
    if(bshp < 1) {
    bs = 0;
    }
    
    //boss移動
    
    if(bx < 5 || bx > 425) {
        dbx = -dbx;
    }
    if(by < 5 || by > 200) {
        dby = -dby;
    }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBullets();
    drawPaddle();
    drawblocks();
    drawMagics();
    processMagics();
    drawBalla();
    drawBallb();
    drawBallc();
    drawBalld();
    drawBalle();
    drawBoss();
    drawBallf();
    
    magictime += 1;
    cooltimea += c;
    timeend += 1;
    ult += 1;
    
    for(var i = 0; i<num_of_bullets; i++){
        bullet[i].x += bullet[i].dx;
        bullet[i].y += bullet[i].dy;
    }
    
    if(boss == 0) {
        mainPhase();
    }

    if(boss == 1) {
        bossPhase();
    }
    
    //ボス戦
    if(score == 20) {
        boss = 1;
        bx = 240;
        by = 150;
        bs = 50;
        score += 20;
        magictime = 0;
        for(var i = 0; i<num_of_enemies; i++){
            enemy[i].width = 0;
        }
    }
    
    //ゲーム終了処理
    
    if(hp < 1) {
        window.alert("ゲームオーバー");
    }
    if(bshp < 1) {
        window.alert("ゲームクリア");
    }
    
    //ダメージ系
    
    if(eatkyb > 610 && eatkyb < 640){
        if(eatkxb + eatksb > paddle.x + 15 && eatkxb - eatksb < paddle.x + 15) {
        hp -= eatkb;
        hp += def;
        console.log("ATKB:DMG5");
        }
    }

    for(var i = 0; i<num_of_magics; i++){
        if(magic[i].x + magic[i].radius > paddle.x+paddle.width/2 &&
           magic[i].x - magic[i].radius < paddle.x+paddle.width/2 &&
           magic[i].y + magic[i].radius > paddle.y+paddle.height/2 &&
           magic[i].y - magic[i].radius < paddle.y+paddle.height/2){
            hp -= magic[i].damage;
            hp += def;
            console.log(hp);
        }
    }
    
    if(eatksa > 60) { 
        if(eatkxa + eatksa - 15 > paddle.x + 15 && eatkxa - eatksa + 15 < paddle.x + 15) {
        hp -= eatka;
        hp += def;
        console.log("ATKA:DMG3");
        }
    }
    
    if(eatksc == 30) {
        if(eatkxc-eatksc <paddle.x && paddle.x < eatkxc+eatksc) {
        hp -= eatkc;
        down = 1.5;
        console.log("ATKC:DMG1+STAN")
        }
    }
    
    if(eatksc == 30) {
        if(eatkxd-eatksc <paddle.x && paddle.x < eatkxd+eatksc) {
        hp -= eatkc;
        down = 1.5;
        console.log("ATKC:DMG1+STAN")
        }
    }
    
    if(batky > 620) {
        if(batkx-batks < paddle.x+15 && paddle.x+15 < batkx+batks) {
        hp = 0;
        console.log("ATKD:DMG99999")
        }
    }
    
    //アビリティ
    
    if(downpressed == true && cooltimea > 700) {
        aba = 1;
        cooltimea = 0;
        console.log("アビリティ発動");
    }
    
    if(aba == 1) {
        abxa = paddle.x + 15;
        abya = canvas.height-paddle.height;
        absa = 40;
        aba = 0;
    }
    
    if(absa == 40) {
        abya -= 7;
    }
    
    if(abya < 0) {
        absa = 0;
        downpressed = false;
    }
    
    if(cooltimea == 700) {
        console.log("アビリティ使用可能");
    }
    //ULT
    
    if(enterpressed == true) {
    if(ulttime < 1000) {
    ulttime += 1;
    c = 2;
    }
    if(ulttime == 1000) {
    ulttime = 0;
    c = 1;
    enterpressed = false;
    ultcooltime = 0;
    ult = 0;
    console.log("ULT終了");
    }
    }
    
    if(score == 16 && ult > 4000) {
    console.log("ULT発動可能");
    }
    
    //paddle
    
    for(var i = 0; i<num_of_bullets; i++){
        if(bullet[i].x + bullet[i].dx > canvas.width-bullet[i].radius || bullet[i].x + bullet[i].dx < 0) {
            bullet[i].dx = -bullet[i].dx;
        }

        if(uppressed = true && bullet[i].y < 0) {
            bullet[i].dy = 0;
            bullet[i].y = canvas.height-30;
            
            uppressed = false;
        }

        if(bullet[i].dy == 0){
            bullet[i].x = paddle.x+15;
        }
    }
    
    
    // キー関係
    
    if(rightpressed && paddle.x < canvas.width-paddle.width) {
        paddle.x += 3-down;
    } else if(leftpressed && paddle.x > 0) {
        paddle.x -= 3-down;
    }
}



function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightpressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftpressed = true;
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        bullet[0].dy = -5;
        uppressed = true;
    }
    if(e.key == "Down"  || e.key == "ArrowDown") {
        downpressed = true;
    }
    if(e.key == "Enter" && score > 16 && ult > 4000) {
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
}
