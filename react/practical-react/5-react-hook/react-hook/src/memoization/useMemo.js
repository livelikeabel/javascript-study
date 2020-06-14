// useMemo와 useCallback은 이전 값을 기억해서 성능을 최적화하는 용도로 사용된다.
// useMemo는 계산량이 많은 함수의 반환값을 재활용하는 용도로 사용된다.

import React, { useMemo } from 'react'
import { runExpensiceJob } from './util';

function MyComponent({ v1, v2 }) {
    const value = useMemo(() => runExpensiceJob(v1, v2), [v1, v2]);
    return <p>{`value is ${value}`}</p>
}

// useMemo 훅의 첫 번째 매개변수로 함수를 입력한다. useMemo 훅은 이 함수가 반환된 값을 기억한다.
// useMemo 훅의 두 번째 매개변수로 입력된 배열의 값이 변경되지 않으면 이전에 반환된 값을 재사용한다.