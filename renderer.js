// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const React = require('react');
const e = React.createElement;
const ReactDOM = require('react-dom');


const App = function() {
  return e('div', null,
    e('div', null, 'We are using Node.js ', process.versions.node),
    e('div', null, 'Chromium ', process.versions.chrome),
    e('div', null, 'Electron ', process.versions.electron),
    e('div', null, 'Webpack ', require('webpack/package.json').version),
    e('div', null, 'and React ', require('react').version)
  )
};


const rootElement =
  document.getElementById('root') ||
  document.createElement('div');

function render() {
  ReactDOM.render(e(App), rootElement);
}

render();
