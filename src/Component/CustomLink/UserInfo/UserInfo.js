import React from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../../Hooks/useStore';
import SingleUser from '../../SingleUser/SingleUser';

const UserInfo = () => {
    let {usersId} = useParams()
    const userinfo = useStore(`https://jsonplaceholder.typicode.com/users?id=${usersId}`)

    return (
        <div>
            <h2>{usersId}</h2>
            <h3>User Name: {userinfo[0]?.name} </h3>
            <SingleUser users={userinfo[0]} >
                {
                    {email:userinfo[0]?.email, phone:userinfo[0]?.phone}
                }
            </SingleUser>
        </div>
    );
};

export default UserInfo;