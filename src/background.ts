chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({
		globalConfig: JSON.stringify({
			containerWidth: '1202px',
			containerPadding: '16px',
			gridColColor: 'rgba(255, 0, 0, 0.2)',
			gridRowColor: 'rgba(255, 0, 0, 0.2)',
			gridGapColColor: 'transparent',
			gridGapRowColor: 'transparent',
			gridColGap: '32px',
			gridRowGap: '16px',
			gridCols: '12',
			gridRowHeight: '1px',
		}),
	});

	chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { schemes: ['https', 'http'] },
					}),
				],
				actions: [new chrome.declarativeContent.ShowPageAction()],
			},
		]);
	});

	chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
		if (changeInfo.status == 'complete') {
			chrome.tabs.executeScript(tabId, { file: 'tabs/startup.js' });
		}
	});

	chrome.commands.onCommand.addListener((command) => {
		if (command === 'toggle-feature-foo') {
			chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
				chrome.tabs.executeScript(tabs[0].id, { file: 'tabs/toggle.js' });
			});
		}
	});
});
