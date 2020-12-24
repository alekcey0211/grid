if (!EXT_HOTKEY_JS_INSERTED) {
	var EXT_HOTKEY_JS_INSERTED = true;
	var hotkeys = '';
	var messages = '';
	var timeout = '';
	chrome.extension.sendRequest({ operation: 'hotkeys' }, function (response) {
		//запрос текущих настроек горячих клавиш у расширения
		if (response)
			if (response.hotkeys) {
				hotkeys = JSON.parse(response.hotkeys);
				var d = document.createElement('DIV'); //элемент для индикации реакции на горячие клавиши
				d.id = 'hotkeyresponder';
				//+стили: положение, вид, высокий z-index
				document.body.appendChild(d);
			}
	});
	document.addEventListener('keydown', event_handleKeyDownEvent, true); //собственно, главный обработчик нажатий клавиш в окне документа
	function event_handleKeyDownEvent(e) {
		if (!hotkeys) return true;
		var c = 0;
		var a = 0;
		var s = 0;
		var k = e.keyCode;
		if (e.shiftKey) s = 1;
		if (e.altKey) a = 1;
		if (e.ctrlKey) c = 1;
		if (k == 27 && !c && !a && !s) {
			if (document.getElementById('hotkeyresponder').style.display != 'none') {
				// скрытие индикатора по Esc
				document.getElementById('hotkeyresponder').style.display = 'none';
				e.preventDefault();
				e.cancelBubble = true;
				e.bubbles = false;
				return false;
			}
		}
		for (var name in hotkeys) {
			if (hotkeys.hasOwnProperty(name)) {
				if (
					hotkeys[name].c == c &&
					hotkeys[name].a == a &&
					hotkeys[name].s == s
				) {
					//модификаторы совпадают, получена горячая клавиша, обрабатываем
					if (name == 'selectProfile' && k > 48 && k < 58 && (c || a || s)) {
						//универсальная горячая клавиша <модификатор+цифра>
						chrome.extension.sendRequest(
							{ operation: 'hotkey', key: name, id: k - 48 },
							function (response) {
								responseHotkey(name, response.status, response.message);
							}
						);
						e.preventDefault();
						e.cancelBubble = true;
						e.bubbles = false;
						return false;
					} else if (hotkeys[name].k == k) {
						//во всех случаях работаем только с полным совпадением. Модификатор совпал в условии выше, здесь проверили совпадение клавиши
						if (name == 'toggleBodyi') {
							document.getElementById('togglebody').onclick();
						}
						//аналогично другие клавиши, которые выполняются непосредственно в теле страницы (toggle каких-то настроек, элементов DOM, etc.)
						else {
							//горячие клавиши, которые выполняются только внутри расширения
							chrome.extension.sendRequest(
								{ operation: 'hotkey', key: name },
								function (response) {
									responseHotkey('pp', response.status, response.message);
								}
							);
						}
						e.preventDefault();
						e.cancelBubble = true;
						e.bubbles = false;
						return false;
					} else {
						continue;
					}
				}
			}
		}
	}
	function responseHotkey(type, status, message) {
		//отображение реакции на горячую клавишу
		if (status == 'OK' && message) {
			document.getElementById('hotkeyresponder').innerHTML = message;
			document.getElementById('hotkeyresponder').style.display = 'block';
			if (timeout) clearTimeout(timeout);
			timeout = setTimeout(function () {
				document.getElementById('hotkeyresponder').style.display = 'none';
			}, 2000);
		}
	}
}
