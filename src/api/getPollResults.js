import file000001 from './../poll-results/000001.json';
import file000002 from './../poll-results/000002.json';
import file000003 from './../poll-results/000003.json';
import file000004 from './../poll-results/000004.json';
import file000005 from './../poll-results/000005.json';

export function getPollResults(pollId) {
	try {
		const results =
			pollId === '000001' ? file000001 :
			pollId === '000002' ? file000002 :
			pollId === '000003' ? file000003 :
			pollId === '000004' ? file000004 :
			pollId === '000005' ? file000005 : '';
		return results;
	} catch(e) {
		console.log(e)
	}
}