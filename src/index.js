const stateList = require('./state.json');
const districtList = require('./district.json');
const schoolList = require('./school.json');

module.exports = {
	getStateById: function (id){
		return _findEntryById(stateList, id);
	},
	getDistrictById: function (id){
		return _findEntryById(districtList, id);
	},
	getDisctrictOfState: function (stateId){
		var district = districtList.filter(function (value) {
			return value.state_id === stateId
		})
		return district.sort(compare)
	},
	getSchoolsOfDisctrict: function (districtId){
		var schools = schoolList.filter(function (value) {
			return value.district_id === districtId
		})
		return schools.sort(compare)
	},
	getAllStates: function (){
		return stateList;
	}
}

let _findEntryById = (source, id) => {
	if (id && source != null) {
		let idx = source.findIndex((c) => c.id === id);
		return (idx !== -1) ? source[idx] : "";
	}
	else return "";
}

function compare(a,b) {
	if (a.name < b.name)
		return -1;
	if (a.name > b.name)
		return 1;
	return 0;
}
