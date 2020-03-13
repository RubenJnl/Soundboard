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
            
            
            const update = document.getElementById('update')
            update.innerHTML = `<h3>Er is een update beschikbaar!</h3>
                                <button id="updateSB" class="update">Update soundboard</button>`;
            update.classList.add('update-wrapper--shown');
            
            const updateBtn = document.getElementById('updateSB');
            updateBtn.addEventListener('click', () => {
                console.log('clicked 🔰')

                workbox.addEventListener('controlling', () => {
                    window.location.reload();
                });

                workbox.messageSW({ type: "SKIP_WAITING" })
            }, { once: true })

        })
    })


}