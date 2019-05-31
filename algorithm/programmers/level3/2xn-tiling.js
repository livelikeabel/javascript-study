// question : https://programmers.co.kr/learn/courses/30/lessons/12900#

function solution(n) {
  const memo = [1, 2];    
  for(let i = 2; i < n; i++) {
      memo[i] =(memo[i-1] + memo[i-2]) % 1000000007;
  }
  return memo[n-1]
}