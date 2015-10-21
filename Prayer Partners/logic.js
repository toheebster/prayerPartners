var members = require("./members");
// var boys = members.boys;
// var girls = members.girls;
var everybody = members.allMembers;


function prayerPartnersEverybody(array, max) {
	shuffle(everybody);
	console.log("Naomi/Toheeb/Paul will meet with " + array[0].name);
	for (var i = 1; i < array.length -1; i++) { //i=1 when odd number of everybody
		var me = array[i];
		// if i'm not paired
		var rand = getRandomNumberEverybody(max);
		if(me.paired == false) { 
			//rand must not be my index or the index of one already paired
			while(rand == i || array[rand].paired || me.checkMeetups(array[rand])) {   
				rand = getRandomNumberEverybody(max);
				console.log(rand);
			}
			// i got a number of available person
			var partner = array[rand];
			partner.paired = true;
			array[i].paired = true;
			console.log(array[i].name + " " + partner.name);
		}
	}
}

function getRandomNumberEverybody(max) { //odd number of members, update if change
	var rand = Math.floor(Math.random() * (max-1) + 1 ); 
	return rand;
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

exports.prayerPartnersEverybody = prayerPartnersEverybody;
exports.shuffle = shuffle;
