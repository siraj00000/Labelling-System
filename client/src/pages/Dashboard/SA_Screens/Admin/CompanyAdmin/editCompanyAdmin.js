import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { updateCompanyAdmin } from '../../../../../utils/actions/companyData';
import { token } from '../../../../../utils/actions';
import Alert from '@mui/material/Alert';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CustomizeTitle from '../../../../../mui_theme/title';
import '../../../../auth/auth.css';
import '../admin.css';

const EditCompanyAdmin = () => {
    let { state } = useLocation();
    let { data, id } = state;
    // Field States
    const [inputVal, setInputVal] = useState({
        pincode: 0,
        phone_one: 0,
        phone_two: 0,
        registered_address: "",
    });
    const [company_active_status, setCompanyActiveStatus] = useState(data.company_active_status);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        setInputVal(data);
    }, []);

    const setData = (e) => {
        let { name, value } = e.target;
        setInputVal((preval) => {
            return {
                ...preval,
                [name]: value
            };
        });
    };

    const updateHandler = async (e) => {
        e.preventDefault();
        let url = `api/update-company-admin/${id}`;

        const reqBody = {
            pincode: inputVal.pincode,
            phone_one: inputVal.phone_one,
            phone_two: inputVal.phone_two,
            registered_address: inputVal.registered_address,
            company_active_status,
        };

        updateCompanyAdmin(url, token, reqBody)
            .then(res => {
                setSuccess(res.data?.msg);
                setTimeout(() => {
                    setSuccess("");
                }, 5000);
            }).catch(error => {
                setError(error?.response.data.error);
                setTimeout(() => {
                    setError("");
                }, 5000);
            });
    };

    const handleChange = (event) => {
        setCompanyActiveStatus(event.target.checked);
    };

    return (
        <form className='form-sec' onSubmit={updateHandler}>
            <CustomizeTitle text={'Edit Company Admin'} />
            {error !== '' && <Alert severity="error">{error}</Alert>}
            {success !== '' && <Alert severity="success">{success}</Alert>}
            <div className='company_admin_form'>
                <div className='company_admin_form_field'>
                    <label>Pincode</label>
                    <input placeholder='392032' name={'pincode'} value={inputVal.pincode || ''} onChange={setData} />
                </div>

                <div className='company_admin_form_field'>
                    <label>Registration Address</label>
                    <input placeholder='ABC street' name={'registered_address'} value={inputVal.registered_address} onChange={setData} />
                </div>

                <div className='company_admin_form_field'>
                    <label>Phone 1</label>
                    <input placeholder='9132793293' name={'phone_one'} value={inputVal.phone_one || ''} onChange={setData} />
                </div>

                <div className='company_admin_form_field'>
                    <label>Phone 2</label>
                    <input placeholder='9112793293' name={'phone_two'} value={inputVal.phone_two || ''} onChange={setData} />
                </div>

                <div className='company_admin_form_field'>
                    <label>Company Status</label>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                        <FormControlLabel
                            name='company_status'
                            control={
                                <Checkbox onChange={handleChange} checked={company_active_status} />
                            }
                            label="Active"
                        />
                    </FormGroup>
                </div>
            </div>
            <button>Update Company Admin</button>
        </form>
    );
};

export default EditCompanyAdmin;