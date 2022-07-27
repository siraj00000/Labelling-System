/** Plan
 * ? Manufacturer Admin's CRUD
 * @table View Manufacturer Admins
 * @form Edit Manufacturer Admins
 * @form Create Manufacturer Admins
 * @func Delete Manufacturer Admin
 */

import React, { useEffect, useState } from 'react';
import { Alert, Box, CircularProgress, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { removeStatus, token } from '../../../../../utils/actions';
import { fetchManufactureDetail } from '../../../../../utils/actions/manufacturer';
import { downloadCSV } from '../../../../../utils/actions/sub-actions';
import { SERVER_URL } from '../../../../../utils/constants';
import AddIcon from '@mui/icons-material/Add';
import CustomizeTitle from '../../../../../mui_theme/title';
import Searchbar from '../../../../../components/Searchbar';
import ManufacturerList from '../../../../../components/TableLayouts/manufactureList';
import Pagination from '../../../../../components/Pagination';
import '../admin.css';

const ManufacturerAdmin = ({ companyDetail, toggleLoader }) => {
  let nav = useNavigate();
  const [manufactureDetail, setManufacturerDetail] = useState([]);
  const [isResponse, setResponse] = useState('');
  const [error, setError] = useState('');
  const [canProceed, setCanProceed] = useState("");
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (companyDetail?.length === 0) {
      setCanProceed(false);
    } else {
      setCanProceed(true);
    }
  }, [companyDetail]);

  useEffect(() => {
    const fetchManufactureData = async () => {
      setResponse("0");
      try {
        let URL = `/api/fetch-manufacturer-admin?manufacturer=${search}&page=${page}&limit=1`;
        fetchManufactureDetail(token, URL)
          .then(res => {
            let response = res?.data
            setManufacturerDetail(response?.data);
            setTotalPages(response?.pages);
            if (response?.data.length === 0) {
              setResponse('Collection is Empty');
            } else {
              setResponse('1');
            }
          });

      } catch (error) {
        setError(error?.response.data.error);
      }

    };

    fetchManufactureData();
  }, [search, page]);

  if (!canProceed) {
    return <Alert severity="warning" style={{ marginTop: 10 }}>Empty company list</Alert>;
  }

  const generateCSV = () => {
    try {
      let URL = `/api/generate-manufacturer-csv?manufacturer=${search}&page=${page}`;
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
    setPage(1)
    setSearch(value)
  }

  return (
    <div className='ca_container'>
      {/* Error Alert */}
      {error !== '' && <Alert severity="error">{error}</Alert>}

      <div className='company_admin_title_and_btn'>
        <div className='direction' >
          {/* Tittle */}
          <CustomizeTitle text={'Manufacturer'} />
          {isResponse === '1' || (isResponse.length <= 1 &&
            <CircularProgress size={25} sx={{ ml: 1 }} />
          )}
        </div>

        {/* Add company admin */}
        <Box className='direction'>
          <Searchbar handler={searchHandler} />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={generateCSV}
          >
            CSV
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ margin: '0 5px' }}
            onClick={() => nav(`register-manufacturer`,)}
          >
            Manufacturer Admin
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => nav(`create-manufacturer`,)}
          >
            Manufacturer
          </Button>
        </Box>
      </div>

      {/* Responser */}
      {isResponse.length > 1 && <Alert severity="warning">{isResponse}</Alert>}

      {/* Table */}
      {manufactureDetail.length !== 0 &&
        <ManufacturerList detail={manufactureDetail} token={token} toggleLoader={toggleLoader} />
      }

      <Pagination count={totalPages} setPage={setPage} page={page} />
    </div>
  );
};

export default ManufacturerAdmin;

