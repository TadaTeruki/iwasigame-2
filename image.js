

const SIZE_NONE    = 0;
const SIZE_FIX     = 1;
const SIZE_WRAP    = 2;
const SIZE_EXTEND  = 3;

const POSITION_NONE  = 0;
const POSITION_START  = 1;
const POSITION_CENTER = 2;

var image_table = {};
var audio_table = {};

function loadResources(src_files, func){

    var image_load_stock = 0;

    for(var i=0; i<src_files.length; i++){
        src_file = src_files[i];

        if(src_file[0]=="r"){
            image_table[src_file] = new Image();
            image_table[src_file].src = src_file;
            image_load_stock++;
            image_table[src_file].addEventListener('load', e => {
                image_load_stock--;
            });
        }

        if(src_file[0]=="a"){
            audio_table[src_file] = new Audio(src_file);
            audio_table[src_file].preload = "auto";
            image_load_stock++;
            audio_table[src_file].addEventListener("loadedmetadata",function(){ image_load_stock--; })
        }
        

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