import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import '../../../../auth/auth.css';
import '../../Admin/admin.css';

import CustomizeTitle from '../../../../../mui_theme/title';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { updateSubCategory } from '../../../../../utils/actions/category';
import { useLocation } from 'react-router-dom';

const EditSubCategory = () => {
    let { state } = useLocation();
    let { detail, id } = state;
    let token = localStorage.getItem('authToken');
    // Field States
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [sub_category_active_status, setSubCategoryActiveStatus] = useState(detail.sub_category_active_status);

    const insertCompanyAdmin = async (e) => {
        e.preventDefault();
        try {
            let url = `api/update-subcategory/${id}`;
            let reqBody = { sub_category_active_status, parent_category_id: detail?.parent_category_id };
            updateSubCategory(url, token, reqBody)
                .then(res => setSuccess(res.data?.msg))
                .catch(error => setError(error?.response.data.error))
                .finally(() => {
                    setTimeout(() => {
                        setError("");
                        setSuccess("");
                    }, 5000);
                });
        } catch (error) {
            setError(error.message);
        }
    };

    const handleChange = (event) => {
        setSubCategoryActiveStatus(event.target.checked);
    };

    return (
        <form className='form-sec' onSubmit={insertCompanyAdmin}>
            <CustomizeTitle text={'Update Sub-Category'} />
            {error !== '' && <Alert severity="error">{error}</Alert>}
            {success !== '' && <Alert severity="success">{success}</Alert>}
            <div className='company_admin_form '>
                <div className='company_admin_form_field'>
                    <label>Category Status</label>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                        <FormControlLabel
                            name='company_status'
                            control={
                                <Checkbox onChange={handleChange} checked={sub_category_active_status} />
                            }
                            label="Active"
                        />
                    </FormGroup>
                </div>
            </div>
            <button>Update Sub-Category</button>
        </form>
    );
};

export default EditSubCategory;