/*
Complete the printURLParts function. It should print all the parts of a URL. For example, given this URL:

http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash

Your code should print:

protocol: http:
username: testuser
password: testpass
hostname: testdomain.com
port: 8080
pathname: /testpath
search: ?testsearch=testvalue
hash: #testhash

function printURLParts(urlString) {
  const urlObj = new URL(urlString);
  for (const prop in urlObj) {
    console.log(`${prop}: ${urlObj[prop]}`);
  }
}

// don't touch below this line

const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id';
printURLParts(fantasyQuestURL);
=============
Complete the getMailtoLinkForEmail function. It should return a "mailto" hyperlink for the given email.

function getMailtoLinkForEmail(email) {
    // ?
    return `mailto:${email}`;
}

// don't touch below this line

let email = 'slayer@fquest.app'
console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`)
email = 'killer@fquest.app'
console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`)
=====
Update the URL in the code so we can fetch some "location" data instead.
Use the /v1/courses_rest_api/learn-http/locations path.

const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations';

// don't touch below this line
const apiKey = generateKey()
const response = await fetch(url, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'X-API-Key': apiKey,
    'Content-Type': 'application/json'
  }
})

const responseData = await response.json()

logLocations(responseData)

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
function logLocations(locations) {
  for (const location of locations) {
    console.log(`Location: ${location.name}, Recommended Character Level: ${location.recommendedLevel}`)
  } 
}
======
*/