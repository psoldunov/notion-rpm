const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  const win = new BrowserWindow();
  win.maximize();
  win.setMenu(null);
  win.loadURL("https://notion.so");
});
