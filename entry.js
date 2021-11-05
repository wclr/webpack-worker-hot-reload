const worker = new Worker(new URL("./worker.js", import.meta.url));

console.log('Hell entry2')

module.hot.accept()
