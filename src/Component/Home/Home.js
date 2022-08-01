import { Link } from 'react-router-dom';
import useStore from '../Hooks/useStore';
import SingleUser from '../SingleUser/SingleUser';
// import useUSers from '../Hooks/useUSers';

const Home = () => {
    const allusers = useStore('https://jsonplaceholder.typicode.com/users')

    if (allusers.length) {
        allusers.length = 4
    }



    return (
        <div className='row container'>
            <h4>Person: {allusers.length}</h4>
            {
                allusers.map(users => <SingleUser key={users.id} users={users}></SingleUser>)
            }
            <Link className='text-decoration-none' to="/users">See more...</Link>
        </div>
    );
};

export default Home;