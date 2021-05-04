const mongoose = require("mongoose"),
	  Question = require("./models/questions.js"),
	  Answer = require("./models/answers.js");

const arr = [
	{
		qNum: 1,
		question: "WHEN YOU GO SOMEWHERE FOR THE DAY, WOULD YOU RATHER",
		answers: {
			a: {
				answer: " PLAN WHAT YOU WILL DO AND WHEN",
				points: 2,
				category: "J"
			},
			b: {
				answer: " JUST GO!",
				points: 2,
				category: "P"
			}
		}
	},
	{
		qNum: 2,
		question: "IF YOU WERE A TEACHER, WOULD YOU RATHER TEACH",
		answers: {
			a: {
				answer: " FACTS-BASED COURSES",
				points: 2,
				category: "S"
			},
			b: {
				answer: " COURSES INVOLVING OPINION OR THEORY",
				points: 2,
				category: "N"
			}
		}
	},
	{
		qNum: 3,
		question: "ARE YOU USUALLY",
		answers: {
			a: {
				answer: " A “GOOD MIXER” WITH GROUPS OF PEOPLE",
				points: 2,
				category: "E"
			},
			b: {
				answer: " RATHER QUIET AND RESERVED",
				points: 2,
				category: "I"
			}
		}
	},
	{
		qNum: 4,
		question: "DO YOU MORE OFTEN LET",
		answers: {
			a: {
				answer: " YOUR HEART RULE YOUR HEAD",
				points: 1,
				category: "F"
			},
			b: {
				answer: " YOUR HEAD RULE YOUR HEART",
				points: 2,
				category: "T"
			}
		}
	},
	{
		qNum: 5,
		question: "IN DOING SOMETHING THAT MANY OTHER PEOPLE DO, WOULD YOU RATHER",
		answers: {
			a: {
				answer: " INVENT A WAY OF YOUR OWN",
				points: 1,
				category: "N"
			},
			b: {
				answer: " DO IT IN THE ACCEPTED WAY",
				points: 1,
				category: "S"
			}
		}
	},
	{
		qNum: 6,
		question: "AMONG YOUR FRIENDS ARE YOU",
		answers: {
			a: {
				answer: " FULL OF NEWS ABOUT EVERYBODY",
				points: 2,
				category: "E"
			},
			b: {
				answer: " ONE OF THE LAST TO HEAR WHAT IS GOING ON",
				points: 1,
				category: "I"
			}
		}
	},
	{
		qNum: 7,
		question: "DOES THE IDEA OF MAKING A LIST OF WHAT YOU SHOULD GET DONE OVER A WEEKEND",
		answers: {
			a: {
				answer: " HELP YOU",
				points: 1,
				category: "J"
			},
			b: {
				answer: " STRESS YOU",
				points: 1,
				category: "P"
			}
		}
	},
	{
		qNum: 8,
		question: "WHEN YOU HAVE A SPECIAL JOB TO DO, DO YOU LIKE TO",
		answers: {
			a: {
				answer: " ORGANIZE IT CAREFULLY BEFORE YOU START",
				points: 1,
				category: "J"
			},
			b: {
				answer: " FIND OUT WHAT IS NECESSARY AS YOU GO ALONG",
				points: 2,
				category: "P"
			}
		}
	},
	{
		qNum: 9,
		question: "DO YOU TEND TO HAVE",
		answers: {
			a: {
				answer: " BROAD FRIENDSHIPS WITH MANY DIFFERENT PEOPLE",
				points: 2,
				category: "E"
			},
			b: {
				answer: " DEEP FRIENDSHIP WITH VERY FEW PEOPLE",
				points: 1,
				category: "I"
			}
		}
	},
	{
		qNum: 10,
		question: "DO YOU ADMIRE MORE THE PEOPLE WHO ARE",
		answers: {
			a: {
				answer: " NORMAL-ACTING TO NEVER MAKE THEMSELVES THE CENTER OF ATTENTION",
				points: 1,
				category: "S"
			},
			b: {
				answer: " TOO ORIGINAL AND INDIVIDUAL TO CARE WHETHER THEY ARE THE CENTER OF ATTENTION OR NOT",
				points: 2,
				category: "N"
			}
		}
	},
	{
		qNum: 11,
		question: "DO YOU PREFER TO",
		answers: {
			a: {
				answer: " ARRANGE PICNICS, PARTIES ETC, WELL IN ADVANCE",
				points: 2,
				category: "J"
			},
			b: {
				answer: " BE FREE TO DO WHATEVER TO LOOKS LIKE FUN WHEN THE TIME COMES",
				points: 1,
				category: "P"
			}
		}
	},
	{
		qNum: 12,
		question: "DO YOU USUALLY GET ALONG BETTER WITH",
		answers: {
			a: {
				answer: " REALISTIC PEOPLE",
				points: 1,
				category: "S"
			},
			b: {
				answer: " IMAGINATIVE PEOPLE",
				points: 2,
				category: "N"
			}
		}
	},
	{
		qNum: 13,
		question: "WHEN YOU ARE WITH THE GROUP OF PEOPLE, WOULD YOU USUALLY RATHER",
		answers: {
			a: {
				answer: " JOIN IN THE TALK OF THE GROUP",
				points: 1,
				category: "E"
			},
			b: {
				answer: " STAND BACK AND LISTEN FIRST",
				points: 2,
				category: "I"
			}
		}
	},
	{
		qNum: 14,
		question: "IS IT A HIGHER COMPLIMENT TO BE CALLED",
		answers: {
			a: {
				answer: " A PERSON OF REAL FEELING",
				points: 1,
				category: "F"
			},
			b: {
				answer: " A CONSISTENTLY REASONABLE PERSON",
				points: 2,
				category: "T"
			}
		}
	},
	{
		qNum: 15,
		question: "IN READING FOR PLEASURE, DO YOU",
		answers: {
			a: {
				answer: " ENJOY ODD OR ORIGINAL WAYS OF SAYING THINGS",
				points: 0,
				category: "N"
			},
			b: {
				answer: " LIKE WRITERS TO SAY EXACTLY WHAT THEY MEAN",
				points: 1,
				category: "S"
			}
		}
	},
	{
		qNum: 16,
		question: "DO YOU",
		answers: {
			a: {
				answer: " TALK EASILY TO ALMOST ANYONE FOR AS LONG AS YOU HAVE TO",
				points: 2,
				category: "E"
			},
			b: {
				answer: " FIND A LOT TO SAY ONLY TO CERTAIN PEOPLE OR UNDER CERTAIN CONDITIONS",
				points: 2,
				category: "I"
			}
		}
	},
	{
		qNum: 17,
		question: "DOES FOLLOWING A SCHEDULE",
		answers: {
			a: {
				answer: " APPEAL TO YOU",
				points: 2,
				category: "J"
			},
			b: {
				answer: " CRAMP YOU",
				points: 2,
				category: "P"
			}
		}
	},
	{
		qNum: 18,
		question: "WHEN IT IS SETTLED WELL IN ADVANCE THAT YOU WILL DO A CERTAIN THING AT A CERTAIN TIME,DO YOU FIND IT",
		answers: {
			a: {
				answer: " NICE TO BE ABLE TO PLAN ACCORDINGLY",
				points: 1,
				category: "J"
			},
			b: {
				answer: " A LITTLE UNPLEASANT TO BE TIED DOWN",
				points: 1,
				category: "P"
			}
		}
	},
	{
		qNum: 19,
		question: "ARE YOU MORE SUCCESSFUL",
		answers: {
			a: {
				answer: " AT FOLLOWING A CAREFULLY WORKED OUT PLAN",
				points: 1,
				category: "J"
			},
			b: {
				answer: " AT DEALING WITH THE UNEXPECTED AND SEEING QUICKLY WHAT SHOULD BE DONE",
				points: 1,
				category: "P"
			}
		}
	},
	{
		qNum: 20,
		question: "WOULD YOU RATHER BE CONSIDERED",
		answers: {
			a: {
				answer: " A PRACTICAL PERSON",
				points: 2,
				category: "S"
			},
			b: {
				answer: " AN OUT-OF-THE-BOX-THINKINGPERSON",
				points: 2,
				category: "N"
			}
		}
	},
	{
		qNum: 21,
		question: "IN A LARGE GROUP, DO YOU MORE OFTEN",
		answers: {
			a: {
				answer: " INTRODUCE OTHERS",
				points: 2,
				category: "E"
			},
			b: {
				answer: " GET INTRODUCED",
				points: 2,
				category: "I"
			}
		}
	},
	{
		qNum: 22,
		question: "DO YOU USUALLY",
		answers: {
			a: {
				answer: " VALUE EMOTION MORE THAN LOGIC",
				points: 2,
				category: "F"
			},
			b: {
				answer: " VALUE LOGIC MORE THAN FEELINGS",
				points: 2,
				category: "T"
			}
		}
	},
	{
		qNum: 23,
		question: "WOULD YOU RATHER HAVE AS A FRIEND",
		answers: {
			a: {
				answer: " SOMEONE WHO IS ALWAYS COMING UP WITH NEW IDEAS",
				points: 1,
				category: "N"
			},
			b: {
				answer: " SOMEONE WHO HAS BOTH FEET ON THE GROUND",
				points: 2,
				category: "S"
			}
		}
	},
	{
		qNum: 24,
		question: "CAN THE NEW PEOPLE YOU MEET TELL WHAT YOU ARE INTERESTED IN",
		answers: {
			a: {
				answer: " RIGHT AWAY",
				points: 1,
				category: "E"
			},
			b: {
				answer: " ONLY AFTER THEY REALLY GET TO KNOW YOU",
				points: 1,
				category: "I"
			}
		}
	},
	{
		qNum: 25,
		question: "IN YOUR DAILY WORK, DO YOU",
		answers: {
			a: {
				answer: " USUALLY PLAN YOUR WORK SO YOU WON’TNEED TO WORK UNDER PRESSURE",
				points: 1,
				category: "J"
			},
			b: {
				answer: " RATHER ENJOY AN EMERGENCY THAT MAKES YOU WORK AGAINST TIME",
				points: 1,
				category: "P"
			}
		}
	},
	{
		qNum: 26,
		question: "DO YOU USUALLY",
		answers: {
			a: {
				answer: " SHOW YOUR FEELINGS FREELY",
				points: 1,
				category: "E"
			},
			b: {
				answer: " KEEP YOUR FEELINGS TO YOURSELF",
				points: 0,
				category: "I"
			}
		}
	},
	{
		qNum: 27,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " SCHEDULED",
				points: 2,
				category: "J"
			},
			b: {
				answer: " UNPLANNED",
				points: 2,
				category: "P"
			}
		}
	},
	{
		qNum: 28,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " FACTS",
				points: 2,
				category: "S"
			},
			b: {
				answer: " IDEAS",
				points: 1,
				category: "N"
			}
		}
	},
	{
		qNum: 29,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " QUIET",
				points: 2,
				category: "I"
			},
			b: {
				answer: " HEARTY",
				points: 2,
				category: "E"
			}
		}
	},
	{
		qNum: 30,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " CONVINCING",
				points: 2,
				category: "T"
			},
			b: {
				answer: " TOUCHING",
				points: 1,
				category: "F"
			}
		}
	},
	{
		qNum: 31,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " IMAGINATIVE",
				points: 0,
				category: "N"
			},
			b: {
				answer: " MATTER-OF-FACT",
				points: 1,
				category: "S"
			}
		}
	},
	{
		qNum: 32,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " BENEFITS",
				points: 1,
				category: "T"
			},
			b: {
				answer: " BLESSINGS",
				points: 1,
				category: "F"
			}
		}
	},
	{
		qNum: 33,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " PEACEMAKER",
				points: 0,
				category: "F"
			},
			b: {
				answer: " JUDGE",
				points: 2,
				category: "T"
			}
		}
	},
	{
		qNum: 34,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " SYSTEMATIC",
				points: 2,
				category: "J"
			},
			b: {
				answer: " SPONTANEOUS",
				points: 2,
				category: "P"
			}
		}
	},
	{
		qNum: 35,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " STATEMENT",
				points: 2,
				category: "S"
			},
			b: {
				answer: " CONCEPT",
				points: 1,
				category: "N"
			}
		}
	},
	{
		qNum: 36,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " RESERVED",
				points: 1,
				category: "I"
			},
			b: {
				answer: " TALAKATIVE",
				points: 2,
				category: "E"
			}
		}
	},
	{
		qNum: 37,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " ANALYZE",
				points: 1,
				category: "T"
			},
			b: {
				answer: " SYMPATHIZE",
				points: 2,
				category: "F"
			}
		}
	},
	{
		qNum: 38,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " CREATE",
				points: 0,
				category: "N"
			},
			b: {
				answer: " MAKE",
				points: 2,
				category: "S"
			}
		}
	},
	{
		qNum: 39,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " DETERMINED",
				points: 1,
				category: "T"
			},
			b: {
				answer: " DEVOTED",
				points: 1,
				category: "F"
			}
		}
	},
	{
		qNum: 40,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " GENTLE",
				points: 1,
				category: "F"
			},
			b: {
				answer: " FIRM",
				points: 2,
				category: "T"
			}
		}
	},
	{
		qNum: 41,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " SYSTEMATIC",
				points: 2,
				category: "J"
			},
			b: {
				answer: " CASUAL",
				points: 2,
				category: "P"
			}
		}
	},
	{
		qNum: 42,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " CERTAINTY",
				points: 1,
				category: "S"
			},
			b: {
				answer: " THEORY",
				points: 2,
				category: "N"
			}
		}
	},
	{
		qNum: 43,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " CALM",
				points: 1,
				category: "I"
			},
			b: {
				answer: " LIVELY",
				points: 1,
				category: "E"
			}
		}
	},
	{
		qNum: 44,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " JUSTICE",
				points: 1,
				category: "T"
			},
			b: {
				answer: " MERCY",
				points: 2,
				category: "F"
			}
		}
	},
	{
		qNum: 45,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " FASCINATING",
				points: 0,
				category: "N"
			},
			b: {
				answer: " SENSIBLE",
				points: 2,
				category: "S"
			}
		}
	},
	{
		qNum: 46,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " FIRM-MINDED",
				points: 2,
				category: "T"
			},
			b: {
				answer: " WARM-HEARTED",
				points: 0,
				category: "F"
			}
		}
	},
	{
		qNum: 47,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " FEELING",
				points: 1,
				category: "F"
			},
			b: {
				answer: " THINKING",
				points: 2,
				category: "T"
			}
		}
	},
	{
		qNum: 48,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " LITERAL",
				points: 1,
				category: "S"
			},
			b: {
				answer: " FIGURATIVE",
				points: 1,
				category: "N"
			}
		}
	},
	{
		qNum: 49,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " ANTICIPATION",
				points: 2,
				category: "T"
			},
			b: {
				answer: " COMPASSION",
				points: 1,
				category: "F"
			}
		}
	},
	{
		qNum: 50,
		question: "Which word in each pair appeals to you more?",
		answers: {
			a: {
				answer: " HARD",
				points: 2,
				category: "T"
			},
			b: {
				answer: " SOFT",
				points: 0,
				category: "F"
			}
		}
	},
]

seedDb = ()=>{
	Question.deleteMany({}, (err)=>{
		if(err){
			console.log(err);
		}
		else{
			console.log("removed");
		}
	});
	Answer.deleteMany({}, (err)=>{
		if(err){
			console.log(err);
		}
		else{
			console.log("removed");
		}
	});
	
	for(let i=0; i<arr.length; i++){
		Question.create(arr[i], (err, question)=>{
			if(err){
				console.log(err);
			}
			else{
				console.log("created");
			}
		})
	}
}

module.exports = seedDb;