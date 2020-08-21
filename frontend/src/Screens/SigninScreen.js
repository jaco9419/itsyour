import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function SigninScreen(props) {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push('/');
        }
        return () => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return <div className='form'>
        <form onSubmit={submitHandler}>
            <ul className='form-container'>
                <li>
                    <h3>Sign in</h3>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}

                </li>
                <li>
                    <label htmlFor='email'>
                        Email
                    </label>
                    <input className='input' type='email' name='email' id='email' onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor='password'>
                        Password
                    </label>
                    <input className='input' type='password' name='password' id='password' onChange={(e) => setPassword(e.target.password)}>
                    </input>
                </li>
                <li>
                    <button type='submit' className='button primary'>Sign in</button>
                </li>
                <li>
                    New to itsyours?
                </li>
                <li>
                    <Link to='/register' className='button primary'>Create your account</Link>
                </li>
            </ul>
        </form>
    </div>
}

export default SigninScreen;