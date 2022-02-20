
function setLoadSceneLabel(){
    label_box = {}
    label_box["Background"] = {
        xHS : 0.0,
        yVS : 0.0,
        widthHS : 1.0,
        heightVS : 1.0,
        marginHS : 0.0,
        textAlign : "center",
        textBaseLine : "middle",
        textFont : "monospace",

        text : ["Loading..."],
        textSizeHS : [0.05],
        textLineHeightVS : [],
        textWeight : ["Bold"],

        background : true,
        backFillStyle : "#444444",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,

        isback : true,
    }
}

label_bg = function(img){
    return {
        xHS : 0.0,
        yVS : 0.0,
        widthHS : 1.0,
        heightVS : 1.0,
        marginHS : 0.0,
        background : false,
        shadowBlurHS : 0.0,

        isback : true,

        image : "resources/"+img+".png",
        image_size : SIZE_WRAP,
        image_pos : POSITION_START,
    }
};

function setTitleSceneLabel(){
    label_box = {}

    label_box["back"] = label_bg("back");
    label_box["mini"] = label_bg("mini");
    label_box["girl"] = label_bg("girl");
    label_box["girl"].xHS = -0.2;
    label_box["frame"] = label_bg("frame");
    label_box["logo"] = label_bg("logo");
    label_box["logo"].yVS = -0.2;
    label_box["start"] = label_bg("start");
    
}


function setGameSceneLabel(){
    label_box = {}

    label_box["Background1"] = label_bg("game_bg");
    label_box["Background2"] = label_bg("game_bg");

    for(var cl = 1; cl <= num_of_clouds; cl++){
        var img = "";
        switch(cl%4){
            case 0:
                img = "cloudA";
                break;
            case 1:
                img = "cloudB";
                break;
            case 2:
                img = "cloudC";
                break;
            case 3:
                img = "cloudD";
                break;
        }
        label_box["cloud"+cl.toString()] = label_bg(img);

        label_box["cloud"+cl.toString()].xHS = Math.random()-0.15;
        label_box["cloud"+cl.toString()].yVS = Math.random()*1.3-0.15-0.3;
        label_box["cloud"+cl.toString()].widthHS = 0.3;
        label_box["cloud"+cl.toString()].heightVS = 0.3;
    }


    label_box["Announce"] = {
        xHS : 0.5,
        yVS : 0.4,
        widthHS : 0.0,
        heightVS : 0.0,
        marginHS : 0.0,
        textAlign : "center",
        textBaseLine : "middle",
        textFont : "monospace",
        
        text : ["main", "sub"],
        textSizeHS : [0.05, 0.03],
        textLineHeightVS : [0.01],
        textWeight : ["bold", "bold"],

        background : true,
        backFillStyle : "#ffffff",
        shadowBlurHS : 0.0,

        count : 0,
        fadeinterval : 0,
        max_count : 99,
        fade : true,

        isback : false,
    }

    label_box["UItop"] = {
        xHS : 0.0,
        yVS : 0.0,
        widthHS : 1.0,
        heightVS : 0.05,
        marginHS : 0.0,

        background : true,
        backFillStyle : "#000000aa",
        shadowBlurHS : 0.0,

        isback : false,
    }

    label_box["UIbottom"] = {
        xHS : 0.0,
        yVS : 0.85,
        widthHS : 1.0,
        heightVS : 0.15,
        marginHS : 0.0,

        background : true,
        backFillStyle : "#000000aa",
        shadowBlurHS : 0.0,

        isback : false,
    }

    label_box["HPbar"] = {
        xHS : 0.0,
        yVS : 0.99,
        widthHS : 1.0,
        heightVS : 0.01,
        marginHS : 0.0,
        textAlign : "left",
        textBaseLine : "bottom",
        textFont : "monospace",
        
        text : [],
        textSizeHS : [],
        textLineHeightVS : [],
        textWeight : [],

        background : true,
        backFillStyle : "#ffffffaa",
        shadowBlurHS : 0.0,

        isback : false,
    }

    label_box["HPrest"] = {
        xHS : 0.0,
        yVS : 0.99,
        widthHS : 1.0,
        heightVS : 0.01,
        marginHS : 0.0,
        textAlign : "left",
        textBaseLine : "bottom",
        textFont : "monospace",
        
        text : [" HP"],
        textSizeHS : [0.037],
        textLineHeightVS : [],
        textWeight : ["bold"],

        background : true,
        backFillStyle : "#22aa22aa",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,

        isback : false,
    }

    label_box["EnemyHPbar"] = {
        xHS : 0.0,
        yVS : 0.01,
        widthHS : 1.0,
        heightVS : 0.01,
        marginHS : 0.0,
        textAlign : "left",
        textBaseLine : "top",
        textFont : "monospace",
        
        text : [],
        textSizeHS : [],
        textLineHeightVS : [],
        textWeight : [],

        background : true,
        backFillStyle : "#ffffffaa",
        shadowBlurHS : 0.0,

        isback : false,
    }

    label_box["EnemyHPrest"] = {
        xHS : 0.0,
        yVS : 0.01,
        widthHS : 1.0,
        heightVS : 0.01,
        marginHS : 0.0,
        textAlign : "left",
        textBaseLine : "top",
        textFont : "monospace",
        
        text : [" Enemy"],
        textSizeHS : [0.037],
        textLineHeightVS : [],
        textWeight : ["bold"],

        background : true,
        backFillStyle : "#992299aa",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,

        isback : false,
    }


    label_box["Abilitybar"] = {
        xHS : 0.015,
        yVS : 0.95,
        widthHS : 0.3,
        heightVS : 0.008,
        marginHS : 0.00,
        textAlign : "left",
        textBaseLine : "bottom",
        textFont : "monospace",
        
        text : [],
        textSizeHS : [],
        textLineHeightVS : [],
        textWeight : [],

        background : true,
        backFillStyle : "#ffffffaa",

        isback : false,
    }

    label_box["Abilityrest"] = {
        xHS : 0.015,
        yVS : 0.95,
        widthHS : 0.3,
        heightVS : 0.008,
        marginHS : 0.00,
        textAlign : "left",
        textBaseLine : "bottom",
        textFont : "monospace",
        
        text : [" Ability", " [1] : MP Recovery", " [2] : Meteo Fall",""],
        textSizeHS : [0.033, 0.025, 0.025, 0.0],
        textLineHeightVS : [0.01, 0.01, 0.01],
        textWeight : ["bold", "bold", "bold", ""],

        background : true,
        backFillStyle : "#3366eeaa",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,

        isback : false,
    }


    label_box["MPbar"] = {
        xHS : 0.345,
        yVS : 0.95,
        widthHS : 0.3,
        heightVS : 0.008,
        marginHS : 0.00,
        textAlign : "left",
        textBaseLine : "bottom",
        textFont : "monospace",
        
        text : [],
        textSizeHS : [],
        textLineHeightVS : [],
        textWeight : [],

        background : true,
        backFillStyle : "#ffffffaa",
        shadowBlurHS : 0.0,

        isback : false,
    }

    label_box["MPrest"] = {
        xHS : 0.345,
        yVS : 0.95,
        widthHS : 0.3,
        heightVS : 0.008,
        marginHS : 0.00,
        textAlign : "left",
        textBaseLine : "bottom",
        textFont : "monospace",
        
        text : [" MP", " [Key UP] : Attack",""],
        textSizeHS : [0.033, 0.025, 0.0],
        textLineHeightVS : [0.01, 0.01],
        textWeight : ["bold", "bold", ""],

        background : true,
        backFillStyle : "#cc4433aa",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,

        isback : false,
    }

    label_box["ULTbar"] = {
        xHS : 0.675,
        yVS : 0.95,
        widthHS : 0.3,
        heightVS : 0.008,
        marginHS : 0.00,
        textAlign : "left",
        textBaseLine : "bottom",
        textFont : "monospace",
        
        text : [],
        textSizeHS : [],
        textLineHeightVS : [],
        textWeight : [],

        background : true,
        backFillStyle : "#ffffffaa",
        shadowBlurHS : 0.0,

        isback : false,
    }

    label_box["ULTrest"] = {
        xHS : 0.675,
        yVS : 0.95,
        widthHS : 0.3,
        heightVS : 0.008,
        marginHS : 0.00,
        textAlign : "left",
        textBaseLine : "bottom",
        textFont : "monospace",
        

        text : [" ULT", " [Return/Enter] : ","     Ultimate skill", ""],
        textSizeHS : [0.033, 0.025, 0.025, 0.0],
        textLineHeightVS : [0.01, 0.01, 0.01],
        textWeight : ["bold", "bold", "bold", ""],
        

        background : true,
        backFillStyle : "#cc8811aa",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,

        isback : false,
    }

    label_box["Board"] = {
        xHS : 0.98,
        yVS : 0.03,
        widthHS : 0.0,
        heightVS : 0.0,
        marginHS : 0.0,
        textAlign : "right",
        textBaseLine : "top",
        textFont : "monospace",
        
        text : ["Press key [p] to pause", "time", "0","score", "0"],
        textSizeHS : [0.02, 0.028, 0.037, 0.028, 0.037],
        textLineHeightVS : [0.008,0.005, 0.008, 0.005],
        textWeight : ["bold", "bold", "bold", "bold", "bold"],

        background : false,
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,

        isback : false,
    }
    

}


function setResultSceneLabel(){
    label_box = {}
    label_box["Background"] = {
        xHS : -1.0,
        yVS : 0.0,
        widthHS : 1.0,
        heightVS : 1.0,
        marginHS : 0.0,
        
        text : [],
        textSizeHS : [],
        textLineHeightVS : [],
        textWeight : [],

        background : true,
        backFillStyle : "#332233",
        
        shadowBlurHS : 0.0,

        isback : true,
    }

    label_box["Background2"] = {
        xHS : -1.0,
        yVS : 0.15,
        widthHS : 1.0,
        heightVS : 0.7,
        marginHS : 0.0,
        
        text : [],
        textSizeHS : [],
        textLineHeightVS : [],
        textWeight : [],

        background : true,
        backFillStyle : "#222222dd",
        
        shadowBlurHS : 0.0,

        isback : true,
    }

    label_box["Result"] = {
        xHS : -1.0,
        yVS : 0.2,
        widthHS : 0.0,
        heightVS : 0.0,
        marginHS : 0.0,
        textAlign : "left",
        textBaseLine : "top",
        textFont : "monospace",

        text : ["Result", "~~~~~~~~~~~~~~~~~~~~~"],
        textSizeHS : [0.07, 0.03],
        textLineHeightVS : [0.02],
        textWeight : ["", ""],

        background : false,
        backFillStyle : "#55cc55",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,

        isback : false,
    }    

    label_box["Board"] = {
        xHS : -1.0,
        yVS : 0.38,
        widthHS : 0.0,
        heightVS : 0.0,
        marginHS : 0.0,
        textAlign : "left",
        textBaseLine : "top",
        textFont : "monospace",
        //["Game score : 0", "(Kill : 0)", "Boss bonus : 0", "Time bonus : 0", "Total score : 0"],
        text : ["","","","","",""],
        textSizeHS : [0.04, 0.025, 0.035, 0.035, 0.035, 0.045],
        textLineHeightVS : [0.01, 0.02, 0.02, 0.02, 0.03],
        textWeight : ["", "", "", "", "", ""],

        background : false,
        backFillStyle : "#55cc55",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,

        isback : false,
    }

    label_box["Rank"] = {
        xHS : -1.0,
        yVS : 0.5,
        widthHS : 0.0,
        heightVS : 0.0,
        marginHS : 0.0,
        textAlign : "center",
        textBaseLine : "middle",
        textFont : "monospace",

        text : ["Rank", "S"],
        textSizeHS : [0.05,0.2],
        textLineHeightVS : [0.02],
        textWeight : ["bold", "bold"],

        background : false,
        backFillStyle : "#55cc55",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,
        textShadowBlurHS : 0.03,
        textShadowFillStyle : "#ffffff88",

        isback : false,
    }

    label_box["Button"] = {
        xHS : -1.0,
        yVS : 0.67,
        widthHS : 0.4,
        heightVS : 0.15,
        marginHS : 0.0,
        textAlign : "right",
        textBaseLine : "bottom",
        textFont : "monospace",

        text : ["Press Return/Enter", "to restart"],
        textSizeHS : [0.05, 0.04],
        textLineHeightVS : [0.02],
        textWeight : ["", ""],

        background : false,
        backFillStyle : "#55cc55",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,

        isback : false,
    }
}


function setAnnounce(str, substr, fadetime = -1, fadeinterval = -1){
    if(label_box["Announce"] == undefined) return;

    label_box["Announce"].text[0] = str;
    label_box["Announce"].text[1] = substr;
    label_box["Announce"].max_count = fadetime;
    label_box["Announce"].count = label_box["Announce"].max_count;
    label_box["Announce"].fade = fadetime > 0;
    label_box["Announce"].fadeinterval = fadeinterval >= 0 ? fadeinterval:fadetime;
}

function getGameScore(){
    return game.kill * 10;
}

function getClearBonusScore(){
    return gameclear ? 100:0;
}

function getTimeBonusScore(){
    return Math.floor(Math.abs(130-game.alltime/100))*4;
}

function getHPBonusScore(){
    return Math.floor(Math.abs(Math.max(game.hp, 0.0))/2);
}

function getTotalScore(){
    return getGameScore()+getHPBonusScore()+(gameclear ? getTimeBonusScore()+getClearBonusScore(): 0);
}

function updateTitleSceneLabel(){
    label_box["girl"].xHS *= 0.5;
    label_box["logo"].yVS *= 0.5;
}

function updateResultSceneLabel(){

    label_box["Background"].xHS = label_box["Background"].xHS*0.3;
    label_box["Background2"].xHS = label_box["Background2"].xHS*0.5;
    label_box["Result"].xHS = (label_box["Result"].xHS-0.1)*0.5+0.1;
    label_box["Board"].xHS = (label_box["Result"].xHS-0.1)*0.5+0.1;
    label_box["Button"].xHS = (label_box["Button"].xHS-0.54)*0.7+0.54;
    label_box["Rank"].xHS = (label_box["Rank"].xHS-0.75)*0.6+0.75;

    // game score
    label_box["Board"].text[0] = "Game Score : "+getGameScore().toString();
    // kill
    label_box["Board"].text[1] = "(Kill : "+game.kill+")";

    label_box["Board"].text[2] = " HP    Bonus : " + getHPBonusScore().toString();

    if(gameclear){
        // boss bonus
        label_box["Board"].text[3] = " Clear Bonus : " + getClearBonusScore().toString();
        // time bonus
        label_box["Board"].text[4] = " Time  Bonus : " + getTimeBonusScore().toString();
    }

    // total score
    label_box["Board"].text[5] = "Total Score : " + getTotalScore().toString();


    var rank_alp = "N";
    var rank_col = "#cccccc";

    var tscore = getTotalScore();
    
    if(tscore >= 1000){
        rank_alp = "S";
        rank_col = "#ffffff";
    } else if(tscore >= 850){
        rank_alp = "A";
        rank_col = "#ffffbb";
    } else if(tscore >= 700){
        rank_alp = "B";
        rank_col = "#99ddff";
    } else if(tscore >= 600){
        rank_alp = "C";
        rank_col = "#eecc88";
    }

    label_box["Rank"].text[1] = rank_alp;
    label_box["Rank"].textFillStyle = rank_col;
}

function updateGameSceneLabel(){

    var blink = 8;
    var is_darker = Math.floor((timeend%(blink*2))/blink) == 0;
    var min_board = Math.floor(game.alltime/6000).toString();
    var sec_board = (Math.floor(game.alltime/100)%60).toString();
    if(sec_board.length == 1){
        sec_board = "0"+sec_board;
    }
    label_box["Board"].text[2] = min_board+":"+sec_board;
    label_box["Board"].text[4] = +getGameScore().toString();
    
    var p =Math.max(1.0-game.alltime/80, 0.0);
    var bg_speedVS = 0.005+p*p*0.05;

    if(!pause){
        for(var bg = 1; bg<=2; bg++){
            var key = "Background" + bg.toString();
            label_box[key].yVS += bg_speedVS;
            if(label_box[key].yVS > 1.0-(bg-1))label_box[key].yVS -=1.0;
        }
        
        for(var cl = 1; cl <= num_of_clouds; cl++){
            var key = "cloud" + cl.toString();
            label_box[key].yVS += bg_speedVS*1.2;
            if(label_box[key].yVS > 1.0){
                label_box[key].xVS = Math.random()-0.15;
                label_box[key].yVS -= 1.3+Math.random()*0.5;
            }
        }
    }

    

    label_box["Abilityrest"].widthHS = label_box["Abilitybar"].widthHS*Math.max(0.0, game.ap/game.max_ap);
    if(game.ap == game.max_ap || game.ult_is_available) label_box["Abilityrest"].backFillStyle = is_darker ? "#3366eeaa":"#4477ffaa";

    label_box["HPrest"].widthHS      = label_box["HPbar"].widthHS*Math.max(0.0, game.hp/game.max_hp);
    label_box["MPrest"].widthHS      = label_box["MPbar"].widthHS*Math.max(0.0, game.mp/game.max_mp);
    var e_rest = Math.max(0.0, boss_flag == 1 ? (boss.hp/boss.max_hp):((max_normal_game_point-game_point)/max_normal_game_point))
    label_box["EnemyHPrest"].text[0] = boss_flag == 1 ? "Boss":"Enemy";
    label_box["EnemyHPrest"].widthHS = label_box["EnemyHPbar"].widthHS*e_rest;

    var ult_rest = 0;
    

    if(game.ult_is_available){
        ult_rest = (game.ult_available_time-game.ult)/game.ult_available_time;
        label_box["ULTrest"].backFillStyle = is_darker ? "#ccaa11aa":"#eecc11aa";
    } else {
        ult_rest = (game.ult-game.ult_available_time)/(game.ult_max-game.ult_available_time);
    }

    ult_rest = Math.max(0.0, ult_rest*Math.min(1.0, game_point/game.ult_game_point));

    if(game.ult_is_available == false && ult_rest == 1.0){
        label_box["ULTrest"].backFillStyle = is_darker ? "#cc8811aa":"#ddaa11aa";
    }


    label_box["ULTrest"].widthHS = label_box["ULTbar"].widthHS*ult_rest;

    if(label_box["Announce"].count < 0){
        label_box["Announce"].backFillStyle = "#ffffff";
    } else {
        label_box["Announce"].count = Math.max(0.0, label_box["Announce"].count-1);

        var atx = Math.floor((label_box["Announce"].count%label_box["Announce"].fadeinterval)/label_box["Announce"].fadeinterval*255).toString(16);
        if(atx.length == 1) atx = "0"+atx;
        label_box["Announce"].backFillStyle = "#ffffff" +atx;
    }

}