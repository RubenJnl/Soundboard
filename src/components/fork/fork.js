import(/*webpackChunkName: "soundboard-fork"*/ "./../../components/fork/fork.css")

const addFork = () => {
    let forkEl = document.getElementById('forkOnGithub')
    
    let octo = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 32 33">
                    <g data-name="Layer 2">
                        <path fill-rule="evenodd" data-name="Octo" d="M16.288 0a16.291 16.291 0 00-5.147 31.747c.814.149 1.111-.354 1.111-.786 0-.386-.014-1.41-.022-2.77-4.53.984-5.487-2.184-5.487-2.184a4.314 4.314 0 00-1.809-2.383c-1.479-1.01.112-.99.112-.99a3.422 3.422 0 012.495 1.679 3.468 3.468 0 004.741 1.353 3.48 3.48 0 011.034-2.177c-3.617-.411-7.42-1.809-7.42-8.051a6.297 6.297 0 011.677-4.371 5.859 5.859 0 01.16-4.311s1.368-.438 4.48 1.67a15.44 15.44 0 018.156 0c3.11-2.108 4.475-1.67 4.475-1.67a5.85 5.85 0 01.162 4.31 6.286 6.286 0 011.674 4.372c0 6.258-3.808 7.635-7.437 8.038a3.888 3.888 0 011.106 3.017c0 2.177-.02 3.934-.02 4.468 0 .436.293.943 1.12.784A16.292 16.292 0 0016.289 0z"/>
                    </g>
                </svg>`;
    let forkAnchor = `<a href="https://github.com/RubenJnl/Soundboard" id="toFork" target="_blank" rel="noopener" title="Additions? Fork and send me a PR"> ${octo} </a>`
    
    forkEl.innerHTML = forkAnchor;
    forkEl.style = '';
    
    setTimeout(() => {
        forkEl.classList.add('is-shown')
    }, 500);
    
    const forkLinkEl = forkEl.querySelector('a')

    forkLinkEl.addEventListener('click', () => {
        if (typeof gtag === 'function'){
            gtag('event', 'click', {
                'event_category': 'link',
                'value': 'github'
            })
        }
    })

    forkEl.addEventListener('mouseenter', () => {
        if (typeof gtag === 'function'){
            gtag('event', 'mouse', {
                'event_category': 'enter',
                'value': 'github'
            })
        }
    })

    forkEl.addEventListener('mouseleave', () => {
        if (typeof gtag === 'function'){
            gtag('event', 'mouse', {
                'event_category': 'leave',
                'value': github
            })
        }
    })
    
    
}

addFork();
