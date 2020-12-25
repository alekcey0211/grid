import { Config } from './data';
import { appendGrid } from './utils';

const hostConfig = `config-${window.location.host}`;
chrome.storage.sync.get([hostConfig], (data) => {
	const config: Config = JSON.parse(data[hostConfig]);

	if (config.on) {
		appendGrid(config);
	}
});
