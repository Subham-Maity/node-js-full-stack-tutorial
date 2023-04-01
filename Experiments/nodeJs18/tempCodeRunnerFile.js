const start = () => console.log("Starting index.js");
const sec0 = () => setTimeout(() => console.log('Delay 0 seconds..'), 0);
const sec2 = () => setTimeout(() => console.log("Delay 2 seconds.."), 200);
const end = () => console.log("Finished index.js");

start();
sec0();
sec2();
end();