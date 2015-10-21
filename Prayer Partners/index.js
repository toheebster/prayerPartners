var members = require("./members");
var logic = require("./logic");
var boys = members.boys;
var girls = members.girls;
var everybody = members.allMembers;


logic.shuffle(everybody);
// console.log("---");
logic.prayerPartnersEverybody(everybody, 23) //23 members

