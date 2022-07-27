import React, { useState } from 'react';
import { Alert } from '@mui/material';
import { removeStatus, token } from '../../../../../utils/actions';
import { fetchManufactureDetail } from '../../../../../utils/actions/manufacturer';
import FilterListIcon from '@mui/icons-material/FilterList';
import API from '../../../../../API';
import CustomizeTitle from '../../../../../mui_theme/title';
import '../../../../auth/auth.css';
import '../admin.css';

const RegisterManufacturer = () => {
  // Field States
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [manufacturersList, setManufacturersList] = useState([]);
  // States for status 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // Fetch Manufacturer Detail
  React.useEffect(() => {
    try {
      let URL = `/api/fetch-manufacturer-admin`
      fetchManufactureDetail(token, URL)
        .then(res => {
          setManufacturersList(res?.data?.data);
        }).catch(error => {
          setError(error?.response.data.error);
          removeStatus(setError);
        });
    } catch (error) {
      setError(error.message);
    }
  }, []);
  // Clear form after submit
  const clearStates = () => {
    setUsername("");
    setPassword("");
    setEmail("");
  };
  // Register Admin Method
  const registerAdmin = async (e) => {
    e.preventDefault();
    // Password Verification
    if (password.length < 5) {
      setError("Password must contain at least 6 digits");
      removeStatus(setError);
      return false;
    };
    // Data posting
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    };
    try {
      const { data } = await API.post("api/auth/register", {
        username, email, password, role: 3, company_email: manufacturer
      }, config);

      setSuccess(data?.msg);
      clearStates();
      removeStatus(setSuccess);
    } catch (error) {
      setError(error?.response.data.error);
      removeStatus(setError);
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
        <div className='company_admin_form_field'>
          <label>Company & Manufacturer</label>
          <select onChange={(e) => setManufacturer(e.target.value)} required>
            <option value="">select company & manufacturer</option>
            {manufacturersList?.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item?.manufacturer_email}
                  className='company_list'>
                  {`${item?.manufacturer} \n (${item?.company_name})`}
                </option>
              );
            })}
          </select>
          <FilterListIcon className='filter-icon' />
        </div>
      </div>
      <button>Register Manufacturer Admin</button>
    </form>
  );
};

export default RegisterManufacturer;