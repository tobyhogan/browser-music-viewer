import { Glob } from '../node_modules/glob/dist/cjs/src/glob.js'


console.log("working00");




var musicDir = "/assets/music"
var currentSong = "sweep-me-off-my-feet";

const files = glob.sync(musicDir + currentSong + "/**/*");

function playAllAudio() {

    const elements = document.querySelectorAll(".track");


    for(let i = 0; i < elements.length; i++) {

    
        const audioElement = elements[i].querySelector("audio");

        console.log(audioElement);

        audioElement.play();
    
    
    
    }    
}

function pauseAllAudio() {

    const elements = document.querySelectorAll(".track");


    for(let i = 0; i < elements.length; i++) {

    
        const audioElement = elements[i].querySelector("audio");

        console.log(audioElement);

        audioElement.pause();
    
    
    
    }    
}

function stopAllAudio() {

    const elements = document.querySelectorAll(".track");


    for(let i = 0; i < elements.length; i++) {

    
        const audioElement = elements[i].querySelector("audio");

        console.log(audioElement);

        audioElement.pause();
        audioElement.currentTime = 0;
    
    
    
    }    
}

var slider = document.getElementById("volume-knob");

slider.addEventListener("input", (event) => {console.log(event.target.value); })

console.log(slider.value)