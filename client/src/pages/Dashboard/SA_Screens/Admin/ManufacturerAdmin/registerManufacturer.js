import { Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { token } from '../../../../../utils/actions';
import API from '../../../../../API';
import CustomizeTitle from '../../../../../mui_theme/title';
import '../../../../auth/auth.css';
import '../admin.css';

const RegisterManufacturer = () => {
  let nav = useNavigate();
  // Field States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const registerAdmin = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    };
    try {
      const { data } = await API.post("api/auth/register", {
        username, email, password, role: 3
      }, config);

      setSuccess(data?.msg);
      setTimeout(() => {
        setSuccess("");
      }, 5000);
      nav('/admins/create-manufacturer', { state: { connects: { username, email } } });
    } catch (error) {
      setError(error?.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <form className='form-sec' onSubmit={registerAdmin}>
      <CustomizeTitle text={'Register Manufacturer Admin'} />
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
      </div>
      <button>Register Manufacturer Admin</button>
    </form>
  );
};

export default RegisterManufacturer;