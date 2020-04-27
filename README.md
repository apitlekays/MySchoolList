MY-School-List
==============================
Library for fetching list of schools in Malaysia based on States & District.

Data taken from Ministry of Education Malaysia
(Date release: January 2020)

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

It accepts a valid `id` eg: `'2'`and returns *District Details*

type: **json**

```js
{
    "id": "2",
    "name": "PPD MANJUNG",
    "state_id": "8"
}
```

getSchoolByCode(schoolcode)
---------------

It accepts a valid `schoolcode` eg: `'YEE6101'`and returns *School Details*

type: **json**

```js
{
    "id": "10153",
    "district_id": "136",
    "name": "SEKOLAH MENENGAH KEBANGSAAN SG PAOH",
    "schoolcode": "YEE6101",
    "level": "Menengah",
    "address": "PETI SURAT 160",
    "postcode": "96107",
    "city": "SARIKEI",
    "email": "**REDACTED**",
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
    "id": "1",
    "name": "PPD BATANG PADANG",
    "state_id": "8"
},
{
    "id": "2",
    "name": "PPD MANJUNG",
    "state_id": "8"
},
{
    "id": "3",
    "name": "PPD KINTA UTARA",
    "state_id": "8"
},
{
    "id": "4",
    "name": "PPD KINTA SELATAN",
    "state_id": "8"
} ... ]
```

getSchoolsOfDisctrict(district_id)
---------------

It accepts a valid `district_d` e.g: `'1'` and returns *School Details*

type: **json**

```js
[{
    "id": "1",
    "district_id": "1",
    "name": "SEKOLAH KEBANGSAAN TOH TANDEWA SAKTI",
    "schoolcode": "ABA0001",
    "level": "Rendah",
    "address": "JALAN KELAB",
    "postcode": "35000",
    "city": "TAPAH",
    "email": "**REDACTED**",
    "coordinatexx": "101.255932",
    "coordinateyy": "4.196633"
},
{
    "id": "2",
    "district_id": "1",
    "name": "SEKOLAH KEBANGSAAN PENDITA ZA'BA",
    "schoolcode": "ABA0002",
    "level": "Rendah",
    "address": "JALAN TAPAH ROAD",
    "postcode": "35400",
    "city": "TAPAH ROAD",
    "email": "**REDACTED**",
    "coordinatexx": "101.2006171",
    "coordinateyy": "4.178275806"
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
		"sortname": "JHR",
		"name": "Johor",
		"iso": "MY-01"
	},
	{
		"id": "2",
		"sortname": "KDH",
		"name": "Kedah",
		"iso": "MY-02"
	},
	{
		"id": "3",
		"sortname": "KTN",
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