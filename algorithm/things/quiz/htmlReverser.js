const htmlReverser = htmlText => {
  let flag = '';
  let innerText = '';
  const reversedHtmlText = htmlText.split("").reduce((acc, cur, i, arr) => {
    if (cur === '<') {
      if (flag === 'innerText' && arr[i + 1] === '/') {
        flag = '</';
        return acc + innerText.split("").reverse().join("") + cur;
      }
      flag = '<'
      return acc + cur;
    }
    if (flag === '<') {
      if (cur === '>') {
        flag = 'innerText'
      }
      return acc + cur;
    }
    if (flag === 'innerText') {
      innerText += cur
      return acc
    }
    if (flag === '</') {
      return acc + cur
    }
  }, '');

  return reversedHtmlText;
}

console.log(htmlReverser('<span>abel</span>'))

module.exports = htmlReverser;