var a = [];
for(var i = 1; i < 10; i++) {
	a.push([i]);
	for(var j = 1; j <= 10; j++) {
		a[i - 1].push(i + j);
	}
}
console.log(a);
