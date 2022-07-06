import { Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../../../../API';
import CustomizeTitle from '../../../../../mui_theme/title';
import { CompanyAdminRegistration } from '../../../../../utils/actions/companyData';
import '../../../../auth/auth.css';

import '../admin.css';

const RegisterCompanyAdmin = () => {
    let nav = useNavigate();
    let token = localStorage.getItem('authToken');
    // Field States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [company_email, setCompanyEmail] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const registerAdmin = async (e) => {
        e.preventDefault();

        let bodyData = { username, email, password, role: 2, company_email };
        CompanyAdminRegistration(token, bodyData)
            .then(res => {
                setSuccess(res.data?.msg);
                setTimeout(() => {
                    setSuccess("");
                }, 5000);
                nav('/admins/create-company-admin', { state: { company_email } });
            })
            .catch(error => {
                setError(error);
                setTimeout(() => {
                    setError("");
                }, 5000);
            });
    };
    return (
        <form className='form-sec' onSubmit={registerAdmin}>
            <CustomizeTitle text={'Register Company Admin'} />
            {error !== '' && <Alert severity="error">{error}</Alert>}
            {success !== '' && <Alert severity="success">{success}</Alert>}
            <div className='company_admin_form'>
                <div className='company_admin_form_field'>
                    <label>username</label>
                    <input placeholder='mark' value={username} onChange={e => setUsername(e.target.value)} required />
                </div>
                <div className='company_admin_form_field'>
                    <label>email</label>
                    <input type={'email'} placeholder='mark@example' value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className='company_admin_form_field'>
                    <label>password</label>
                    <input type={'password'} placeholder='mark123' value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <div className='company_admin_form_field'>
                    <label>Company Email</label>
                    <input placeholder='company@example.com' value={company_email} onChange={e => setCompanyEmail(e.target.value)} required />
                </div>
            </div>
            <button>Register Company Admin</button>
        </form>
    );
};

export default RegisterCompanyAdmin;