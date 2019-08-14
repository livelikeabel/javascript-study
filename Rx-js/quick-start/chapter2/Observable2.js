const { Observable } = require('rxjs');
const interval$ = new Observable(function subscribe(observer) {
    const id = setInterval(function () {
        observer.next(new Date().toString());
    }, 1000);
    return function () { // 자원을 해제하는 함수 unsubsribe
        console.log("interval 제거");
        clearInterval(id);
    };
});

const subscription = interval$.subscribe(v => console.log(v));

// 5초후 구독해지
setTimeout(function () {
    subscription.unsubscribe();
}, 5000);