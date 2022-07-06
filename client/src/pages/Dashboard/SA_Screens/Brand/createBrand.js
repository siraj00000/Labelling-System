import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import CustomizeTitle from '../../../../mui_theme/title';
import { insertBrand } from '../../../../utils/actions/brand';
import { fetchCompany } from '../../../../utils/actions/companyData';
// Mui icons
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
// styles
import '../../../auth/auth.css';
import './brand.css';
import '../Admin/admin.css';
import VideoPlayer from '../../../../components/VideoPlayer';
import Splash from '../../../../components/splash';
import { removeStatus } from '../../../../utils/actions';


const CreateBrand = () => {
    let token = localStorage.getItem('authToken');
    const [isLoading, setLoading] = useState(false);
    // Field States
    const [company, setCompany] = useState([]);
    const [brand, setBrand] = useState('');
    const [company_id, setSelectedCompany] = useState("");
    const [heading, setHeading] = useState("");
    const [text, setText] = useState("");
    const [carousel_headings, setCarouselHeading] = useState([]);
    const [carousel_text, setCarouselText] = useState([]);
    const [product_description, setProductDescription] = useState('');
    const [survey_feature, setSurveyFeature] = useState(false);
    const [survey_link, setSurveyLink] = useState("");
    const [authentication_feature, setAuthenticationFeature] = useState("");
    const [brand_active_status, setBrandActiveStatus] = useState(true);
    const [warranty, setWarranty] = useState(false);
    const [request_help, setRequestHelp] = useState(false);
    const [promo_code, setPromoCode] = useState(false);
    const [referrals, setReferrals] = useState(false);
    const [re_order_link, setReOrderLink] = useState("");
    const [email_support, setEmailSupport] = useState(false);
    const [email_id, setEmailId] = useState("");
    const [call_support, setCallSupport] = useState(false);
    const [call_no, setCallNo] = useState(null);
    const [whatsapp_support, setwhatsappSupport] = useState(false);
    const [whatsapp_number, setwhatsappNumber] = useState(null);
    const [instagram, setInstagram] = useState(false);
    const [insta_link, setInstaLink] = useState("");
    const [facebook, setFacebook] = useState(false);
    const [fb_link, setFbLink] = useState("");
    const [uploadedImageList, setUploadedImageList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState('');
    const [video_url, setVideo] = useState('');
    const [videoURL, setVideoURL] = useState('');
    const [__file, setFile] = useState([]);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        fetchCompany(token)
            .then(res => {
                setCompany(res?.data?.data);
            }).catch(error => {
                setError(error);
                setTimeout(() => {
                    setError("");
                }, 5000);
            });
    }, []);

    const verifyUploads = () => {
        if (__file.length === 0) {
            setError("Images not found!");
            removeStatus(setError);
            return false;
        } else if (videoURL === "" && selectedVideo === "") {
            setError("Video not found!");
            removeStatus(setError);
            return false;
        } else return true;
    };

    const insertBrandDetail = async (e) => {
        e.preventDefault();

        //TODO: Verify images and video uploads
        const verify = verifyUploads();
        if (verify) {
            try {
                setLoading(true);
                let reqBody = {
                    company_id, brand, brand_active_status, carousel_headings, carousel_text, product_description, authentication_feature,
                    warranty, request_help, survey_feature, survey_link, promo_code, referrals, re_order_link, email_support, email_id,
                    call_support, call_no, whatsapp_support, whatsapp_number, instagram, insta_link, facebook, fb_link, videoURL
                };

                const formData = new FormData();
                for (let index = 0; index < __file.length; index++) {
                    formData.append("image", __file[index]);
                }
                formData.append("video", selectedVideo);
                formData.append("reqBody", JSON.stringify(reqBody));

                insertBrand(token, formData)
                    .then(res => {
                        setSuccess(res?.data.msg);
                        removeStatus(setSuccess);
                    })
                    .catch(error => {
                        setError(error?.response.data.error);
                        removeStatus(setError);
                    }).finally(() => setLoading(false));
            }
            catch (error) {
                setError(error);
                setSuccess("");
                setTimeout(() => {
                    setError("");
                }, 5000);
            }
        }
    };

    const handleAdd = (prevList, val, func, setFunc) => {
        if (!val) return false;
        let list = [...prevList];
        list.push(val);
        func(list);
        setFunc("");
    };

    const handleRemove = (prevList, index, func) => {
        let list = [...prevList];
        list.splice(index, 1);
        func(list);
    };

    const handleUploadImage = event => {
        let images = [];
        let imageDetail = [];
        for (let i = 0; i < event.target.files.length; i++) {
            let file = event.target.files[i];
            images.push(URL.createObjectURL(file));
            imageDetail.push(file);
        }
        setFile(imageDetail);
        setUploadedImageList(images);
    };

    const handleUploadVideo = event => {
        if (videoURL !== '') return false;
        let video = URL.createObjectURL(event.target.files[0]);
        setVideo(video);
        setSelectedVideo(event.target.files[0]);
    };

    if (isLoading) {
        return <Splash loading={isLoading} />;
    }

    return (
        <form className='form-sec full-width' onSubmit={insertBrandDetail}>
            <CustomizeTitle text={'Add Brand'} />
            {error !== '' && <Alert severity="error">{error}</Alert>}
            {success !== '' && <Alert severity="success">{success}</Alert>}
            <div className='create-brand__flex'>
                <section className='brand_form'>
                    <div className='company_admin_form'>
                        <div className='company_admin_form_field'>
                            <label>Brand</label>
                            <input placeholder='Audi...' value={brand} onChange={e => setBrand(e.target.value)} required />
                        </div>
                        <div className='company_admin_form_field'>
                            <label>Company</label>
                            <select onChange={(e) => setSelectedCompany(e.target.value)} required>
                                <option value="">select company</option>
                                {company.map((item, index) => {
                                    return (
                                        <option
                                            key={index}
                                            value={item?._id}
                                            className='company_list'>
                                            {item?.company_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className='company_admin_form_field'>
                            <label>Carousel Headings</label>
                            <input placeholder='heading...' className='right-spacing' value={heading} onChange={e => setHeading(e.target.value)} />
                            <AddIcon className='addlist__icon'
                                onClick={() => handleAdd(carousel_headings, heading, setCarouselHeading, setHeading)}
                            />
                        </div>
                        <div className='company_admin_form_field'>
                            <label>Carousel Text</label>
                            <input placeholder='text...' className='right-spacing' value={text} onChange={e => setText(e.target.value)} />
                            <AddIcon className='addlist__icon'
                                onClick={() => handleAdd(carousel_text, text, setCarouselText, setText)}
                            />
                        </div>
                        <div className='company_admin_form_field'>
                            <label>Authentication Feature</label>
                            <select onChange={(e) => setAuthenticationFeature(e.target.value)} required>
                                <option value="">Select Feature</option>
                                <option value={"Label"}>Label</option>
                                <option value={"Batch"}>Batch</option>
                                <option value={"No Feature"}>No Feature</option>
                            </select>
                        </div>

                        <div className='company_admin_form_field'>
                            <label>Re Order Link</label>
                            <input placeholder='re-order link...' value={re_order_link} onChange={e => setReOrderLink(e.target.value)} />
                        </div>

                        <div className='company_admin_form_field'>
                            <label>Product Description</label>
                            <textarea placeholder='description...' value={product_description} onChange={e => setProductDescription(e.target.value)} />
                        </div>

                        <div className='company_admin_form_field'>
                            <label>Video Link</label>
                            <input placeholder='video link...' value={videoURL} onChange={e => setVideoURL(e.target.value)} />
                        </div>

                        {survey_feature && <div className='company_admin_form_field'>
                            <label>Survey Link</label>
                            <input placeholder='survey link...' value={survey_link} onChange={e => setSurveyLink(e.target.value)} />
                        </div>}

                        {email_support && <div className='company_admin_form_field'>
                            <label>Email</label>
                            <input placeholder='email...' value={email_id} onChange={e => setEmailId(e.target.value)} />
                        </div>}

                        {call_support && <div className='company_admin_form_field'>
                            <label>Call No</label>
                            <input placeholder='call no...' value={call_no} onChange={e => setCallNo(e.target.value)} />
                        </div>}

                        {whatsapp_support && <div className='company_admin_form_field'>
                            <label>Whatsapp No</label>
                            <input placeholder='9134984...' value={whatsapp_number} onChange={e => setwhatsappNumber(e.target.value)} />
                        </div>}

                        {instagram && <div className='company_admin_form_field'>
                            <label>Instagram Link</label>
                            <input placeholder='http://instagram...' value={insta_link} onChange={e => setInstaLink(e.target.value)} />
                        </div>}

                        {facebook && <div className='company_admin_form_field'>
                            <label>Facebook Link</label>
                            <input placeholder='http://facebook...' value={fb_link} onChange={e => setFbLink(e.target.value)} />
                        </div>}
                    </div>
                    <button style={{ width: "100%", margin: '5% 0' }}>Create Brand</button>
                    {videoURL === '' && video_url !== '' && (
                        <div className='uploaded-video'>
                            <VideoPlayer source={video_url} />
                        </div>
                    )}
                    {videoURL !== '' &&
                        <div className='uploaded-video'>
                            <iframe
                                width="100%"
                                height="100%"
                                src={videoURL}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                    }
                </section>
                <section className='brand-checkboxes'>
                    <div className='brand-checkbox'>
                        <div className='checkboxes'>
                            <label>Brand Status</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='company_status'
                                    control={
                                        <Checkbox onChange={(event) => setBrandActiveStatus(event.target.checked)} checked={brand_active_status} />
                                    }
                                    label="Active"
                                />
                            </FormGroup>
                        </div>

                        <div className='checkboxes'>
                            <label>Warranty</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='company_status'
                                    control={
                                        <Checkbox onChange={(event) => setWarranty(event.target.checked)} checked={warranty} />
                                    }
                                    label="Available"
                                />
                            </FormGroup>
                        </div>

                        <div className='checkboxes'>
                            <label>Request Help</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='company_status'
                                    control={
                                        <Checkbox onChange={(event) => setRequestHelp(event.target.checked)} checked={request_help} />
                                    }
                                    label="Available"
                                />
                            </FormGroup>
                        </div>

                        <div className='checkboxes'>
                            <label>Survey Feature</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='company_status'
                                    control={
                                        <Checkbox onChange={(event) => setSurveyFeature(event.target.checked)} checked={survey_feature} />
                                    }
                                    label="Available"
                                />
                            </FormGroup>
                        </div>

                        <div className='checkboxes'>
                            <label>Promo Code</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='company_status'
                                    control={
                                        <Checkbox onChange={(event) => setPromoCode(event.target.checked)} checked={promo_code} />
                                    }
                                    label="Available"
                                />
                            </FormGroup>
                        </div>

                        <div className='checkboxes'>
                            <label>Referrals</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='company_status'
                                    control={
                                        <Checkbox onChange={(event) => setReferrals(event.target.checked)} checked={referrals} />
                                    }
                                    label="Available"
                                />
                            </FormGroup>
                        </div>

                        <div className='checkboxes'>
                            <label>Email Support</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='company_status'
                                    control={
                                        <Checkbox onChange={(event) => setEmailSupport(event.target.checked)} checked={email_support} />
                                    }
                                    label="Available"
                                />
                            </FormGroup>
                        </div>

                        <div className='checkboxes'>
                            <label>Call Support</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='company_status'
                                    control={
                                        <Checkbox onChange={(event) => setCallSupport(event.target.checked)} checked={call_support} />
                                    }
                                    label="Available"
                                />
                            </FormGroup>
                        </div>

                        <div className='checkboxes'>
                            <label>Whatsapp Support</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='company_status'
                                    control={
                                        <Checkbox onChange={(event) => setwhatsappSupport(event.target.checked)} checked={whatsapp_support} />
                                    }
                                    label="Available"
                                />
                            </FormGroup>
                        </div>

                        <div className='checkboxes'>
                            <label>Instagram</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='company_status'
                                    control={
                                        <Checkbox onChange={(event) => setInstagram(event.target.checked)} checked={instagram} />
                                    }
                                    label="Available"
                                />
                            </FormGroup>
                        </div>

                        <div className='checkboxes'>
                            <label>Facebook</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='company_status'
                                    control={
                                        <Checkbox onChange={(event) => setFacebook(event.target.checked)} checked={facebook} />
                                    }
                                    label="Available"
                                />
                            </FormGroup>
                        </div>

                        <div style={{ width: '100%' }}>
                            {carousel_headings.length !== 0 &&
                                <div>
                                    <label>Carousel Headings</label>
                                    <div className='chips'>
                                        {carousel_headings?.map((item, index) => {
                                            return (
                                                <p
                                                    key={index}
                                                    onClick={() => handleRemove(carousel_headings, index, setCarouselHeading)}
                                                    className='sub-category-chips selected-chip'
                                                >{item} <CloseIcon /></p>
                                            );
                                        })}
                                    </div>
                                </div>
                            }
                            {carousel_text.length !== 0 &&
                                <div style={{ margin: "15px 0" }}>
                                    <label>Carousel Text</label>
                                    <div className='chips'>
                                        {carousel_text?.map((item, index) => {
                                            return (
                                                <p
                                                    key={index}
                                                    onClick={() => handleRemove(carousel_text, index, setCarouselText)}
                                                    className='sub-category-chips selected-chip'
                                                >{item} <CloseIcon /></p>
                                            );
                                        })}
                                    </div>
                                </div>
                            }
                        </div>

                        <div className='upload-btns-group'>
                            <div className="upload-btn-wrapper">
                                <FileUploadOutlinedIcon
                                    color="primary"
                                    sx={{ fontSize: 30 }}
                                />
                                <span>Images</span>
                                <input type="file" onChange={handleUploadImage} multiple accept='image/*' />
                            </div>
                            <div className="upload-btn-wrapper" >
                                <FileUploadOutlinedIcon
                                    color="primary"
                                    sx={{ fontSize: 30 }}
                                />
                                <span>Video</span>
                                <input type="file" onChange={handleUploadVideo} accept='video/*' disabled={videoURL !== ''} />
                            </div>
                        </div>
                    </div>
                    <div className={'imageList'}>
                        {uploadedImageList.length !== 0 && uploadedImageList?.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                className={'imageList__img'}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </form>
    );
};

export default CreateBrand;