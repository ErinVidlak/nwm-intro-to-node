// console.log(global.process)
// console.log(process)
// console.log(process.argv)
// the arguments are what we pass in as a command
// node process.js 
// ^path for where node is installed, path for where process.js is

// console.log(__dirname);
// console.log(__filename);



const { version, platform, pid } = process;
console.log(`Node.js Version: ${version}`);
console.log(`Platform: ${platform}`);
console.log(`Process ID: ${pid}`);

function getMemory() {
    const { rss, heapTotal, heapUsed, external } = process.memoryUsage();
    // console.log(`Memory Usage: ${JSON.stringify(process.memoryUsage)}`)
    console.log(rss);
    console.log(heapTotal);
    console.log(heapUsed);
    console.log(external);
}

setInterval(getMemory, 5000)