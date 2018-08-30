(function() {
	var canvas = document.getElementById('canvas'),
//	    context = canvas.getContext('2d'),
	    video = document.getElementById('video'),
	    vendorURL = window.URL || window.webkitURL;

//	navigator.getMedia = navigator.mediaDevices.getUserMedia || navigator.mozGetUserMedia;

	navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false
	}, function(stream) {
		video.src = vendorURL.createObjectURL(stream);
		video.play();
	}, function(error) {
		// An error occured
		// error.code
	});    
})();
