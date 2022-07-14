/**Plan 
 * ? Company Admin's CRUD
 * @table View Company Admins
 * @form Edit Company Admins
 * @form Create Company Admins
 * @func Delete Company Admin
 */

import React, { } from 'react';
import { Alert, Box, CircularProgress, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CustomizeTitle from '../../../../../mui_theme/title';
import TableLayout from '../../../../../components/TableLayouts/companyList';
import '../admin.css';
import { useNavigate } from 'react-router-dom';
import { token } from '../../../../../utils/actions';
import Searchbar from '../../../../../components/Searchbar';

const CompanyAdmin = ({ companyDetail, isResponse, error, toggleLoader }) => {
  let nav = useNavigate();
  const [search, setSearch] = React.useState('');

  const companyFilter = companyDetail?.filter(list => {
    return (
      list.company_name
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
        <CustomizeTitle text={'Company'} />

        {/* Add company admin */}
        <Box className='direction'>
          <Button variant="text" onClick={() => window.location.reload(false)}><AutorenewIcon /></Button>
          <Searchbar handler={setSearch} />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            style={{margin: "0 5px"}}
            onClick={() => nav(`register-company-admin`,)}
          >
            Company Admin
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => nav(`create-company-admin`,)}
          >
            Company
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
      {companyDetail.length !== 0 &&
        <TableLayout detail={companyFilter} token={token} toggleLoader={toggleLoader} />
      }
    </div>
  );
};

export default CompanyAdmin;

