const electron = require('electron');
const Menubar = require('menubar');

const menubar = Menubar();

menubar.on('ready', () => console.log('application is ready'));

menubar.on('after-create-window', () => {
  menubar.window.openDevTools();
  menubar.window.loadURL(`file://${__dirname}/index.html`);
});
