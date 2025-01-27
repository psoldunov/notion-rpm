const { app, BrowserWindow, shell } = require('electron');

app.on('ready', () => {
	const win = new BrowserWindow({
		autoHideMenuBar: true,
		minWidth: 800, // Set the minimum width to 600
		minHeight: 600, // Set the minimum height to 400
	});
	win.loadURL('https://notion.so');

	// Deal with external links
	win.webContents.setWindowOpenHandler(({ url }) => {
		if (!url.startsWith('https://www.notion.so')) {
			shell.openExternal(url);
			return { action: 'deny' };
		}
		return { action: 'allow' };
	});
});
