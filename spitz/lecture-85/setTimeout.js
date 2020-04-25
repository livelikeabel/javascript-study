class Item {
    block;
    time;
    constructor(block, time) {
        this.block = block;
        this.time = time + performance.now()
    }
}

const queue = new Set();

const checkQueue = time => {
    queue.forEach(item => {
        if (item.time > time) return;
        queue.delete(item);
        item.block();
    })
    requestAnimationFrame(checkQueue);
};
requestAnimationFrame(checkQueue);

const timeout = (block, time) => queue.add(new Item(block, time));

timeout(() => { console.log('implement setTimeout function!') }, 2000)

/**
 * requestAnimationFrame은 engin work가 rendering하자 마자 바로 발생시킨다. 렌더링과 정확하게 맞물린다.
 * setInterval과 비슷하게 움직일 것 같지만, 전혀 다르게 움직인다. setInterval은 별도 thread에 timer로 동작한다.
 */