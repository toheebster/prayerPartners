var members = require("./members");
var boys = members.boys;
var girls = members.girls;
var everybody = members.allMembers;//


// //check to make sure a servant or rina is not extra one out
//  var extraBoyOut = boys[boys.length-1]; //even boys now
// var extraGirlOut = girls[girls.length-1];
var extraPersonOut = everybody[everybody.length-1];//
// console.log(extraBoyOut.name);
// while(extraGirlOut.name == "Rina" || extraGirlOut.name == "Naomi") {
// 	shuffle(girls);
// }

// while(extraPersonOut.name == "Rina" || extraPersonOut.name == 
// 	"Naomi" || extraPersonOut.name == "Toheeb" || extraPersonOut.name == "Paul") {
// 		shuffle(everybody);
// }
// function prayerPartnersBoys(array, max) {
// 	var rand = getRandomNumberBoys(max);
// 	for (var i = 0; i < array.length-1; i++) { //change "array.length-1 if new member"
// 		var me = array[i];
// 		// if i'm not paired
// 		if(!me.paired) { 
// 			//rand must not be my index or the index of one already paired
// 			while(array[rand].paired == true || rand == i || me.checkMeetups(array[rand])) {   
// 				rand = getRandomNumberBoys(max);
// 			}
// 			// i got a number of available person
// 			var partner = array[rand];
// 			partner.paired = true;
// 			array[i].paired = true;
// 			console.log(array[i].name + " " + partner.name);
// 		}
// 	}//forloop
// }

// function prayerPartnersGirls(array, max) {
// 	console.log("Naomi/Toheeb will meet with " + array[array.length-1].name);
// 	var rand = getRandomNumberGirls(max);
// 	for (var i = 0; i < array.length; i++) { //change "array.length-1 if new member"
// 		var me = array[i];
// 		// if i'm not paired
// 		if(array[i].paired == false) { 
// 			//rand must not be my index or the index of one already paired
// 			while(array[rand].paired == true || rand == i || me.checkMeetups(array[rand])) {   
// 				rand = getRandomNumberGirls(max);
// 			}
// 			// i got a number of available person
// 			var partner = array[rand];
// 			partner.paired = true;
// 			array[i].paired = true;
// 			console.log(array[i].name + " " + partner.name);
// 		}
// 	}//forloop
// }

function prayerPartnersEverybody(array, max) {
	shuffle(everybody);
	console.log("Naomi/Toheeb/Paul will meet with " + array[0].name);
	for (var i = 1; i < array.length -1; i++) { //i=1 when odd number of everybody
		var me = array[i];
		// if i'm not paired
		var rand = getRandomNumberEverybody(max);
		if(me.paired == false) { 
			//rand must not be my index or the index of one already paired
			while(rand == i || array[rand].paired == true || me.checkMeetups(array[rand])) {   
				rand = getRandomNumberEverybody(max);
				console.log(rand);
			}
			// i got a number of available person
			var partner = array[rand];
			partner.paired = true;
			array[i].paired = true;
			console.log(array[i].name + " " + partner.name);
		}
	}//forloop
}


// function getRandomNumberBoys(max) { //odd number of boys, update if change
// 	var rand = Math.floor( Math.random() * ((max) - 0) + 0 ); 
// 	return rand;
// }

// function getRandomNumberGirls(max) { //odd number of girls, update if change
// 	var rand = Math.floor( Math.random() * ((max + 1) - 0) + 0 ); 
// 	return rand;
// }//remember the trouble math.floor caused you

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

// exports.prayerPartnersBoys = prayerPartnersBoys;
// exports.prayerPartnersGirls = prayerPartnersGirls;
// exports.getRandomNumberBoys = getRandomNumberBoys;
// exports.getRandomNumberGirls = getRandomNumberGirls;
exports.prayerPartnersEverybody = prayerPartnersEverybody;
exports.shuffle = shuffle;
