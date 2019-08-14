const { Observable } = require('rxjs');
// 첫번째 파리미터는 function subscribe(observer) 함수를 받을 수 있다.
// numbers$라는 Observable을 만들었다.
const numbers$ = new Observable(function subscribe(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
});

// subscribe함수에 옵저버를 넘겨준다.
numbers$.subscribe(v => console.log(v));

const numbers2$ = Observable.create(function subscribe(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
});
numbers2$.subscribe(v => console.log(v));
