const audio = new Audio();


function playSoundtrack() {

    audio.src = "../music/soundtracksnake.mp3"

    audio.play()

}

function pauseSoundtrack() {

    audio.pause()

}