import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomizeTitle from '../../../../../mui_theme/title';
import CategoryTables from '../../../../../components/TableLayouts/categoryList';
import { Alert, Box, Button, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { fetchCategory } from '../../../../../utils/actions/category';
import Splash from '../../../../../components/splash';

const Category = () => {
    let nav = useNavigate();
    let token = localStorage.getItem('authToken');
    const [isLoading, setLoading] = useState(false);
    const [_categoryList, setCategoryList] = useState([]);
    const [isResponse, setResponse] = useState('');
    const [error, setError] = useState('');
    
    useEffect(() => {
        const getCategory = async () => {
            setResponse("0");
            fetchCategory(token)
                .then(res => {
                    setCategoryList(res?.data?.data);

                    if (res?.data?.data.length === 0) {
                        setResponse('Collection is Empty');
                    } else {
                        setResponse('1');
                    }
                })
                .catch(error => setError(error?.response.data.error));
        };
        getCategory();
    }, [isLoading]);

    const toggleLoader = sign => setLoading(sign);

    if (isLoading) {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return <Splash loading={isLoading} />;
    }

    return (
        <div style={{ width: '80%' }}>
            <div className='company_admin_title_and_btn'>
                {/* Tittle */}
                <CustomizeTitle text={'Category'} />

                {/* Add company admin */}
                <Box>
                    <Button variant="text" onClick={() => window.location.reload(false)}><AutorenewIcon /></Button>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => nav(`create-category`)}
                    >
                        Category
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

            {_categoryList.length !== 0 &&
                <CategoryTables data={_categoryList} token={token} toggleLoader={toggleLoader} />
            }
        </div>
    );
};

export default Category;