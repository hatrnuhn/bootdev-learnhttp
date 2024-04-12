/*
Fix the getResources function. This is a flexible function that, given a path, makes a GET request to the fantasy quest server and returns the response body. Update the fullURL string so that it's the base URL, in our case https://api.boot.dev, concatenated with the given path.

async function getResources(path) {
  const fullURL = `https://api.boot.dev` + path;

  const response = await fetch(fullURL, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': generateKey(),
      'Content-Type': 'application/json'
    }
  })
  const resources = await response.json()
  return resources
}

// don't touch below this line

const locations = getResources('/v1/courses_rest_api/learn-http/locations')
locations.then((locations) => {
  console.log('Locations:');
  logResources(locations);
  console.log(' --- ');  
})

const items = getResources('/v1/courses_rest_api/learn-http/items')
items.then((items) => {
  console.log('Items:');
  logResources(items);
  console.log(' --- ');
})

const users = getResources('/v1/courses_rest_api/learn-http/users')
users.then((users) => {
  console.log('Users:');
  logResources(users);
})

function logResources(resources) {
  for (const resource of resources) {
    console.log(` - ${JSON.stringify(resource)}`)
  }
}

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
===============
The backend team building Fantasy Quest's server has added support for query parameters! The server offers a sort parameter that can be optionally added by appending ?sort=fieldName to the end of the URL, where fieldName is the property of the resource you want the response records sorted by.

We are creating a leaderboard and want to sort our user records by their level.

Update the getUsers function's fullURL with a query parameter that will sort the user records by level.

async function getUsers(url, apiKey) {
  const fullURL = `${url}` + '?sort=level'
  const response = await fetch(fullURL, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey
    }
  })
  return response.json()
}

// don't touch below this line

const baseURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

const apiKey = generateKey()

const users = getUsers(baseURL, apiKey)
users.then((users) => {
  for (const user of users) {
    console.log(`got user with name: ${user.characterName}, and level: ${user.level}`)
  }  
})

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
=====================
Our game designer wants us to build a "treasure chest"! We don't want to award players with too many items though, so let's limit the number of items our players receive by using the limit=x query parameter, where x is the number of records we are requesting from the server. We'll also continue to sort the items so that less valuable items are looted first.

Complete the lootTreasure function. It should add two query parameters to the URL passed to getItems:

-sort
-limit
Sort by the quality property.

Set the limit based on the chestRarity passed into lootTreasure.

-Common treasure = 1 item
-Rare treasure = 3 items
-Legendary treasure = 5 items
*/
async function lootTreasure(baseURL, chestRarity) {
  // ?
  let n = null;

  switch (chestRarity) {
    case 'Common':
      n = 1;
      break;
    case 'Rare':
      n = 3;
      break;
    case 'Legendary':
      n = 5;
      break;  
    default:
      n = 1;
      break;
  }
  const fullURL = `${baseURL}` + '?' + 'sort=quality' + '&' + `limit=${n}`;
  return await getItems(fullURL, apiKey)
}

// don't touch below this line

const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items'
const apiKey = generateKey()

const commonLoot = lootTreasure(url, 'Common')
commonLoot.then(commonLoot => {
  console.log('Looting common treasure chest...');
  for (const item of commonLoot) {
    console.log(`Acquired a ${item.name} with quality score: ${item.quality}`);
  }
  console.log('---');
})

const rareLoot = lootTreasure(url, 'Rare')
rareLoot.then(rareLoot => {
  console.log('Looting rare treasure chest...');
  for (const item of rareLoot) {
    console.log(`Acquired a ${item.name} with quality score: ${item.quality}`);
  }
  console.log('---');
})

console.log('Looting legendary treasure chest...')
const legendaryLoot = lootTreasure(url, 'Legendary')
legendaryLoot.then(legendaryLoot => {
  for (const item of legendaryLoot) {
    console.log(`Acquired a ${item.name} with quality score: ${item.quality}`);
  }  
})

async function getItems(url, apiKey) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey
    }
  })
  return response.json()
}

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
