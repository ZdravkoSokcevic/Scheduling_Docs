const fs = require('fs');
const showdown   = require('showdown');

let converter = new showdown.Converter();

exports.getContents = file => {
	return new Promise((res, rej) => {
		let path = '';
		switch(file)
		{
			case 'base':
			{
				path = '../markdown/index.md';
				break;
			}
			case 'installation':
			{
				path = '../markdown/installation.md';
				break;
			}
			case 'requirements':
			{
				path = '../markdown/requirements.md';
				break;
			}
			case 'structure':
			{
				path = '../markdown/structure.md';
				break;
			}
			case 'readme':
			{
				path = '/../../README.md';
				break;
			}

		}

		try{
			res(this.getFileByPath(path));
		}catch(e) {
			rej(e);
		}

	})
}

exports.getFileByPath = file => {
	return new Promise((res, rej) => {
		try {
			let stream = fs.createReadStream(__dirname + '/' + file, {});
			let data = '';
			stream.on("data", chunk => {
				data += chunk;
			});
			stream.on("end", () => {
				let html = converter.makeHtml(data);
				res(html);
			});
		}catch(e) {
			rej(e);
		}
	});
}