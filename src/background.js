chrome.runtime.onInstalled.addListener(function () {
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

	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
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

	// chrome.pageAction.onClicked.addListener(function () {
	// 	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	// 		chrome.tabs.executeScript(tabs[0].id, { file: 'main.js' });
	// 	});
	// });

	chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
		if (changeInfo.status == 'complete') {
			chrome.tabs.executeScript(tabId, { file: 'tabs/startup.js' });
		}
	});

	chrome.commands.onCommand.addListener(function (command) {
		console.log('Command:', command);
		if (command === 'toggle-feature-foo') {
			chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
				chrome.tabs.executeScript(tabs[0].id, { file: 'tabs/toggle.js' });
			});
		}
	});

	// chrome.extension.onRequest.addListener(function (
	// 	request,
	// 	sender,
	// 	sendResponse
	// ) {
	// 	loadSettings(); //обновление настроек
	// 	if (request.operation == 'hotkeys') {
	// 		//запрос текущих настроек горячих клавиш
	// 		sendResponse({ hotkeys: localStorage.hotkeys });
	// 	} else if (request.operation == 'hotkey') {
	// 		//обработка горячей клавиши
	// 		if (request.key == 'selectProfile') {
	// 			//нужные действия
	// 		}
	// 		//аналогично для остальных клавиш
	// 	} else {
	// 		//sendResponse({});
	// 	}
	// });
});
