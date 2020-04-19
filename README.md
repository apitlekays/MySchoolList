MY-School-List
==============================
Library for fetching list of schools in Malaysia based on States & District.

Data taken from Ministry of Education Malaysia
(Date release: January 2018)

Skeleton taken from harpreetkhalsagtbit's `country-state-city`

# Install
`npm i my-school-list`

# Usage
  - ES6 Module usage
   
     ```js
     import MSL from 'my-school-list'
     ```

# Docs

getStateById(id)
---------------

It accepts a valid `id` eg: `'1'` and returns *State Details*

type: **json**

```js
{
    "id": "1",
    "sortname": "JHR",
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

It accepts a valid `district_d` e.g: `'1'` and returns *City Details*

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
    "email": "ABA0001@moe.edu.my",
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
    "email": "ABA0002@moe.edu.my",
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