canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

roverx=10;
rovery=10;
roverwidth=100;
roverheight=90;

backgroundimg="mars.jpg";
roverimg="rover.png";

function add(){
    backgroundimgtag=new Image();
    backgroundimgtag.onload=uploadBackground;
    backgroundimgtag.src=backgroundimg;

    roverimgtag=new Image();
    roverimgtag.onload=uploadRover;
    roverimgtag.src=roverimg;
}
function uploadBackground(){
    ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.height);
}


function uploadRover(){
    ctx.drawImage(roverimgtag,roverx,rovery,roverwidth,roverheight);
}

window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keyPressed=e.KeyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");
    }

    if(keyPressed=='37'){
        left();
        console.log("left");
    }

    if(keyPressed=='39'){
        right();
        console.log("right");
    }

    if(keyPressed=='40'){
        down();
        console.log("down");
    }



}

function up(){
    if(rovery >= 0){

rovery=rovery-10;
console.log("roverx is="+ roverx +"and rovery ="+rovery);
uploadBackground();
uploadRover();

    }
}
function down(){
    if(rovery <= 600){

rovery=rovery+10;
console.log("roverx is="+ roverx +"and rovery ="+rovery);
uploadBackground();
uploadRover();

    }
}
function left(){
    if(roverx >= 0){

roverx=roverx-10;
console.log("roverx is="+ roverx +"and rovery ="+rovery);
uploadBackground();
uploadRover();

    }
}
function right(){
    if(roverx <= 800){

roverx=roverx+10;
console.log("roverx is="+ roverx +"and rovery ="+rovery);
uploadBackground();
uploadRover();

    }
}
