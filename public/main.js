const { app, BrowserWindow, protocol } = require("electron");
const path = require("path");
// Gardez une reference globale de l'objet window, si vous ne le faites pas, la fenetre sera
// fermee automatiquement quand l'objet JavaScript sera garbage collected.
let win;
const isDev = require("electron-is-dev");
const url = require("url");
// Using require
const installExtensions = async () => {
  const installer = require("electron-devtools-installer");
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ["REACT_DEVELOPER_TOOLS"];

  return Promise.all(
    extensions.map((name) =>
      installer.default(installer.REACT_DEVELOPER_TOOLS, forceDownload)
    )
  ).catch(console.error());
};
function createWindow() {
  // Créer le browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: { nodeIntegration: true, webSecurity: false }
  });

  // et charge le index.html de l'application.
  if (process.env.ELECTRON_START_URL != null) {
    win.loadURL(process.env.ELECTRON_START_URL);
  } else {
    win.loadURL(url.format({
      pathname: "index.html",    /* Attention here: origin is path.join(__dirname, 'index.html') */
      protocol: "file",
      slashes: true
    }));
  }

  // Ouvre les DevTools.
  win.webContents.openDevTools();
  // Émit lorsque la fenêtre est fermée.
  win.on("closed", () => {
    // Dé-référence l'objet window , normalement, vous stockeriez les fenêtres
    // dans un tableau si votre application supporte le multi-fenêtre. C'est le moment
    // où vous devez supprimer l'élément correspondant.
    win = null;
  });
}

// Cette méthode sera appelée quant Electron aura fini
// de s'initialiser et sera prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quand cet événement est émit.
app.on("ready", async () => {
  if (isDev) {
    await installExtensions();
  }
  protocol.interceptFileProtocol("file", (request, callback) => {
    const url = request.url.substr(7);    /* all urls start with 'file://' */
    callback({ path: path.normalize(`${__dirname}/${url}`) });
  }, (err) => {
    if (err) { console.error("Failed to register protocol"); }
  });
  createWindow();
}); 

// Quitte l'application quand toutes les fenêtres sont fermées.
app.on("window-all-closed", () => {
  // Sur macOS, il est commun pour une application et leur barre de menu
  // de rester active tant que l'utilisateur ne quitte pas explicitement avec Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // Sur macOS, il est commun de re-créer une fenêtre de l'application quand
  // l'icône du dock est cliquée et qu'il n'y a pas d'autres fenêtres d'ouvertes.
  if (win === null) {
    createWindow();
  }
});