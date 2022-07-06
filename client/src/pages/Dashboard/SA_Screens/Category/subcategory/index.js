import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomizeTitle from '../../../../../mui_theme/title';
import { Alert, Box, Button, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import API from '../../../../../API';
import SubCategoryTables from '../../../../../components/TableLayouts/subcategoryList';
import { fetchCategory } from '../../../../../utils/actions/category';
import Splash from '../../../../../components/splash';

const SubCategory = () => {
    let token = localStorage.getItem('authToken');
    let nav = useNavigate();
    const [_subCategoryList, setSubCategoryList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [category, setCategory] = useState([]);
    const [isResponse, setResponse] = useState('');
    const [error, setError] = useState('');
    const [hasData, setHasData] = React.useState(true);

    useEffect(() => {
        fetchCategory(token)
            .then(res => {
                if (res.data?.data.length === 0) {
                    setHasData(false);
                }
            })
            .catch(err => console.log(err));
     
        const fetchSubCategory = async () => {
            setResponse("0");
            try {
                const detail = await API({
                    method: 'GET',
                    url: '/api/fetch-subcategory',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                });
                setSubCategoryList(detail?.data?.data);

                if (detail?.data?.data.length === 0) {
                    setResponse('Collection is Empty');
                } else {
                    setResponse('1');
                }

                fetchCategory(token)
                    .then(res => setCategory(res?.data?.data))
                    .catch(error => setError(error?.response.data.error));

            } catch (error) {
                setError(error?.response.data.error);
            }
        };
        fetchSubCategory();
    }, [isLoading]);

    const toggleLoader = sign => setLoading(sign);

    if (isLoading) {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return <Splash loading={isLoading} />;
    }


    if (!hasData) return <Alert severity='warning'>Make sure you have categories.</Alert>;

    return (
        <div style={{ width: '80%' }}>
            <div className='company_admin_title_and_btn'>
                {/* Tittle */}
                <CustomizeTitle text={'Sub Category'} />

                {/* Add company admin */}
                <Box>
                    <Button variant="text" onClick={() => window.location.reload(false)}><AutorenewIcon /></Button>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => nav(`create-subcategory`)}
                    >
                        Sub Category
                    </Button>
                </Box>
            </div>
            {/* Error Responser */}
            {error !== '' && <Alert severity="error">{error}</Alert>}

            {/* Responser */}
            {isResponse !== '1' && ((isResponse === "0") || (isResponse === "") ?
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
                :
                <Alert severity="warning">{isResponse}</Alert>
            )}


            {_subCategoryList.length !== 0 &&
                <SubCategoryTables data={_subCategoryList} token={token} category={category} toggleLoader={toggleLoader} />
            }
        </div>
    );
};

export default SubCategory;