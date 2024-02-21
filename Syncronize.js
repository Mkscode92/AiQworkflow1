var MainVideo = document.getElementById("Avideo");
var VideoB = null;
var VideoC = null;
var VideoD = null;


MainVideo.addEventListener("play", function() {
    VideoB = document.getElementById("Bvideo");
    VideoC = document.getElementById("Cvideo");
    VideoD = document.getElementById("Dvideo");
    VideoB.play();
    VideoC.play();
    VideoD.play();
    
})

MainVideo.addEventListener("pause", function() {
    VideoB.pause();
    VideoC.pause();
    VideoD.pause();
})


MainVideo.addEventListener("timeupdate", async function() {
    var MT = MainVideo.currentTime;

    if (Math.abs(VideoB.currentTime - MT) > 0.1) {
        VideoB.currentTime = MT;
        VideoB.mute()
    }
    if (Math.abs(VideoC.currentTime - MT) > 0.1) {
        VideoC.currentTime = MT;
        VideoC.mute()
    }
    if (Math.abs(VideoD.currentTime - MT) > 0.1) {
        VideoD.currentTime = MT;
        VideoD.mute()
    }
    
})

