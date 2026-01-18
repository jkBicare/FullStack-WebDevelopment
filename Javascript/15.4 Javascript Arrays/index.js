var favoriteGames = [];

function showGames() {
    return "Games: " + favoriteGames.join(", ");
}

// ADD GAME
function addGame(gameName) {
    favoriteGames.push(gameName);
    return gameName + " has been added.";
}

// REMOVE GAME
function removeGame(gameName) {
    var index = favoriteGames.indexOf(gameName);

    if (index !== -1) {
        favoriteGames.splice(index, 1);
        return gameName + " has been removed.";
    } else {
        return gameName + " was not found.";
    }
}

// CHECK IF GAME EXISTS
function gameExists(gameName) {
    return favoriteGames.includes(gameName);
}

// SEARCH GAME (returns the game)
function findGame(gameName) {
    return favoriteGames.find(function (game) {
        return game.toLowerCase() === gameName.toLowerCase();
    });
}

// FILTER GAMES BY LETTER
function filterGamesByLetter(letter) {
    return favoriteGames.filter(function (game) {
        return game.startsWith(letter);
    });
}

// FORMAT GAMES (INTERMEDIATE)
function formatGamesUpperCase() {
    return favoriteGames.map(function (game) {
        return game.toUpperCase();
    });
}

var numFavorites = prompt("Good day! How many favorite games do you have?:");
for (let index = 0; index < numFavorites; index++) {
    var item = prompt("Tell me your favorite/s:").toLowerCase();
    addGame(item);
}
alert("Your favorite " + showGames());