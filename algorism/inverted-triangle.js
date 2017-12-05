function printReversedTriangle(num) {
	str = ""
	for (var i = num; i > 0; i--) {
		for (var j = 0; j < num; j++) {
			str += '*';
		}
		console.log(str);
		str = "";
	}
}

printReversedTriangle(3);