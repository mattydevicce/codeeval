function stack_implementation(line){
	var array = [];
	var number = "";
	var solution = ""
	for( var i=0; i < line.length; i++ ) {
		if ( line[i] == " "){
			array.push(number);
			number="";
		} else {
			number += line[i]
		}
	}
	array.push(number)
	var length_of_array = array.length
	for( var j=0; j < length_of_array; j++) {
		if(j==0 || j%2==0) {
			solution += array.pop() + " "
		} else {
			array.pop()
		}
	}
	console.log(solution)
}