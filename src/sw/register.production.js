import { Workbox } from 'workbox-window';


// this file is only included in production builds
// register service workere in this file
if ('serviceWorker' in navigator) {
    // do not use on vue or react, use appready event!
    window.addEventListener('load', () => {

        const workbox = new Workbox('/sw.js')
        workbox.register();
        workbox.addEventListener('waiting', (event) => {
            console.log('🔰 update available');
            if (typeof gtag === 'function') {
                gtag('event', 'update', {
                    'value': 'show'
                })
            }
            
            const update = document.getElementById('update')
            update.innerHTML = `<h3>Er is een update beschikbaar!</h3>
                                <button id="updateSB" class="update">Update soundboard</button>`;
            update.classList.add('update-wrapper--shown');
            
            const updateBtn = document.getElementById('updateSB');
            updateBtn.addEventListener('click', () => {
                console.log('clicked 🔰')

                if (typeof gtag === 'function') {
                    gtag('event', 'update', {
                        'value': 'click'
                    })
                }

                workbox.addEventListener('controlling', () => {
                    console.log('reload 🔁');
                    gtag('event', 'update', {
                        'value': 'reload'
                    })
                    window.location.reload();
                });

                workbox.messageSW({ type: "SKIP_WAITING" })
            }, { once: true })

        })
    })


}