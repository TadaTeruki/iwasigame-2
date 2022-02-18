function intRandomByRange(i){
    return Math.floor(Math.random()*i);
}

function initMagic(){
    for(var i = 0; i<num_of_magics; i++){
        magic[i].type = "";
        magic[i].x = 0;
        magic[i].y = 0;
        magic[i].dx = 0;
        magic[i].dy = 0;
        magic[i].mltpStopY = 0;
        magic[i].mltp = 0;
        magic[i].dmltp = 0;
        magic[i].radius = 0;
        magic[i].dradius = 0;
        magic[i].ddradius = 0;
        magic[i].color = "#ffffff00";
        magic[i].damage = 0;
    }
}

function processMagics(){
    for(var i = 0; i<num_of_magics; i++){
        magic[i].mltp = Math.max(magic[i].mltp+magic[i].dmltp, 0.0);
        if(magic[i].y < magic[i].mltpStopY){
            var px = paddle.x+paddle.width/2;
            var py = paddle.y+paddle.height/2;
            
            if(px == magic[i].x){
                magic[i].dx = 0
                magic[i].dy = magic[i].mltp;
            } else {
                var r = Math.atan((py-magic[i].y)/(px-magic[i].x));
                if(magic[i].x < px){
                    magic[i].dx = Math.cos(r)*magic[i].mltp;
                    magic[i].dy = Math.sin(r)*magic[i].mltp;
                } else {
                    magic[i].dx = -Math.cos(r)*magic[i].mltp;
                    magic[i].dy = -Math.sin(r)*magic[i].mltp;
                }
            }

        }
        magic[i].x += magic[i].dx;
        magic[i].y += magic[i].dy;
        magic[i].dradius += magic[i].ddradius;
        magic[i].radius  += magic[i].dradius;

        if(magic[i].y-magic[i].radius > canvas.height || magic[i].radius < 0.0){
            magictime = 0;
            down = 0;
            initMagic();
        }
    }
}

function setIceMagic(x,y){
    initMagic();
    magic[0].type      = "ice";
    magic[0].radius    = 0;
    magic[0].dradius   = 1.5;
    magic[0].ddradius  = -0.02;
    magic[0].x         = x;
    magic[0].y         = y;
    magic[0].dy        = 0;
    magic[0].dx        = 0;
    magic[0].color     = "#8888ee";
    magic[0].mltpStopY = (paddle.y-y)/3+y;
    magic[0].mltp      = 0.1;
    magic[0].dmltp     = 0.1;
    magic[0].damage    = 8;

}

function setNightmareMagic(x,y){
    initMagic();
    magic[0].type      = "nightmare";
    magic[0].radius    = 0;
    magic[0].dradius   = 1.0;
    magic[0].ddradius  = -0.005;
    magic[0].x         = x;
    magic[0].y         = y;
    magic[0].dy        = 0;
    magic[0].dx        = 0;
    magic[0].color     = "#aa33aa";
    magic[0].mltpStopY = (paddle.y-y)/3+y;
    magic[0].mltp      = 0.03;
    magic[0].dmltp     = 0.03;
    magic[0].damage    = 12;

}



function setFireMagic(x,y){
    initMagic();
    magic[0].type      = "fire";
    magic[0].radius    = 5;
    magic[0].dradius   = 1.4;
    magic[0].ddradius  = -0.0125;
    magic[0].x         = x;
    magic[0].y         = y;
    magic[0].dy        = 0;
    magic[0].dx        = 0;
    magic[0].color     = "#cc5555";
    magic[0].mltpStopY = paddle.y;
    var px = paddle.x+paddle.width/2;
    var py = paddle.y+paddle.height/2;
    var euc = Math.sqrt((px-x)*(px-x)+(py-y)*(py-y));
    magic[0].mltp      = euc*0.05;
    magic[0].dmltp     = -euc*0.0014;
    magic[0].damage    = 3;

}


function setStunMagic(x,y){
    initMagic();
    var px = paddle.x+paddle.width/2;
    var py = paddle.y+paddle.height/2;
    for(var i = 0; i<2; i++){
        magic[i].type      = "stun";
        magic[i].radius    = 5;
        magic[i].dradius   = 0.22;
        magic[i].ddradius  = -0.001;
        magic[i].x         = px-85+i*170;
        magic[i].y         = py;
        magic[i].dy        = 0;
        magic[i].dx        = 0;
        magic[i].color     = "#55aa55";
        magic[i].mltpStopY = 0;
        magic[i].mltp      = 0;
        magic[i].dmltp     = 0;
        magic[i].damage    = 1;
    }

}