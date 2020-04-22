import { createCounter } from '../src/counter';

// Step 1
describe('옵션이 지정되지 않은 경우', () => {
    let count;
    beforeEach(() => {
        count = createCounter();
    });

    it('초기값은 0이다.', () => {
        expect(count.val()).toEqual(0)
    });

    it('inc() 함수는 값을 1증가시킨다.', () => {
        count.inc();
        expect(count.val()).toEqual(1);
    });

    it('dec() 함수는 값을 1감소시킨다.', () => {
        count.dec();
        expect(count.val()).toEqual(-1);
    });

    it('isMax() 호출시 false를 반환한다.', () => {
        expect(count.isMax()).toEqual(false);
    });

    it('isMin() 호출시 false를 반환한다.', () => {
        expect(count.isMin()).toEqual(false);
    });
});

// Step 2
it('initValue 옵션 사용 시 초기값이 해당 값으로 지정된다.', () => {
    const count = createCounter({ initVal: 10 });
    expect(count.val()).toEqual(10);
});

describe('min 옵션 사용 시 현재값과 min 값이 동일하면', () => {
    const count = createCounter({ initVal: 3, min: 3 });
    it('dec() 함수를 호출해도 값이 감소하지 않는다.', () => {
        count.dec();
        expect(count.val()).toEqual(3);
    });

    it('isMin() 호출 시 true를 반환한다.', () => {

    });
});

describe('max 옵션 사용 시 현재값과 max 값이 동일하면', () => {
    it('inc() 함수를 호출해도 값이 증가하지 않는다.', () => {

    });

    it('isMax() 호출 시 true를 반환한다.', () => {

    });
});
