const gameObject = function (){
  myObj = {
    home : {
      teamName : "Brooklyn Nets",
      colors   : ["Black","White"],
      players  : {
        "Alan Anderson" : {
          number   : 0,
          shoe     : 16,
          points   : 22,
          rebounds : 12,
          assists   : 12,
          steals   : 3,
          blocks    : 1,
          slamDunks: 1
        },
        "Reggie Evans"  : {
          number   : 30,
          shoe     : 14,
          points   : 12,
          rebounds : 12,
          assists   : 12,
          steals   : 12,
          blocks    : 12,
          slamDunks: 7
        },
        "Brook Lopez"  : {
          number   : 11,
          shoe     : 17,
          points   : 17,
          rebounds : 19,
          assists   : 10,
          steals   : 3,
          blocks    : 1,
          slamDunks: 15
        },
        "Mason Plumlee" : {
          number   : 1,
          shoe     : 19,
          points   : 26,
          rebounds : 12,
          assists   : 6,
          steals   : 3,
          blocks    : 8,
          slamDunks: 5          
        },
        "Jason Terry"  : {
          number   : 31,
          shoe     : 15,
          points   : 19,
          rebounds : 2,
          assists   : 2,
          steals   : 4,
          blocks   : 11,
          slamDunks: 1         
        }
      }
    },
    away : {
      teamName : "Charlotte Hornets",
      colors   : ["Turquoise","Purple"],
      players  : {
        "Jeff Adrien" : {
          number   : 4,
          shoe     : 18,
          points   : 10,
          rebounds : 1,
          assists   : 1,
          steals   : 2,
          blocks    : 7,
          slamDunks: 2
        },
        "Bismak Biyombo"  : {
          number   : 0,
          shoe     : 16,
          points   : 12,
          rebounds : 4,
          assits   : 7,
          steals   : 7,
          blocks    : 15,
          slamDunks: 10
        },
        "DeSagna Diop"  : {
          number   : 2,
          shoe     : 14,
          points   : 24,
          rebounds : 12,
          assists   : 12,
          steals   : 4,
          blocks    : 5,
          slamDunks: 5
        },
        "Ben Gordon" : {
          number   : 8,
          shoe     : 15,
          points   : 33,
          rebounds : 3,
          assists   : 2,
          steals   : 1,
          blocks    : 1,
          slamDunks: 0          
        },
        "Brendan Haywood"  : {
          number   : 33,
          shoe     : 15,
          points   : 6,
          rebounds : 12,
          assists   : 12,
          steals   : 22,
          blocks    : 5,
          slamDunks: 12         
        }
      }
    }
  }
  return myObj;
}
 
//Players points function 

const numPointsScored = function (name){
  let allPlayers=Object.assign(gameObject().home.players,gameObject().away.players),
  playerPoints = 0;
  for(player in allPlayers){
    if (player===name){
      playerPoints=allPlayers[player]["points"];
    }
  
  }
  return playerPoints; 
}

//Players shoe size function 

        
const shoeSize = function (name){
  let allPlayers=Object.assign(gameObject().home.players,gameObject().away.players),
  size =0;
  for (player in allPlayers){
    if (player===name){
      size = allPlayers[player]["shoe"];
    }
  
  }
  return size;
}

//Team colors function 

const teamColors = function (name){
  let homeColors=gameObject().home.colors,awayColors=gameObject().away.colors,colors;
  if(name === gameObject().home.teamName){
    colors=homeColors;
  }
  else if (name === gameObject().away.teamName){
    colors=awayColors;
  }
  return colors;

}


//Team names function 

const teamNames = function (){
  let teamnames = [];
  teamnames.push(gameObject().home.teamName);
  teamnames.push(gameObject().away.teamName);
  return teamnames;
}

//Team's Jersey Numbers funciton 


const playerNumbers = function (name){
  let homeTeam=gameObject().home.players,awayTeam=gameObject().away.players,
  jerseynumbers=[];
  if (name === gameObject()["home"]["teamName"]){
    for(player in homeTeam){
      jerseynumbers.push(homeTeam[player]["number"])
    }
  }
  else if (name === gameObject()["away"]["teamName"]){
    for (player in awayTeam){
      jerseynumbers.push(awayTeam[player]["number"])
    }
  }
  return jerseynumbers;
}

//Players stats funciton 

const playerStats = function (name){
  let allPlayers=Object.assign(gameObject().home.players,gameObject().away.players),
  playerstats;
  const statsObj = function (number,shoe,points,rebounds,assists,steals,blocks,slamDunks){
    this.number = number;
    this.shoe =shoe;
    this.points= points;
    this.rebounds=rebounds;
    this.assists=assists;
    this.steals=steals;
    this.blocks=blocks;
    this.slamDunks=slamDunks;
  }
  for(player in allPlayers){
    if (name === player){
      playerstats = new statsObj(allPlayers[player]["number"],
        allPlayers[player]["shoe"],
      allPlayers[player]["points"],
      allPlayers[player]["rebounds"],
      allPlayers[player]["assists"],
      allPlayers[player]["steals"],
      allPlayers[player]["blocks"],
      allPlayers[player]["slamDunks"])
      }

  }
  return playerstats;
}

//Biggest shoesize rebound funtion 

const bigShoeRebounds = function (){
  let allPlayers=Object.assign(gameObject().home.players,gameObject().away.players),
  bigShoe=0,bigshoePlayer;
  for(player in allPlayers){
    if(allPlayers[player]["shoe"]>bigShoe){
      bigShoe = allPlayers[player]["shoe"];
      bigshoePlayer=player;
    }
  }
  return allPlayers[bigshoePlayer]["rebounds"]
}


//Bonus
//Player with most points function 

const mostPointScored = function (){
  let  allPlayers=Object.assign(gameObject().home.players,gameObject().away.players),
  mostPoints=0,mostPointsPlayer;
  for(player in allPlayers){
    if(allPlayers[player]["points"]>mostPoints){
      mostPoints = allPlayers[player]["points"];
      mostPointsPlayer=player;
    }
  
  }
  return mostPointsPlayer;
}

//Winning team function

const winningTeam = function (){
  let homeTeam=gameObject().home.players,awayTeam=gameObject().away.players,
  homeTotal=0,awayTotal=0,winner;
  for (let player in homeTeam){
    homeTotal+=homeTeam[player]["points"];
  }
  for(let player in awayTeam){
    awayTotal+=awayTeam[player]["points"]
  }
  if(homeTotal>awayTotal){
    winner=gameObject().home.teamName;  
  }
  else if(awayTotal>homeTotal){
    winner=gameObject().away.teamName;
  }
  return winner;
}

//Player with longest name function 

const playerWithLongestName = function (){
   let allPlayers=Object.assign(gameObject().home.players,gameObject().away.players),
   longestName=0,longestNamePlayer;
  for (let player in allPlayers) {
    if(player.length > longestName){
      longestName=player.length;
      longestNamePlayer=player;
    }
  }
  return longestNamePlayer
}


//Super Bonus
//Player with longest name had most steals

const doesLongNameStealATon = function (){
  let allPlayers=Object.assign(gameObject().home.players,gameObject().away.players),
  longestNameNumber=0,mostStealNumber=0;
  for (let player in allPlayers) {
    if(player.length > longestNameNumber){
      longestNameNumber=player.length;
    }
    if (allPlayers[player]["steals"]>mostStealNumber){
      mostStealNumber=allPlayers[player]["steals"];
    }
  }
  return longestNameNumber === mostStealNumber;
  
}


