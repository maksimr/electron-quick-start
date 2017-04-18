// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
console.log('We are using Node.js ', process.versions.node);
console.log('Chromium ', process.versions.chrome);
console.log('Electron ', process.versions.electron);
console.log('and Webpack ', require('webpack/package.json').version);
