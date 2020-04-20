const xxx = require('../index');


describe('SLM', () => {
    test('getStateById', ()=> {
        const id = '11';
        let State = xxx.getStateById(id);
        expect(State).toEqual({
            id: "11",
            shortname: "TRG",
            name: "Terengganu",
            iso: "MY-11"
        })
    })
    test('getStateByShortname', () => {
        const scode = 'KUL';
        let Negeri = xxx.getStateByShortname(scode);
        expect(Negeri).toEqual({
            id: "14",
            shortname: "KUL",
            name: "Kuala Lumpur",
            iso: "MY-14"
        })
    })
    test('getDistrictById', () => {
        const id = '84';
        let District = xxx.getDistrictById(id);
        expect(District).toEqual({
            id: "84",
		    name: "PPD SETIU",
		    state_id: "11"
        })
    })
    test('getDisctrictOfState', () => {
        const id = '10';
        let Districts = xxx.getDisctrictOfState(id);
        let districtList = Districts.map((d)=>d.name);
        expect(districtList).toEqual([
            'PPD GOMBAK',
            'PPD HULU LANGAT',
            'PPD HULU SELANGOR',
            'PPD KLANG',
            'PPD KUALA LANGAT',
            'PPD KUALA SELANGOR',
            'PPD PETALING PERDANA',
            'PPD PETALING UTAMA',
            'PPD SABAK BERNAM',
            'PPD SEPANG'
        ])
    })
    test('getSchoolsOfDisctrict', () => {
        const districtID = '40';
        let Schools = xxx.getSchoolsOfDisctrict(districtID);
        let schoolnames = Schools.map((sekolah)=>sekolah.name);
        expect(schoolnames).toEqual([
            'KOLEJ VOKASIONAL KUALA KRAI',
            'SEKOLAH JENIS KEBANGSAAN (CINA) YUK CHAI',
            'SEKOLAH JENIS KEBANGSAAN (TAMIL) LADANG PASIR GAJAH',
            'SEKOLAH KEBANGSAAN BAHAGIA',
            'SEKOLAH KEBANGSAAN BANDAR KUALA KRAI',
            'SEKOLAH KEBANGSAAN BANGGOL GUCHIL',
            'SEKOLAH KEBANGSAAN BATU JONG',
            'SEKOLAH KEBANGSAAN BATU MENGKEBANG',
            'SEKOLAH KEBANGSAAN BIAK',
            'SEKOLAH KEBANGSAAN CHENULANG',
            'SEKOLAH KEBANGSAAN CHUCHOH PUTERI',
            'SEKOLAH KEBANGSAAN DABONG',
            'SEKOLAH KEBANGSAAN KAMPONG BEDAL',
            'SEKOLAH KEBANGSAAN KAMPONG KARANGAN',
            'SEKOLAH KEBANGSAAN KAMPONG TENGAH',
            'SEKOLAH KEBANGSAAN KEMUBU',
            'SEKOLAH KEBANGSAAN KUALA GERIS',
            'SEKOLAH KEBANGSAAN KUALA KRAI',
            'SEKOLAH KEBANGSAAN KUALA NAL',
            'SEKOLAH KEBANGSAAN LADANG TAKU',
            'SEKOLAH KEBANGSAAN LALOH',
            'SEKOLAH KEBANGSAAN LATA REK',
            'SEKOLAH KEBANGSAAN LELA JASA',
            'SEKOLAH KEBANGSAAN MANEK URAI',
            'SEKOLAH KEBANGSAAN MANEK URAI BARU',
            'SEKOLAH KEBANGSAAN MEMPELAM JELAWANG',
            'SEKOLAH KEBANGSAAN PAHI',
            'SEKOLAH KEBANGSAAN PASIR GAJAH',
            'SEKOLAH KEBANGSAAN PASIR KELANG',
            'SEKOLAH KEBANGSAAN PEMBERIAN',
            'SEKOLAH KEBANGSAAN PERIA',
            'SEKOLAH KEBANGSAAN SERI MAHLIGAI',
            'SEKOLAH KEBANGSAAN SG SAM',
            'SEKOLAH KEBANGSAAN SLOW TEMIANG',
            'SEKOLAH KEBANGSAAN SULTAN YAHYA PETRA (2)',
            'SEKOLAH KEBANGSAAN SULTAN YAHYA PETRA(1)',
            'SEKOLAH KEBANGSAAN SUNGAI EMBAK',
            'SEKOLAH KEBANGSAAN SUNGAI MENGKUANG',
            'SEKOLAH KEBANGSAAN SUNGAI PAS',
            'SEKOLAH KEBANGSAAN SUNGAI SOK',
            'SEKOLAH KEBANGSAAN TELKONG',
            'SEKOLAH KEBANGSAAN TEMALIR',
            'SEKOLAH MENENGAH KEBANGSAAN BANDAR KUALA KRAI',
            'SEKOLAH MENENGAH KEBANGSAAN DABONG',
            'SEKOLAH MENENGAH KEBANGSAAN KEROH',
            'SEKOLAH MENENGAH KEBANGSAAN KUALA KRAI',
            'SEKOLAH MENENGAH KEBANGSAAN LALOH',
            'SEKOLAH MENENGAH KEBANGSAAN MANEK URAI',
            'SEKOLAH MENENGAH KEBANGSAAN MENGKEBANG',
            'SEKOLAH MENENGAH KEBANGSAAN PAHI',
            'SEKOLAH MENENGAH KEBANGSAAN SULTAN YAHYA PETRA 1',
            'SEKOLAH MENENGAH KEBANGSAAN SULTAN YAHYA PETRA 2',
            'SMU (A) SAADATUL QURA',
            'SMU(A) DARUS SALAM'
        ])
    })
    test('getAllStates', () => {
        let allStates = xxx.getAllStates();
        let stateNames = allStates.map((s)=>s.name);
        expect(stateNames).toEqual([
            'Johor',
            'Kedah',
            'Kelantan',
            'Melaka',
            'Negeri Sembilan',
            'Pahang',
            'Pulau Pinang',
            'Perak',
            'Perlis',
            'Selangor',
            'Terengganu',
            'Sabah',
            'Sarawak',
            'Kuala Lumpur',
            'Labuan',
            'Putrajaya'
        ])
    })
    test('getSchoolByCode', () => {
        let code = 'YEE6101';
        let sekolahi = xxx.getSchoolByCode(code);
        expect(sekolahi).toEqual({
            id: "10153",
            district_id: "136",
            name: "SEKOLAH MENENGAH KEBANGSAAN SG PAOH",
            schoolcode: "YEE6101",
            level: "Menengah",
            address: "PETI SURAT 160",
            postcode: "96107",
            city: "SARIKEI",
            email: "YEE6101@moe.edu.my",
            coordinatexx: "111.46735",
            coordinateyy: "2.021566667"
        })
    })
})
