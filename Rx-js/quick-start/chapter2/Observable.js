const { Observable } = require('rxjs');
// 첫번째 파리미터는 function subscribe(observer) 함수를 받을 수 있다.
// numbers$라는 Observable을 만들었다.
const numbers$ = new Observable(function subscribe(observer) {
    try {
        observer.next(1);
        observer.next(2);
        throw new Error('error aquired');
        observer.next(3);
    } catch (e) {
        observer.error(e);
    }
});

// subscribe함수에 옵저버를 넘겨준다.
numbers$.subscribe({
    next: v => console.log(v),
    error: e => console.error(e)
});

const numbers2$ = Observable.create(function subscribe(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
});
numbers2$.subscribe({
    next: v => console.log(v),
    error: e => console.error(e),
    complete: () => console.log('데이터 전달 완료')
});
