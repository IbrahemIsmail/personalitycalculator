const mongoose = require("mongoose"),
	  Question = require("./models/questions.js"),
	  Answer = require("./models/answers.js");


 getResult = async ()=>{
	let E=0, I=0, S=0, N=0, T=0, F=0, J=0, P=0;
	 
	for (let i=0; i<50; i++){
		
		let j = i+1;
		
		// Question.findOne({qNum: 12}, (err, foundQ)=>{
		// 	if(err){
		// 		console.log(err)
		// 	}else{
		// 		question = foundQ;
		// 	}
		// });
			
		// Answer.findOne({qNum: j}, (err, foundA)=>{
		// 	if(err){
		// 		console.log(err)
		// 	}else{
		// 		answer = foundA;
		// 	}
		// });
		
		
		
		let question = await Question.findOne({qNum: j}),
			answer   = await Answer.findOne({qNum: j});
		
		// question.exec();
		
		// console.log(question);
		// console.log(answer);
		
		if(question.answers.a.category == "E" || question.answers.a.category == "I"){
			
			if (answer.answer == 'A'){
				
				if(question.answers.a.category == 'E'){
					
					E+=question.answers.a.points;
					
				}else{
					
					I+=question.answers.a.points;
					
				}
			}else if(answer.answer == 'B'){
				
				if(question.answers.b.category == 'E'){
					
					E+=question.answers.b.points;
					
				}else{
					
					I+=question.answers.b.points;
					
				}
			}
		}
		
		else if(question.answers.a.category == "S" || question.answers.a.category == "N"){
			
			if (answer.answer == 'A'){
				
				if(question.answers.a.category == 'S'){
					
					S+=question.answers.a.points;
					
				}else{
					
					N+=question.answers.a.points;
					
				}
			}else if(answer.answer == 'B'){
				
				if(question.answers.b.category == 'S'){
					
					S+=question.answers.b.points;
					
				}else{
					
					N+=question.answers.b.points;
					
				}
			}
		}
		
		else if(question.answers.a.category == "T" || question.answers.a.category == "F"){
			
			if (answer.answer == 'A'){
				
				if(question.answers.a.category == 'T'){
					
					T+=question.answers.a.points;
					
				}else{
					
					F+=question.answers.a.points;
					
				}
			}else if(answer.answer == 'B'){
				
				if(question.answers.b.category == 'T'){
					
					T+=question.answers.b.points;
					
				}else{
					
					F+=question.answers.b.points;
					
				}
			}
			
		}
		
		else if(question.answers.a.category == "J" || question.answers.a.category == "P"){
			
			if (answer.answer == 'A'){
				
				if(question.answers.a.category == 'J'){
					
					J+=question.answers.a.points;
					
				}else{
					
					P+=question.answers.a.points;
					
				}
			}else if(answer.answer == 'B'){
				
				if(question.answers.b.category == 'J'){
					
					J+=question.answers.b.points;
					
				}else{
					
					P+=question.answers.b.points;
					
				}
			}
			
		}
		
	}
	let result = "";
	
	if(I > E || I == E){
		result += 'I';
	}
	else if(E > I){
		result += 'E'
	}
	
	if(N > S || N == S){
		result += 'N'
	}
	else if(S > N){
		result += 'S'
	}
	
	if(T > F || T == F){
		result += 'T'
	}
	else if(F > T){
		result += 'F'
	}
	
	if(P > J || P == J){
		result += 'P'
	}
	else if(J > P){
		result += 'J'
	}
	 
	console.log(E+" "+I+" "+S+" "+N+" "+T+" "+F+" "+J+" "+P+" ");
	console.log(" "+result+" ");
	return result;
}

module.exports.getResult = getResult;

