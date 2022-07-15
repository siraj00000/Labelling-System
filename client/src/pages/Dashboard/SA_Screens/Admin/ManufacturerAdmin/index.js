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
import { token } from '../../../../../utils/actions';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CustomizeTitle from '../../../../../mui_theme/title';
import API from '../../../../../API';
import ManufacturerList from '../../../../../components/TableLayouts/manufactureList';
import '../admin.css';
import Searchbar from '../../../../../components/Searchbar';

const ManufacturerAdmin = ({ companyDetail, toggleLoader }) => {
  let nav = useNavigate();
  const [manufactureDetail, setManufacturerDetail] = useState([]);
  const [isResponse, setResponse] = useState('');
  const [error, setError] = useState('');
  const [canProceed, setCanProceed] = useState("");
  const [search, setSearch] = React.useState('');

  useEffect(() => {
    if (companyDetail?.length === 0) {
      setCanProceed(false);
    } else {
      setCanProceed(true);
    }
  }, [companyDetail]);

  useEffect(() => {
    const fetchManufactureDetail = async () => {
      setResponse("0");
      try {
        const detail = await API({
          method: 'GET',
          url: '/api/fetch-manufacturer-admin',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });
        setManufacturerDetail(detail?.data?.data);

        if (detail?.data?.data.length === 0) {
          setResponse('Collection is Empty');
        } else {
          setResponse('1');
        }
      } catch (error) {
        setError(error?.response.data.error);
      }

    };

    fetchManufactureDetail();
  }, []);

  if (!canProceed) {
    return <Alert severity="warning" style={{ marginTop: 10 }}>Empty company list</Alert>;
  }

  const manufactureFilter = manufactureDetail?.filter(list => {
    return (
      list.manufacturer_name
        .toLowerCase()
        .indexOf(search.toLowerCase()) !== -1
    );
  });

  return (
    <div className='ca_container'>
      {/* Error Alert */}
      {error !== '' && <Alert severity="error">{error}</Alert>}

      <div className='company_admin_title_and_btn'>
        {/* Tittle */}
        <CustomizeTitle text={'Manufacturer'} />

        {/* Add company admin */}
        <Box className='direction'>
          <Button variant="text" onClick={() => window.location.reload(false)}><AutorenewIcon /></Button>
          <Searchbar handler={setSearch} />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => nav(`register-manufacturer`,)}
          >
            Manufacturer Admin
          </Button>
        </Box>
      </div>

      {/* Responser */}
      {isResponse !== '1' && ((isResponse === "0") || (isResponse === "") ?
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
        :
        <Alert severity="warning">{isResponse}</Alert>
      )}

      {/* Table */}
      {manufactureDetail.length !== 0 &&
        <ManufacturerList detail={manufactureFilter} token={token} toggleLoader={toggleLoader} />
      }
    </div>
  );
};

export default ManufacturerAdmin;

