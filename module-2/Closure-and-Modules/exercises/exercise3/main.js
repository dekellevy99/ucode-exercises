const SongsManager = function(){
    const _songs = {};

    const addSong = function(songName, url){
        let identifier = url.substring(url.indexOf("=")+1);
        _songs[songName] = identifier;
    }

    const getSong = function(songName){
        const prefixUrl = "https://www.youtube.com/watch?v="
        if(_songs[songName]){
            return `${prefixUrl}${_songs[songName]}`;
        }
    }

    return {
        addSong: addSong,
        getSong: getSong
    };
}

songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
console.log(songsManager.getSong("sax"))
console.log(songsManager.getSong("how long"))
console.log(songsManager.getSong("ain't me"))