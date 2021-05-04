const mongoose     = require("mongoose"),
	  answerSchema = new mongoose.Schema({
		  qNum: Number,
		  answer: String
	  });
module.exports =mongoose.model("Answer", answerSchema);