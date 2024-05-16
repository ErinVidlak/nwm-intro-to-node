// Logging basic process information
console.log(`Node.js Version: ${process.version}`)
console.log(`Platform: ${process.platform}`)
console.log(`Process ID: ${process.pid}`)

// Function to log memory usage
function logMemoryUsage() {
    const usage = process.memoryUsage()
    console.log(`Memory Usage: {
        rss: ${usage.rss},
        heapTotal: ${usage.heapTotal},
        heapUsed: ${usage.heapUsed},
        external: ${usage.external}
    }`)
}

// Log initial memory usage
logMemoryUsage()

// Set an interval to log memory usage every 5 seconds
setInterval(logMemoryUsage, 5000)
