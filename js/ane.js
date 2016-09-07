var aneObj = function()
{
	this.x = [];
	this.midY = [];
	this.endY = [];
	this.alpha = 0;
	this.amp = [];
	this.power = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function ()
{	
	
	for(var i=0;i < this.num; i++){
		this.x[i] = i * 16 +Math.random()*20;	//[0,1)
		this.midY[i] = canHeight - 100;
		this.amp[i] = Math.random() * 10 + 50;
		this.endY[i] = canHeight - 250  + Math.random()*50;
	}
}

aneObj.prototype.draw = function()
{
	cxt2.save();
	this.alpha += dalteTime * 0.0005;
	cxt2.globalAlpha = 0.6;	//设置透明度
	cxt2.strokeStyle = "#3b154e";
	cxt2.lineWidth = 18;
	cxt2.lineCap = "round";
	for(var i = 0; i< this.num; i++)
	{
		// beginPath,moveTo,lineTo,stroke,
		this.power[i] = Math.sin(this.alpha) * this.amp[i];	//[-60,60)
		cxt2.beginPath();
		cxt2.moveTo(this.x[i],canHeight);
		cxt2.quadraticCurveTo(this.x[i],this.midY[i],this.x[i] + this.power[i], this.endY[i]);
		cxt2.stroke();

	}
	cxt2.restore();
}