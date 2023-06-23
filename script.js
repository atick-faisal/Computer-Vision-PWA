window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default prompt from showing
    event.preventDefault();

    // Show the install button
    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
        // Show the install prompt
        event.prompt();

        // Wait for the user to respond to the prompt
        event.userChoice.then((choiceResult) => {
            // Check if the user accepted or dismissed the prompt
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }

            // Hide the install button
            installButton.style.display = 'none';
        });
    });
});