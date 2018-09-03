// Put event listeners into place
        window.addEventListener("DOMContentLoaded", function() {
            // Grab elements, create settings, etc.
            var canvas = document.getElementById("canvas"),
                context = canvas.getContext("2d"),
                video = document.getElementById("video"),
                videoObj = { 
                    video: {
                        mandatory: {
                            minWidth: 1280,
                            minHeight: 720,
                            /*Added by Chad*/
                            maxWidth: 1280,
                            maxHeight: 720
                        }
                    }
                },
                errBack = function(error) {
                    console.log("Video capture error: ", error.code); 
                };

            // Put video listeners into place
            if(navigator.getUserMedia) { // Standard
                navigator.getUserMedia(videoObj, function(stream) {
                    video.src = stream;
                    video.play();
                }, errBack);
            } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
                navigator.webkitGetUserMedia(videoObj, function(stream){
                    video.src = window.URL.createObjectURL(stream);
                    video.play();
                }, errBack);
            } else if(navigator.mozGetUserMedia) { // WebKit-prefixed
                navigator.mozGetUserMedia(videoObj, function(stream){
                    video.src = window.URL.createObjectURL(stream);
                    video.play();
                }, errBack);
            }

            /*
                video : video source tag
                320,0 : the shift coords
                320,180 : the canvas size
                0,0 : no shift in the canvas
                640,360 : important ! it’s the native resolution of video source
            */
            context.scale(3.8,3.8);

            function loop(){
               context.drawImage(video, 450, 0, 1080, 1920, 0, 0, 720, 1280);
               setTimeout(loop, 1000 / 30);
            }

            loop();


        }, false);