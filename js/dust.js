var dustObj = function()
{
	this.x = [];
	this.y = [];
	this.amp = [];
	this.alpha;
	this.number = [];
}
dustObj.prototype.num = 30;
dustObj.prototype.init = function ()
{
	for(var i = 0 ;i< this.num ; i++)
	{
		this.x[i] = canWidth * Math.random() ;
		this.y[i] = canHeight * Math.random() ;
		this.amp[i] = 60 + Math.random() * 10;
		this.number[i] = Math.floor(Math.random()*7);	//[0,6)
	}
	this.alpha = 0;
}
dustObj.prototype.draw = function()
{	
	this.alpha += dalteTime * 0.0005;
	var l = Math.sin(this.alpha);
	for(var i = 0 ;i <this.num ; i++)
	{
		var num = this.number[i];
		cxt1.drawImage(dustImg[num],this.x[i]+l*this.amp[i],this.y[i]);
	}
}