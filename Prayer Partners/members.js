function Member(name, servant, sma, gender, paired, metWith) {
	this.name = name,
	this.servant = servant,
	this.sma = sma,
	this.gender = gender,
	this.paired = paired,
	this.metWith = metWith,
	this.checkMeetups = function (person) { //takes in potential's metWith array
			for (var i = 0; i < this.metWith.length; i++) {
			 	if(this.metWith[i] == person ) { //check to see if "this" works
			 		return true;
			 	}
			}
		 	return false;
		}
	}

var naomi = new Member("Naomi", true, false, "girl", false, [hannah, audrey,chloe, rina]);
var rina = new Member("Rina", false, true, "girl", false, [crystal,ashley,grace]);
var audrey = new Member("Audrey", false, false, "girl", false, [naomi,jamie,hannah]);
var hannah = new Member("Hannah", false, false, "girl", false, [naomi,grace,audrey,yoonjung]);
var jamie = new Member("Jamie", false, false, "girl",false, [chloe,audrey,crystal]);
var yoonjung = new Member("Yoonjung", false, false, "girl", [ashley,julie,naomi, hannah]);
var grace = new Member("Grace", false, false, "girl", false, [julie,hannah,rina]);
var chloe = new Member("Chloe", false, false, "girl", false, [jamie,naomi,ashley]);
var crystal = new Member("Crystal", false, false, "girl", false, [rina,ashley,jamie]);
var julie = new Member("Julie", false, false, "girl", false, [grace,yoonjung,naomi]);
var ashley = new Member("Ashley", false, false, "girl", false, [yoonjung,crystal,chloe]);

var paul = new Member("Paul", true, false, "boy", false, [ajie,jacky,mingu,mac,joowon]);
var toheeb = new Member("Toheeb", true, false, "boy", false, [mingu,mac]);
var mac = new Member("Mac", false, false, "boy", false, [michael,mingu,toheeb,paul]);
var felix = new Member("Felix", false, false, "boy", false, [jacky,paul,joowon]);
var mingu = new Member("Mingu", false, false, "boy", false, [toheeb,ajie,paul]);
var ajie = new Member("Ajie", false, false, "boy", false, [paul,toheeb]);
var michael = new Member("Michael", false, false, "boy", false, [mac,felix,jacky]);
var joowon = new Member("Joowon", false, false, "boy", false, [paul]);
var jacky = new Member("Jacky", false, false, "boy", false, [felix, mac,michael,paul]);
var daniel = new Member("Daniel", false, false, "boy", false,[]);


var girls = [ 
	naomi, 
	rina, 
	audrey, 
	hannah, 
	jamie, 
	yoonjung, 
	grace,
	chloe,
	crystal,
	julie,
	ashley
];

var boys = [
	paul,
	toheeb,
	mac,
	felix,
	mingu,
	ajie,
	michael,
	joowon,
	jacky,
	daniel
];

var allMembers = [
	naomi, 
	rina, 
	audrey, 
	hannah, 
	jamie, 
	yoonjung, 
	grace,
	chloe,
	crystal,
	julie,
	ashley,
	paul,
	toheeb,
	mac,
	felix,
	mingu,
	ajie,
	michael,
	joowon,
	jacky,
	daniel
];

exports.allMembers = allMembers;
exports.girls = girls;
exports.boys = boys;