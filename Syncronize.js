var MainVideo = document.getElementById("Avideo");
var VideoB = null;
var VideoC = null;
var VideoD = null;

var audio = document.getElementById("audio")
var audiosrc = null;
var select = document.getElementById("select");

var EnglishTrack =  "audio/Leo1080p_English_with_CC.mp3"
var VietnameseTrack = "audio/4. Leo - Netflix - Vietnamese audio sound track.mp3"

audio.src = EnglishTrack;
audio.volume = 0.4;

select.addEventListener("change", function() {
    audio.src = select.value; 
    audio.play();
})


MainVideo.addEventListener("play", function() {
    VideoB = document.getElementById("Bvideo");
    VideoC = document.getElementById("Cvideo");
    VideoD = document.getElementById("Dvideo");
    VideoB.play();
    VideoC.play();
    VideoD.play();


    VideoB.volume = 0;
    VideoC.volume = 0;
    VideoD.volume = 0;

    audio.play();

})

MainVideo.addEventListener("pause", function() {
    VideoB.pause();
    VideoC.pause();
    VideoD.pause();

    audio.pause();
})


MainVideo.addEventListener("timeupdate", async function() {
    var MT = MainVideo.currentTime;

    if (Math.abs(VideoB.currentTime - MT) > 0.1) {
        VideoB.currentTime = MT;
    }
    if (Math.abs(VideoC.currentTime - MT) > 0.1) {
        VideoC.currentTime = MT;
    }
    if (Math.abs(VideoD.currentTime - MT) > 0.1) {
        VideoD.currentTime = MT;
    }

    if (Math.abs(VideoD.currentTime - MT) > 0.1) {
        VideoD.currentTime = MT;
    }

    if (Math.abs(audio.currentTime - MT) > 0.1) {
        audio.currentTime = MT;
    }
    
})

