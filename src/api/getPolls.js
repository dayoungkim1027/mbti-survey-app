import file1 from './../polls/000001.json';
import file2 from './../polls/000002.json';
import file3 from './../polls/000003.json';
import file4 from './../polls/000004.json';
import file5 from './../polls/000005.json';

export function getPolls() {
	try {
		const results = [file1, file2, file3, file4, file5];
		return results;
	} catch(e) {
		console.log(e)
	}
}