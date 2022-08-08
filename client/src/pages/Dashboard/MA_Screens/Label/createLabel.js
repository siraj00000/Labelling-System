import React, { useState } from 'react';
import { removeStatus, token } from '../../../../utils/actions';
import { fetchBrandByEmail, fetchProductByBrandId, insertLabelToDB } from '../../../../utils/actions/Manufacturer/maf_action';
import '../../../auth/auth.css';
import '../../SA_Screens/Admin/admin.css';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Alert, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import CustomizeTitle from '../../../../mui_theme/title';
const CreateLabel = ({ user }) => {
  const [brandId, setBrandId] = useState("");
  const [productId, setProductId] = useState("");
  const [brand, setBrand] = useState([]);
  const [product, setProduct] = useState([]);
  const [variant, setVariant] = useState([]);
  const [productVariant, setProductVariant] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [serialNumber, setSerialNumber] = useState(0);
  const [tagNumber, setTagNumber] = useState("");
  const [isTagActive, setTagActiveStatus] = useState(true);
  const [ds1Count, setDS1Count] = useState("");
  const [ds2Count, setDS2Count] = useState("");

  // States for status 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const clearStates = () => {
    setBrandId("");
    setProductId("");
    setProduct([]);
    setVariant([]);
    setProductVariant("");
    setBatchNumber("");
    setSerialNumber(0);
    setTagNumber("");
    setTagActiveStatus(true);
    setDS1Count("");
    setDS2Count("");
  };

  React.useEffect(() => {
    const fetchData = () => {
      // For brands
      let email = user.company_email;
      let URL = `/api/fetch-brand-by-email`;
      fetchBrandByEmail(token, URL, email)
        .then(res => {
          setBrand(res?.data?.data);
        })
        .catch(error => {
          setError(error);
          removeStatus(setSuccess);
        });
    };
    fetchData();
  }, []);

  const selectBrandAndFetchProduct = (id) => {
    setBrandId(id);
    // fetch Products
    let URL = `/api/fetch-product/${id}`;
    fetchProductByBrandId(token, URL)
      .then(res => {
        setProduct(res.data.data);
      })
      .catch(error => {
        setError(error);
        removeStatus(setError);
      });
  };

  const seletProductAndSetVariants = (data) => {
    if (data === "") return false;
    let id = data.split(" ")[0];
    let variants = data.split(" ")[1].split(",");
    setProductId(id);
    setVariant(variants);
  };

  const submitLabelDataToCollection = (e) => {
    e.preventDefault();
    try {
      const reqBody = {
        company_name: user.company_email,
        manufacture_id: user._id,
        brand_id: brandId,
        product_id: productId,
        variant: productVariant,
        batch_number: batchNumber,
        serial_number: serialNumber,
        tag_number: tagNumber,
        tag_active: isTagActive,
        DS1_count: ds1Count,
        DS2_count: ds2Count,
      };
      let URL = '/api/insert-label';
      insertLabelToDB(token, URL, reqBody)
        .then(res => {
          setSuccess(res?.data?.msg);
          removeStatus(setSuccess);
          clearStates();
        })
        .catch(error => {
          setError(error);
          removeStatus(setError);
        });
    } catch (error) {
      setError(error.message);
      removeStatus(setError);
    }
  };

  return (
    <form className='form-sec' onSubmit={submitLabelDataToCollection}>
      <CustomizeTitle text={'Create Label'} />
      {error !== '' && <Alert severity="error">{error}</Alert>}
      {success !== '' && <Alert severity="success">{success}</Alert>}
      <div className='company_admin_form'>
        {/* BRANDS */}
        <div className='company_admin_form_field'>
          <label>Brands</label>
          <select onChange={(e) => selectBrandAndFetchProduct(e.target.value)} required>
            <option value="">select brand</option>
            {brand?.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item?._id}
                  className='company_list'>
                  {item.brand}
                </option>
              );
            })}
          </select>
          <FilterListIcon className='filter-icon' />
        </div>
        {/* PRODUCTS */}
        {brandId !== "" &&
          product.length !== 0 && <div className='company_admin_form_field'>
            <label>Select Product</label>
            <select onChange={(e) => seletProductAndSetVariants(e.target.value)} required>
              <option value="">product</option>
              {product?.map((item, index) => {
                return (
                  <option
                    key={index}
                    value={item._id + " " + item?.variants}
                    className='company_list'>
                    {item.product_name}
                  </option>
                );
              })}
            </select>
            <FilterListIcon className='filter-icon' />
          </div>
        }
        {/* VARIANTS */}
        {product?.length !== 0 && variant?.length !== 0 &&
          <div className='company_admin_form_field'>
            <label>Select variant</label>
            <select onChange={(e) => setProductVariant(e.target.value)} required>
              <option>variant</option>
              {variant?.map((item, index) => {
                return (
                  <option
                    key={index}
                    value={item}
                    className='company_list'>
                    {item}
                  </option>
                );
              })}
            </select>
            <FilterListIcon className='filter-icon' />
          </div>
        }
        {/* BATCH NUMBER */}
        <div className='company_admin_form_field'>
          <label>Batch number</label>
          <input placeholder='RA2393311...' value={batchNumber} onChange={e => setBatchNumber(e.target.value)} required />
        </div>
        {/* SERIAL NUMBER */}
        <div className='company_admin_form_field'>
          <label>Serial number</label>
          <input placeholder='40...' type={'number'} value={serialNumber} onChange={e => setSerialNumber(e.target.value)} required />
        </div>
        {/* DS1 COUNT */}
        <div className='company_admin_form_field'>
          <label>DS1 Count</label>
          <input placeholder='ds1...' value={ds1Count} onChange={e => setDS1Count(e.target.value)} />
        </div>
        {/* DS2 COUNT */}
        <div className='company_admin_form_field'>
          <label>DS2 Count</label>
          <input placeholder='ds2...' value={ds2Count} onChange={e => setDS2Count(e.target.value)} />
        </div>
        {/* TAG NUMBER */}
        <div className='company_admin_form_field'>
          <label>Tag number</label>
          <input placeholder='55540...' value={tagNumber} onChange={e => setTagNumber(e.target.value)} required />
        </div>
        {/* TAG STATUS */}
        <div className='checkboxes'>
          <label>Tag Status</label>
          <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
            <FormControlLabel
              name='company_status'
              control={
                <Checkbox onChange={(event) => setTagActiveStatus(event.target.checked)} checked={isTagActive} />
              }
              label="Active"
            />
          </FormGroup>
        </div>
      </div>
      <button>Create Label</button>
    </form>
  );
};

export default CreateLabel;