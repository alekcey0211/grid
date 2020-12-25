import { Config } from './data';
import { appendGrid, gridClass } from './utils';

const hostConfig = `config-${window.location.host}`;
chrome.storage.sync.get(['globalConfig', hostConfig], (data) => {
	const globalConfig: Config = JSON.parse(data.globalConfig);
	const config: Config = data[hostConfig]
		? JSON.parse(data[hostConfig])
		: globalConfig;

	if (document.querySelector(`.${gridClass}`)) {
		document.querySelector(`.${gridClass}`).previousElementSibling.remove();
		document.querySelector(`.${gridClass}`).remove();
		config.on = false;
	} else {
		appendGrid(config);
		config.on = true;
	}

	chrome.storage.sync.set({
		[hostConfig]: JSON.stringify(config),
	});
});
