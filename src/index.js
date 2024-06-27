const { app, BrowserWindow, Menu } = require('electron');
const path = require('node:path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

// Define the custom menu template
const menuTemplate = [
  {
    label: 'File',
    submenu: [
      { label: 'Open', click: () => { /* Implement Open action */ }},
      { label: 'Save', click: () => { /* Implement Save action */ }},
      { type: 'separator' },
      { label: 'Exit', click: () => { app.quit(); }}
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { label: 'Undo', role: 'undo' },
      { label: 'Redo', role: 'redo' },
      { type: 'separator' },
      { label: 'Cut', role: 'cut' },
      { label: 'Copy', role: 'copy' },
      { label: 'Paste', role: 'paste' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { type: 'separator' },
      { label: 'Reset Zoom', role: 'resetZoom' },
      { label: 'Zoom In', role: 'zoomIn' },
      { label: 'Zoom Out', role: 'zoomOut' },
      { type: 'separator' },
      { label: 'Toggle Fullscreen', role: 'togglefullscreen' }
    ]
  },
  {
    label: 'Project',
    submenu: [
      { label: 'New Project'},
      { label: 'Open Project'},
      { label: 'Project Settings'},
      { type: 'separator'},
      {
        label: 'Build',
        submenu: [
          { label: 'Distributable'},
          { label: 'Installer'},
          { label: 'Build Settings' }
        ]
      },
    ]
  },
  {
    label: 'Help',
    submenu: [
      { label: 'Learn More', click: () => { require('electron').shell.openExternal('https://electronjs.org') }}
    ]
  }
]

// Function to create the browser window
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: path.join(__dirname, 'assets', 'favicon.ico')
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  // Build and set the application menu
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { // Corrected: 'win32' to 'darwin'
    app.quit();
  }
});

// In this file, you can include the rest of your app's specific main process code.
