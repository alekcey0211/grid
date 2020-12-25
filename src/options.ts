import { Config, addListenersToInputs } from './share';

chrome.storage.sync.get('globalConfig', (data) => {
	let config: Config = JSON.parse(data.globalConfig);

	addListenersToInputs(config);

	document.getElementById('save').addEventListener('click', () => {
		chrome.storage.sync.set({
			globalConfig: JSON.stringify(config),
		});
	});
});
