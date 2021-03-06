const Item = class {
  time;
  block;

  constructor(block, time) {
    this.block = block;
    this.time = time + performance.now();
  }
};

const queue = new Set;

const f = time => {
  queue.forEach(item => {
    if (item.time > time) return;
    queue.delete(item);
    item.block();
  });
  requestAnimationFrame(f);
};
requestAnimationFrame(f);

export const timeout = (block, time) => queue.add(new Item(block, time));
timeout(() => {
  console.log('hi')
}, 1000);


