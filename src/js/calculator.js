function maximum(numbers){
	return Math.max.apply(Math, numbers);
}

function minimum(numbers){
	return Math.min.apply(Math, numbers);
}

function average(numbers){
	var sum = numbers.reduce(
		function(previous, next){
			return previous + next;
		}
	);
	return sum/numbers.length;
}