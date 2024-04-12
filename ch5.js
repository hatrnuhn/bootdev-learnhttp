/*
The following code is failing to execute. It is throwing an error string that isn't being handled gracefully. As a result, the entire program is crashing.
Properly handle the error in the code by wrapping all of the function calls within a try...catch block. The catch block should log any errors to the console, without extra formatting.

try {
    printCharacterStats(4);
    printCharacterStats('ten');
    printCharacterStats(10);
} catch (err) {
    console.log(err);
}
// don't touch below this line

function printCharacterStats(level) {
  if (isNaN(level)) {
    throw new Error('Parameter is not a number!')
  }
  console.log(`Your character is level ${level}!`)
}
===============
We're trying to fetch the worldwide leaderboard from the Fantasy Quest servers, but we're getting an error! Fortunately, it's just because the server is down, there's nothing wrong with the fetchLeaderBoard function.

However, as good software engineers, we need to handle our server being down cleanly and display an error message to our users.

Wrap the network call within a try/catch block. Within the catch block, log the text:

Our servers are down, but we will be up and running soon

async function main() {
    const leaderboard = await fetchLeaderBoard();
    console.log(leaderboard);
}

try {
    const leaderboard = fetchLeaderBoard();
    leaderboard.then((leaderboard)=> {
        console.log(leaderboard);        
    });
} catch (err) {
    console.log('Our servers are down, but we will be up and running soon');
}

// don't touch below this line

async function fetchLeaderBoard() {
  const response = await fetch('https://fantasyquest.servers')
  return response.json()
}
=========
*/
