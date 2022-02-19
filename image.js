

/*
image.js : 画像のロードと表示 
---------------------------------------------------
※使う際は必ず <body>のあとに
    <script src="image.js"></script>
  ...とつける！
---------------------------------------------------
(1) 関数loadResources - 複数の画像をロードする
loadResources(["ファイル名", "ファイル名"], function(){ ロード終了後に行う処理 })
使い方例 : 
    loadResources(["imageA.png", "imageB.png"], function(){ console.log("finished!") });
         -> imageA.png, imageB.png をロードし、ロードの処理が終わったら"finished!"と出力
---------------------------------------------------
(2) 関数putImage - 画像を表示する
putImage(Canvasのコンテキスト, "ファイル名", x座標, y座標, 幅, 高さ, 表示する場所の設定, 表示するサイズの設定)
使い方例 : 
    putImage(ctx, "image.png", 100, 120, 30, 40, POSITION_START, SIZE_EXTEND);
         -> (100, 120)の位置に, 幅 30, 高さ 40 で画像を表示する
○ "表示する場所の設定" について
POSITION_START : 指定したx座標, y座標が、画像の"右上端"に来るように表示位置を設定
POSITION_CENTER: 指定したx座標, y座標が、画像の"中央"に来るように表示位置を設定
○ "表示するサイズの設定" について
SIZE_EXTEND  : 画像の縦横比は、指定した幅と高さに合わせる。
SIZE_FIX     : 画像の縦横比は固定にする。指定した幅/高さの枠と画像の縦横比が合わない場合は、画像を"小さく"して枠内にはめる
SIZE_WRAP    : 画像の縦横比は固定にする。指定した幅/高さの枠と画像の縦横比が合わない場合は、画像を"大きく"して枠をうめる
*/

const SIZE_NONE    = 0;
const SIZE_FIX     = 1;
const SIZE_WRAP    = 2;
const SIZE_EXTEND  = 3;

const POSITION_NONE  = 0;
const POSITION_START  = 1;
const POSITION_CENTER = 2;

var image_table = {};

function loadResources(src_files, func){

    var image_load_stock = 0;

    for(var i=0; i<src_files.length; i++){
        src_file = src_files[i];
        
        image_table[src_file] = new Image();
        image_table[src_file].src = src_file;
        image_load_stock++;
        image_table[src_file].addEventListener('load', e => {
            image_load_stock--;
        });
    }

    var wait = function(){
        
        if(image_load_stock != 0) setTimeout(wait, 100);
        else func();
    };

    wait();
}

function putImage(ctx, src_file, x, y, w, h, position_mode, size_mode){
    if(position_mode == POSITION_NONE) return;
    if(size_mode == SIZE_NONE) return;
    
    var image = image_table[src_file];

    var dx, dy, dw, dh;

    switch(size_mode){
        case SIZE_EXTEND:
            dw = w;
            dh = h;
            break;
        case SIZE_FIX:
            dw = Math.min(w, h/image.height*image.width);
            dh = Math.min(h, w/image.width*image.height);
            break;
        case SIZE_WRAP:
            dw = Math.max(w, h/image.height*image.width);
            dh = Math.max(h, w/image.width*image.height);
            break;
    }
    switch(position_mode){
        case POSITION_CENTER:
            dx = -dw/2+x;
            dy = -dh/2+y;
            break;
        case POSITION_START:
            dx = x;
            dy = y;
            break;
    }

    ctx.drawImage(image, dx, dy, dw, dh);
        

}