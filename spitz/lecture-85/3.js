const gene = function*(a) {
    let b;
    yield a;
    b = a;
    yield b;
};

// babel
var gene = regeneratorRuntime.mark(function gene(a) {
    var b;
    return regeneratorRuntime.wrap(function gene$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return a;
                case 2:
                    b = a;
                    _context.next = 5;
                    return b;
                case 5:
                case "end":
                    return _context.stop();
            }
        }
    }, gene);
});


const gene2 = a => {
    let b;
    return wrap(_context => {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return a;
                case 2:
                    b = a;
                    _context.next = 5;
                    return b;
                case 5:
                case 'end':
                    return _context.stop();

            }
        }
    })
}


const wrap = block => new SwithchIterable(block);

const SwithchIterable = class {#
    block;
    constructor(block) { this.#block = block; }
        [Symbol.iterator]() { return new SwitchIterator(this.#block); }
}

const SwitchIterator = class {
    static done = { done: true };#
    block;#
    context = new Context;
    constructor(block) { this.#block = block; }
    next() {
        const value = this.#block(this.#context);
        return value === Context.stop ? SwitchIterator.done : { value, done: false };
    }
};

const Context = class {
    static stop = Symbol();
    prev = 0;
    next = 0;
    stop() { return Context.stop; }
}


const Continuation = class {
    static# stop = Symbol();
    static# pass = Symbol();#
    k
}