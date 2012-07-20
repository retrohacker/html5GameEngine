/**
 * @author William Blankenship
 */

/**
 * This will render an animation to the screen. This function should not
 * be called directly from a main method, but referenced inside other
 * rendering scripts for characters and the player objects.
 * animationIndex = the array index for the array being drawn
 * currentFrame = the frame of the animation to render
 * screenX and screenY = the X,Y coordinate to render the frame at
 * 
 * 
 * Depends on me: animatePlayer.js
 */
function renderAnimation(animationIndex, currentFrame, screenX, screenY)
{
	//The variable TileSize is declared in globalVariables.js and controls
	//the size of every object being placed in a tile
	spriteSheet = animation[animationIndex][0];
	totalFrames = animation[animationIndex][1];
	spriteWidth = animation[animationIndex][4];
	spriteHeight = animation[animationIndex][5];
	/* We assume ALL sprites in an animation are in sequential order,
	 * evenly spaced, of equal size and on the same row of the same sprite
	 * sheet. If your sprite sheet does not match this criteria you are
	 * wrong. fix it. now.
	 */
	topXpixel = ((animation[animationIndex][2] * spriteWidth ) + (currentFrame % totalFrames) * spriteWidth);
	topYpixel = (animation[animationIndex][3]) * spriteHeight;
	gameWindow.drawImage(spriteSheets[spriteSheet], topXpixel, topYpixel, spriteWidth, spriteHeight, screenX, screenY, TileSize, TileSize);
	//document.getElementById("feedback").innerHTML = "CurrentFrame:"+currentFrame+" SpriteSheet:"+spriteSheet+" TotalFrames"+totalFrames+" TopXPixel: "+topXpixel+"TopYPixel"+topYpixel+"Width"+spriteWidth+"H"+spriteHeight
}

function renderAnimationToMap(animationIndex, currentFrame, mapX, mapY)
{
	var screenX = (mapX) - (player[2] - (myCanvas.width / 2 - TileSize / 2));
	var screenY = (mapY) - (player[3] - (myCanvas.height / 2 - TileSize / 2));
	renderAnimation(animationIndex, currentFrame, screenX, screenY)
}