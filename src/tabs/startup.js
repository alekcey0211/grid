const hostConfig = `config-${window.location.host}`;
chrome.storage.sync.get([hostConfig], function (data) {
	const config = JSON.parse(data[hostConfig]);

	const style = document.createElement('style');
	style.innerHTML =
		'.grid-d1ec314162654fbea4265e5d5054d362{--container-width:1202px;--container-padding:16px;--grid-col-color:rgba(255,0,0,0.2);--grid-row-color:rgba(255,0,0,0.2);--grid-gap-col-color:transparent;--grid-gap-row-color:transparent;--grid-col-gap:32px;--grid-row-gap:16px;--grid-cols:12;--grid-row-height:1px}.grid-d1ec314162654fbea4265e5d5054d362:after,.grid-d1ec314162654fbea4265e5d5054d362:before{top:0;right:0;bottom:0;left:0;content:"";pointer-events:none;z-index:99999;background-repeat:no-repeat}.grid-d1ec314162654fbea4265e5d5054d362:before{position:fixed;border-width:medium;border-left:var(--container-padding) solid transparent;border-bottom:0 solid transparent;border-right:var(--container-padding) solid transparent;border-top:0 solid transparent;--grid-col-width:calc((100% - var(--grid-col-gap)*var(--grid-cols))/var(--grid-cols));max-width:calc(var(--container-width) + var(--grid-col-gap));margin:0 auto;background-image:repeating-linear-gradient(90deg,var(--grid-gap-col-color) 0,var(--grid-gap-col-color) calc(var(--grid-col-gap)/2),var(--grid-col-color) calc(var(--grid-col-gap)/2),var(--grid-col-color) calc(var(--grid-col-width) + var(--grid-col-gap)/2),var(--grid-gap-col-color) calc(var(--grid-col-width) + var(--grid-col-gap)/2),var(--grid-gap-col-color) calc(var(--grid-col-width) + var(--grid-col-gap)))}.grid-d1ec314162654fbea4265e5d5054d362:after{position:absolute;background-image:repeating-linear-gradient(180deg,var(--grid-gap-row-color) 0,var(--grid-gap-row-color) calc(var(--grid-row-gap)/2),var(--grid-row-color) calc(var(--grid-row-gap)/2),var(--grid-row-color) calc(var(--grid-row-height) + var(--grid-row-gap)/2),var(--grid-gap-row-color) calc(var(--grid-row-height) + var(--grid-row-gap)/2),var(--grid-gap-row-color) calc(var(--grid-row-height) + var(--grid-row-gap)))}';
	document.body.appendChild(style);

	const appendGrid = () => {
		const div = document.createElement('div');
		div.classList.add('grid-d1ec314162654fbea4265e5d5054d362');
		const styleElem = div.appendChild(document.createElement('style'));
		styleElem.innerHTML = `.grid-d1ec314162654fbea4265e5d5054d362::after {height:${document.body.clientHeight}px;}`;
		div.style.setProperty('--container-width', config.containerWidth);
		div.style.setProperty('--container-padding', config.containerPadding);
		div.style.setProperty('--grid-col-color', config.gridColColor);
		div.style.setProperty('--grid-row-color', config.gridRowColor);
		div.style.setProperty('--grid-gap-col-color', config.gridGapColColor);
		div.style.setProperty('--grid-gap-row-color', config.gridGapRowColor);
		div.style.setProperty('--grid-col-gap', config.gridColGap);
		div.style.setProperty('--grid-row-gap', config.gridRowGap);
		div.style.setProperty('--grid-cols', config.gridCols);
		div.style.setProperty('--grid-row-height', config.gridRowHeight);
		document.body.appendChild(div);
	};

	if (config.on) {
		appendGrid();
	}
});
