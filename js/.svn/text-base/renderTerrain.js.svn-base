/**
 * @author William Blankenship
 * This file contains all functions and variables related to drawing
 * terrain to the screen
 */

function getTerrain(spriteIndex, xpos, ypos)
{
	//draw the sprite to the gameWindow at xpos ypos
	var totalSprites = terrain[1] * terrain[2];
	if (spriteIndex <= totalSprites)
	{
		var col = Math.floor(spriteIndex / terrain[1]);
		var row = (spriteIndex % terrain[1]);
		
		var topx = row * TileSize;
		var topy = col * TileSize;
		gameWindow.drawImage(spriteSheets[2], topx, topy, TileSize, TileSize, (xpos * TileSize) - (player[2] - (myCanvas.width / 2 - TileSize / 2)), (ypos * TileSize) - (player[3] - (myCanvas.height / 2 - TileSize / 2)), TileSize, TileSize);
	}
}

function renderTerrain()
{
	for (var i = 0; i < mapSizeY;i++)
    {
		for (var j = 0;j < mapSizeX;j++)
		{
			getTerrain(map[i][j], i, j);
		}
    }
}