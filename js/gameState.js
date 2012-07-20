/**
 * @author William Blankenship
 * This file will contain the methods that changes the game state based
 * on the user's input.
 * 
 * Depends on: animatePlayer.js
 */

function changeGameState () {
	if(currentKey > 0)
	{
		switch(currentKey)
		{
		case 87: case 38:
			playerWalkUp();
			break;
		case 68: case 39:
			playerWalkRight();
			break;
		case 83: case 40:
			playerWalkDown();
			break;
		case 65: case 37:
			playerWalkLeft();
			break;
		default:
			playerIdle();
		}
	}
	else
	{
		playerIdle();
	}
}