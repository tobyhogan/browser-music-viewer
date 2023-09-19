'use client';

import React, { useEffect, useState, useRef } from "react";
import ReactDOM from 'react-dom';



const Track = ({source, isPlaying}) => {

    const [trackTimeProgress, updateTrackTimeProgress] = useState(0);

    const myaudio = useRef(null); //useRef(null);

    //className="bg-green-300 w-10 h-10"


    const [val, setVal] = useState(84);
    const inputRef = useRef(null);




    const MyAudio = React.forwardRef((props, ref) => {

        return (

                    
        <audio controls controlsList="nodownload noplaybackrate" ref={ref} src={source} type="audio/mp3" className="">
            Your browser does not support the audio element.
            {props.children}
        </audio>

        );

    });

    const [audio1, setAudio1] = useState(null)
    
    useEffect(() => {

      setAudio1(new Audio(source));
    // only run once on the first render on the client
    }, [])


    ReactDOM.render(audio1, document.getElementById("track-container"));




    function updateVolume(event) {

        myaudio.current.volume = event.target.value / 100;

    }

    useEffect(() => {
        inputRef.current.addEventListener("input", updateVolume);
    }, []);



    if (isPlaying == false) {






        console.log("current time through track: " + myaudio.current.currentTime)

        updateTrackTimeProgress(myaudio.current.currentTime)

        myaudio.current.pause();



    } else if (isPlaying == true) {



        //updateTrackTimeProgress(myaudio.current.currentTime)


        myaudio.current.play();

    }

    

    
    return (


        <div className="track flex">

            <MyAudio ref={myaudio}/>

            <div className="flex audio-controls w-32 h-15 bg-white rounded-lg ml-2">
                <input onChange={updateVolume} ref={inputRef} type="range" id="volume-knob" min="0" max="100" value={val} data-diameter='50' data-bgcolor="#a8a7b5" data-fgcolor="#4a4a4a" className="input-knob volume-knob outline-none focus:outline-none outline-transparent border-transparent focus:ring-0"/>
                
            </div>

        </div>

    );
};

export default Track;

// <input onChange={myFunc} id="volume-knob" min="0" max="100" className="input-knob volume-knob outline-none focus:outline-none outline-transparent border-transparent focus:ring-0"/>




