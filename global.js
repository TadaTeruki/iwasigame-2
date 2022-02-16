let num_of_enemies = 5; // 敵の数
var enemy = new Array(num_of_enemies);

let num_of_bullets = 10; // 弾の数
var bullet = new Array(num_of_bullets);

let num_of_magics = 5; // 相手の弾の数
var magic = new Array(num_of_magics);


var rightpressed = false;
var leftpressed = false;
var uppressed = false;
var downpressed = false;
var enterpressed = false;
var bullet_ad = 0;
var score = 0;
var hp = 1000;
var magictime = 0;
var eatksa = 0;
var eatkxa = 0;
var eatkya = 0;
var eatksb = 0;
var eatkxb = 0;
var eatkyb = 0;
var eatka = 3;
var eatkb = 5;
var def = 0;
var abxa = 0;
var abya = 0;
var absa = 0;
var cooltimea = 0;
var aba = 0;
var c = 1;
var timeend = 0;
var eatkxc = 0;
var eatkyc = 0;
var eatksc = 0;
var eatkxd = 0;
var eatkc = 1;
var atktime = 0;
var ulttime = 0;
var ult = 4000;
var down = 0;
var boss = 0;
var bx = 0;
var by = 0;
var bs = 0;
var dbx = 1;
var dby = 1;
var bshp = 150;
var batkx = 0;
var batky = 0;
var batks = 0;
var setr = 1;
var gol = 0;
var gor = 0;
var randoma = Math.floor( Math.random() * 2 );
var randomb = Math.floor( Math.random() * 2 );
var random = Math.floor( Math.random() * 3 );

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var paddle = {};


