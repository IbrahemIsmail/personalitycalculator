const express         = require("express"),
	  mongoose        = require("mongoose"),
	  seedDb          = require("./seeds.js"),
	  Question        = require("./models/questions.js"),
	  Answer          = require("./models/answers.js"),
	  bodyParser      = require("body-parser"),
	  PersonalityType = require("./getResult.js"),
	  app             = express();

let pType = "";

mongoose.connect('mongodb://localhost:27017/questions', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
seedDb();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));





app.get("/", (req, res) =>{
	Question.find({}, (err, allQs)=>{
		if(err){
			console.log(err)
		}else{
			res.render("../views/main.ejs", {questions: allQs});
		}
	})
});



// let arr =[];

// for(let i=1;i<=50;i++){
// 	arr[i] = i;
// }

app.post("/", (req, res)=>{
	console.log(req.body);
	// console.log(arr);
	for(let i= 0; i<50;i++){
		let data = req.body['question' + (i+1)];
		if((data) !=undefined){
			
			const qNum   = data.slice(1),
		  		  answer = data[0];
			Answer.create({
				qNum: qNum,
				answer: answer
			}, (err, ans)=>{
			if(err){
				console.log(err)
			}
			else{
				console.log("Created "+ ans);
			}
			});
			// arr.splice(i, 1);
			// console.log(arr);
			break;
		}
	}	
});

app.post("/execute", (req, res)=>{
	pType = PersonalityType.getResult();
});

// console.log(pType);
app.get("/result", (req, res)=>{
	Promise.resolve(pType).then(function(value) {
  	console.log(value); 
	res.render("../views/result.ejs", {result: value});
	}, function(value) {
  	// res.render("../views/result.ejs", {result: value});
});
	
});

app.listen(3000, ()=>{
	console.log("Connected");
});
