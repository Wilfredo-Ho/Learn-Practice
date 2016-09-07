// 判断大鱼和果实的距离
function fruitMomCollision()
{
	if(baby.gameOver)
	{
		return;
	}
	for( var i = 0; i < fruit.num; i++)
	{
		if(fruit.alive[i])
		{
			var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			if(l < 900)
			{
				fruit.dead(i);
				data.fruitNum ++;
				mom.bigBodyCount ++;
				if(mom.bigBodyCount > 7)	mom.bigBodyCount = 7;

				if(fruit.fruitType[i] == "blue")
				{
					data.scoreDou = 2;
					data.score += 500;
				}else
				{
					data.scoreDou = 1;
					data.score += 100;
				}
				swim.born(fruit.x[i],fruit.y[i]);
			}
		}
	}
}

// mom baby collision
function momBabyCollision()
{
	if(data.fruitNum == 0  || baby.gameOver)
	{
		return;
	}
	var l = calLength2(mom.x,mom.y,baby.x,baby.y);
	if(l < 900)
	{
		baby.babyBodyCount = 0;
		data.reset();
		mom.bigBodyCount = 0;
		feed.born(baby.x,baby.y);
	}
}