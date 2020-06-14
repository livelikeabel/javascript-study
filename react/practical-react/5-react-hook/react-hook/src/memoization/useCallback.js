/**
 * useCallback은 리액트의 렌더링 성능을 위해 제공되는 훅이다.
 * 
 * 훅을 사용하게 되면서 컴포넌트가 렌더링 될 때마다 함수를 생성해서 자식 컴포넌트의 속성 값으로 입력하는 경우가 많다.
 * 최근의 브라우저에서 함수 생성이 성능에 미치는 영향은 작다고 한다.
 * 
 * 진짜 문제는 속성으로 넘겨주는 값이 매번 번경되기 때문에 자식 컴포넌트에서 불필요한 렌더링이 발생한다는 것이다.
 * (PureComponent나 React.memo를 사용해도 그렇다.)
 * 
 * 질문:
 * 1. 클로저로 () => () => {} 이런 함수를 만들어서 넘기면 useCallback이 의미가 없나? 있나?
 * 2. 왜 이름을 useCallback이라고 지었을까...? 별로 와닿지 않는 네이밍이다... 
 */

import React, { useState } from 'react';
import { saveToServer } from './api';
import UserEdit from './UserEdit';

function Profile() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    // 두 번째 매개변수로 전달한 배열의 값이 변경되지 않으면 이전에 생성한 함수가 사용된다.
    const onSave = useCallback(() => saveToServer(name, age), [name, age]);
    return (
        <div>
            <p>{`name is ${name}`}</p>
            <p>{`age is ${age}`}</p>
            <UserEdit
                onSave={onSave}
                setName={setName}
                setAge={setAge}
            />
        </div>
    );
}
