import React from 'react';
import { Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomizeTitle from '../../../../../mui_theme/title';
import { CompanyAdminRegistration, fetchCompany } from '../../../../../utils/actions/companyData';
import '../../../../auth/auth.css';

import '../admin.css';
import { removeStatus, token } from '../../../../../utils/actions';

const RegisterCompanyAdmin = () => {
    // Field States
    const [company, setCompany] = useState([]);
    const [company_email, setCompanyEmail] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    React.useEffect(() => {
        try {
            fetchCompany(token)
                .then(res => {
                    setCompany(res.data?.data);
                })
                .catch(error => {
                    setError(error?.response.data.error);
                    removeStatus(setError);
                });
        } catch (error) {
            setError(error);
            removeStatus(setError);
        }
    }, []);

    const registerAdmin = async (e) => {
        e.preventDefault();

        let bodyData = { username, email, password, role: 2, company_email };
        CompanyAdminRegistration(token, bodyData)
            .then(res => {
                setSuccess(res.data?.msg);
                setTimeout(() => {
                    setSuccess("");
                }, 5000);
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
                    <label>Company</label>
                    <select onChange={(e) => setCompanyEmail(e.target.value)} required>
                        <option value="">select company</option>
                        {company.map((item, index) => {
                            return (
                                <option
                                    key={index}
                                    value={item?.company_email}
                                    className='company_list'>
                                    {item?.company_name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <button>Register Company Admin</button>
        </form>
    );
};

export default RegisterCompanyAdmin;
