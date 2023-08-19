//let albumCoverArt = null;
//let albumArtBackground = null;
let albumTitle = "";
let albumArtist = "";

// var timelineCanvas = document.getElementById("timeline");
// var timelineCanvasCtx = timelineCanvas.getContext("2d");
// var color = getComputedStyle(document.body).getPropertyValue('--color5');
// var color1 = color.replace(')', ', ' + 0.2 + ')').replace('rgb', 'rgba');
// var color2 = color.replace(')', ', ' + 0.6 + ')').replace('rgb', 'rgba');

function wallpaperMediaPropertiesListener(event)
{
    if ((event.title != "") && (event.artist != ""))
	{
		// Update title and artist labels
		trackTitle.textContent = "Now playing: " + event.title;
		artist.textContent = "Artist: " + event.artist;
	}
	else 
	{
		// Update title and artist labels - placeholder
		trackTitle.textContent = "PAUSED";
		artist.textContent = "NO DISC";
	}
}

// Find all required elements
trackTitle = document.getElementById('title');
artist = document.getElementById('artist');

// Register the media property listener provided by Wallpaper Engine.
window.wallpaperRegisterMediaPropertiesListener(wallpaperMediaPropertiesListener);