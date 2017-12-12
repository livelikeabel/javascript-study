/*
Given an array of integers, return indices of the two numbers 
such that they add up to a specific target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

숫자배열을 입력 받음
*/
/*
var twoSum = function(nums, target) {
    return [nums[0],nums[1]];
};
*/
/*
1. 인덱스 0 부터, 1~ 마지막 인덱스 더하고 값 비교해보기
2. 인덱스 1 부터, 2~ 마지막 인덱스 더하고 값 비교
3. 인덱스 마지막 - 2 ~ 인덱스 마지막 -1 더하고 값 비교
*/

function twoSum(nums, target) {
	var ret;
	for(var i = 0; i < nums.length - 1; i++) {
		for(var j = i + 1; j < nums.length; j++) {
			if(nums[i] + nums[j] == target) {
				return [i, j];	
			}
		}
	}
}

//test
// var nums = [3, 2, 4];
// var target = 6;
// console.log(twoSum(nums, target));
//
// function twoSum(nums, target) {
// 	for(var i = 0; i < nums.length - 1; i++) {
// 		var x = target - nums[i];
// 		var idx = nums.lastIndexOf(x);
// 		if(idx > i) {
// 			return [i, idx];
// 		}
// 	}
// };
//
// nums[0] = 3, target = 6, x = 3, index = [0]
// nums[1] = 2, target = 6, x = 4, index = [2]
// nums[2] = 4, target = 6, x = 2, index = [1]



