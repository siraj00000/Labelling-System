import React, { useState } from 'react';
import { fetchCompany } from '../../../../../utils/actions/companyData';
import { removeStatus, token } from '../../../../../utils/actions';
import API from '../../../../../API';
import Splash from '../../../../../components/splash';
import '../../../../auth/auth.css';
import '../admin.css';
// MUI Components
import Alert from '@mui/material/Alert';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CustomizeTitle from '../../../../../mui_theme/title';

const CreateCompanyAdmin = () => {
    // Field States
    const [manufacturer_email, setManufacturerEmail] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [pincode, setPincode] = useState(0);
    const [manufacturer_active_status, setManufactureActiveStatus] = useState(true);
    const [phone_one, setPhoneOne] = useState(0);
    const [phone_two, setPhoneTwo] = useState(0);
    const [registered_address, setRegisteredAddress] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [company, setCompany] = useState([]);
    const [companySign, setCompanySign] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    React.useEffect(() => {
        try {
            setLoading(true);
            let companyURL = `/api/fetch-company-admin`;
            fetchCompany(token, companyURL)
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
        } finally {
            setLoading(false);
        }
    }, []);
    // Clear Form after submit
    const clearStates = () => {
        setCompanySign('');
        setRegisteredAddress('');
        setPhoneOne(0);
        setPhoneTwo(0);
        setManufactureActiveStatus(true);
        pincode(0);
    };

    const verifyFieldValues = () => {
        if (pincode.length !== 6) {
            setError("Pincode must have 6 digits");
            removeStatus(setError);
            return false;
        } else if (phone_one.length > 10 || phone_two.length > 10) {
            setError("Phone number exceeding from 10 digits");
            removeStatus(setError);
            return false;
        } else return true;
    };

    const insertManufacturerAdmin = async (e) => {
        e.preventDefault();
        let verify = verifyFieldValues();
        if (!verify) return false;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        };

        try {
            const { data } = await API.post("api/insert-manufacturer-admin", {
                manufacturer_email, manufacturer, company_id: companySign,
                pincode, manufacturer_active_status
            }, config);

            setSuccess(data?.msg);
            clearStates();
            removeStatus(setSuccess);
        } catch (error) {
            setError(error?.response.data.error);
            removeStatus(setError);
        }
    };

    const handleChange = (event) => {
        setManufactureActiveStatus(event.target.checked);
    };

    if (isLoading) {
        return <Splash loading={isLoading} />;
    }

    return (
        <form className='form-sec' onSubmit={insertManufacturerAdmin}>
            <CustomizeTitle text={'Add Manufacturer'} />
            {error !== '' && <Alert severity="error">{error}</Alert>}
            {success !== '' && <Alert severity="success">{success}</Alert>}
            <div className='company_admin_form'>
                <div className='company_admin_form_field'>
                    <label>Manufacturer</label>
                    <input placeholder='ABC manufacturer...' value={manufacturer} onChange={e => setManufacturer(e.target.value)} required />
                </div>

                <div className='company_admin_form_field'>
                    <label>Manufacturer Email</label>
                    <input placeholder='xyz@manufacturer.com' value={manufacturer_email} onChange={e => setManufacturerEmail(e.target.value)} required />
                </div>

                <div className='company_admin_form_field'>
                    <label>Pincode</label>
                    <input placeholder='392032' value={pincode || ''} onChange={e => setPincode(e.target.value)} required />
                </div>

                <div className='company_admin_form_field'>
                    <label>Registration Address</label>
                    <input placeholder='ABC street' value={registered_address} onChange={e => setRegisteredAddress(e.target.value)} />
                </div>

                <div className='company_admin_form_field'>
                    <label>Phone 1</label>
                    <input placeholder='9132793293' value={phone_one || ''} onChange={e => setPhoneOne(e.target.value)} />
                </div>

                <div className='company_admin_form_field'>
                    <label>Phone 2</label>
                    <input placeholder='9112793293' value={phone_two || ''} onChange={e => setPhoneTwo(e.target.value)} />
                </div>

                <div className='company_admin_form_field'>
                    <label>Company</label>
                    <select onChange={(e) => setCompanySign(e.target.value)} required>
                        <option value={""}>select company</option>
                        {company.map((item, index) => {
                            return (
                                <option
                                    key={index}
                                    value={item?._id}
                                    className='company_list'>
                                    {item?.company_name}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className='company_admin_form_field'>
                    <label>Company Status</label>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                        <FormControlLabel
                            name='company_status'
                            control={
                                <Checkbox onChange={handleChange} checked={manufacturer_active_status} />
                            }
                            label="Active"
                        />
                    </FormGroup>
                </div>
            </div>
            <button>Create Manufacturer Admin</button>
        </form>
    );
};

export default CreateCompanyAdmin; 
