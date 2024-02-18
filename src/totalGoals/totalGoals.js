const leagueData = require("./footballdata.json");
//function to filter an array to only get unique items back in an array format

const totalGoals = (str) => {
  //check that the string is not empty
  if (str.length === 0) return "No valid team name";

  //data source - this would possibly be from an api call
  //the relevant data is in the 'rounds property of the json object
  const data = leagueData.rounds;

  //start with a count of goals at 0
  let goals = 0;

  //go through the rounds array, each team plays once in each round
  //for each round, go through the matches array, once there's a string match, add the gools to the count and it can exit the loop
  data.forEach((round) => {
    let found = false;
    let matchIndex = 0;
    while (!found) {
      const match = round.matches[matchIndex];
      if (match.team1.key === str || match.team2.key === str) {
        if (match.team1.key === str) goals += match.score1;
        if (match.team2.key === str) goals += match.score2;
        found = true;
      }
      matchIndex++;
    }
  });

  //return the total number of goals
  return goals;
};

module.exports = { totalGoals };
