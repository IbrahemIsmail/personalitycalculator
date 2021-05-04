const mongoose       = require("mongoose"),
	  questionSchema = new mongoose.Schema({
		  qNum: Number,
		  question: String,
		  answers: {
			  a:{
				  answer: String,
				  points: Number,
				  category: String
			  },
			  b:{
				  answer: String,
				  points: Number,
				  category: String
			  }
		  }
	  })

module.exports =mongoose.model("Question", questionSchema);