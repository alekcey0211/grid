const zipFolder = require('zip-folder');
let folderName = 'dist';
let zipName = 'C:/DATA/WEB_2020/chrome_extension/grid/dist/grid-extension.zip';

zipFolder(folderName, zipName, function (err) {
	if (err) {
		console.log('oh no! ', err);
	} else {
		console.log(
			`Successfully zipped the ${folderName} directory and store as ${zipName}`
		);
	}
});
