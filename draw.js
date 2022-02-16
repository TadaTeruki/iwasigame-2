function drawblocks(){
    for(var i = 0; i<num_of_enemies; i++){
        ctx.beginPath();
        ctx.rect(enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBullets() {
    for(var i = 0; i<num_of_bullets; i++){
        ctx.beginPath();
        ctx.arc(bullet[i].x, bullet[i].y, bullet[i].radius, 0, Math.PI*2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }
}

function drawMagics() {
    for(var i = 0; i<num_of_magics; i++){
        ctx.beginPath();
        ctx.arc(magic[i].x, magic[i].y, magic[i].radius, 0, Math.PI*2);
        ctx.fillStyle = magic[i].color;
        ctx.fill();
        ctx.closePath();
    }
}

function drawBalla() {
    ctx.beginPath();
    ctx.arc(eatkxa, eatkya, eatksa, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawBallb() {
    ctx.beginPath();
    ctx.arc(eatkxb, eatkyb, eatksb, 0, Math.PI*2);
    ctx.fillStyle = "#5555cc";
    ctx.fill();
    ctx.closePath();
}

function drawBallc() {
    ctx.beginPath();
    ctx.arc(abxa, abya, absa, 0, Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function drawBalld() {
    ctx.beginPath();
    ctx.arc(eatkxc, eatkyc, eatksc, 0, Math.PI*2);
    ctx.fillStyle = "green";
    ctx.fill();
}
    
function drawBalle() {
    ctx.beginPath();
    ctx.arc(eatkxd, eatkyc, eatksc, 0, Math.PI*2);
    ctx.fillStyle = "green";
    ctx.fill();
}

function drawBoss() {
    ctx.beginPath();
    ctx.rect( bx, by, bs, bs-10);
    ctx.fillstyle = "red";
    ctx.fill();
}

function drawBallf() {
    ctx.beginPath();
    ctx.arc(batkx, batky, batks, 0, Math.PI*2);
    ctx.fillStyle = "purple";
    ctx.fill();
}
