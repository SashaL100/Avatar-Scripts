var iFileName = "Airbender Armour.js";
ArmourList["airbender armour"] = {
	name : "Airbender Armour (Wis)",
	source : ["HB", 0],
	regExpSearch : /^(?=.*airbender)(?=.*armour).*$/i,
	ac : 10,
	type : "light",
	addMod : true,
};


var iFileName = "Airbender Class.js";
ClassList["airbender"] = {

	regExpSearch : /^(?=.*air)(?=.*bender).*$/i,

	name : "Airbender",

	source : ["HB", 0],

	primaryAbility : " \n /u2022 Airbender: Dexterity or Wisdom",

	prereqs : " \n /u2022 Airbender: Wisdom 13 or Dexterity 13",

	die : 8,

	improvements : [0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 6, 6, 6, 6, 6, 8, 8, 10, 10],

	saves : ["Dex", "Wis"],

	skills : ["\n\n" + toUni("Airbender") + ": Choose two from Acrobatics, Animal Handling, History, Insight, Nature, Religion and Stealth.", "\n\n" + toUni("Airbender") + ": Choose two from Acrobatics, Animal Handling, History, Insight, Nature, Religion and Stealth."],

	toolProfs : { 
		primary : [["Musical instrument", 3], ["Artisan's tools", "Dex"]], 
		secondary : [["Musical instrument", 3], ["Artisan's tools", "Dex"]]
	},

	armor : [ 
		[true, false, false, true], 
		[true, false, false, true], 
	],

	weapons : [ 
		[true, false, false], 
		[true, false, false],
	],

	equipment : "Airbender starting equipment: \n \u2022 (a) Nomad's Pack, which has a bedroll, 10 days rations, full waterskin, backpack, and an extra set of Nomad clothing, -or- (b) Scholar's Pack; \n \u2022 (a) One set of artisan's tools -or- (b) One musical instrument; \n \u2022 A glider (acts as a quarterstaff in combat).",

	subclasses : ["Nomad Archtype", ["northern air nomad"]], 

	prestigeClassPrereq : 1, 

	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 

	abilitySave : 2,

	abilitySaveAlt : 5,

	spellcastingFactor : 1,

	spellcastingKnown : { 

		cantrips : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 

		spells : [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],

		prepared : false,
	},

	features : { 
		"gentle defense" : { 
			name : "Gentle Defense", 
			source : ["HB", 0], 
			minlevel : 1, 
			description : "\n "+ "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Intelligence modifier.",
		},

		"elemental arts" : {
			name : "Elemental Arts",
			source : ["HB", 0],
			minlevel : 1,
			description : "\n   " + "At 1st level, your practice of bending arts has earned you some special abilities. \n " + "You can use Dexterity instead of Strength for attack and damage rolls when making an attack you are proficient in.",
		},

		"shove" : {
			name : "Shove",
			source : ["HB", 0],
			minlevel : 1,
			description : "\n   " + "When you hit a creature with a melee attack or with an Air Bending Technique, you can take a bonus action to shove your target back 10 feet. The distance will increase as you level up, as seen under the Shove Distance column of the Air Bender table.",
		},

		"extra speed" : {
			name : "Extra Speed",
			source : ["HB", 0],
			minlevel : 1,
			description : "\n   " + "Your movement speed increases by 5 feet. This movement speed boost will increase as you level up, as seen under the Extra Speed column of the Air Bender table. You can also move up to half of your maximum movement on water and up any vertical surface. If you take the dash action, all of the additional movement speed gained from this action can be used crossing water or going up vertical surfaces. You cannot end your turn on a vertical surface or over water without falling or sinking.",
		},

		"gust" : {
			name : "Gust",
			source : ["HB", 0],
			minlevel : 1,
			description : "\n   " + "You know the cantrip Gust",
		},

		"chi" : {
			name : "Chi",
			source : ["HB", 0],
			minlevel : 2,
			description : "\n   " + "At 2nd level, you can start using more advanced Air Bending techniques. The amount of energy that you have to bend is measured by your number of chi points. Your Air Bender level determines the number of points you have, as shown in the Chi Points column of the Air Bender table. \n You can spend chi points to fuel various Air Bending features. You start knowing three such features: Step of the Wind, Patient Defense, and Move Like the Wind. You learn more Air Bending features as you level up. \n When you spend a chi point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended chi back into yourself. You must spend at least 30 minutes of the rest meditating to regain your chi points. \n Some of the Air Bending features require you to make a ranged spell attack to hit your target or your target to make a saving throw to resist the feature’s effect. The bending attack bonus and save DC are calculated as follows: \n Bending Ability \n Dexterity and Intelligence are your bending abilities for your Air Bender features and techniques. You must think beyond the thoughts of this world, and become one with the wind. You use Dexterity and Intelligence whenever an Air Bender feature or technique refers to your bending ability. In addition, you use your Dexterity and Intelligence modifiers when setting the saving throw DC and attack bonus for an Air Bender feature or technique that requires you to use them. \n Bending Modifier \n Dexterity modifier divided by 2 (rounded up) + Intelligence modifier divided by 2 (rounded down) \n Bending Attack Bonus \n Proficiency bonus + Dexterity modifier divided by 2 (rounded up) + Intelligence modifier divided by 2 (rounded down) \n Save DC \n Proficiency bonus + Dexterity modifier divided by 2 (rounded up) + Intelligence modifier divided by 2 (rounded down) + 8 \n Here are your first three Air Bending features: \n Step of the Wind \n You can spend 1 chi point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn. \n  \n Patient Defense \n You can spend 1 chi point to take the Dodge action as a bonus action on your turn. \n  \n Move Like the Wind \n You can spend 1 chi point to cast longstrider and jump on yourself as a bonus action.",
		},

		"glider" : {
			name : "Glider",
			source : ["HB", 0],
			minlevel : 2,
			description : "\n   " + "Starting at the 2nd level, you can expend 1 chi point as a bonus action to open your glider and start flying. 5 feet of your movement has to be used as a running start. You can use what’s left of your normal movement speed plus 10 additional feet while in the air. The additional movement speed can only be used in the air. Then your movement for your turn is gone. To stay in the air at the end of your turn and to keep flying during your next turn, you must decide at the end of your turn to expend 1 chi point and your bonus action on your next turn. You can also expend an extra chi point as you start flying to give yourself an extra 10 feet to be used only in the air. \n At 9th level, this feature no longer requires chi points, just your glider, a bonus action, and the initial 5 feet of movement speed for the running start.",
		},

		"subclassfeature3" : { 
			name : "Nomad Arctype",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "Choose a Nomad Archetype you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Northern, Southern, Eastern, or Western",
		},

		"aerial senses" : {
			name : "Aerial Senses",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n " + "Starting at the 3rd level, when an enemy makes a ranged attack towards you, you can use your reaction to put it at disadvantage. This accounts for both magical and non-magical ranged attacks. If the attack lands, you can expend 1 chi point to make a Dexterity saving throw in the same reaction. If your roll is higher than your opponent's attack roll, the damage is halved. Otherwise, you take full damage. This doesn’t apply to critical hits or effects that already require a saving throw like the spell fireball.",
		},

		"airbending techniques" : {
			name : "Airbending Techniques",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n " + "Starting at the 3rd level, you can have up to 2 Advanced Air Bending Techniques of level 2 or lower of your choosing, as well as 1 Basic Air Bending Technique. As you gain levels in this class, you will be able to learn higher level techniques, as seen in the Technique Level column of the Air Bender table, as well as have more techniques prepared, as seen in the Basic/Advanced column of the Air Bender table. \n To do a technique, you must use a number of chi points equal to the technique's level. Basic techniques don't cost any chi points to do. /n To do techniques at higher levels, you simply expend the chi cost to use it at that level. However, you cannot do techniques at a higher level than you are capable of doing based on the Technique Level column. For example, as a 3rd level Air Bender, you could increase a 1st level technique to a 2nd level, but you couldn't increase it to a 3rd level technique. \n Additionally, whenever you take a long rest, you can choose one of the Air Bending Techniques you know and replace it with another technique from the Air Technique list, which also must be of a level for which you are capable of. You can only replace a Basic Technique with another Basic Technique, and you can only replace Advanced Techniques with Advanced Techniques. \n Every technique has the ''M'' and ''S'' component. The only material required for any technique is as much air as the DM requires to complete the technique. In certain situations, you can replace the ''S'' component of the spell with a ''V'' component. The only time a ''V'' component could be used instead of an ''S'' component would be if it's reasonable for you to be able to do the technique with a powerful breath, like gust of wind or forceful breeze. Again, this is up to the DM.",
		},

		"ability score improvement" : {
			name : "Ability Score Improvement",
			source : ["HB", 0],
			minlevel : 4,
			description : "\n " + "When you reach 4th level, and again at 8th, 12th, 16th and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature. \n Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead.",
		},

		"slow fall" : {
			name : "Slow Fall",
			source : ["HB", 0],
			minlevel : 4,
			description : "\n " + "Beginning at 4th level, you can use your reaction when you fall to begin falling as if you were under the effects of the feather fall spell.",
		},

		"extra attack" : {
			name : "Extra Attack",
			source : ["HB", 0],
			minlevel : 5,
			description : "\n " + "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
		},

		"air scooter" : {
			name : "Air Scooter",
			source : ["HB", 0],
			minlevel : 5,
			description : "\n " + "When you reach 5th level, you can create a ball of air that you sit on (or circle of air that you stand inside of) and fly forward as a bonus action at the cost of 1 chi point. This feature acts as a concentration spell. This gives you an additional 30 feet of movement. While on the scooter, you can skim across water, up vertical surfaces, and even glide. When gliding, you cannot gain height. You can only maintain height or slowly lose height. After 1 minute passes or at the moment you get off of the scooter, it will disperse. You can only attack with a melee attack or with Basic Air Techniques while on the scooter. Expending 1 extra chi point can extend the duration of the Air Scooter by 1 minute.",
		},

		"billowing blow" : {
			name : "Billowing Blow",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n " + "Starting at 6th level, you can use a simple, offensive Airbending technique for close-combat. You can attack by blasting a target that is within 5 ft. of you with compressed air, dealing 1d6 + Bending modifier points of force damage. You use your Bending Attack Bonus for the attack roll. This acts as a normal attack. \n At 12th level, the damage increases to 1d8 + Bending modifier.",
		},

		"aerial senses upgrade" : {
			name : "Aerial Senses Upgrade",
			source : ["HB", 0],
			minlevel : 7,
			description : "\n " + "Starting at 7th level, you can now use your Aerial Senses feature when being attacked by a melee attack. Also, if an ally within 15 feet of you is the target of a ranged attack, you can use your reaction and 1 chi point to push or pull the target with air 5 feet to avoid the attack. If the attack is an AOE attack, like the spell fireball, you will have to expend 1 extra chi point for ever 5 foot increment more you have to push your ally to put them out of harm's way.",
		},

		"evasion" : {
			name : "Evasion",
			source : ["HB", 0],
			minlevel : 7,
			description : "\n " + "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon’s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail. This does not apply to your Aerial Senses feature.",
		},

		"the spirit world" : {
			name : "The Spirit World",
			source : ["HB", 0],
			minlevel : 10,
			description : "\n " + "Starting at 10th level, you are able to enter the Spirit World. You can make a Religion check with a DC 20 or higher as an action to enter the Spirit World. On a failure, you don't enter the Spirit World and cannot attempt again until you have completed a long rest. On a success, Your eyes and tattoos glow with a bright light, and your body remains motionless while your spirit travels. Your body still requires food, water, and can still be damaged while this feature is active. You do not need to rest while using this feature, but you do not gain the benefits of a short or long rest while using this feature either. \n The Spirit World is full of, as you may have guessed, spirits. Some are helpful, and will give you sound advice. Many spirits know a lot more about the physical world than those who live in the physical world, interestingly enough. They may know about weaknesses of an enemy you will soon be facing, or the location of a hidden artifact. In rare instances, they may grant you temporary or even permanent understanding of different languages, techniques, and more. \n However, not all spirits are friendly. The Spirit World can also be a dangerous place. While in the Spirit World, you cannot use any Air Bending Techniques or features except Extra Attack and Evasion. It is possible for your spirit to be trapped there for a long time if you aren’t careful. Even worse, your spirit may be stolen from a being in the Spirit World. It is up to the DM to decide what sort of rolls are necessary to find a spirit, what determines finding a dangerous spirit vs. a safe spirit, the information they give, and so on. (Suggestion to the DM: either a Religion check, as if they ''feel'' which spirit is safe, an Investigation check, or just a Perception check.) To return to your body, you must make another Religion check with a DC 15 or higher, or seek out the help of a spirit to guide you back to the physical world. \n At 15th level, you can bring other people into the Spirit World when you use this feature. You can bring a number of creatures less than or equal to your Intelligence modifier. They must be willing to enter the Spirit World with you. Each additional creature you bring with you increases the DC for the Religion check by 2.",
		},

		"understanding" : {
			name : "Understanding",
			source : ["HB", 0],
			minlevel : 13,
			description : "\n " + "Starting at 13th level, you gain a greater understanding of the world, as well as the invisible strings that tie everything together. You gain proficiency in Nature and Religion. If you are already proficient in one or both of these skills, you gain double proficiency in those skills. Also, you can attempt to gain chi points as an action. Your tattoos and your eyes glow as you temporarily enter the Spirit World. Make a Religion check, subtract 15, and divide that by 2, then round down to a minimum of 1. You regain that many chi points. If, after you gain these chi points, you end up having more than your maximum number of chi points, your tattoos and eyes stay glowing and the extra chi points becomes temporary hit points, and your next two attacks or your next Air Bending Technique has advantage. However, once you use that advantage, your temporary health goes away. If you lose your temporary health, your advantage will go away. Your tattoos' and eyes' glow will fade when you lose this effect as well. You must complete a long rest before using this feature again.",
		},

		"aerial senses upgrade ii" : {
			name : "Aerial Senses Upgrade II",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n " + "Starting at 14th level, when you make a Dexterity Saving throw using your Aerial Sense feature, a success now results in you taking no damage and a failure results in you taking half damage. You can now also use this feature on critical hits by rolling a natural 20 on your Dexterity Saving throw.",
		},

		"spirit projection" : {
			name : "Spirit Projection",
			source : ["HB", 0],
			minlevel : 15,
			description : "\n " + "Starting at 15th level, you have learned how to project your spirit out of your body and move about. As an action, you can spend 7 chi points to send your spirit out of your body without going into the Spirit World. Your body stays in place and your tattoos glow while this feature is active. Your body still requires food, water, and can still be damaged while this feature is active. You do not need to rest while using this feature, but you do not gain the benefits of a short or long rest while using this feature either. This feature lasts until you end it as an action. \n When you activate this feature, you may choose to either release your spirit into the area immediately around your body or hone in on a specific creature or area that you are familiar with. If you choose the latter option, you must make a DC 20 Religion check to be able to project your spirit accurately. On a failure, your spirit appears in the immediate area around your body. You can attempt to teleport your spirit to another location again after 1 hour has passed. On a success, your spirit appears within 30 feet of the creature or area you had chosen and you can immediately attempt to teleport your spirit to another location if you so choose. \n Your spirit can move in all directions and pass through solid objects. Other creatures can see and hear you. You appear as a transparent blue version of yourself to other creatures. You cannot be affected by any effects from the physical world, and you cannot affect anything in the physical world. Your spirit cannot use any of your Air Bending Techniques or features.",
		},

		"air movement" : {
			name : "Air Movement",
			source : ["HB", 0],
			minlevel : 18,
			description : "\n " + "Starting at 18th level, you’ve mastered the art of using the air to aid your movement in tight situations. You can rise up from being prone without losing movement. You also gain advantage on avoiding and breaking out of being grappled or restrained, as well as advantage for all Dexterity saving throws.",
		},

		"detatchment" : {
			name : "Detatchment",
			source : ["HB", 0],
			minlevel : 20,
			description : "\n " + "Starting at 20th level, you have detached yourself from the physical world. You gain flying movement speed of 60 feet. If you already have flying speed, you add 60 feet to that speed. You can end turns in the air and you can't fall unless you are incapacitated or pulled down (which would require a contested roll of their Athletics vs. your Religion).",
		},

			savetxt : { 

				text : ["Dex save vs. range attacks: fail \u2015 half dmg, success \u2015 no dmg"],

				immune : ["falling dammage"],

				adv_vs : ["Dex Range"],
			},
		dmgres : ["Falling"], //optional; an array of damage types that the class gets resistance against. // If the resistance has a condition attached to it, like only being against nonmagical attacks, substitute the entry in the array with an array of 2: [the damage type, the damage type with the condition]. // For example: [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]],

		saves : ["Dex, Wis"],

		toolProfs : [["Musical instrument", 3], ["Artisan tools", "Dex"]], 

		languageProfs : [1],

		speed : {
			walk : { spd : 30, enc : 20 }, 
			climb : { spd : "+50", enc : 0 },
			fly : { spd : "50", enc : 0 },
			swim : { spd : "fixed 60", enc : "fixed 60" }, 
			allModes : "+10",
		},
	},
};
/*
Basic Techniques

Airlift (require concentration to maintain levitation for more than 1 turn)
Summon Chair (concentration to maintain existence for more than 1 turn)
Air Slash
Wind Dart
Aerostrike
Forceful Breeze
Force Cannon
Elemental Blast (force damage only)
Elemental Blow (force damage only)
Elemental Edge (force damage only)

Advanced Techniques

1st Level
Air Wave
Air Conditioning
Abeloth’s Grasping Wind (concentration to maintain restraint)
Whispering Wind
Wind Strike
Cyclone
Feather Fall

2nd Level
Air Bubble
Bladed Breeze
Gust of Wind
Warding Wind

3rd Level
Air Aid: As a reaction, you can wield the air to give yourself advantage in any Dex related event. This could be an Acrobatics check, Stealth, Dex saving throw, and so on. This can also be used on another creature or object within 10 feet of you. You can also cause a disadvantage instead of an advantage, if you so choose.
Aerithir’s Slicing Wind
Abeloth’s Air Spring (does not create air. air is needed for this spell)
Whirlwind (the whirlwind can only be centered on you. Extra chi points can be spent to make certain targets unaffected, 1 chi point for each unaffected target)
Wind Surge
Body of Air
Wind Wall

4th Level
Fickle Winds
Windflower Wind Barrier

5th Level
Control Winds

6th Level
Abeloth’s Ripping Winds
Investiture of Wind

7th Level
Whirlwind

8th Level
Tornado (no storm or sky necessary, just air)
These two techniques are different. Click on the links to see the difference.
Tornado (no storm or sky necessary, just air)
Vacuum

9th Level
Asphyxiate: You bend the air out of your target’s lungs and create an air bubble around their head so air cannot enter as an action. The target must make a constitution saving throw against your save DC with disadvantage even if they hold their breath unless they have some sort of advanced breathing ability. If they fail, their hit points drop to 0. If they are resuscitated, they have 3 levels of exhaustion. On a successful saving throw, they take 10d12 necrotic damage and take on 3 levels of exhaustion. This spell does not work if the target does not need to breathe. If you spend 11 additional chi points, you can target another creature with this technique in the same action.
*/


var iFileName = "Airbender Northern Air Nomad.js";
AddSubClass("airbender", "northern air nomad", {
	regExpSearch : /northern air nomad/i,
	subname : "Northern Air Nomad",
	source : ["HB", 0],
	fullname : "Northern Air Nomad",
	abilitySave : 1,
	features : {
		"subclassfeature3" : {
			name : "Explosive Bending",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "Airbending attacks gain +1d6 fire damage when within 10ft of an ignition source.",
			additional : ["", "", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10"],
			usages : [0, 0, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5],
			recovery : "short rest",
		},
		"subclassfeature7" : {
			name : "Nerve Gas",
			source : ["HB", 0],
			minlevel : 7,
			description : "\n   " + "Airbending attacks gain +1d6 poison damage in a 10ft cone.",
			additional : ["", "", "", "", "", "", "d6", "d6", "d6", "d6", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10"],
			usages : [0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5],
			recovery : "short rest",
		},
		"subclassfeature10" : {
			name : "Healing Wind",
			source : ["HB", 0],
			minlevel : 10,
			description : "\n   " + "I can heal myself or an ally with airbending within 10ft equal to (my Airbender level)d4.",
			action : ["bonus action"],
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5],
			recovery : "short rest",
		},
		"subclassfeature17" : {
			name : "Relentless",
			source : ["HB, 0"],
			minlevel : 17,
			description : "\n   " + "I can spend 1 chi to take an extra action on my turn.",
		}
	}
});
