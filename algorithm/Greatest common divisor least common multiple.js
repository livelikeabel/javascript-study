var division = function(n) {
	var ret = [];
	for (var i = 1; i <= n; i++) {
		if(n % i === 0) {
			ret.push(i);
		}
	}
	return ret;
}
// console.log(division(1123));

var greatest_common_divisor = function(arr1, arr2) {
	var ret = [];
	for (var i = 0; i < arr1.length; i++) {
		for (var j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				ret.push(arr1[i]);
			}
		}
	}
	return ret[ret.length - 1];
}

// arr1 = [1, 2, 4, 5, 10, 20]
// arr2 = [1, 2, 3, 4, 6, 8, 12, 24]
// console.log(greatest_common_divisor(arr1, arr2))

var least_common_multiple = function(greatest_common_divisor, a, b) {	
 	least_common_multiple_number = a * b / greatest_common_divisor;
	return least_common_multiple_number;
}


function gcdlcm(a, b) {
	var division_numbers1 = division(a);
	var division_numbers2 = division(b);
 	var final_a = greatest_common_divisor(division_numbers1, division_numbers2);	

 	var final_b = least_common_multiple(final_a, a, b);


	var answer = [final_a, final_b];
	return answer;
}

console.log(gcdlcm(3,12));  // 3, 3
console.log(gcdlcm(44,20)); // 4, 220
console.log(gcdlcm(14,87)); // 1, 1218
console.log(gcdlcm(61,59)); // 1, 3599
console.log(gcdlcm(29,98)); // 1, 2842