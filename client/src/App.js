import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Splash from './components/splash';
import { ThemeProvider } from '@mui/material/styles';
import ForgetPassword from './pages/auth/ForgetPassword';
import LoginScreen from './pages/auth/LoginScreen';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/Dashboard';
import { theme } from './mui_theme/theme';
import AdminList from './pages/Dashboard/SA_Screens/Admin';
import CreateCompanyAdmin from './pages/Dashboard/SA_Screens/Admin/CompanyAdmin/createCompanyAdmin';
import EditCompanyAdmin from './pages/Dashboard/SA_Screens/Admin/CompanyAdmin/editCompanyAdmin';
import ViewCompanyAdmin from './pages/Dashboard/SA_Screens/Admin/CompanyAdmin/viewCompanyAdmin';
import RegisterCompanyAdmin from './pages/Dashboard/SA_Screens/Admin/CompanyAdmin/registerCompanyAdmin';
import Category from './pages/Dashboard/SA_Screens/Category/category';
import CreateCategory from './pages/Dashboard/SA_Screens/Category/category/createCategory';
import EditCategory from './pages/Dashboard/SA_Screens/Category/category/editCategory';
import SubCategory from './pages/Dashboard/SA_Screens/Category/subcategory';
import CreateSubCategory from './pages/Dashboard/SA_Screens/Category/subcategory/createSubCategory';
import EditSubCategory from './pages/Dashboard/SA_Screens/Category/subcategory/editSubCategory';
import ViewSubCategory from './pages/Dashboard/SA_Screens/Category/subcategory/viewSubCategory';
import RegisterManufacturer from './pages/Dashboard/SA_Screens/Admin/ManufacturerAdmin/registerManufacturer';
import ManufacturerAdmin from './pages/Dashboard/SA_Screens/Admin/ManufacturerAdmin';
import CreateManufacturer from './pages/Dashboard/SA_Screens/Admin/ManufacturerAdmin/createManufacturer';
import EditManufactureAdmin from './pages/Dashboard/SA_Screens/Admin/ManufacturerAdmin/editManufacture';
import Brands from './pages/Dashboard/SA_Screens/Brand';
import CreateBrand from './pages/Dashboard/SA_Screens/Brand/createBrand';
import BrandDetail from './pages/Dashboard/SA_Screens/Brand/brandDetail';
import EditBrand from './pages/Dashboard/SA_Screens/Brand/editBrand';

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const isToken = localStorage.getItem("authToken");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000 = 3sec
  }, [isToken]);

  if (isLoading) {
    return <Splash loading={isLoading} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={PrivateRoute(isToken, <Dashboard />, "/login")} >
            <Route path='admins' element={<AdminList />} />
            {/* Company admin */}
            <Route path='admins/register-company-admin' element={<RegisterCompanyAdmin />} />
            <Route path='admins/create-company-admin' element={<CreateCompanyAdmin />} />
            <Route path='admins/edit-company-admin' element={<EditCompanyAdmin />} />
            <Route path='admins/detail' element={<ViewCompanyAdmin />} />

            {/* Manufacturer admin */}
            <Route path='admins/register-manufacturer' element={<RegisterManufacturer />} />
            <Route path='admins/view-manufacturer' element={<ManufacturerAdmin />} />
            <Route path='admins/create-manufacturer' element={<CreateManufacturer />} />
            <Route path='admins/edit-manufacturer' element={<EditManufactureAdmin />} />

            {/* Category */}
            <Route path='category' element={<Category />} />
            <Route path='category/create-category' element={<CreateCategory />} />
            <Route path='category/edit-category' element={<EditCategory />} />
            
            {/* Sub-category */}
            <Route path='subcategory' element={<SubCategory />} />
            <Route path='subcategory/create-subcategory' element={<CreateSubCategory />} />
            <Route path='subcategory/edit-subcategory' element={<EditSubCategory />} />
            <Route path='subcategory/view-subcategory' element={<ViewSubCategory />} />

            {/* Brands */}
            <Route path='brands' element={<Brands />} />
            <Route path='brands/create-brand' element={<CreateBrand />} />
            <Route path='brands/brand-detail' element={<BrandDetail />} />
            <Route path='brands/edit-brand' element={<EditBrand />} />

          </Route>
          <Route path="/login" element={PrivateRoute(!isToken, <LoginScreen />, "/")} />
          <Route path='/forgetpassword' element={PrivateRoute(!isToken, <ForgetPassword />, "/")} />
          <Route path='/passwordreset/:resetToken' element={PrivateRoute(!isToken, <ResetPassword />, "/")} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const PrivateRoute = (token, children, path) => {
  return token ? children : <Navigate to={path} />;
};

export default App;