/**
 * @author William Blankenship
 * 
 * This file will hold all of the global variables that control the game.
 * 
 * FOR SCIENCE!!!!!
 * 
 * Dependencies: none
 * Files that depend on me: ALL FILES!
 */

/**
 * GLOBALS FOR RENDERING
 */
var FramesRendered = 0;
var TileSize = 32; //MOST IMPORTANT VARIABLE! THIS DETERMINES HOW LARGE
				   //EACH TILE IN THE GAME WILL BE! ALL IMAGES WILL BE
				   //DRAWN BASED ON THIS STATISTIC UNLESS MANUALLY
				   //OVERRIDED!
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

/**
 * Each spriteSheet will be declared as such:
 * spriteSheets[i].src = "[URL]";
 * were i is the index number
 */
var totalSpriteSheets = 4;
var spriteSheetsToLoad = new Array(totalSpriteSheets);
var spriteSheets = new Array(totalSpriteSheets)
for(var i = 0; i < totalSpriteSheets; i++){spriteSheets[i] = new Image();}
spriteSheets[0].src = "spriteSheets/player.png";
spriteSheets[2].src = "spriteSheets/terrain.png";
spriteSheets[3].src = "spriteSheets/house_sprites.png"

/**
 * Each animation will be stored in a 2D array were the first index number
 * is the animation ID number and the second index stores the variables
 * used to load the animation from the sprite sheet. The second index will
 * have 6 frames and works as follows:
 * [spriteSheets index]
 * [number of frames]
 * [Top Left X coordinate on sprite sheet] (in terms of TILES not pixels)
 * [Top Left Y coordinate on sprite sheet] (in terms of TILES not pixels)
 * [Sprite Width] (in terms of PIXELS not tiles)
 * [Sprite Height] (in terms of PIXELS not tiles)
 * 
 * Declare each animation as follows (MUST BE AN ARRAY LESS YOU BREAK THE
 * GAME AND I KILL YOU!!!!!!):
 * animation[i] = new Array(x,x,x,x,x,x);
 * 
 * **IMPORTANT NOTE***
 * We assume ALL sprites in an animation are in sequential order,
 * evenly spaced, and on the same row of the same sprite sheet.
 */
var totalAnimations = 9;
var animation = new Array(totalAnimations);
/*animation[0] = new Array(0, 13, 0, 0, 32, 32);
animation[1] = new Array(1, 10, 78, 0, 26, 26);*/


animation[0] = new Array(0, 1, 0, 1, TileSize, TileSize); //Player Standing Backward
animation[1] = new Array(0, 8, 0, 1, TileSize, TileSize); //Player Walking Backward
animation[2] = new Array(0, 1, 0, 3, TileSize, TileSize); //Player Standing Right
animation[3] = new Array(0, 4, 0, 3, TileSize, TileSize); //Player Walking Right
animation[4] = new Array(0, 1, 0, 0, TileSize, TileSize); //Player Standing Forward
animation[5] = new Array(0, 4, 0, 0, TileSize, TileSize); //Player Walking Forward
animation[6] = new Array(0, 1, 0, 2, TileSize, TileSize); //Player Standing Left
animation[7] = new Array(0, 4, 0, 2, TileSize, TileSize); //Player Walking Left
animation[9] = new Array(3, 1, 5, 0, TileSize, TileSize); //Tree



/**
 * This array will store the SPRITES OF OBJECTS (not their location on the
 * map!)
 * Each object will be as follows:
 * [animation]
 * [Sprite width]
 * [Sprite height]
 * 
 * Declare each animation as follows (MUST BE AN ARRAY LESS YOU BREAK THE
 * GAME AND I KILL YOU!!!!!!):
 * animation[i] = new Array(x,x,x,x,x);
 */
var totalObjectSprites = 1;
var objectSprites = new Array(totalObjectSprites);
objectSprites[0] = new Array(9, 26, 26);

/**
 * Objects will be stored in a 2d array as follows:
 * [objectSprites index]
 * [xpos on map]
 * [ypos on map]
 * [frame]
 * [is object solid] (0 = player will not collide, 1 = player collides)
 */

var totalObjects = 17;
var object = new Array(totalObjects);
object[0] = new Array(0, 200, 200, 0, 1);
for(var i = 0; i < totalObjects; i++)
{
	object[i] = new Array(0, i * (3 * TileSize), i* (3 * TileSize), 0, 1);
}

/**
 * The terrain array will store information about reading terrain from the
 * spriteSheets. It will be as follows:
 * [spriteSheets index]
 * [Top Right X coordinate on sprite sheet]
 * [Top Right Y coordinate on sprite sheet]
 * [Tile width]
 * [Tile height]
 */

/**
 * The terrain array will store information about reading terrain from the
 * spriteSheets. It will be as follows:
 * [spriteSheets index][cols][rows]
 * 
 * This function uses the TileSize variable to determine the size of the
 * tiles being loaded from the sprite
 */

var totalTerrainTiles = 10;
var terrain = new Array(2, 3, 4);


/**
 * Map will be one large 2D array. The first index is the x coordinate
 * the second index is the y coordinate. The object stored is a reference
 * to a terrain ID. The map stores terrain tiles ONLY.
 * To get the actual size of the map take the respective x,y sizes and
 * multiply by terrain[3] and terrain[4] respectively.
 */
var mapSizeX = 50;
var mapSizeY = 50;
var map  = new Array(mapSizeY);
for(var i = 0; i < mapSizeY; i++)
{
	map[i] = new Array(mapSizeX);
	for(var j = 0; j < mapSizeX; j++)
	{
		map[i][j] = Math.floor(Math.random()*10);
	}
}

/**
 * Player keeps track of everything related to the player's sprite.
 * It will be a single array that will be declared as follows:
 * [animation index]
 * [current frame of animation]
 * [xpos on map]
 * [ypos on map]
 * [xpos on screen]
 * [ypos on screen]
 * [is busy]
 * [direction]
 * 
 * is busy = if the player is pre-occupied with a task such as opening
 * 			 a door or walking between spaces, directional and objective
 * 			 input will be ignored.
 * direction = the direction the player is currently facing. This is for
 * 			   determining which sprites to display without excessive code
 * 			   0 = up, 1 = right, 2 = down, 3 = left.
 * 
 * **IMPORTANT NOTE***
 * We assume ALL sprites in an animation are in sequential order,
 * evenly spaced, and on the same row of the same sprite sheet.
 */

var player = new Array(0, 0, 50, 50, 0, 0);

var canvas = document.getElementById("myCanvas");
var gameWindow;
window.onload = function () {
	gameWindow = canvas.getContext("2d");
	setInterval("renderFrame()", 100);
}