MY-School-List
==============================
Library for fetching list of schools in Malaysia based on States & District.

Data taken from Ministry of Education Malaysia
(Date release: June 2022)

Skeleton taken from harpreetkhalsagtbit's `country-state-city`



# Install
`npm i my-school-list`

# Usage
  - ES6 Module usage
   
     ```js
     import MSL from 'my-school-list'
     ```

# Golang version
  - Thanks to @svicknesh. 
  - Install this package using
    `go get github.com/svicknesh/myschoollist`
  - Link : https://github.com/svicknesh/myschoollist


# Docs

getStateById(id)
---------------

It accepts a valid `id` eg: `'1'` and returns *State Details*

type: **json**

```js
{
    "id": "1",
    "shortname": "JHR",
    "name": "Johor",
    "iso": "MY-01"
}
```

getStateByShortname(code)
---------------

It accepts a valid `shortname` eg: `'JHR'` and returns *State Details*

type: **json**

```js
{
    "id": "1",
    "shortname": "JHR",
    "name": "Johor",
    "iso": "MY-01"
}
```

getDistrictById(id)
---------------

It accepts a valid `id` eg: `'2'` and returns *District Details*

type: **json**

```js
{
    "id": "2",
    "name": "PPD JOHOR BAHRU",
    "state_id": "1"
}
```

getSchoolByCode(schoolcode)
---------------

It accepts a valid `schoolcode` eg: `'YEE6101'` and returns *School Details*

type: **json**

```js
{
    "id": "9441",
    "district_id": "132",
    "name": "SEKOLAH MENENGAH KEBANGSAAN SG PAOH",
    "schoolcode": "YEE6101",
    "type": "SMK",
    "level": "Menengah",
    "address": "PETI SURAT 160",
    "postcode": "96107",
    "city": "SARIKEI",
    "phone": "084671020",
    "fax": "084671861",
    "email": "**REDACTED**",
    "location": "Luar Bandar",
    "students": "812",
    "teachers": "67",
    "preschool": "TIADA",
    "integration": "ADA",
    "coordinatexx": "111.46735",
    "coordinateyy": "2.021566667"
}
```

getDisctrictOfState(state_id)
---------------

It accepts a valid `state_id` and returns *District Details*

type: **json**


```js
[{
    "id": "56",
    "name": "PPD BAGAN DATUK",
    "state_id": "8"
},
{
    "id": "57",
    "name": "PPD BATANG PADANG",
    "state_id": "8"
},
{
    "id": "58",
    "name": "PPD HILIR PERAK",
    "state_id": "8"
},
{
    "id": "59",
    "name": "PPD HULU PERAK",
    "state_id": "8"
} ... ]
```

getSchoolsOfDisctrict(district_id)
---------------

It accepts a valid `district_id` e.g: `'1'` and returns *School Details*

type: **json**

```js
[{
    "id": "175",
    "district_id": "1",
    "name": "KOLEJ VOKASIONAL BATU PAHAT",
    "schoolcode": "JHA0002",
    "type": "KV",
    "level": "Menengah",
    "address": "KM. 7, JALAN KLUANG",
    "postcode": "83000",
    "city": "BATU PAHAT",
    "phone": "074312051",
    "fax": "074315529",
    "email": "**REDACTED**",
    "location": "Bandar",
    "students": "822",
    "teachers": "124",
    "preschool": "TIADA",
    "integration": "ADA",
    "coordinatexx": "102.984132",
    "coordinateyy": "1.869434"
},
{
    "id": "176",
    "district_id": "1",
    "name": "KOLEJ VOKASIONAL TUN HUSSEIN ONN",
    "schoolcode": "JHA0003",
    "type": "KV",
    "level": "Menengah",
    "address": "KM 7.75  JALAN KLUANG",
    "postcode": "83000",
    "city": "BATU PAHAT",
    "phone": "074340112",
    "fax": "074330112",
    "email": "**REDACTED**",
    "location": "Bandar",
    "students": "127",
    "teachers": "25",
    "preschool": "TIADA",
    "integration": "ADA",
    "coordinatexx": "102.986777",
    "coordinateyy": "1.868884"
} ...]
```

getAllStates()
---------------
It returns **all States**

type: **array of json**

```js
[
    {
		"id": "1",
		"shortname": "JHR",
		"name": "Johor",
		"iso": "MY-01"
	},
	{
		"id": "2",
		"shortname": "KDH",
		"name": "Kedah",
		"iso": "MY-02"
	},
	{
		"id": "3",
		"shortname": "KTN",
		"name": "Kelantan",
		"iso": "MY-03"
	}...
]
```

Change Logs
---------------

**v1.0.0**

1. Initial commit.

**v1.0.1**

1. Redacted `email` addresses from the example codes
2. Added new funtion `getSchoolByCode`
3. Edited README.md to reflect new changes

**v1.0.2**

1. Change `sortname` identifier in `state.json` to `shortname` //Thanks Vicknesh!
2. Introduce a new method `getStateByShortname`

**v1.1.0**

1. Updating the school list `school.json` based on latest data from MoE (January 2020)
2. Take note that with this update, id for each school is different from the previous version. Potentially breaking changes, if you refer the school id in your code from version 1.0.2.

**v1.2.0**

1. Updated school data to June 2022 release from MoE (source: archive.data.gov.my)
2. Added new fields to school data: `type`, `phone`, `fax`, `location`, `students`, `teachers`, `preschool`, `integration`
3. Total schools: 10,230 (7,778 primary + 2,452 secondary)
4. District IDs and school IDs have changed from the previous version. Potentially breaking changes if you reference IDs directly in your code from version 1.1.0.