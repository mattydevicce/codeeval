var l = ""
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        l+=line
        l+="\n"
    }
});
function game_of_life(input){

	var array = [];
	var temp = [];
	for (var i=0; i<input.length; i++){
		if (input[i]=="\n"){
			array.push(temp);
			temp = [];
		} else {
			temp.push(input[i])
		}
	}
	array.push(temp);
	var answer_in_arrays = play_ball(array)
	var final_answer = []
	for (var k=0; k<answer_in_arrays.length; k++){
		final_answer.push(answer_in_arrays[k].join(""))
	}
	return final_answer.join("\n")
}

// check edge cases when i = 0 or i = 9
// check edge cases when j = 0 or j = 9
// check corner cases when j=0 and i = 0 or j = 9 and i = 0
// check corner cases when j = 0 and i = 9 or j = 9 and i = 9


function play_ball(array){
	var new_life = array;
	var result;
	var doa;
	for( var i=0; i<array.length; i++){
		for( var j=0; j<array[i].length; j++){
			doa = array[i][j]
			// Checking if corner element
			if ((i==0 || i==array.length-1) && (j==0 || j==array[i].length-1)){
				
				if (i==0 && j==0){
					send = [[0,0,0],[0,0,array[i][j+1]],[0,array[i+1][j],array[i+1][j+1]]]
					result = the_rule_maker(doa, send)
				} else if (i==0 && j==array[i].length-1){
					send = [[0,0,0],[array[i][j-1],0,0],[array[i+1][j-1],array[i+1][j],0]]
					result = the_rule_maker(doa, send)
				} else if (i==array.length-1 && j==0) {
					send = [[0,array[i-1][j],array[i-1][j+1]],[0,0,array[i][j+1]],[0,0,0]]
					result = the_rule_maker(doa, send)
				} else if (i==array.length-1 && j==array[i].length-1){
					send = [[array[i-1][j-1],array[i-1][j],0],[array[i][j-1],0,0],[0,0,0]]
					result = the_rule_maker(doa, send)
				}
			} 
			// Check if top element or bottom element
			else if (( i==0 && (j!=0 || j!=array[i].length-1)) || ( i==array.length-1 && (j!=0 || j!=array[i].length-1))){
				
				if(i==0){
					send = [[0,0,0],[array[i][j-1],0,array[i][j+1]],[array[i+1][j-1],array[i+1][j],array[i+1][j+1]]]
					result = the_rule_maker(doa, send)
				} else if (i==array.length-1) {
					send = [[array[i-1][j-1],array[i-1][j],array[i-1][j+1]],[array[i][j-1],0,array[i][j+1]],[0,0,0]]
					result = the_rule_maker(doa, send)
				}
			}
			// Check if element is on either side
			else if (( i!=0 && (j==0 || j==array[i].length-1)) || ( i!=array.length-1 && (j==0 || j==array[i].length))){
				
				if(j==0){
					send = [[0,array[i-1][j],array[i-1][j+1]],[0,0,array[i][j+1]],[0,array[i+1][j],array[i+1][j+1]]]
					result =  the_rule_maker(doa, send)
				} else if (j==array[i].length-1){
					send = [[array[i-1][j-1],array[i-1][j],0],[array[i][j-1],0,0],[array[i+1][j-1],array[i+1][j],0]]
					result =  the_rule_maker(doa, send)
				}
			}
			// if not any of those cases, its has tons of neghbors
			else {

				var send = [[array[i-1][j-1],array[i-1][j],array[i-1][j+1]],[array[i][j-1],0,array[i][j+1]],[array[i+1][j-1],array[i+1][j],array[i+1][j+1]]]
				result = the_rule_maker(doa, send)

			}
			if (result == 'live'){
				array[i][j]="*"
			} else {
				array[i][j]="."
			}
		}
	}
	return array
}

function the_rule_maker(doa, array) {
	
	// This function grabs the number of neighbors
	// and checks the rules of the game

	var neighbors = 0;
	for( var i=0; i<array.length; i++){
		for( var j=0; j<array[i].length; j++){
			if (array[i][j] == "*"){
				neighbors += 1
			}
		}
	}
	if (doa == "*" && neighbors<2){
		return 'dead'
	} else if (doa == "*" && (neighbors ==2 || neighbors == 3)){

		return 'live'
	} else if (doa == "*" && neighbors > 3) {
		return 'dead'
	} else if (doa == "." && neighbors == 3) {

		return 'live'
	}
}


answer = game_of_life(l)

for( var dun=0; dun<9; dun++){
	answer = game_of_life(answer)
}
console.log(answer)
