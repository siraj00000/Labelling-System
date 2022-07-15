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

export default function ViewManufacturerAdmin() {
    const { state } = useLocation();
    let { data, type } = state;

    return (
        <TableContainer sx={{ width: '80%' }} component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>{type} Admin</StyledTableCell>
                        <StyledTableCell align="center">Details</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.entries(data).map(([key, value]) => {
                        let dateTypeKey = key === 'estaiblishment_year' || key === 'createdAt' || key === 'updatedAt';
                        const year = dateTypeKey && value.split("T")[0];
                        let status = (key === 'company_active_status' || key === 'manufacturer_active_status') && (value ? "Active" : 'In Active');
                        let sub_category = key === 'sub_category' && Object.values(value).join(', ');

                        return (
                            <React.Fragment key={key + value}>
                                {
                                    (key !== 'company_id') && (key !== '_id') && (key !== "__v") &&
                                    <StyledTableRow>
                                        <StyledTableCell align="left">{key}</StyledTableCell>
                                        <StyledTableCell align="center">{sub_category || year || status || value}</StyledTableCell>
                                    </StyledTableRow>
                                }
                            </React.Fragment>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
