import(/*webpackChunkName: "soundboard-styles"*/ "./../../app-shell/soundboard.critical.css");
import API from "./../../helpers/API";


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
        button.addEventListener('mouseenter', () => {
            if(!soundEl.classList.contains('loaded')){
                soundEl.load();    
                soundEl.classList.add('loaded')
            }
        });


        button.addEventListener('click', () => {
            if (soundEl.paused){
                soundEl.play();
            } else {
                soundEl.load();
            }
            
            button.classList.toggle('active');

           
        });
        
        soundEl.addEventListener('ended', (e) => {
            button.classList.toggle('active')
            
        })
    });

});
