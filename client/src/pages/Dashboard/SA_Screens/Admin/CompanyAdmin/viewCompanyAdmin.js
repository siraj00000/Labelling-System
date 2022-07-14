import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import { fetchAdmins } from '../../../../../utils/actions/companyData';
import { removeStatus, token } from '../../../../../utils/actions';
import { Alert } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function ViewCompanyAdmin() {
    const [admins, setAdmins] = React.useState([]);
    const [error, setError] = React.useState('');

    const { state } = useLocation();
    let { data, type } = state;

    React.useEffect(() => {
        try {
            const formData = new FormData();
            formData.append("company_email", data.company_email);
            fetchAdmins(token, formData)
                .then(res => {
                    setAdmins(res.data?.data);
                }).catch(error => {
                    setError(error);
                    removeStatus(setError);
                });
        } catch (error) {
            setError(error.message);
            removeStatus(setError);
        }
    }, []);

    return (
        <>
            {error !== '' && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            <TableContainer sx={{ width: '80%' }} component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>{type}</StyledTableCell>
                            <StyledTableCell align="center">Details</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(data).map(([key, value]) => {
                            let dateTypeKey = key === 'estaiblishment_year' || key === 'createdAt' || key === 'updatedAt';
                            const year = dateTypeKey && value.split("T")[0];
                            let status = (key === 'company_active_status' || key === 'manufacturer_active_status') && (value ? "Active" : 'In Active');
                            return (
                                <React.Fragment key={key + value}>
                                    {
                                        (key !== 'company_id') && (key !== 'sub_category') && (key !== '_id') && (key !== "__v") &&
                                        <StyledTableRow>
                                            <StyledTableCell align="left">{key}</StyledTableCell>
                                            <StyledTableCell align="center">{year || status || value}</StyledTableCell>
                                        </StyledTableRow>
                                    }
                                </React.Fragment>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {data?.sub_category.length !== 0 &&
                <TableContainer sx={{ width: '80%', mt: 5 }} component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Sub-Category</StyledTableCell>
                                <StyledTableCell align="center">Details</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.sub_category.map((item, index) => {
                                // console.log(key);
                                return (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell align="left">sub_category</StyledTableCell>
                                        <StyledTableCell align="center">{item.sub_category}</StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
            {admins.length !== 0 &&
                <TableContainer sx={{ width: '80%', mt: 5 }} component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>{type} Admin</StyledTableCell>
                                <StyledTableCell align="center">Details</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {admins?.map((item) => {
                                return (
                                    <StyledTableRow key={item?._id}>
                                        <StyledTableCell align="left">username</StyledTableCell>
                                        <StyledTableCell align="center">{item.username}</StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </>
    );
}
