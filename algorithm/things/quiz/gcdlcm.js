function divisor(n) {
	var ret = [];
	for (var i = 1; i <= n; i++) {
		if (n % i === 0) {
			ret.push(i);
		}
	}
	return ret;
}

function gcd(a, b) {
	var ads = divisor(a);
	var bds = divisor(b); // b의 약수 array 들어가있음

	var max = ads[0]; // a의 첫번째 약수
	for (var i = 1; i < ads.length; i++) {//2번째 약수부터 탐색?
		if (bds.indexOf(ads[i]) !== -1) { // 탐색하려는 숫자가 없다면 -1 반환
			max = ads[i];// bds 탐색중, 같은 약수가 있다면, max 인덱스에 갱신(변수 max의 값이 계속 바뀌여짐)
		}
	}
	return max;
}

function gcdlcm(a ,b) {
	var ret = [];
	var gcd_number = gcd(a,b);
	return [gcd_number, a * b / gcd_number];
}

console.log(gcdlcm(3,12));  // 3, 3
console.log(gcdlcm(44,20)); // 4, 220
console.log(gcdlcm(14,87)); // 1, 1218
console.log(gcdlcm(61,59)); // 1, 3599
console.log(gcdlcm(29,98)); // 1, 2842