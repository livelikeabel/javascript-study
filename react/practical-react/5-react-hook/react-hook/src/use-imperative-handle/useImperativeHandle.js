// useImperativeHandle훅을 사용해서 부모 컴포넌트에서 접근 가능한 함수를 구현한다.
import React, { forwardRef, useState, useImperativeHandle } from 'react';

function Parent() {
    const profileRef = useRef();
    const onClick = () => {
        if (profileRef.current) {
            console.log('current name length:', profileRef.current.getNameLength());
            profileRef.current.addAge(5);
        }
    };
    return (
        <div>
            <Profile ref={profileRef}/>
            <button onClick={onClick}>add age 5</button>
        </div>
    )
}

function Profile(props, ref) {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    useImperativeHandle(ref, () => ({
        addAge: value => setAge(age + value),
        getNameLength: () => name.length,
    }));

    return (
        <div>
            <p>{`name is ${name}`}</p>
            <p>{`age is ${age}`}</p>
        </div>
    );
}

export default forwardRef(Profile);