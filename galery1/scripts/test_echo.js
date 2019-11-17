function echo(text, time) {
    new Promise((resolve) => {
        console.log(text);
        setTimeout(() => {
            resolve();
        }, 1000);
    }).then(() => {
        console.log(2, text);
    })
}
echo('ciasteczko', 1000);