let songs = [
    "songs/song1.mp3",
    "songs/song2.mp3"
];

let index = 0;
let player = document.getElementById("player");

// PLAY / RESUME
function playSong() {
    if (player.src.includes(songs[index])) {
        player.play(); // resume
    } else {
        player.src = songs[index];
        player.play();
    }

    updateSongName();
}

// PAUSE
function pauseSong() {
    player.pause();
}

// NEXT
function nextSong() {
    index = (index + 1) % songs.length;
    player.src = songs[index];
    player.play();
    updateSongName();
}

// PREVIOUS
function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    player.src = songs[index];
    player.play();
    updateSongName();
}

// UPDATE SONG NAME
function updateSongName() {
    let name = songs[index].split("/").pop().replace(".mp3", "");
    document.getElementById("songName").innerText = name;
}

// AUTO NEXT
player.onended = function () {
    nextSong();
};