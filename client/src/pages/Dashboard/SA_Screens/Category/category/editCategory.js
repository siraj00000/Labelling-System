import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import API from '../../../../../API';
import '../../../../auth/auth.css';
import { useLocation } from 'react-router-dom';
import '../../Admin/admin.css';
import CustomizeTitle from '../../../../../mui_theme/title';

const EditCategory = () => {
    let token = localStorage.getItem('authToken');
    const { state } = useLocation();
    let { detail, id } = state;
    // Field States
    const [category, setCategory] = useState(detail.category_name);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const updateCompanyAdmin = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        };

        try {
            const { data } = await API.put(`/api/update-category/${id}`, {
                category_name: category,
            }, config);

            setSuccess(data?.msg);
            setError("");

            setTimeout(() => {
                setSuccess("");
            }, 5000);

        } catch (error) {
            setError(error?.response.data.error);
            setSuccess("");
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <form className='form-sec half-width' onSubmit={updateCompanyAdmin}>
            <CustomizeTitle text={'Update Category'} />
            {error !== '' && <Alert severity="error">{error}</Alert>}
            {success !== '' && <Alert severity="success">{success}</Alert>}
            <div className='company_admin_form '>
                <div className='company_admin_form_field full_width_cont'>
                    <label>Category</label>
                    <input placeholder='Electronics...' value={category} onChange={e => setCategory(e.target.value)} required />
                </div>
            </div>
            <button>Update Category</button>
        </form>
    );
};

export default EditCategory;