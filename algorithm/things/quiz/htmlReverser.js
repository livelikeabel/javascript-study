const htmlReverser = input => {
  const result = { name: 'ROOT', type: 'node', children: [] };
  const stack = [{ tag: result }];
  let curr, i = 0, j = input.length;
  while (curr = stack.pop()) {
    while (i < j) {
      const cursor = i;
      if (input[cursor] === '<') {
        const idx = input.indexOf('>', cursor);
        i = idx + 1;
        if (input[cursor + 1] === '/') {
          curr = curr.back;
        } else {
          if (elementNode(input, cursor, idx, curr, stack)) break;
        }
      } else {
        i = textNode(input, cursor, curr);
      }
    }
  };
  return result;
}

const textNode = (input, cursor, curr) => {
  const idx = input.indexOf('<', cursor);
  curr.tag.children.push({
    type: 'text', text: input.substring(cursor, idx)
  });
  return idx;
};

const elementNode = (input, cursor, idx, curr, stack) => {
  const isClose = input[idx - 1] === '/';
  const tag = { name: input.substring(cursor + 1, idx - (isClose ? 1 : 0)), type: 'node', children: [] }
  curr.tag.children.push(tag);
  if (!isClose) {
    stack.push({ tag, back: curr });
    return true;
  }
  return false;
}

// console.log(htmlReverser('<span>abel</span>'))
// console.log(htmlReverser('<h1>hello<span>abel</span>world!</h1>'))
console.log(htmlReverser('<h1>hello<span>abel</span>world!<p>every body</p>haha</h1>'))

module.exports = htmlReverser;

`
<h1>
  olleh
  <span>leba</span>
  !dlrow
  <p>ydob yreve</p>
  ahah
</h1>
`