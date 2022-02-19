import(/*webpackChunkName: "soundboard-styles"*/ "./../../app-shell/soundboard.critical.css");

import API from "./../../helpers/API";

const previouslyPlayed = {}

const getSoundInfo = sound => {
    if (sound.file && sound.title){
        return `<button data-file="${sound.file}">${sound.title} <em>${sound.subtitle ? sound.subtitle : ''}</em></button>`;
    } else {
        return ''
    }
};

const getSounds = sound => {
    let str = ``
    if (sound.file){
        str += `<audio id="${sound.file}" preload="false" webkit-playsinline>`

        if (sound.mp3) {
            str += `<source src="assets/sounds/${sound.file}.mp3" type="audio/mp4">`
        }
        if (sound.m4a){
            str += `<source src="assets/sounds/${sound.file}.m4a" type="audio/mp4">`
        }
        if (sound.ogg){
            str += `<source src="audio/${sound.file}.ogg" type="audio/ogg"></source>`
        }
        str += `</audio>`
    }
    return str
}

API.get("sounds.json").then(sounds => {
    
    let buttons = "";
    let soundEl = "";
    
    sounds.forEach(sound => {
        buttons += getSoundInfo(sound);
        soundEl += getSounds(sound);
    });

    $(".sounds").innerHTML = buttons;
    $(".soundfiles").innerHTML = soundEl;

    sounds.forEach(sound => {
        const soundEl = document.getElementById(sound.file);

        const button = document.querySelector('button[data-file="'+ sound.file +'"');

        const preload = (soundEl, e) => {
            if(!soundEl.classList.contains('loaded')){
                soundEl.load()
                soundEl.classList.add('loaded')
                if (typeof gtag === 'function') {
                    gtag('event', 'mouse', {
                        'event_category': 'preload',
                        'value': sound.file
                    })
                }
            }
        }
        button.addEventListener('mouseenter', preload.bind(this, soundEl));
        button.addEventListener('mouseenter', preload.bind(this, soundEl));


        button.addEventListener('click', () => {
            const name = soundEl.getAttribute('id')

            if (typeof previouslyPlayed[name] === 'undefined') {
                previouslyPlayed[name] = new Audio(soundEl.currentSrc)

                previouslyPlayed[name].addEventListener('ended', () => {
                    button.classList.remove('active')
                })
            }

            if (previouslyPlayed[name].paused === true){
                previouslyPlayed[name].play()
                button.classList.add('active')

                if (typeof gtag === 'function') {
                    gtag('event', 'click', {
                        'event_category': 'play',
                        'value': sound.file
                    })
                }
                
            }
        });

        // lazy load fork
        import ( /*webpackChunkName: "fork"*/ "./../../components/fork/fork.js");


    });

});
