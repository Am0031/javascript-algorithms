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

  //map through the rounds array and the nested matches array and add the goals number when there's a string match
  data.forEach((round) =>
    round.matches.forEach((match) => {
      if (match.team1.key === str || match.team2.key === str) {
        if (match.team1.key === str) goals += match.score1;
        if (match.team2.key === str) goals += match.score2;
      }
    })
  );

  //return the total number of goals
  return goals;
};

module.exports = { totalGoals };
