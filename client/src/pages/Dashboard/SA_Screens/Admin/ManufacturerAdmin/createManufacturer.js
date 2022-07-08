import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import API from '../../../../../API';
import '../../../../auth/auth.css';
import '../admin.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomizeTitle from '../../../../../mui_theme/title';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchCompany } from '../../../../../utils/actions/companyData';
import { token } from '../../../../../utils/actions';
import Splash from '../../../../../components/splash';

const CreateCompanyAdmin = () => {
    let nav = useNavigate();
    let { state } = useLocation();
    let { connects } = state;

    // Field States
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
            fetchCompany(token)
                .then(res => {
                    setCompany(res.data?.data);
                })
                .catch(err => console.log(err));
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    const insertManufacturerAdmin = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        };

        try {
            const { data } = await API.post("api/insert-manufacturer-admin", {
                manufacturer_email: connects?.email,
                manufacturer_name: connects?.username,
                company_id: companySign,
                pincode,
                manufacturer_active_status
            }, config);

            setSuccess(data?.msg);
            setTimeout(() => {
                setSuccess("");
            }, 5000);
        } catch (error) {
            setError(error?.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
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
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={() => nav(-2)}
            ><ArrowBackIcon sx={{ color: '#583e81' }} />Back</label>
            <CustomizeTitle text={'Add Manufacturer Admin'} />
            {error !== '' && <Alert severity="error">{error}</Alert>}
            {success !== '' && <Alert severity="success">{success}</Alert>}
            <div className='company_admin_form'>
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
