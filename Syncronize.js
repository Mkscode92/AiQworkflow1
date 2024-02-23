var MainVideo = document.getElementById("Avideo");
var VideoB = document.getElementById("Bvideo");
var VideoC = document.getElementById("Cvideo");
var VideoD = document.getElementById("Dvideo");
var select = document.getElementById("select");

var EnglishSrc =  "audio/Leo1080p_English_with_CC.mp3"
var VietnameseSrc = "audio/4. Leo - Netflix - Vietnamese audio sound track.mp3"
var SpanishSrc = "audio/7. Leo - Netflix - Spanish audio sound track.wav"

var EnglishAudio = new Howl({
    src: EnglishSrc
});
var SpanishAudio = new Howl({
    src: SpanishSrc
})
var VietnameseAudio = new Howl({
    src: VietnameseSrc
})
var audiolist = [EnglishAudio,SpanishAudio,VietnameseAudio]
var audio = EnglishAudio

select.addEventListener("change", function() {
    audio.pause();
    audio = audiolist[select.value]
    
    audio.play();
})


MainVideo.addEventListener("play", function() {

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


MainVideo.addEventListener("seeked", async function() {
    var MT = MainVideo.currentTime;
    VideoB.currentTime = MT;
    VideoC.currentTime = MT;
    VideoD.currentTime = MT;
})

MainVideo.addEventListener("timeupdate",() => {
    if (Math.abs(MainVideo.currentTime - audio.seek())) {
        audio.seek(MainVideo.currentTime);
    }
})

var tag = document.getElementById("debugger");
MainVideo.addEventListener("waiting", function() {
    tag.textContent = "waiting";
})
MainVideo.addEventListener("playing", function() {
    tag.textContent = "playing";
})
