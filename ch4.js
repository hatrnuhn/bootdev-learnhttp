/*
To help us visualize how asynchronous code executes, let's practice with an example from our game. Keep in mind that you probably wouldn't normally use setTimeout to change the order in which text is printed to the console, but it's a good way for us to practice async code.

Update the waiting durations so that text is printed in the following order:

Firing up the forge...
Smelting Iron Bars...
Combining Materials...
Shaping Iron...
Iron Longsword Complete!

The time required to complete a round of crafting is 2 seconds, so make sure none of the wait times are greater than 2000 ms.

const craftingCompleteWait = 2000;
const combiningMaterialsWait = 1000;
const smeltingIronBarsWait = 500;
const shapingIronWait = 1500;

// Don't touch below this line

setTimeout(() => console.log('Iron Longsword Complete!'), craftingCompleteWait)
setTimeout(() => console.log('Combining Materials...'), combiningMaterialsWait)
setTimeout(() => console.log('Smelting Iron Bars...'), smeltingIronBarsWait)
setTimeout(() => console.log('Shaping Iron...'), shapingIronWait)

console.log('Firing up the forge...')

await sleep(2500)
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
======================
Complete the applyDamage function that takes two parameters:
damage
currentHP

It should return a Promise after 1 second because in Fantasy Quest dealing damage with an attack takes some time!
If the damage inflicted would reduce the player's HP to 0 or less, the promise will reject with the string:
The player suffers DAMAGE points of damage and has fallen unconscious.

Otherwise, the promise will resolve with the string:
The player suffers DAMAGE points of damage and has NEWHP hit points remaining.

Where:
DAMAGE is the amount of damage inflicted.
NEWHP is the player's HP after the damage is applied.

const applyDamage = (damage, currentHP) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // ?
      currentHP -= damage;
      (currentHP <= 0) ? reject(`The player suffers ${damage} points of damage and has fallen unconscious.`): resolve(`The player suffers ${damage} points of damage and has ${currentHP} hit points remaining.`);

    }, 1000)
  })
}

// Don't touch below this line

function runApplyDamageTest(damage, currentHP) {
  console.log(`Applying ${damage} damage to player with ${currentHP} HP...`)
  applyDamage(damage, currentHP).then((message) => {
    console.log(`...applyDamage resolved with: ${message}`)
  }).catch((message) => {
    console.log(`...applyDamage rejected with: ${message}`)
  })
}

runApplyDamageTest(27, 50)
await sleep(1100)
runApplyDamageTest(50, 50)
await sleep(1100)
runApplyDamageTest(110, 100)
await sleep(1100)

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
====================
Similar to before, the applyDamage function takes a damage value and the player's current HP as inputs and returns a Promise. On line 1, call applyDamage with inputs:

damage = 25
currentHP = 50

Then await the returned promise and save the resolved value in a variable called message which will be logged to the console.

// ?
async function main(){
     console.log(await applyDamage(25, 50));
 }
// Don't touch below this line

main();

// const message = applyDamage(25, 50);
// message.then((message) => {
//     console.log(message + 'resolve');
// });

function applyDamage(damage, currentHP) {
  return new Promise((resolve) => {
    const newHP = currentHP - damage
    setTimeout(() => {
      resolve(`The player with ${currentHP} hit points suffers ${damage} points of damage and has ${newHP} hit points remaining.`)
    }, 1000)
  })
}
===============
As it turns out, the await keyword can only be used within async functions.

Go ahead and try to run the code! You'll get an error.

Update our getItemData() function in our Fantasy Quest code so that it can properly await the promise returned by the fetch() call.
*/
async function getItemData() {
  const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items', getSettings())
  return response.json()
}

// don't touch below this line

const items = getItemData();
items.then((items) => {
    logItems(items);
});
// logItems(items);

function getSettings() {
  return {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': 'Testing',
      'Content-Type': 'application/json'
    }
  }
}

function logItems(items) {
  for (const item of items) {
    console.log(item.name)
  } 
}
