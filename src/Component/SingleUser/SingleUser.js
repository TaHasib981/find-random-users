import React from 'react';
import { Link } from 'react-router-dom';

const SingleUser = ({ users, children }) => {
    const { id, name, } = users || {}
    const {email, phone} = children || {}
    return (
        <div className='col-4 gy-3'>
            <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <h6>ID:{id}</h6>
                   <h6> {email}</h6>
                   <h6> {phone}</h6>
                    <Link to={`/users/${id}`} className="card-link text-decoration-none">see-details</Link>
                </div>
            </div>
        </div>

    );
};

export default SingleUser;