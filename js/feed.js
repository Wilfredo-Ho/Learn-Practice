var feedObj = function()
{
	this.x = [];
	this.y = [];
	this.alive =[];
	this.r = 0;
	var alpha = 0;
}
feedObj.prototype.num = 5;
feedObj.prototype.init = function()
{
	for( var i = 0 ; i<this.num;i++)
	{
		this.x[i] = 0;
		this.y[i] = 0;
		this.alive[i] = false;
	}
}
feedObj.prototype.draw = function()
{
	// draw
	cxt1.save();
	cxt1.lineWidth = 2;
	cxt1.shadowBlur = 5;
	cxt1.shadowColor = "rgba(138,20,0,1)";
	for(var i = 0 ; i < this.num ; i++)
	{
		if(this.alive[i])
		{
			this.r += dalteTime * 0.05;
			if(this.r > 50)
			{
				this.alive[i] = false;
				continue;
			}
			alpha = 1 - this.r / 50;

	
			cxt1.strokeStyle = "rgba(138,20,0,"+alpha+")";
			cxt1.beginPath();
			cxt1.arc(this.x[i],this.y[i],this.r,0,Math.PI*2,true);
			cxt1.closePath();
			cxt1.stroke();
	
		}
	}		
	cxt1.restore();
}
feedObj.prototype.born = function (x ,y)
{
	for(var i = 0 ; i < this.num ; i++)
	{
		this.alive[i] = true;
		this.x[i] = x;
		this.y[i] = y;
		this.r = 0;
		alpha = 0;
		return;
	}
}