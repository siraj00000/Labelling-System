import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import API from '../../../../../API';
import '../../../../auth/auth.css';

import '../../Admin/admin.css';
import CustomizeTitle from '../../../../../mui_theme/title';

const CreateCategory = () => {
    let token = localStorage.getItem('authToken');
    // Field States
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const insertCompanyAdmin = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        };

        try {
            const { data } = await API.post("api/insert-category", {
                category_name: category
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
        } finally {
            setCategory('');
        }
    };

    return (
        <form className='form-sec half-width' onSubmit={insertCompanyAdmin}>
            <CustomizeTitle text={'Add Category'} />
            {error !== '' && <Alert severity="error">{error}</Alert>}
            {success !== '' && <Alert severity="success">{success}</Alert>}
            <div className='company_admin_form '>
                <div className='company_admin_form_field full_width_cont'>
                    <label>Category</label>
                    <input placeholder='Electronics...' value={category} onChange={e => setCategory(e.target.value)} required />
                </div>
            </div>
            <button>Create Category</button>
        </form>
    );
};

export default CreateCategory;