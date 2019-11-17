function delay() {
    return new Promise((resolve, reject) => {
        //resolve - pomyślne zakończenie
        //rejec - zerwanie obietnicy
        setTimeout(() => {
            // resolve(); // => then
            reject('siema'); // => catch
        }, 1000);
    });
}
function main() {
    console.log('1');
    delay()
        .then(() => {
            console.log('3');
        })
        .catch((reason) => {
            console.log(reason);
        })
    console.log('2');
}

main();