const cp = require("child_process");

cp.exec("node readStream", (err, data, stderr) => {
  console.log(data);
});

console.log('This has executed the readstream.js file')
