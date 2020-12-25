import { addListenersToInputs, Config } from './share';

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	document.getElementById('toggleGrid').addEventListener('click', () => {
		chrome.tabs.executeScript(tabs[0].id, { file: 'tabs/toggle.js' });
	});

	const getHost = (url: string): string => url.split('/')[2];
	const host = getHost(tabs[0].url);
	const hostConfig = `config-${host}`;

	chrome.storage.sync.get(['globalConfig', hostConfig], function (data) {
		const globalConfig: Config = JSON.parse(data.globalConfig);
		const config: Config = data[hostConfig]
			? JSON.parse(data[hostConfig])
			: globalConfig;

		addListenersToInputs(config);

		document.getElementById('inputs').addEventListener('change', (e) => {
			chrome.storage.sync.set({
				[hostConfig]: JSON.stringify(config),
			});
			chrome.tabs.executeScript(tabs[0].id, { file: 'tabs/refresh.js' });
		});

		chrome.commands.getAll((commands) => {
			document.getElementById('toggleGrid').title = commands.find(
				(x) => x.name === 'toggle-feature-foo'
			).shortcut;
			document.getElementById('toggleGrid__hint').innerText = commands.find(
				(x) => x.name === 'toggle-feature-foo'
			).shortcut;
		});
	});
});
