var fruitObj = function()
{
	this.alive = [];//bool
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function()
{
	for(var i = 0 ; i < this.num ; i++)
	{
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.fruitType[i] = "";
		this.spd[i] = Math.random() * 0.02 + 0.01 ;//[0.01,0.03)
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
}
fruitObj.prototype.draw = function(){
	for(var i = 0 ; i < this.num ; i++)
	{
		// draw
		// find an ane, grow, fly up
		if(this.fruitType[i] == "orange")
		{
			pic = this.orange;
		}
		else
		{
			pic = this.blue;
		}
		if( this.alive[i])
		{
			if(this.l[i] <= 14)
			{
				this.l[i] += this.spd[i] * dalteTime;
			}else{
				this.y[i] -= this.spd[i] * 3 * dalteTime;
			}
		}
		if(this.y[i] < -10)
		{
			this.alive[i] = false;
		}
		cxt2.drawImage(pic, this.x[i] - this.l[i]/2, this.y[i]-this.l[i]/2, this.l[i], this.l[i]);
	}
}
fruitObj.prototype.born = function(i)
{
	var aneID = Math.floor(Math.random()*ane.num);
	this.x[i] = ane.x[aneID]+ ane.power[i];
	this.y[i] =ane.endY[aneID]+ 200 * Math.random();
	this.l[i] = 0;
	this.alive[i] = true;

	var rdm = Math.random();
	if(rdm < 0.20)
	{
		this.fruitType[i] = "blue";
	}
	else
	{
		this.fruitType[i] = "orange";
	}
}
fruitObj.prototype.dead = function(i)
{
	this.alive[i] = false;
}
function fruitMonitor()
{
	var num = 0;
	for(var i = 0 ; i < fruit.num ; i++)
	{
		if(fruit.alive[i])	{ num++;}
	}
	if(num < 15)
	{
		sendFruit();// send fruit
		return;
	}	
}
function sendFruit()
{
	for(var i = 0 ; i < fruit.num ; i++)
	{
		if(!fruit.alive[i])
		{
			fruit.born(i);
			return;
		}
	}
}