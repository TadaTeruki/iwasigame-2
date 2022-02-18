function mainPhase(){
    if(game.ult_is_available == false) {
        for(var i = 0; i<num_of_enemies; i++){
            /*
            if(enemy[i].type == "normal"){

            }
            */
            if(enemy[i].type == "random"){
                if(enemy[i].x < -enemy[i].width || enemy[i].x > game_screen.width){
                    var from_left = Math.random() < 0.5;
                    if(from_left){
                        enemy[i].x = -enemy[i].width;
                        enemy[i].dx = 3;
                    } else {
                        enemy[i].x = game_screen.width;
                        enemy[i].dx = -3;
                    }

                    enemy[i].y = Math.random() < 0.5 ? 200:300;
                }
            }
            if(Math.abs(enemy[i].apy) < 100.0){
                enemy[i].x += enemy[i].dx;
                enemy[i].y += enemy[i].dy;
            }

        }
    }

    
    //敵攻撃
    if(magictime == 200){
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
        var ab_hit = (enemy[i].x < abxa && abxa < enemy[i].x+enemy[i].width && enemy[i].y < abya && abya < enemy[i].y+enemy[i].height) ||
            (enemy[i].x < abxa+absa && abxa+absa < enemy[i].x+enemy[i].width && enemy[i].y < abya && abya < enemy[i].y+enemy[i].height) || 
            (enemy[i].x < abxa-absa && abxa-absa < enemy[i].x+enemy[i].width && enemy[i].y < abya && abya < enemy[i].y+enemy[i].height);

        for(var j = 0; j<num_of_bullets; j++){
            var bscore = score;
            var bullet_hit = (enemy[i].x < bullet[j].x && bullet[j].x < enemy[i].x+enemy[i].width && enemy[i].y < bullet[j].y && bullet[j].y < enemy[i].y+enemy[i].height);
            
            if (enemy[i].width != 0 && (bullet_hit || ab_hit)){
                enemy[i].width = 0;
                score += 1;
                
                if(bullet_hit){
                    registerPtcGroup(bullet[j].x, bullet[j].y, "destroy_enemy");
                    bullet[j].y = -100;
                }
                if(ab_hit){
                    registerPtcGroup(abxa, abya, "meteo_attack");
                }
                
            }

            if(score != bscore && score%5 == 0){
                for(var k = 0; k<num_of_enemies; k++){
                    enemy[k].width  = 40;
                    enemy[k].height = 30;
                    enemy[k].apy= enemy[i].apy_start;
                    sr = 40;
                }
            }
        }
    }

    
    //ブロック関係

    for(var i = 0; i<num_of_enemies; i++){
        if(enemy[i].type == "normal"){
            if(enemy[3].x > 435){
                enemy[i].dx = -Math.abs(enemy[i].dx);
            }
            if (enemy[0].x < 5) {
                enemy[i].dx = Math.abs(enemy[i].dx);
            }

            if(enemy[i].y > 200){
                enemy[i].dy = -Math.abs(enemy[i].dy);
            }
            if (enemy[i].y < 10) {
                enemy[i].dy = Math.abs(enemy[i].dy);
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

    boss.apy *= 0.98;

    if(Math.abs(boss.apy)<2.0){
        boss.x += boss.dx;
        boss.y += boss.dy;
    }
    
    //敵攻撃
    //火攻撃

    if(magictime == 100){

        random = Math.floor( Math.random() * 4 );
        var ex = boss.x+boss.width/2;
        var ey = boss.y+boss.height/2;

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

    for(var i = 0; i<num_of_bullets; i++){
        if(boss.x < bullet[i].x  && bullet[i].x  < boss.x+boss.width && boss.y < bullet[i].y && bullet[i].y < boss.y+boss.height) {
            boss.hp -= 3;
            registerPtcGroup(bullet[i].x, bullet[i].y, "destroy_enemy");
            bullet[i].y = -100;
        }
    }

    if((boss.x < abxa && abxa < boss.x+boss.width && boss.y < abya && abya < boss.y+boss.height) ||
      (boss.x < abxa-absa && abxa-absa < boss.x+boss.width && boss.y < abya && abya < boss.y+boss.height) ||
      (boss.x < abxa+absa && abxa+absa < boss.x+boss.width  && boss.y < abya && abya < boss.y+boss.height)) {
        registerPtcGroup(abxa, abya, "meteo_attack");
        boss.hp -= 8;
    }
    
    if(boss.hp < 1 && boss.width != 0) {
        registerPtcGroup(boss.x+boss.width/2, boss.y+boss.height/2, "destroy_boss");
        boss.width = 0;
    }
    
    //boss移動
    
    if(boss.x < 5 || boss.x > 425) {
        boss.dx = -boss.dx;
    }
    if(boss.y < 5 || boss.y > 200) {
        boss.dy = -boss.dy;
    }
}
