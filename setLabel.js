
function setTitleSceneLabel(){
    label_box = {}
    label_box["Background"] = {
        xHS : 0.0,
        yVS : 0.0,
        widthHS : 1.0,
        heightVS : 1.0,
        marginHS : 0.0,
        
        text : [],
        textSizeHS : [],
        textLineHeightVS : [],
        textWeight : [],

        background : true,
        backFillStyle : "#343434",
        
        shadowBlurHS : 0.0,
    }

    label_box["Title"] = {
        xHS : 0.1,
        yVS : 0.15,
        widthHS : 0.4,
        heightVS : 0.15,
        marginHS : 0.0,
        textAlign : "left",
        textBaseLine : "top",
        textFont : "monospace",

        text : ["転生したら", "魔法使いだった", "(タイトル表示確認用)"],
        textSizeHS : [0.07, 0.07, 0.04],
        textLineHeightVS : [0.01, 0.01],
        textWeight : ["", "", ""],

        background : false,
        backFillStyle : "#55cc55",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,
    }    

    label_box["Button"] = {
        xHS : 0.54,
        yVS : 0.75,
        widthHS : 0.4,
        heightVS : 0.15,
        marginHS : 0.0,
        textAlign : "right",
        textBaseLine : "bottom",
        textFont : "monospace",

        text : ["Press Return/Enter", "to start"],
        textSizeHS : [0.05, 0.04],
        textLineHeightVS : [0.02],
        textWeight : ["", ""],

        background : false,
        backFillStyle : "#55cc55",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,
    }
}

function setResultSceneLabel(){
    //label_box = {}
    label_box["yBackground"] = {
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
        backFillStyle : "#22222288",
        
        shadowBlurHS : 0.0,
    }

    label_box["zBackground"] = {
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
    }

    label_box["Result"] = {
        xHS : -1.0,
        yVS : 0.28,
        widthHS : 0.0,
        heightVS : 0.0,
        marginHS : 0.0,
        textAlign : "left",
        textBaseLine : "middle",
        textFont : "monospace",

        text : ["Result", "~~~~~~~~~~~~~~~~~~~~~"],
        textSizeHS : [0.07, 0.03],
        textLineHeightVS : [0.02],
        textWeight : ["", ""],

        background : false,
        backFillStyle : "#55cc55",
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,
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
    }
}


function setGameSceneLabel(){
    label_box = {}
    
    label_box["Background"] = {
        xHS : 0.0,
        yVS : 0.0,
        widthHS : 1.0,
        heightVS : 1.0,
        marginHS : 0.0,
        
        text : [],
        textSizeHS : [],
        textLineHeightVS : [],
        textWeight : [],

        background : true,
        backFillStyle : "#343434",
        
        shadowBlurHS : 0.0,
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
    }
/*
    label_box["Damage"] = {
        xHS : 0.0,
        yVS : 0.0,
        widthHS : 0.0,
        heightVS : 0.0,
        marginHS : 0.0,
        textAlign : "left",
        textBaseLine : "bottom",
        textFont : "monospace",
        
        text : ["0"],
        textSizeHS : [0.037],
        textLineHeightVS : [],
        textWeight : ["bold"],

        background : false,
        textFillStyle : "#ffffff",
        shadowBlurHS : 0.0,
    }
    */

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

function updateResultSceneLabel(){
    if(label_box["yBackground"] == undefined) return;
    label_box["yBackground"].xHS = label_box["yBackground"].xHS*0.3;
    label_box["zBackground"].xHS = label_box["zBackground"].xHS*0.5;
    label_box["Result"].xHS = (label_box["Result"].xHS-0.1)*0.5+0.1;
    label_box["Button"].xHS = (label_box["Button"].xHS-0.54)*0.7+0.54;
}

function updateGameSceneLabel(){

    var blink = 8;
    var is_darker = Math.floor((timeend%(blink*2))/blink) == 0;
/*
    label_box["Damage"].xHS = (paddle.x+paddle.width)/game_screen.width;
    label_box["Damage"].yVS = paddle.y/game_screen.height;
*/

    label_box["Abilityrest"].widthHS = label_box["Abilitybar"].widthHS*Math.max(0.0, game.ap/game.max_ap);
    if(game.ap == game.max_ap || game.ult_is_available) label_box["Abilityrest"].backFillStyle = is_darker ? "#3366eeaa":"#4477ffaa";

    label_box["HPrest"].widthHS      = label_box["HPbar"].widthHS*Math.max(0.0, game.hp/game.max_hp);
    label_box["MPrest"].widthHS      = label_box["MPbar"].widthHS*Math.max(0.0, game.mp/game.max_mp);
    var e_rest = Math.max(0.0, boss_flag == 1 ? (boss.hp/boss.max_hp):((max_normal_score-score)/max_normal_score))
    label_box["EnemyHPrest"].text[0] = boss_flag == 1 ? "Boss":"Enemy";
    label_box["EnemyHPrest"].widthHS = label_box["EnemyHPbar"].widthHS*e_rest;

    var ult_rest = 0;
    

    if(game.ult_is_available){
        ult_rest = (game.ult_available_time-game.ult)/game.ult_available_time;
        label_box["ULTrest"].backFillStyle = is_darker ? "#ccaa11aa":"#eecc11aa";
    } else {
        ult_rest = (game.ult-game.ult_available_time)/(game.ult_max-game.ult_available_time);
    }

    ult_rest = Math.max(0.0, ult_rest*Math.min(1.0, score/game.ult_score));

    if(game.ult_is_available == false && ult_rest == 1.0){
        label_box["ULTrest"].backFillStyle = is_darker ? "#cc8811aa":"#ddaa11aa";
    }


    label_box["ULTrest"].widthHS = label_box["ULTbar"].widthHS*ult_rest;

    if(label_box["Announce"].count < 0){
        label_box["Announce"].backFillStyle = "#ffffff";
    } else {
        label_box["Announce"].count = Math.max(0.0, label_box["Announce"].count-1);

        label_box["Announce"].backFillStyle = "#ffffff" +
            Math.floor((label_box["Announce"].count%label_box["Announce"].fadeinterval)/label_box["Announce"].fadeinterval*255).toString(16);
    
    }

}