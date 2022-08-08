import { Alert, Box, Button, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeStatus, token } from '../../../../utils/actions';
import { fetchLabels } from '../../../../utils/actions/Manufacturer/maf_action';
import { downloadCSV } from '../../../../utils/actions/sub-actions';
import Pagination from '../../../../components/Pagination';
import Searchbar from '../../../../components/Searchbar';
import Splash from '../../../../components/splash';
import CustomizeTitle from '../../../../mui_theme/title';
import LabelTable from '../../../../components/TableLayouts/labelList';
import { SERVER_URL } from '../../../../utils/constants';
import AddIcon from '@mui/icons-material/Add';

const Manufacturer = ({ user }) => {
    let nav = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [labelList, setLabelList] = useState([]);
    const [isResponse, setResponse] = useState('');
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getLabel = async () => {
            setResponse("0");
            let URL = `/api/fetch-label?company_name=${search}&page=${page}&limit=12`;
            fetchLabels(token, URL)
                .then(res => {
                    setLabelList(res?.data?.data);
                    setTotalPages(res?.data?.pages);

                    if (res?.data?.data?.length === 0) {
                        setResponse('Collection is Empty');
                    } else {
                        setResponse('1');
                    }
                })
                .catch(error => {
                    setError(error);
                    removeStatus(setError)
                });
        };
        getLabel();
    }, [isLoading, search, page]);
    const toggleLoader = sign => setLoading(sign);
    if (isLoading) {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return <Splash loading={isLoading} />;
    }
    const generateCSV = () => {
        try {
            let URL = `/api/generate-label-csv?company_name=${search}&page=${page}`;
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
    };

    return (
        <div>
            <div className='direction-corner'>
                <div className='direction' >
                    {/* Tittle */}
                    <CustomizeTitle text={'LABEL'} />
                    {isResponse === '1' || (isResponse.length <= 1 &&
                        <CircularProgress size={25} sx={{ ml: 1 }} />
                    )}
                </div>

                {/* Add Categories */}
                <Box className='direction'>
                    <Searchbar handler={searchHandler} />
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={generateCSV}
                        sx={{ mr: '5px' }}
                    >
                        CSV
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => nav(`create-label`)}
                    >
                        Label
                    </Button>
                </Box>
            </div>
            {/* Error Responser */}
            {error !== '' && <Alert severity="error">{error}</Alert>}

            {/* Responser */}
            {isResponse.length > 1 && <Alert severity="warning">{isResponse}</Alert>}

            {labelList.length !== 0 ?
                <LabelTable data={labelList} token={token} toggleLoader={toggleLoader} />
                :
                <Alert severity="warning">Empty List</Alert>
            }

            <Pagination count={totalPages} setPage={setPage} />
        </div>
    );
};

export default Manufacturer;