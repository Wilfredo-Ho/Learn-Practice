var dataObj = function()
{
	this.fruitNum = 0;
	this.scoreDou = 1;
	this.scaleX = canWidth;
	this.scaleY = canHeight;
	this.score = 0;
	this.alpha = 0;
}
dataObj.prototype.reset = function()
{
	this.fruitNum = 0;
	this.scoreDou = 1;
	
}
dataObj.prototype.addScore = function()
{
	this.score += this.score;

}
dataObj.prototype.draw = function()
{	
	cxt1.save();
	cxt1.fillStyle = "white";
	cxt1.shadowBlur = 10;
	cxt1.shadowColor = "white";
	cxt1.fillText("SCORE: "+this.score,this.scaleX * 0.4,this.scaleY-30);
	console.log("score");
	if(baby.gameOver)
	{
		this.alpha += dalteTime * 0.001 ;
		if(this.alpha > 1) 	this.alpha =1;
		cxt1.fillStyle = "rgba(255,255,255,"+ this.alpha +")";
		cxt1.fillText("GAMEOVER",this.scaleX * 0.4,this.scaleY*0.5);
	}
	cxt1.restore();

}
