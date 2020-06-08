import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
    const [user, setUser] = useState(null);
    useEffect(
        () => {
            getUserApi(userId).then(data => setUser(data));
        },
        [userId]
    );
    return (
        <div>
            {!user && <p>loading..</p>}
            {user && (
                <>
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                </>
            )}
        </div>
    );
}