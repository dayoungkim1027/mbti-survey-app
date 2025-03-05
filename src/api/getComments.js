import file1 from './../comments/000004.json';

export function getComments(pollId) {
	try {
		if (pollId === '000004') {
			return file1;
		}
		return '';
	} catch(e) {
		console.log(e)
	}
}