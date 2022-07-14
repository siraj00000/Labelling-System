import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomizeTitle from '../../../../mui_theme/title';
import { Alert, Box, Button, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { fetchBrands } from '../../../../utils/actions/brand';
import { token } from '../../../../utils/actions';
import BrandsTables from '../../../../components/TableLayouts/brandList';
import Splash from '../../../../components/splash';
import Searchbar from '../../../../components/Searchbar';

const Brands = () => {
    let nav = useNavigate();
    const [isLoading, setLoading] = React.useState(false);
    const [brandsList, setBrands] = useState([]);
    const [isResponse, setResponse] = useState('');
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getBrands = async () => {
            setResponse("0");
            fetchBrands(token)
                .then(res => {
                    setBrands(res?.data?.data);
                    if (res?.data?.data.length === 0) {
                        setResponse('Collection is Empty');
                    } else {
                        setResponse('1');
                    }
                })
                .catch(error => setError(error?.response.data.error));
        };

        getBrands();
    }, [isLoading]);

    const toggleLoader = sign => setLoading(sign);

    if (isLoading) {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return <Splash loading={isLoading} />;
    }

    const brandFilter = brandsList?.filter(list => {
        return (
            list.brand
                .toLowerCase()
                .indexOf(search.toLowerCase()) !== -1
        );
    });

    return (
        <div style={{ width: '100%' }}>
            <div className='company_admin_title_and_btn'>
                {/* Tittle */}
                <CustomizeTitle text={'Brands'} />

                {/* Add company admin */}
                <Box className='direction'>
                    <Button variant="text" onClick={() => window.location.reload(false)}><AutorenewIcon /></Button>
                    <Searchbar handler={setSearch} />
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => nav(`create-brand`)}
                    >
                        Brand
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

            {brandsList.length !== 0 &&
                <BrandsTables data={brandFilter} token={token} toggleLoader={toggleLoader} />
            }
        </div>
    );
};

export default Brands;