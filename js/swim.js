var swimObj = function()
{
	this.x = [];
	this.y = [];
	this.alive = [];
	var alpha = 0;
	this.r = 0;
}
swimObj.prototype.num = 10;
swimObj.prototype.init = function()
{
	for(var i = 0; i< this.num ; i++)
	{
		this.x[i] = 0;
		this.y[i] = 0;
		this.alive[i] = false;
	}
}
swimObj.prototype.draw = function()
{
	// draw
	cxt1.save();
	cxt1.shadowColor = "white";
	cxt1.shadowBlur = 5;
	cxt1.lineWidth = 2;
	for(var i = 0 ; i < this.num ; i++)
	{
		if(this.alive[i])
		{
			this.r += dalteTime * 0.1;
			if(this.r > 60)
			{
				this.alive[i] = false;
				continue;
			}
			alpha = 1 - this.r/60;
			cxt1.strokeStyle = "rgba(255,255,255,"+alpha+")";
			cxt1.beginPath();
			cxt1.arc(this.x[i],this.y[i],this.r,0,Math.PI*2,true);
			cxt1.closePath();
			cxt1.stroke();
		}
	}			
	cxt1.restore();
}
swimObj.prototype.born = function(x,y)
{
	for(var i= 0; i< this.num ; i++)
	{
		this.x[i] = x;
		this.y[i] = y;
		this.alive[i] = true;
		alpha = 0;
		this.r = 0;
		return;
	}
}