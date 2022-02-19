
function getFixScale(){
    return canvas.width/game_screen.width;
}

function drawRectFixed(x, y, w, h){
    let scale = getFixScale();
    ctx.beginPath();
    ctx.rect(x*scale, y*scale, w*scale, h*scale);
    ctx.fill();
    ctx.closePath();
}


function drawArcFixed(x, y, r){
    let scale = getFixScale();
    ctx.beginPath();
    ctx.arc(x*scale, y*scale, r*scale, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
}

function drawblocks(){
    for(var i = 0; i<num_of_enemies; i++){
        ctx.fillStyle = "#cc3333";
        //drawRectFixed(enemy[i].x, enemy[i].y+enemy[i].apy, enemy[i].width, enemy[i].height);
        putImage(ctx, "resources/enemy.png",
                    (enemy[i].x+enemy[i].width/2)*getFixScale(),
                    (enemy[i].y+enemy[i].apy+enemy[i].height/2)*getFixScale(),
                    (enemy[i].width*1.3)*getFixScale(),
                    (enemy[i].height*1.3)*getFixScale(),
                    POSITION_CENTER, SIZE_FIX)
    }
}

function drawPaddle() {
    ctx.fillStyle = "#0095DD";
    drawRectFixed(paddle.x, paddle.y, paddle.width, paddle.height);
}

function drawBullets() {
    for(var i = 0; i<num_of_bullets; i++){
        ctx.fillStyle = "#eeeeee";
        drawArcFixed(bullet[i].x, bullet[i].y, bullet[i].radius)
    }
}

function drawMagics() {
    for(var i = 0; i<num_of_magics; i++){
        ctx.fillStyle = magic[i].color;
        drawArcFixed(magic[i].x, magic[i].y, magic[i].radius);
    }
}

function drawBoss() {
    ctx.fillStyle = "#55cc55";
    drawRectFixed(boss.x, boss.y+boss.apy, boss.width, boss.height);
}

function drawAbility() {
    ctx.fillStyle = "#dddddd";
    drawArcFixed(abxa, abya, absa);
}

function drawLabel() {
    for(var back = 0; back < 2; back++){
        for(key in label_box){
            label = label_box[key]
            if(label == undefined) continue

            if(label.isback != (back == 0)) continue

            
            
            var margin = label.marginHS * game_screen.width
            var rect_x = label.xHS * game_screen.width + margin
            var rect_y = label.yVS * game_screen.height + margin
            var rect_width = label.widthHS * game_screen.width - margin*2
            var rect_height = label.heightVS * game_screen.height - margin*2

            if(label.background == true){
                ctx.fillStyle = label.backFillStyle
                
                if(label.shadowBlurHS != 0){
                    ctx.shadowColor = label.shadowFillStyle
                    ctx.shadowOffsetX = 0
                    ctx.shadowOffsetY = 0
                    ctx.shadowBlur = label.shadowBlurHS * game_screen.width
                }
        
                drawRectFixed(
                    rect_x,
                    rect_y,
                    rect_width,
                    rect_height
                )
                
                ctx.shadowBlur = 0
                
            }

            if(label.text != undefined){
                if(label.textShadowBlurHS != undefined){
                    ctx.shadowColor = label.textShadowFillStyle
                    ctx.shadowOffsetX = 0
                    ctx.shadowOffsetY = 0
                    ctx.shadowBlur = label.textShadowBlurHS * game_screen.width
                }

                var text_x = rect_x
                if(label.textAlign == "left") text_x = rect_x
                if(label.textAlign == "center") text_x = rect_x + rect_width/2
                if(label.textAlign == "right") text_x = rect_x + rect_width
        
                var text_overall_height = 0
                for(var i = 0 ; i< label.textSizeHS.length;i++){
                    if(i != 0) text_overall_height += label.textLineHeightVS[i-1]*game_screen.height
                    text_overall_height += label.textSizeHS[i]*game_screen.width
                }
        
                var text_base_y = rect_y + rect_height/2 - text_overall_height/2
                if(label.textBaseLine == "top") text_base_y = rect_y
                if(label.textBaseLine == "bottom") text_base_y = rect_y + rect_height - text_overall_height
        
        
                var text_y_inc_scale = label.textBaseLine == "middle" ? 0.5:1
                var text_y = text_base_y
        
                for(var i = 0 ; i< label.textSizeHS.length;i++){
        
                    textSizePX = Math.floor(label.textSizeHS[i] * game_screen.width)
        
                    if(label.textBaseLine == "bottom" || label.textBaseLine == "middle"){
                        text_y += textSizePX*text_y_inc_scale
                        if(i != 0) text_y += label.textLineHeightVS[i-1]*game_screen.height*text_y_inc_scale
                    }
        
                    ctx.font = label.textWeight[i] + " " + (textSizePX*getFixScale()).toString() + "px '" + label.textFont + "'"
        
                    ctx.textAlign = label.textAlign
                    ctx.textBaseline = label.textBaseLine
                    ctx.fillStyle = label.textFillStyle
                    ctx.fillText(label.text[i], text_x*getFixScale(), text_y*getFixScale())
        
                    if(label.textBaseLine == "top" || label.textBaseLine == "middle"){
                        text_y += textSizePX*text_y_inc_scale
                        if(i != label.textSizeHS.length-1) text_y += label.textLineHeightVS[i]*game_screen.height*text_y_inc_scale
                    }
                    
                }
                ctx.shadowBlur = 0
            }
            if(label.image != undefined){
                putImage(ctx, label.image, rect_x*getFixScale(), rect_y*getFixScale(), rect_width*getFixScale(), rect_height*getFixScale(), label.image_pos, label.image_size)
            }
        }


                
    }
}