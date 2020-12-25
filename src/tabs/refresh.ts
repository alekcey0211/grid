import { Config } from './data';
import { updateGrid, gridClass } from './utils';

chrome.storage.sync.get(`config-${window.location.host}`, function (data) {
	const config: Config = JSON.parse(data[`config-${window.location.host}`]);
	const grid: HTMLElement = document.querySelector(`.${gridClass}`);
	if (!grid) {
		return;
	}

	updateGrid(config, grid);
});
