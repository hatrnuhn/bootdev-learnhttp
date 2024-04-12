/*
Our getLocations function is almost done, we just need to parse the response data as JSON and return it.

async function getLocations() {
  const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations'
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  // ?
  return response.json();
}

// Don't touch below this line

const apiKey = generateKey()

const locations = getLocations()
locations.then((locations) => {
    console.log('Got some locations from the server.');
    for (const location of locations) {
      console.log(`- name: ${location.name}, recommendedLevel: ${location.recommendedLevel}`);
    }    
});

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
============
We need to keep track of when players discover new locations. However, there's a bug in the updateLocationById() function. It looks like the location's discovered property isn't getting saved properly by the server.
async function updateLocationById(id, locationObj) {
  const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/locations/${id}`
  const response = await fetch(path, {
    method: 'PUT',
    mode: 'cors',
    headers: getHeaders(),
    body: JSON.stringify(locationObj)
  });
  return response.json()
}

// Don't touch below this line

const apiKey = generateKey()
const locationID = '0194fdc2-fa2f-4cc0-81d3-ff12045b73c8'

const locationn = getLocationById(locationID);
locationn.then((locationn) => {
    console.log(`Location '${locationn.name}' fetched. Data: ${JSON.stringify(locationn)}`);
});

locationn.discovered = true
updateLocationById(locationID, locationn).then(() => {
    console.log(`Location '${locationn.name}' was discovered!`);
});

const updatedLocation = getLocationById(locationID);
updatedLocation.then((updatedLocation) => {
    console.log(`Location '${updatedLocation.name}' fetched. Data: ${JSON.stringify(updatedLocation)}`);
});

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

async function getLocationById(id) {
  const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/locations/${id}`
  const response = await fetch(path, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

function getHeaders() {
  return {
    'X-API-Key': apiKey,
    'Content-Type': 'application/json'
  }
}
============
Complete the parseLocation function. Use a try/catch block to safely call JSON.parse on the locationString provided. Keep in mind that JSON.parse throws an error if it is given a string that isn't valid JSON.

If you can parse the string successfully, use the printLocationObj function to print the parsed object. If an error was thrown, just log invalid json string to the console.

function parseLocation(locationString) {
  // ?
  try {
    console.log(JSON.parse(locationString));
  } catch (err) {
    console.log('invalid json string');
  }
}

// don't touch below this line

function printLocationObj(parsed) {
  console.log(`id: ${parsed.id}`)
  console.log(`discovered: ${parsed.discovered}`)
  console.log(`name: ${parsed.name}`)
  console.log(`recommendedLevel: ${parsed.recommendedLevel}`)
}

parseLocation(`
{
  "discovered": false,
  "id": "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8",
  "name": "Bandit Camp",
  "recommendedLevel": 14
}
`)

console.log('---')

parseLocation(`
{
  "discovered":true,
  "id":"2f8282cb-e2f9-496f-b144-c0aa4ced56db",
  "name":"Irondeep",
  "recommendedLevel":6
}
`)

console.log('---')

parseLocation(`
{
  "discovered":false,
  "id":"0f12951e-0a74-4846-a1e0-10b33b13112f"
  "name":"Tavern",
  "recommendedLevel":1
}
`)
*/