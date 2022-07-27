import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link } from '@mui/material';
import withRouter from '../utils/withRouter';

const BreadCrumbs = props => {
    const { location: { pathname }, navigate } = props?.router;
    const pathnames = pathname.split('/').filter(x => x);
    // Won't allow to render on homepage
    let matchPath = pathname !== '/';
    const navigationHandler = (path, condition) => {
        if (!condition) navigate(path);
    };
    return (
        <div>
            <MUIBreadcrumbs aria-label="breadcrumb">
                {matchPath && <Link
                    color="inherit"
                    sx={{ cursor: 'pointer', textDecoration: 'none' }}
                    onClick={() => navigate('/')}>Home</Link>
                }
                {pathnames.map((name, index) => {
                    let lastPath = pathnames[pathnames.length - 1] === name;
                    return (
                        <Link
                            key={index}
                            color={lastPath ? 'primary' : 'inherit'}
                            sx={{ cursor: 'pointer', textDecoration: 'none' }}
                            onClick={() => navigationHandler(`/${name}`, lastPath)}>
                            {name}
                        </Link>
                    );
                })}
            </MUIBreadcrumbs>
        </div>
    );
};

export default withRouter(BreadCrumbs);