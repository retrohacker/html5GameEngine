/**
 * @author William Blankenship
 * 
 * This file will call each of the functions that renders the currentframe
 * 
 * depends on: changeGameState.js
 * 			   animatePlayer.js
 * 			   drawAnimation.js
 * 
 * depends on me: globalVariables.js (however this file can be imported
 * 									  after globalVariables)
 */

function renderFrame() {
	changeGameState();
	gameWindow.clearRect(0, 0, canvas.width, canvas.height);
	renderTerrain();
	renderObjects();
	drawPlayer();
	FramesRendered++;
	document.getElementById("framesLoaded").innerHTML = "FRAMES RENDERED: "+FramesRendered;
}