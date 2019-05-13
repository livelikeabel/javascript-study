const htmlReverser = require('./../quiz/htmlReverser');

test('<span>abel</span>를 텍스트만 리버스 하기', () => {
  expect(htmlReverser('<span>abel</span>'))
    .toBe('<span>leba</span>');
});

test('<h1>hello<span>abel</span>world!</h1>를 텍스트만 리버스 하기', () => {
  expect(htmlReverser('<h1>hello<span>abel</span>world!</h1>'))
    .toBe('<h1>olleh<span>leba</span>!dlrow</h1>');
});