function onClick() {
    return new Promise((resolve, reject) => {
        document.addEventListener('click', () => {
            resolve();
        });
    });
}


    onClick()
        .then(() => {
            console.log('Strona zostałą kliknięta');
        });