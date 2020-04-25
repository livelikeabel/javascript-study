const type = (target, type) => {
    if (typeof type === 'string') {
        if (typeof target != type) throw `invalid type ${target} : ${type}`;
    } else if (!(target instanceof type)) throw `invalid type ${target} : ${type}`;
    return target;
};

type(12, "number");
type("abc", "string");
type([1, 2, 3], Array);
type(new Set, Set);
type(document.body, HTMLElement);

const test = (arr, _ = type(arr, Array)) => {
    console.log(arr);
};

test([1, 2, 3]);
test(123);

const test2 = (a, b, c, _0 = type(a, 'string'), _1 = type(b, "number"), _2 = type(c, "boolean")) => {
    console.log(a, b, c)
};
