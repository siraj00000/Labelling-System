import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Box, Button, CircularProgress } from '@mui/material';
import { fetchCategory, fetchSubCategory } from '../../../../../utils/actions/category';
import { removeStatus, token } from '../../../../../utils/actions';
import CustomizeTitle from '../../../../../mui_theme/title';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SubCategoryTables from '../../../../../components/TableLayouts/subcategoryList';
import Splash from '../../../../../components/splash';
import Searchbar from '../../../../../components/Searchbar';
import { downloadCSV } from '../../../../../utils/actions/sub-actions';
import { SERVER_URL } from '../../../../../utils/constants';
import Pagination from '../../../../../components/Pagination';

const SubCategory = () => {
    let nav = useNavigate();
    const [_subCategoryList, setSubCategoryList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [category, setCategory] = useState([]);
    const [isResponse, setResponse] = useState('');
    const [error, setError] = useState('');
    const [hasData, setHasData] = React.useState(true);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchCategory(token, `/api/category`)
            .then(res => { if (res.data?.data.length === 0) setHasData(false); })
            .catch(err => { setError(err); removeStatus(setError); });

        const fetchSubCategoryData = async () => {
            setResponse("0");
            try {
                let URL = `/api/fetch-subcategory?sub_category=${search}&page=${page}&limit=12`;
                fetchSubCategory(token, URL)
                    .then(res => {
                        let response = res?.data;
                        setSubCategoryList(response?.data);
                        setTotalPages(response?.pages);
                        if (response?.data.length === 0) setResponse('Collection is Empty');
                        else setResponse('1');
                    }).catch(error => {
                        setError(error);
                        removeStatus(setError);
                    });

                fetchCategory(token, `/api/category`)
                    .then(res => setCategory(res?.data?.data))
                    .catch(error => setError(error?.response.data.error));

            } catch (error) {
                setError(error?.response.data.error);
            }
        };
        fetchSubCategoryData();
    }, [isLoading, search, page]);

    const toggleLoader = sign => setLoading(sign);

    if (isLoading) {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return <Splash loading={isLoading} />;
    }

    if (!hasData) return <Alert severity='warning'>Make sure you have categories.</Alert>;

    const generateCSV = () => {
        try {
            let URL = `/api/generate-csv-subcat?sub_category=${search}&page=${page}`;
            downloadCSV(token, URL)
                .then(({ data }) => {
                    window.open(SERVER_URL + data?.downloadURL, '_parent');
                })
                .catch(error => {
                    setError(error);
                    removeStatus(setError);
                });
        } catch (error) {
            setError(error.message);
        }
    };
    const searchHandler = (value) => {
        setSearch(value);
        setPage(1);
    }
    return (
        <div style={{ width: '80%' }}>
            <div className='company_admin_title_and_btn'>
                <div className='direction'>
                    {/* Tittle */}
                    <CustomizeTitle text={'Sub Category'} />
                    {isResponse === '1' || (isResponse.length <= 1 &&
                        <CircularProgress size={25} sx={{ ml: 1 }} />
                    )}
                </div>

                {/* Add company admin */}
                <Box className='direction'>
                    <Searchbar handler={searchHandler} />
                    <Button
                        variant="contained"
                        startIcon={<FileDownloadIcon />}
                        onClick={generateCSV}
                        sx={{ mr: '5px' }}
                    >
                        CSV
                    </Button>
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
            {isResponse.length > 1 && <Alert severity="warning">{isResponse}</Alert>}

            {_subCategoryList.length !== 0 &&
                <SubCategoryTables data={_subCategoryList} token={token} category={category} toggleLoader={toggleLoader} />
            }

            <Pagination count={totalPages} setPage={setPage} />
        </div>
    );
};

export default SubCategory;