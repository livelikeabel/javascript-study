const n = 4
const m = 3
const nArr = []
for (var i = 1; i <= n; i++) {
    nArr.push(i)
}

let temp = '';

for (var i = 0; i < m * m; i++) {
    temp += nArr[i % n]
    if ((i + 1) % m === 0) {
        temp += '\n'
    }
}



console.log(temp)