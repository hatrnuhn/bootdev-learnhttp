/*
On line 9, the function is simply logging the entire object we receive from Cloudflare to the console. Run the code to see the structure of the object, but then update the code to return just the IP address found within and remove the logging. You may need to review the fetch api.

async function fetchIPAddress(domain) {
  const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
    headers: {
      'accept': 'application/dns-json'
    }
  })
  const respObject = await resp.json()

  console.log(respObject);
  return respObject['Answer'][0]['data'];
}

// don't touch below this line

const domain = 'api.boot.dev'
const ipAddress = await fetchIPAddress(domain)
if (!ipAddress) {
  console.log('something went wrong in fetchIPAddress')
} else {
  console.log(`found IP address for domain ${domain}: ${ipAddress}`)
}
==========
Complete the getDomainNameFromURL function. Given a full URL, it should return the domain (or host) name.

function getDomainNameFromURL(url) {
  // ?
  const urlObj = new URL('https://example.com/example-path');
  return urlObj.hostname;
}

// don't touch below this line

const bootdevURL = 'https://boot.dev/learn/learn-python'
const domainName = getDomainNameFromURL(bootdevURL)
console.log(`The domain name for ${bootdevURL} is ${domainName}`)
==========================
I've updated the getItemData function from before. Now it accepts just a domain as input. It's convenient this way because it means if the API we're using ever changes its domain, we only need to update one variable.
Problem is, there is a bug. The API isn't hosted on boot.dev, it's hosted on the "api" subdomain! Fix the bug.
*/
const bootdevAPIDomain = 'api.boot.dev'

// don't touch below this line

const apiKey = generateKey()
const items = await getItemData(bootdevAPIDomain)

logItems(items)

async function getItemData(domain) {
  const response = await fetch(`https://${domain}/v1/courses_rest_api/learn-http/items`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
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

function logItems(items) {
  for (const item of items) {
    console.log(item.name)
  }
}
