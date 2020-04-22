export function add(x = 0, y = 0) {
    return x + y;
}

export function swap(arr) {
    if (arr.length !== 2) {
        return arr
    }

    return [arr[1], arr[0]]
}
