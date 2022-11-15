function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}


const start = Date.now();
sleep(3000).then(() => {
    const end = Date.now();
    console.log(end - start);
});

