import React, { useContext } from 'react';

const UserContext = React.createContext();
const user = { name: 'mike', age: 23 };

function ParentComponent() {
    return (
        <UserContext.Provider value={user}>
            <ChildComponent />
        </UserContext.Provider>
    )
}

function ChildComponent() {
    const user = useContext(UserContext);
    console.log(`user: ${user.name}, ${user.age}`);

    return (
        <div>
            <p>{`name is ${user.name}`}</p>
            <p>{`age is ${user.age}`}</p>
        </div>
    );
}