var images=["spriteSheets/player.png","spriteSheets/two.png"];
var sounds=["audio/bossBattle.mp3","audio/bossBattle2.mp3","audio/bossBattle3.mp3","audio/hitBorder.mp3","audio/whooshBang.mp3"];
var loadedImages=new Array();
var loadedSounds=new Array();

loadGame();

function loadGame(){
	myCanvas.width=window.innerWidth;
	myCanvas.height=window.innerHeight;
	loadImages();
}

function loadImages(){
	for(var i=0,y=images.length;i<y;i++){
		var img=new Image();
		img.onload=function(){
			loadedImages.push(this);
			imageProgress();
		} 
		img.src=images[i];
	}
}

function loadSounds(){
	for(var i=0,y=sounds.length;i<y;i++){
		loadedSounds.push(new Audio(sounds[i]));
	}
}

function imageProgress(){
	var percent=loadedImages.length/images.length*100;
	if(percent=="100"){loadSounds();}
}
