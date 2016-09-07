var momObj = function()
{
	this.x;
	this.y;
	this.angle;

	this.circle;
	this.circleTimer;
	this.radius;

	this.bigEyeTimer;
	this.bigEyeCount;
	this.bigEyeInterval;

	this.bigBodyCount;
	
	this.bigTailTimer;
	this.bigTailCount;
}
momObj.prototype.init = function()
{
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;


	this.circle =0;
	this.circleTimer = 0;
	this.radius =0;


	this.bigEyeTimer = 0;
	this.bigEyeCount = 0 ;
	this.bigEyeInterval = 50;

	this.bigBodyCount = 0;
	
	this.bigTailTimer = 0;
	this.bigTailCount = 0;
}
momObj.prototype.draw = function()
{	
	// lerp
	this.x = lerpDistance(mx, this.x, 0.98);
	this.y = lerpDistance(my, this.y, 0.98);

	// mom tail
	this.bigTailTimer += dalteTime;
	if(this.bigTailTimer > 50)
	{
		this.bigTailCount = (this.bigTailCount+1) % 8;
		this.bigTailTimer %= 50;
	}

	// mom eye
	this.bigEyeTimer += dalteTime;
	if(this.bigEyeTimer > this.bigEyeInterval)
	{
		this.bigEyeCount = (this.bigEyeCount+1) % 2;
		this.bigEyeTimer %= this.bigEyeInterval;
		if(this.bigEyeCount == 1)
		{
			this.bigEyeInterval = 200 ;
		}
		else
		{
			this.bigEyeInterval = 1500 * Math.random() + 2000; //[2000,3500)
		}
	}



	// lerp angle
	deltaX = mx - this.x;
	deltaY = my - this.y;
	beta = Math.atan2(deltaY, deltaX)+Math.PI;
	this.angle = lerpAngle(beta,this.angle,0.5);
	
	cxt1.save();
	cxt1.translate(this.x, this.y);
	cxt1.rotate(this.angle);


	var bigTailCount = momTail[this.bigTailCount];
	var bigEyeCount = momEye[this.bigEyeCount];
	var bigBodyCount = this.bigBodyCount;
	if(data.scoreDou == 1)	//orange
	{
		cxt1.drawImage(momBodyOra[bigBodyCount],-momBodyOra[bigBodyCount].width * 0.5,-momBodyOra[bigBodyCount].height * 0.5);
	}
	else
	{
		cxt1.drawImage(momBodyBlu[bigBodyCount],-momBodyBlu[bigBodyCount].width * 0.5,-momBodyBlu[bigBodyCount].height * 0.5);
	}

	cxt1.drawImage(bigEyeCount,-bigEyeCount.width * 0.5,-bigEyeCount.height * 0.5);
	cxt1.drawImage(bigTailCount,-bigTailCount.width * 0.5 + 30,-bigTailCount.height * 0.5);

	cxt1.restore();
}