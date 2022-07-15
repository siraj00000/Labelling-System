import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import API from '../../API';
import './auth.css';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            document.location = "/";
        }
    }, []);

    const successMsg = role => {
        if (Number(role) === 1) return "Super";
        else if (Number(role) === 2) return "Company";
        else if (Number(role) === 3) return "Manufacturer";
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const { data } = await API.post("api/auth/login", { email, password }, config);

            localStorage.setItem("authToken", data?.token);
            if (data.userInfo) {
                localStorage.setItem("role", data.userInfo.role);
                const adminType = successMsg(data.userInfo.role);
                setSuccess(`${adminType} admin login successfull!`);
                setError("");
                document.location = "/";
            }

        } catch (error) {
            setError(error?.response.data.error);
            setSuccess("");
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <main>
            <div className='auth-container'>
                <section className='auth-bg-img'></section>
                <section className='auth-form-container'>
                    <form onSubmit={loginHandler}>
                        {error !== '' && <Alert severity="error">{error}</Alert>}
                        {success !== '' && <Alert severity="success">{success}</Alert>}
                        <h1>Labelling System</h1>
                        <label>Email</label>
                        <input type={'email'} name={'email'} value={email} onChange={e => setEmail(e.target.value)} required placeholder='Email Address' />
                        <label>Password</label>
                        <input type={'password'} value={password} onChange={e => setPassword(e.target.value)} required placeholder='Password' />
                        <button type='submit'>Login</button>
                        <NavLink to="/forgetpassword">Forget Password</NavLink>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default LoginScreen;