import { Config } from './tabs/data';
import { num } from './tabs/utils';

export * from './tabs/data';
export * from './tabs/utils';

export const addListenersToInputs = (config: Config) => {
	(document.getElementById('grid-col-color') as any).jscolor.fromString(
		config.gridColColor
	);

	(document.getElementById('grid-row-color') as any).jscolor.fromString(
		config.gridRowColor
	);

	(document.getElementById('container-width') as HTMLInputElement).value = num(
		config.containerWidth
	);
	(document.getElementById(
		'container-padding'
	) as HTMLInputElement).value = num(config.containerPadding);
	(document.getElementById('grid-col-gap') as HTMLInputElement).value = num(
		config.gridColGap
	);
	(document.getElementById('grid-row-gap') as HTMLInputElement).value = num(
		config.gridRowGap
	);
	(document.getElementById('grid-cols') as HTMLInputElement).value = num(
		config.gridCols
	);

	document.getElementById('inputs').addEventListener('change', (e) => {
		const target: any = e.target;
		if (target.id === 'grid-col-color') {
			config.gridColColor = target.jscolor.toRGBAString();
		} else if (target.id === 'grid-row-color') {
			config.gridRowColor = target.jscolor.toRGBAString();
		} else if (target.id === 'container-width') {
			config.containerWidth = `${target.value}px`;
		} else if (target.id === 'container-padding') {
			config.containerPadding = `${target.value}px`;
		} else if (target.id === 'grid-col-gap') {
			config.gridColGap = `${target.value}px`;
		} else if (target.id === 'grid-row-gap') {
			config.gridRowGap = `${target.value}px`;
		} else if (target.id === 'grid-cols') {
			config.gridCols = target.value;
		}
	});
};
