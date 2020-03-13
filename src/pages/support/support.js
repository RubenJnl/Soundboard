window.addEventListener('beforeinstallprompt', event => {
    // prevent chrome default snackbar/minibar for install webapp
    event.preventDefault();


    const addBtn = document.getElementById('AddHomescreen');
    addBtn.style.display = 'block'; // replace with class for show

    addBtn.addEventListener('click', () => {
        // show prompt
        event.prompt();
        event.userChoice.then(result => {
            console.log(result.outcome);
            // send result.outcome to analytics! 

        })
    })

});