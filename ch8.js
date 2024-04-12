/*
We need to write a reusable function that retrieves all of the Fantasy Quest users from our server.

Complete the getUsers() function. It should:

Call fetch using the url parameter. The fetch call should:
    Use the 'GET' Method
    Use the 'cors' mode
    Add an X-API-Key header with apiKey as the value

Return the resulting JSON data from the response

We've done this all before, but now you're writing it all from scratch!

async function getUsers(url, apiKey) {
  // ?
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'X-API-Key': apiKey
    }
  });
  return response.json();
}

// Don't touch below this line

const generatedKey = generateKey()
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'
const users = getUsers(url, generatedKey)
users.then((users) => {
    logUsers(users);
});

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

function logUsers(users) {
  for (const user of users) {
    console.log(`Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`)
  }
}
==================
Let's create the createUser() function. It should:

Take URL and the data body as parameters.
Call fetch. fetch() should:
    Use the POST Method
    Use the cors mode
    Set the X-API-Key header, with apiKey as its value
    Set the Content-Type header with application/json as its value
    Set the body field to the stringified JSON representation of the data
Return the response's JSON body

async function createUser(apiKey, url, data) {
  // ?
  const resp = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  return resp.body;
}

// Test Suite Don't Touch Below This Line

const userToCreate = {
  characterName: 'Grendel',
  class: 'Warrior',
  level: 1,
  pvpEnabled: false,
  user: {
    name: 'Allan',
    location: 'USA',
    age: 27
  }
}

const generatedKey = generateKey()
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

async function getUsers(url, apiKey) {
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

function logUsers(users) {
  for (const user of users) {
    console.log(`Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`)
  }
}

console.log('Retrieving user data...')
const userDataFirst = getUsers(url, generatedKey)
userDataFirst.then((userDataFirst) => {
    logUsers(userDataFirst);
    console.log('---');
});

console.log('Creating new character...')
const creationResponse = createUser(generatedKey, url, userToCreate)
creationResponse.then((creationResponse) => {
    console.log(`Creation response body: ${JSON.stringify(creationResponse)}`);
    console.log('---');    
});


console.log('Retrieving user data...')
const userDataSecond = getUsers(url, generatedKey);
userDataSecond.then((userDataSecond) => {
    logUsers(userDataSecond);
    console.log('---');    
});
============
We need to save newly created characters on our Fantasy Quest server. We will use the getUsers function we created in the last exercise to make sure our creation logic is working.

Let's create the createUser() function. It should:

Take URL and the data body as parameters.
Call fetch. fetch() should:
Use the POST Method
Use the cors mode
Set the X-API-Key header, with apiKey as its value
Set the Content-Type header with application/json as its value
Set the body field to the stringified JSON representation of the data
Return the response's JSON body

async function createUser(apiKey, url, data) {
  // ?
  const resp = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  return resp.json();
}

// Test Suite Don't Touch Below This Line

const userToCreate = {
  characterName: 'Grendel',
  class: 'Warrior',
  level: 1,
  pvpEnabled: false,
  user: {
    name: 'Allan',
    location: 'USA',
    age: 27
  }
}

const generatedKey = generateKey()
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

async function getUsers(url, apiKey) {
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

function logUsers(users) {
  for (const user of users) {
    console.log(`Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`)
  }
}

console.log('Retrieving user data...')
const userDataFirst = getUsers(url, generatedKey);
userDataFirst.then((userDataFirst) => {
  logUsers(userDataFirst);
  console.log('---');
});

console.log('Creating new character...')
const creationResponse = createUser(generatedKey, url, userToCreate)
creationResponse.then((creationResponse) => {
  console.log(`Creation response body: ${JSON.stringify(creationResponse)}`);
});

console.log('Retrieving user data...')
const userDataSecond = getUsers(url, generatedKey);
userDataSecond.then((userDataSecond) => {
  logUsers(userDataSecond);
  console.log('---');
});
=================
Update the getUserCode function to return the status code of the response.

async function getUserCode(url, apiKey) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey
    }
  })
  // ?
  return response.status;
}

// Don't touch below this line

const generatedKey = generateKey()

const invalidId = 'invalid-id'
const codeFirst = getUserCode(`https://api.boot.dev/v1/courses_rest_api/learn-http/users/${invalidId}`, generatedKey);
codeFirst.then((codeFirst) => {
  console.log(`id: ${invalidId}, status code: ${codeFirst}`);
});

const validId = '0194fdc2-fa2f-4cc0-81d3-ff12045b73c8'
const codeSecond = getUserCode(`https://api.boot.dev/v1/courses_rest_api/learn-http/users/${validId}`, generatedKey);
codeSecond.then((codeSecond) => {
  console.log(`id: ${validId}, status code: ${codeSecond}`);
});

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
===========
Complete the updateUser() and getUserById() functions. They should update and retrieve individual user resources respectively. They should also both return a promise that resolves to the JSON response body of their respective fetch() requests.

async function main() {
  async function updateUser(baseURL, id, data, apiKey) {
    const fullURL = `${baseURL}/${id}`
    // ?
    const resp = await fetch(fullURL, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    return resp.json();
  }
  
  async function getUserById(baseURL, id, apiKey) {
    const fullURL = `${baseURL}/${id}`
    // ?
    const resp = await fetch(fullURL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'X-API-Key': apiKey
      },
    });
  
    return resp.json();
  }
  
  // don't touch below this line
  
  const userId = '2f8282cb-e2f9-496f-b144-c0aa4ced56db'
  const generatedKey = generateKey()
  const baseURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'
  
  function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }
  
  function logUser(user) {
    console.log(`User uuid: ${user.id}, Character Name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, PVP Status: ${user.pvpEnabled}, User name: ${user.user.name}`)
  }
  
  const userData = await getUserById(baseURL, userId, generatedKey)
  logUser(userData)
  
  console.log(`Updating user with id: ${userId}`)
  userData.characterName = 'Dellbiar'
  userData.level = 7
  userData.class = 'Warrior'
  userData.pvpEnabled = true
  userData.user.name = 'Allan'
  const updatedUser = await updateUser(baseURL, userId, userData, generatedKey)
  logUser(updatedUser)
}

main();
==========
Users need to be able to delete their player accounts! Complete the deleteUser function. It should send a DELETE request to the given fullURL. You'll need to set the method, mode and headers. Like before, set the X-API-Key header to equal the given apiKey.
*/
async function main () {
  async function deleteUser(baseURL, id, apiKey) {
    const fullURL = `${baseURL}/${id}`
    // ?
    const response = await fetch(fullURL, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'X-API-Key': apiKey
      }
    })
    return response.json()
  }

  // don't touch below this line

  const userId = '0194fdc2-fa2f-4cc0-81d3-ff12045b73c8'
  const generatedKey = generateKey()
  const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

  async function getUsers(url, apiKey) {
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

  function logUsers(users) {
    console.log('Logging user records:')
    for (const user of users) {
      console.log(`User uuid: ${user.id}, Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`)
    }
  }

  const users = await getUsers(url, generatedKey)
  logUsers(users)
  console.log('---')

  await deleteUser(url, userId, generatedKey)
  console.log(`Deleted user with id: ${userId}`)
  console.log('---')

  const newUsers = await getUsers(url, generatedKey)
  logUsers(newUsers)
  console.log('---')
}

main();