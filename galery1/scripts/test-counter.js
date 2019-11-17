function delay(time) {
    return new Promise((resolve) => {
        //resolve - pomyślne zakończenie
               setTimeout((resolve, time) => {
                     
        }, 1000);
    });
}
function counter() {
    console.log(Date.now());
    delay(1000)
        .then(() => {
            console.log(Date.now());
            return delay(1000);
        })
        .then(() => {
            console.log(Date.now());
            return delay(1000);
        }).then(() => {
            console.log(Date.now());
            return delay(1000);
        })
        .then(() => {
            console.log(Date.now());
            return delay(1000);
        })
}

counter();