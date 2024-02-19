document.addEventListener("DOMContentLoaded", () => {
    var HlsVideo = document.getElementById('HlsPlayer3');

    var HlsVideoSrc = "assets/master.m3u8";
    const defaultOptions = {};

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(HlsVideoSrc);
        hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
            const availableQualities = hls.levels.map((l) => l.height)

            defaultOptions.controls = 
            [
                'play-large', 
                'play', 
                'progress',
                'mute', 
                'volume', 
                'captions', 
                'settings', 
            ];
            defaultOptions.quality = {
                default: availableQualities[0],
                options: availableQualities,
                forced: true,
                onChange: (e) => updateQuality(e)
            }
            
            const plyr1 = new Plyr(HlsVideo, defaultOptions);
            
        });
        hls.attachMedia(HlsVideo);

        window.hls = hls;
    }
    function updateQuality(newQuality) {
        window.hls.levels.forEach((level, levelIndex) => {
            if(level.height === newQuality){
                window.hls.currentLevel = levelIndex
            }
        })
    }
})