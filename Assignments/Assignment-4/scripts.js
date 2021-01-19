var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "15px Arial";
ctx.lineWidth = 1.2;
ctx.strokeStyle = "white";
ctx.strokeText(" Runs", 32, 20);
ctx.strokeText("240 -", 0, 20);
ctx.strokeText("210 -", 0, 70);
ctx.strokeText("180 -", 0, 120);
ctx.strokeText("150 -", 0, 170);
ctx.strokeText("120 -", 0, 220);
ctx.strokeText("60   -", 0, 270);
ctx.strokeText("30   -", 0, 320);
ctx.strokeText("0     -", 0, 370);
ctx.moveTo(30, 400);
ctx.lineTo(30, 0);
ctx.moveTo(0, 370);
ctx.lineTo(500, 370);
ctx.stroke();
ctx.strokeText("|", 130, 380);
ctx.strokeText("5", 135, 395);
ctx.strokeText("|", 230, 380);
ctx.strokeText("10", 235, 395);
ctx.strokeText("|", 330, 380);
ctx.strokeText("15", 335, 395);
ctx.strokeText("|", 430, 380);
ctx.strokeText("20", 435, 395);
ctx.strokeText("Overs", 435, 360);

ctx.moveTo(130, 303); //(5,40)
ctx.lineTo(230, 245); //(10,75)
ctx.moveTo(230, 245);
ctx.lineTo(330, 187); //(15,140)
ctx.moveTo(330, 187);
ctx.lineTo(430, 70);
ctx.stroke();
