/**
 * commonJS에서는 module.exports, require등의 키워드를 사용한다. 노드에서 많이 사용한다.
 */

function func1() {
    console.log('func1');
}
function func2() {
    console.log('func2');
}
module.exports = { func1, func2 };