let num_of_enemies = 5; // 敵の数
var enemy = new Array(num_of_enemies);

let num_of_bullets = 10; // 弾の数
var bullet = new Array(num_of_bullets);

let num_of_magics = 5; // 相手の弾の数
var magic = new Array(num_of_magics);

let num_of_clouds = 4;

var rightpressed, leftpressed, uppressed, meteo_called, enterpressed, recover_called, upreleased;
var bullet_ad, game_point, max_normal_game_point, magictime, def,
    abxa, abya, absam, aba, down,
    timeend, atktime, down, score,
    boss_flag, setr, bullet_speed, gameover, gameclear, pause;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var paddle = {};
var boss = {};

var label_box = {};
var game_screen = {};

var game = {};
game.alltime = 0;
game.kill = 0;

var wait = 0;


rightpressed = false;
leftpressed = false;
uppressed = false;
meteo_called = false;
enterpressed = false;
upreleased = true;

function initGame(){
    bullet_ad = 0;
    game_point = 0;
    gameover = false;
    gameclear = false;
    pause = false;

    game.alltime = 0;
    game.kill = 0;
    game.max_hp = 800;
    game.hp = game.max_hp;
    game.max_mp = 30;
    game.mp = game.max_mp;
    game.boost_dmp = 1;
    game.max_ap = 700;
    game.ap = 0;
    game.dap = 1;
    game.boost_dap = 2;
    down = 0;

    bullet_speed = -5;

    magictime = 0;
    def = 0;
    abxa = 0;
    abya = -100;
    absa = 0;
    max_normal_game_point = 20;
    game.ult_game_point = 16;
    aba = 0;
    timeend = 0;
    atktime = 0;

    game.ult = 4000;
    game.ult_max = 4000;
    game.ult_is_available = false;
    game.ult_available_time = 1000;

    down = 0;
    boss_flag = 0;
    setr = 1;

    boss.x = 0;
    boss.y = 0;
    boss.width = 0;
    boss.height = 0;
    boss.max_hp = 150;
    boss.hp = boss.max_hp;
    boss.dx = 1;
    boss.dy = 1;
    boss.apy_start = -250;
    boss.apy= boss.apy_start;

    paddle.width = 30;
    paddle.height = 30;
    paddle.x = (game_screen.width-paddle.width)/2;
    paddle.y = (game_screen.height-paddle.height)*0.8;

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
        enemy[i].splite = Math.floor(Math.random()*3);
        enemy[i].apy_start = -500;
        enemy[i].apy= enemy[i].apy_start;
        enemy[i].width  = 60;
        enemy[i].height = 45;
    
    }
    
    for(var i = 0; i<num_of_bullets; i++){
        bullet[i] = {};
        bullet[i].x = game_screen.width/2;
        bullet[i].y = paddle.y;
        bullet[i].dx = 0;
        bullet[i].dy = 0;
        bullet[i].radius = 5;
    }

    for(var i = 0; i<num_of_magics; i++){
        magic[i] = {};
    }
    initMagic();

    enterpressed = false;
}





