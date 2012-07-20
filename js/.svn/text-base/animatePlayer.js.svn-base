/**
 * @author William Blankenship
 * 
 * This file contains all the scripts to control the player animation
 * 
 * Depends on: drawAnimation.js
 * Depends on me: gameState.js
 */
var xSpeed = 10;
var ySpeed = 10;
function drawPlayer() {
	playerAnimation = player[0];
	currentFrame = player[1];
	screenPosX = (myCanvas.width / 2 - TileSize / 2);
	screenPosY = (myCanvas.height / 2 - TileSize / 2);
	
	renderAnimation(playerAnimation, currentFrame, screenPosX, screenPosY);
}

//Direction (player [7]) 0 = up, 1 = right, 2 = down, 3 = left.
function playerWalkUp()
{
	player[0] = 1;
	player[1]++;
	player[7] = 0;
	if(player[3] >= ySpeed && collisionDetection(0)!=1)
	{
		player[3] -= ySpeed;
	}
	else{var hitWall=new Audio("audio/hitBorder.mp3").play();}
}

function playerWalkRight()
{
	player[0] = 3;
	player[1]++;
	player[7] = 1;
	if(player[2] <= ((mapSizeX-1) * 32 - xSpeed)  && collisionDetection(1)!=1)
	{
		player[2] += xSpeed;
	}
	else{var hitWall=new Audio("audio/hitBorder.mp3").play();}
}

function playerWalkDown()
{
	player[0] = 5;
	player[1]++;
	player[7] = 2;
	if(player[3] <= ((mapSizeY-1) * 32 - ySpeed) && collisionDetection(2)!=1)
	{
		player[3] += ySpeed;
	}
	else{var hitWall=new Audio("audio/hitBorder.mp3").play();}
}

function playerWalkLeft()
{
	player[0] = 7;
	player[1]++;
	player[7] = 3;
	if(player[2] >= xSpeed && collisionDetection(3)!=1)
	{
		player[2] -= xSpeed;
	}
	else{var hitWall=new Audio("audio/hitBorder.mp3").play();}
}

function playerIdle()
{
	switch(player[7])
	{
	case 0:
		player[0] = 0;
		break;
	case 1:
		player[0] = 2;
		break;
	case 2:
		player[0] = 4;
		break;
	case 3:
		player[0] = 6;
		break;
	}
	player[1] = 0;
}

function collisionDetection(direction)
{
	//0 = up, 1 = right, 2 = down, 3 = left
	var playerX = player[2];
	var playerY = player[3];
	var boxSize = 5;
	switch(direction)
	{
		case 0:
			for(var i = 0; i < totalObjects; i++)
			{
				var objX = object[i][1];
				var objY = object[i][2];
				if(((playerY + TileSize / 2) + boxSize > objY) && (objY > ((playerY - TileSize / 2)- ySpeed) - boxSize) && ((playerX + TileSize / 2) + boxSize > objX)&&(objX >((playerX - TileSize / 2)) - boxSize))
				{
					player[3]+=3;
					return 1;
				}
			}
			break;
		case 1:
			for(var i = 0; i < totalObjects; i++)
			{
				var objX = object[i][1];
				var objY = object[i][2];
				if(((playerY + TileSize / 2) + boxSize > objY)&& (objY > (playerY - TileSize / 2) - boxSize) && (((playerX + TileSize / 2) + xSpeed) + boxSize > objX)&&(objX >((playerX - TileSize / 2)) - boxSize))
				{
					player[2]-=3;
					return 1;
				}
			}
			break;
		case 2:
			for(var i = 0; i < totalObjects; i++)
			{
				var objX = object[i][1];
				var objY = object[i][2];
				if((((playerY + TileSize / 2) + ySpeed + boxSize) > objY)&& (objY > (playerY - TileSize / 2) - boxSize) && ((playerX + TileSize / 2) + boxSize > objX)&&(objX >((playerX - TileSize / 2))-boxSize))
				{
					player[3]-=3;
					return 1;
				}
			}
			break;
		case 3:
			for(var i = 0; i < totalObjects; i++)
			{
				var objX = object[i][1];
				var objY = object[i][2];
				if(((playerY + TileSize / 2) + boxSize > objY)&& (objY > (playerY - TileSize / 2) - boxSize) && (((playerX + TileSize / 2)) + boxSize > objX)&&(objX >((playerX - TileSize / 2)-xSpeed) - boxSize))
				{
					player[2]+=3;
					return 1;
				}
			}
			break;
	}
}
