var members = require("./members");
var logic = require("./logic");
var boys = members.boys;
var girls = members.girls;
var everybody = members.allMembers;

logic.shuffle(boys);
logic.shuffle(girls);
// logic.shuffle(everybody);

logic.prayerPartnersBoys(boys, 9);
console.log("---");
logic.prayerPartnersGirls(girls, 10);

// console.log("---");
// logic.prayerPartnersEverybody(everybody, 21)

//reminder - made special case because of odd numbers
/* So I'll only loop through up to my array length - 1
	I'll store the person who is at the last position
	Then I or paul, and naomi will just meet up with that
	extra person :)

	Which is why the shuffle is important. Don't want the 
	same person to always be the extra one out.
*/
