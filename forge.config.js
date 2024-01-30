module.exports = {
	packagerConfig: {},
	rebuildConfig: {},
	makers: [
		{
			name: '@electron-forge/maker-squirrel',
			config: {},
		},
		{
			name: '@electron-forge/maker-zip',
			platforms: ['darwin'],
		},
		{
			name: '@electron-forge/maker-rpm',
			config: {
				options: {
					name: 'notion',
					icon: './build/icons/icon.png',
					categories: ['Office'],
					mimeType: ['x-scheme-handler/notion'],
					execArguments: ['--ozone-platform-hint=auto'],
					homepage: 'https://www.notion.so',
				},
			},
		},
	],
};
