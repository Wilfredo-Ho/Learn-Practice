var cnv1;
var cnv2;

var canWidth;
var canHeight;
var cxt1;
var cxt2;
var lastTime, dalteTime, now;

var bgPic = new Image();

var ane;

var fruit;
var data;

var mom;
var momTail = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlu = [];

var mx;
var my;

var baby;
var babyTail = [];
var babyEye = [];
var babyBody = [];

var swim;

var feed;

var dust;
var dustImg = [];


document.body.onload = game;

function game()
{
	init();
	lastTime = Date.now();
	dalteTime = 0;
	gameloop();
}

function init()
{
	// 获得canvas context
	cnv1 = document.getElementById("canvas1");
	cxt1 = cnv1.getContext('2d');
	cnv2 = document.getElementById("canvas2");
	cxt2 = cnv2.getContext('2d');

// element.addEventListener(event, function, useCapture)
// 用于向指定元素添加事件句柄。useCapture决定是捕获还是冒泡方式
	mx = cnv1.width * 0.5;
	my = cnv1.height * 0.5;
	cnv1.addEventListener("mousemove",onMouseMove,false);

	bgPic.src = "./src/background.jpg";
	canWidth = cnv1.width;
	canHeight = cnv1.height;
	
	ane = new aneObj();				//??????
	ane.init();						//??????

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	// babyTail array
	for(var i = 0; i < 8; i++)
	{
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail"+ i + ".png";
	}

	// baby eye
	for(var i = 0; i < 2 ;i++)
	{
		babyEye[i] = new Image();
		babyEye[i].src = "./src/babyEye"+ i + ".png";
	}

	// baby body
	for(var i = 0 ; i< 20;i++)
	{
		babyBody[i] = new Image();
		babyBody[i].src = "./src/babyFade" + i + ".png";
	}

	// mom tail
	for(var i=0; i<8 ;i++)
	{
		momTail[i] = new Image();
		momTail[i].src = "./src/bigTail" + i + ".png";
	}

	// mom eye
	for(var i=0;i<2;i++)
	{
		momEye[i] = new Image();
		momEye[i].src = "./src/bigEye" + i + ".png";
	}

	// mom body eaten
	for(var i = 0 ; i < 8 ; i++)
	{
		momBodyOra[i] = new Image();
		momBodyOra[i].src = "./src/bigSwim" + i + ".png";
		momBodyBlu[i] = new Image();
		momBodyBlu[i].src = "./src/bigSwimBlue" + i + ".png";
	}

	// data
	data = new dataObj();

	swim = new swimObj();
	swim.init();

	feed = new feedObj();
	feed.init();

	dust = new dustObj();
	dust.init();
	for(var i = 0 ; i<7 ; i++)
	{
		dustImg[i] = new Image();
		dustImg[i].src = "./src/dust" + i + ".png";
	}

	cxt1.font = "bold 25px arial";
}

function gameloop()
{
	requestAnimFrame(gameloop);		//frame per second
	// console.log("loop");
	var now = Date.now();
	dalteTime = now - lastTime;
	lastTime = now;
	if(dalteTime > 40) dalteTime = 40;

	drawBackground();
	ane.draw();

	//判断果实状态
	fruitMonitor();
	fruit.draw();
	
	cxt1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	

	fruitMomCollision();
	momBabyCollision();

	// data.addScore();
	data.draw();
	swim.draw();
	feed.draw();
	dust.draw();

}

function onMouseMove(e)
{
	if(baby.gameOver)
	{
		return;
	}
	if(e.offSetX || e.layerX)	//兼容其他浏览器
	{
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offSetY;
		// console.log(mx);

	}
}