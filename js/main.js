// reference https://www.w3schools.com/graphics/canvas_text.asp
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// ctx.fillStyle = "black";
// ctx.fillRect(20, 20, 175, 50);

// //Turn transparency on
ctx.globalAlpha = 0.2;
ctx.fillStyle = "black"; 
ctx.fillRect(50, 50, 275, 50); 
// ctx.fillStyle = "brown";
// ctx.fillRect(80, 80, 175, 50);

// add text to canvas
ctx.font = "30px Arial";
ctx.fillText("1900",50,50);

//second canvas
let cc = document.getElementById('myCanvasTwo')
let cctx = cc.getContext('2d');
// cctx.fillStyle = "black";
// cctx.fillRect(20, 20, 75, 50);


cctx.globalAlpha = 0.2;
// cctx.fillStyle = "brown";
// cctx.fillRect(80, 80, 175, 50);

cctx.fillStyle = "black"; 
cctx.fillRect(50, 50, 275, 50);



// let ccc = document.getElementById('myCanvasThree')
// let ccctx = ccc.getContext('2d');

// ccctx.globalAlpha = 0.2;
// ccctx.fillStyle = "white"; 
// ccctx.fillRect(50, 50, 100, 50);
