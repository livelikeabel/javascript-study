/*
*문제 : 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환해주는 gcdlcm 함수를 완성해 보세요. 
*배열의 맨 앞에 최대공약수, 그 다음 최소공배수를 넣어 반환하면 됩니다. 
*예를 들어 gcdlcm(3,12) 가 입력되면, [3, 12]를 반환해주면 됩니다.
*/

// 최대공약수 구하는 법 : 1. 두 수의 약수를 구한다 2. 공통되면서, 제일 큰 약수를 찾는다. -> 한 배열의 인덱스가 다른 배열의 전체 인덱스를 돌면서 하나하나비교해서 찾는다.(뒤에서 부터 찾을까?) 같은면, 새배열에 집어넣기
// 최소공배수 구하는 법 : 1. 두 수를 최대 공약수로 나눈다. 나누어진 두 수는 서로소이고, 그 수들을 최대공약수와 곱해준다.

function gcdlcm(a, b) {

    const getDivisor = (n) => {
        const arr =[];
        for(let i = 1; i<=n ; i++) {
            if(n%i===0)arr.push(i)
        }
        return arr
    }

    const cd = getDivisor(a).reverse().filter((n, i) => {
        const arr = getDivisor(b).reverse().filter((m, j) => n === m )
        return arr.length > 0
    })

    const gcd = cd[0]
    const lcm = gcd * a/gcd * b/gcd

    return [gcd,lcm]
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3,12));