function binarySearch(numArray, key) {
  const middleIdx = Math.floor(numArray.length / 2);
  const middleElem = numArray[middleIdx];

  if (middleElem === key) return true;
  else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  }
  else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key);
  }
  else return false;
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 1))