import React, { useEffect, useState, lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './mui_theme/theme';
import { token } from './utils/actions';
import Splash from './components/splash';
import Dashboard from './pages/Dashboard';

// App Screen Lazy import
const AdminList = lazy(() => import('./pages/Dashboard/SA_Screens/Admin'));
const Category = lazy(() => import('./pages/Dashboard/SA_Screens/Category/category'));
const Brands = lazy(() => import('./pages/Dashboard/SA_Screens/Brand'));
const ManufacturerAdmin = lazy(() => import('./pages/Dashboard/SA_Screens/Admin/ManufacturerAdmin'));
const SubCategory = lazy(() => import('./pages/Dashboard/SA_Screens/Category/subcategory'));

const ForgetPassword = lazy(() => import('./pages/auth/ForgetPassword'));
const LoginScreen = lazy(() => import('./pages/auth/LoginScreen'));
const ResetPassword = lazy(() => import('./pages/auth/ResetPassword'));
const CreateCompanyAdmin = lazy(() => import('./pages/Dashboard/SA_Screens/Admin/CompanyAdmin/createCompanyAdmin'));
const EditCompanyAdmin = lazy(() => import('./pages/Dashboard/SA_Screens/Admin/CompanyAdmin/editCompanyAdmin'));
const ViewCompanyAdmin = lazy(() => import('./pages/Dashboard/SA_Screens/Admin/CompanyAdmin/viewCompanyAdmin'));
const RegisterCompanyAdmin = lazy(() => import('./pages/Dashboard/SA_Screens/Admin/CompanyAdmin/registerCompanyAdmin'));
const CreateCategory = lazy(() => import('./pages/Dashboard/SA_Screens/Category/category/createCategory'));
const EditCategory = lazy(() => import('./pages/Dashboard/SA_Screens/Category/category/editCategory'));
const CreateSubCategory = lazy(() => import('./pages/Dashboard/SA_Screens/Category/subcategory/createSubCategory'));
const EditSubCategory = lazy(() => import('./pages/Dashboard/SA_Screens/Category/subcategory/editSubCategory'));
const ViewSubCategory = lazy(() => import('./pages/Dashboard/SA_Screens/Category/subcategory/viewSubCategory'));
const CreateManufacturer = lazy(() => import('./pages/Dashboard/SA_Screens/Admin/ManufacturerAdmin/createManufacturer'));
const EditManufactureAdmin = lazy(() => import('./pages/Dashboard/SA_Screens/Admin/ManufacturerAdmin/editManufacture'));
const RegisterManufacturer = lazy(() => import('./pages/Dashboard/SA_Screens/Admin/ManufacturerAdmin/registerManufacturer'));
const ViewManufacturerAdmin = lazy(() => import('./pages/Dashboard/SA_Screens/Admin/ManufacturerAdmin/viewManufacturer'));
const CreateBrand = lazy(() => import('./pages/Dashboard/SA_Screens/Brand/createBrand'));
const BrandDetail = lazy(() => import('./pages/Dashboard/SA_Screens/Brand/brandDetail'));
const EditBrand = lazy(() => import('./pages/Dashboard/SA_Screens/Brand/editBrand'));


const App = () => {

  // return <Splash token={token} />;
  return (
    <Suspense fallback={<Splash token={token} />}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={PrivateRoute(token, <Dashboard />, "/login")} >
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
              <Route path='admins/manufacturer-detail' element={<ViewManufacturerAdmin />} />

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
            <Route path="/login" element={PrivateRoute(!token, <LoginScreen />, "/")} />
            <Route path='/forgetpassword' element={PrivateRoute(!token, <ForgetPassword />, "/")} />
            <Route path='/passwordreset/:resetToken' element={PrivateRoute(!token, <ResetPassword />, "/")} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};

const PrivateRoute = (token, children, path) => {
  return token ? children : <Navigate to={path} />;
};

export default App;