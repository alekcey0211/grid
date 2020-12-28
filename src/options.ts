import * as jscolor from '@eastdesire/jscolor';
import { Config, addListenersToInputs } from './share';
import {} from 'chrome';

chrome.storage.sync.get('globalConfig', (data) => {
	let config: Config = JSON.parse(data.globalConfig);

	addListenersToInputs(config);

	document.getElementById('save').addEventListener('click', () => {
		chrome.storage.sync.set({
			globalConfig: JSON.stringify(config),
		});
	});
});

try {
	jscolor();
} catch (error) {}
