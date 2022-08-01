import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserInfo from './Component/CustomLink/UserInfo/UserInfo';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Navber from './Component/Navber/Navber';
import Users from './Component/Users/Users';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/users" element={<Users></Users>} />
        <Route path="/users/:usersId" element={
          <RequireAuth>
            <UserInfo></UserInfo>
          </RequireAuth>
        } />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
