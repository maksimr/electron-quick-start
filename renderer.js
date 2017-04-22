// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React, {createElement as e} from 'react';
import {render} from 'react-dom';


const App = () => {
  return e('div', null,
    e('div', null, 'We are using Node.js ', process.versions.node),
    e('div', null, 'Chromium ', process.versions.chrome),
    e('div', null, 'Electron ', process.versions.electron),
    e('div', null, 'Webpack ', require('webpack/package.json').version),
    e('div', null, 'and React ', require('react').version)
  )
};


export const rootElement =
  document.getElementById('root') ||
  document.createElement('div');

function renderApp() {
  render(e(App), rootElement);
}

renderApp();
