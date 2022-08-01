import React from 'react';
import useStore from '../Hooks/useStore';
import SingleUser from '../SingleUser/SingleUser';

const Users = () => {
    const allusers = useStore('https://jsonplaceholder.typicode.com/users')
    return (
        <div className='row'>
            {
                allusers.map(users => <SingleUser key={allusers.id} users={users}></SingleUser>)
            }
        </div>
    );
};

export default Users;