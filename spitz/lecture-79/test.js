// 'abcde'
let plain = "abcba";

const isOdd = plain.length % 2 !== 0;
if (isOdd) {
  let centerIdx = Math.floor(plain.length / 2);
  if (!getIsPal(plain, centerIdx)) {
    centerIdx++
  }
} else {

}

function getIsPal(plain, centerIdx) {
  let isPal = true;
  for (let i = 1; i <= centerIdx; i++) {
    if (plain[centerIdx - i] !== plain[centerIdx + i]) {
      isPal = false;
      break;
    }
  }
  return isPal;
}
