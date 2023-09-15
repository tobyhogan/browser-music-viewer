console.log("working00");

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

