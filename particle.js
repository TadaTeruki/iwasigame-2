
var num_of_ptcgroups = 50;
var ptcgroup_ad = 0;
var ptcgroup_box = new Array(num_of_ptcgroups);

function registerPtcGroup(x,y,type){
    var ptcgroup = {};
    ptcgroup.x = x;
    ptcgroup.y = y;
    
    switch(type){

        case "default":{
            ptcgroup.particle = new Array(1);
            for(var i=0; i<ptcgroup.particle.length; i++){
                ptcgroup.particle[i] = {
                    x : 0,
                    y : 0,
                    dx : 0,
                    ddx : 0,
                    dy : 0,
                    ddy : 0,
                    r : 5,
                    dr : 0,
                    ddr : 0,
                    drawtype : "arc",
                    class : "default",
                    available : true,
                };
            }
            break;
        }

        case "meteo_attack":{
            ptcgroup.particle = new Array(20);
            for(var i=0; i<ptcgroup.particle.length; i++){
                var r = 2*Math.PI*Math.random();
                ptcgroup.particle[i] = {
                    x : 0,
                    y : 0,
                    dx : Math.cos(r)*1.2,
                    ddx : 0,
                    dy : Math.sin(r)*1.2,
                    ddy : 0,
                    r : 0,
                    dr : 2.0,
                    ddr : -0.1,
                    drawtype : "arc",
                    class : "default",
                    available : true,
                };
            }
            break;
        }

        case "damaging":{
            ptcgroup.particle = new Array(1);
            for(var i=0; i<ptcgroup.particle.length; i++){
                var r = 2*Math.PI*Math.random();
                ptcgroup.particle[i] = {
                    x : 0,
                    y : 0,
                    dx : Math.cos(r),
                    ddx : 0,
                    dy : Math.sin(r),
                    ddy : 0,
                    r : 0,
                    dr : 1.8,
                    ddr : -0.1,
                    drawtype : "arc",
                    class : "default",
                    available : true,
                };
            }
            break;
        }

        case "damaging_ice":{
            ptcgroup.particle = new Array(1);
            for(var i=0; i<ptcgroup.particle.length; i++){
                var r = 2*Math.PI*Math.random();
                ptcgroup.particle[i] = {
                    x : 0,
                    y : 0,
                    dx : Math.cos(r),
                    ddx : 0,
                    dy : Math.sin(r),
                    ddy : 0,
                    r : 0,
                    dr : 1.8,
                    ddr : -0.1,
                    drawtype : "arc",
                    class : "ice",
                    available : true,
                };
            }
            break;
        }

        case "damaging_fire":{
            ptcgroup.particle = new Array(1);
            for(var i=0; i<ptcgroup.particle.length; i++){
                var r = 2*Math.PI*Math.random();
                ptcgroup.particle[i] = {
                    x : 0,
                    y : 0,
                    dx : Math.cos(r),
                    ddx : 0,
                    dy : Math.sin(r),
                    ddy : 0,
                    r : 0,
                    dr : 1.8,
                    ddr : -0.1,
                    drawtype : "arc",
                    class : "fire",
                    available : true,
                };
            }
            break;
        }

        case "stun":{
            ptcgroup.particle = new Array(1);
            for(var i=0; i<ptcgroup.particle.length; i++){
                var r = 2*Math.PI*Math.random();
                ptcgroup.particle[i] = {
                    x : Math.cos(r)*Math.random()*paddle.width*0.8,
                    y : Math.sin(r)*Math.random()*paddle.height*0.8,
                    dx : 0,
                    ddx : 0,
                    dy : 0,
                    ddy : 0,
                    r : 0,
                    dr : 0.5,
                    ddr : -0.05,
                    drawtype : "arc",
                    class : "stun",
                    available : true,
                };
            }
            break;
        }

        case "damaging_nightmare":{
            ptcgroup.particle = new Array(1);
            for(var i=0; i<ptcgroup.particle.length; i++){
                var r = 2*Math.PI*Math.random();
                ptcgroup.particle[i] = {
                    x : Math.cos(r)*Math.random()*paddle.width*0.8,
                    y : Math.sin(r)*Math.random()*paddle.height*0.8,
                    dx : 0,
                    ddx : 0,
                    dy : 0,
                    ddy : 0,
                    r : 0,
                    dr : 2.5,
                    ddr : -0.15,
                    drawtype : "arc",
                    class : "nightmare",
                    available : true,
                };
            }
            break;
        }

        case "destroy_enemy":{
            ptcgroup.particle = new Array(12);
            for(var i=0; i<ptcgroup.particle.length; i++){
                var r = 2*Math.PI*(i/12);
                ptcgroup.particle[i] = {
                    x : 0,
                    y : 0,
                    dx : Math.cos(r),
                    ddx : 0,
                    dy : Math.sin(r),
                    ddy : 0,
                    r : 0,
                    dr : 1.5,
                    ddr : -0.1,
                    drawtype : "arc",
                    class : "default",
                    available : true,
                };
            }
            break;
        }
        case "destroy_boss":{
            ptcgroup.particle = new Array(36);
            for(var i=0; i<ptcgroup.particle.length; i++){
                var r = 2*Math.PI*(i/36);
                ptcgroup.particle[i] = {
                    x : 0,
                    y : 0,
                    dx : Math.cos(r)*Math.random(),
                    ddx : 0,
                    dy : Math.sin(r)*Math.random(),
                    ddy : 0,
                    r : 0,
                    dr : 0.5+Math.random()*0.5,
                    ddr : -0.015,
                    drawtype : "arc",
                    class : "default",
                    available : true,
                };
            }
            break;
        }
        case "destroy_player":{
            ptcgroup.particle = new Array(16);
            for(var i=0; i<ptcgroup.particle.length; i++){
                var r = 2*Math.PI*(i/16);
                ptcgroup.particle[i] = {
                    x : 0,
                    y : 0,
                    dx : Math.cos(r)*Math.random(),
                    ddx : 0,
                    dy : Math.sin(r)*Math.random(),
                    ddy : 0,
                    r : 0,
                    dr : 1.5+Math.random()*0.5,
                    ddr : -0.05,
                    drawtype : "arc",
                    class : "default",
                    available : true,
                };
            }
            break;
        }
    }
    
    ptcgroup_box[ptcgroup_ad] = ptcgroup;
    ptcgroup_ad++;
    if(ptcgroup_ad >= num_of_ptcgroups) ptcgroup_ad = 0;
}

function drawPtcGroup(){
    for(var i=0; i<num_of_ptcgroups; i++){
        if(!ptcgroup_box[i])continue;
        for(var j=0; j<ptcgroup_box[i].particle.length; j++){
            drawParticle(ptcgroup_box[i].particle[j], ptcgroup_box[i].x, ptcgroup_box[i].y);
        }
    }
}

function processPtcGroup(){
    for(var i=0; i<num_of_ptcgroups; i++){
        if(!ptcgroup_box[i])continue;
        for(var j=0; j<ptcgroup_box[i].particle.length; j++){
            processParticle(ptcgroup_box[i].particle[j]);
        }
    }
}

function makeDefaultParticle(){
    var particle = {};
    particle.x = 0;
    particle.y = 0;
    particle.dx = 0;
    particle.ddx = 0;
    particle.dy = 0;
    particle.ddy = 0;
    particle.r = 0;
    particle.dr = 0;
    particle.ddr = 0;
    particle.drawtype = "arc";
    particle.class = "default";
    particle.available = true;
    return particle;
}

function processParticle(particle) {

    if(particle.available == false) return;
    particle.dx += particle.ddx;
    particle.dy += particle.ddy;
    particle.dr += particle.ddr;

    particle.x += particle.dx;
    particle.y += particle.dy;
    particle.r += particle.dr;

    if(particle.r < 0){
        particle.available = false;
    }
    
}

function drawParticle(particle, x, y) {

    if(particle.available == false)return;

    switch(particle.drawtype){
        case "arc":{
            
            switch(particle.class){
                case "default":
                    ctx.fillStyle = "#dddddddd";
                    break;
                case "stun":
                    ctx.fillStyle = "#55bb55dd";
                    break;
                case "fire":
                    ctx.fillStyle = "#ccaa33dd";
                    break;
                case "ice":
                    ctx.fillStyle = "#aaddffdd";
                    break;
                case "nightmare":
                    ctx.fillStyle = "#660066dd";
                    break;
            }
            drawArcFixed(particle.x+x, particle.y+y, particle.r);
            break;
            
        }
    }
}
