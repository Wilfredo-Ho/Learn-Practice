babyObj = function () 
{
	this.x;
	this.y;
	this.angle;
	this.gameOver;

	this.babyTailTimer;
	this.babyTailCount;

	this.babyEyeTimer;
	this.babyEyeCount;
	this.babyEyeInterval;

	this.babyBodyTimer;
	this.babyBodyCount;
}
babyObj.prototype.init = function()
{
	this.x = canWidth*0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	this.gameOver = false;	

	this.babyTailTimer = 0;
	this.babyTailCount = 0;

	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;

	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;

}
babyObj.prototype.draw = function()
{
	// cxt1
	// lerp x,y
	this.x = lerpDistance(mom.x,this.x,0.99);
	this.y = lerpDistance(mom.y,this.y,0.99);

	// lerp angle
	var deltaX = mom.x - this.x;
	var deltaY = mom.y - this.y;
	var beta = Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle = lerpAngle(beta,this.angle,0.9);

	// babyTail Animation
	this.babyTailTimer += dalteTime;
	if(this.babyTailTimer > 50)
	{
		this.babyTailCount = (this.babyTailCount+1) % 8;
		this.babyTailTimer %= 50;
	}

	// babyEye animation
	this.babyEyeTimer += dalteTime;
	if(this.babyEyeTimer > this.babyEyeInterval)
	{
		this.babyEyeCount = (this.babyEyeCount+1) % 2;
		this.babyEyeTimer %= this.babyEyeInterval;
		if(this.babyEyeCount == 0){
			this.babyEyeInterval = Math.random() * 1500 + 2000;
		}else{
			this.babyEyeInterval = 200;
		}
	}

	// baby body
	this.babyBodyTimer += dalteTime;
	if(this.babyBodyTimer > 500)
	{
		
		this.babyBodyCount++;
		this.babyBodyTimer %= 500;
		if(this.babyBodyCount > 19)
		{
			this.babyBodyCount = 19;
			// game over
			this.gameOver = true;
		}
	}

	// drawImage
	cxt1.save();
	cxt1.translate(this.x,this.y);
	cxt1.rotate(this.angle);

	var babyTailCount = babyTail[this.babyTailCount];
	var babyEyeCount = babyEye[this.babyEyeCount];
	var babyBodyCount = babyBody[this.babyBodyCount];

	cxt1.drawImage(babyTailCount,-babyTailCount.width*0.5+25,-babyTailCount.height*0.5);
	cxt1.drawImage(babyBodyCount,-babyBodyCount.width*0.5,-babyBodyCount.height*0.5);
	cxt1.drawImage(babyEyeCount,-babyEyeCount.width*0.5,-babyEyeCount.height*0.5);
	cxt1.restore();
}