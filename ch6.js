/*
Complete the logContentType() function. It takes a response object as input and should log out the Content-Type header to the console

Take a look at the lower section of the code to see exactly how it's being created.

Use the .get() method on the response object's headers property to get access to the header you need.

function logContentType(resp) {
  // ?
  console.log(resp['headers'].get('Content-Type'));
}

// don't touch below this line

const apiKey = generateKey()
const bootdevAPIDomain = 'api.boot.dev'

const items = getItemData(bootdevAPIDomain);
items.then((items) => {
    logContentType(items);
})

async function getItemData(domain) {
  const response = await fetch(`https://${domain}/v1/courses_rest_api/learn-http/items/0194fdc2-fa2f-4cc0-81d3-ff12045b73c8`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  return response
}

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
==============
Because we don't want any of our users to accidentally overwrite another user's saved data, our backend team has required that we use the X-API-Key header for all requests to Fantasy-Quest's server. By using different values, we're telling the server that we are a different person.

Let's practice using headers by playing with the X-API-Key Header. I have written some code for you that:

Gets a location object from our game server.
Logs that object to the console.
Updates the object and sends those changes back to the server.
Gets the location object again and logs to the console to display the changes.

Run the code in its current state to see the return values. You'll notice that the two objects that are logged to the console are the same. This is because the X-API-Key they are using is different, the update isn't being applied to the same account that we're checking in the last getLocationResponse call.

Use the same apiKey value in the last call to getLocationResponse and rerun the code. Notice the location object is updated correctly!

const generatedApiKey = generateKey()
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations/52fdfc07-2182-454f-963f-5f0f9a621d72'
const newLocationData = {
  'discovered': false,
  'id': '52fdfc07-2182-454f-963f-5f0f9a621d72',
  'name': 'Bloodstone Swamp',
  'recommendedLevel': 69
}

const oldLocation = getLocationResponse(generatedApiKey, url);
oldLocation.then((oldLocation) => {
    console.log('Got old location:');
    console.log(`- name: ${oldLocation.name}, recommendedLevel: ${oldLocation.recommendedLevel}`);
    console.log('---');    
});

putLocation(generatedApiKey, url, newLocationData).then(() => {
    console.log('Location updated!');
    console.log('---');    
});

const newGeneratedApiKey = generateKey()
const newLocation = getLocationResponse(generatedApiKey, url);
newLocation.then((newLocation) => {
    console.log('Got new location:');
    console.log(`- name: ${newLocation.name}, recommendedLevel: ${newLocation.recommendedLevel}`);
    console.log('---');    
});

// don't touch below this line

async function getLocationResponse(apiKey, url) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

async function putLocation(apiKey, url, data) {
  const response = await fetch(url, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
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
===============
*/