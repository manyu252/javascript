(function() {
	var canvas = document.getElementById('canvas'),
	    context = canvas.getContext('2d'),
	    video = document.getElementById('video'),
	    vendorURL = window.URL || window.webkitURL;
	
	navigator.getMedia = navigator.mediaDevices.getUserMedia || navigator.mozGetUserMedia;

	navigator.getUserMedia({
		video: true,
		audio: false
	}, function(stream) {
		video.src = vendorURL.createObjectURL(stream);
		//video.play();
	}, function(error) {
		// An error occured
		// error.code
	});    
		
	video.onplay = function()
	{
		canvas.width = video.width;
		canvas.height = video.height;
		draw();
	};
	
	function draw()
	{
		context.drawImage(video, 150, 200, 100, 100, 0, 0, 100, 100);
		setTimeout(draw,500);
	}

})();