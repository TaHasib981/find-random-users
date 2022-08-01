import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [login, setLogin] = useState(false)
    const [validPass, setValidpass] = useState()
    // console.log(validPass)
    //#------
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const handleEmailInput = e => {
        setEmail(e.target.value)
    }
    const handlePasswordInput = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPass = e => {
        setConfirmPass(e.target.value)
    }

    //CREATE
    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    // LOGIN
    const [
        signInWithEmailAndPassword,
        loginUser,
        loginLoading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);

    // SUBMIT
    const hendleSubmit = e => {
        e.preventDefault()
        if (Login) {
            if (password !== confirmPass) {
                setValidpass('password can not macth')
                return;
            }
            createUserWithEmailAndPassword(email, password)
        }
        if (!Login) {
            signInWithEmailAndPassword(email, password)
        }
    }
    // NAVIGATE 
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    if (createUser) {
        navigate(from, { replace: true })

    }
    return (
        <div className='container'>
            <form onSubmit={hendleSubmit} className='w-50 mx-auto'>
                <h2 className='text-center'>
                    {login ? "login" : "Ragister"}
                </h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" onBlur={handleEmailInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onBlur={handlePasswordInput} className="form-control" id="exampleInputPassword1" />
                </div>
                {
                    !login && <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onBlur={handleConfirmPass} className="form-control" id="exampleInputPassword1" />
                    </div>
                }
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={() => setLogin(!login)} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">{login ? "login" : "register"}</button>
                <p>{validPass}</p>
                {
                    createError && <p className='text-danger'>{validPass}</p>
                }
                {
                    loginError && <p className='text-danger'>{loginError.message}</p>
                }
                {
                    createUser && <p className='text-success'>User Create Successfully</p>
                }
                {
                    loginUser && <p className='text-success'>User Login Successfully</p>
                }
            </form>
        </div>
    );
};

export default Login;
