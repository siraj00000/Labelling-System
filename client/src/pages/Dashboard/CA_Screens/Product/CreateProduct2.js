import React, { useState } from 'react';
import { removeStatus, token } from '../../../../utils/actions';
import { insertProductToDB } from '../../../../utils/actions/Manufacturer/maf_action';
import '../../../auth/auth.css';
import '../../SA_Screens/Brand/brand.css';
import '../../SA_Screens/Admin/admin.css';
import './product.css';
import { Alert, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CustomizeTitle from '../../../../mui_theme/title';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import VideoPlayer from '../../../../components/VideoPlayer';
import { AppButton } from '../../../../components/StyledComponent';
import Splash from '../../../../components/splash';

const CreateProduct2 = () => {
    let nav = useNavigate();
    const [isLoading, setLoading] = useState(false);
    // getting data from previous screen
    const { state: { data } } = useLocation();
    let isServiceFeatureEnable = data?.reqHelp;
    // states declaration
    const [heading, setHeading] = useState("");
    const [text, setText] = useState("");
    const [carousel_headings, setCarouselHeading] = useState([]);
    const [carousel_text, setCarouselText] = useState([]);
    const [product_description, setProductDescription] = useState('');
    const [survey_feature, setSurveyFeature] = useState(false);
    const [survey_link, setSurveyLink] = useState("");
    const [general_warranty_duration, setGeneralWarrantyDuration] = useState("");
    const [special_warranty_type, setSpecialWarrantyType] = useState("");
    const [special_warranty_duration, setSpecialWarrantyDuration] = useState("");
    const [free_brand_maintenance_duration, setMaintenanceDuration] = useState("");
    const [one_click_reorder_feature, setOneClickReorder] = useState(false);
    const [reorder_link, setReOrderLink] = useState("");
    const [features, setFeature] = useState([]);
    const [featuresList, setFeatureList] = useState([]);
    const [uploadedImageList, setUploadedImageList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState('');
    const [video_url, setVideo] = useState('');
    const [videoURL, setVideoURL] = useState('');
    const [__file, setFile] = useState([]);

    // States for status 
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const clearStates = () => {
        setHeading("");
        setText("");
        setCarouselHeading([]);
        setCarouselText([]);
        setProductDescription('');
        setSurveyFeature(false);
        setSurveyLink('');
        setGeneralWarrantyDuration('');
        setSpecialWarrantyType('');
        setSpecialWarrantyDuration('');
        setMaintenanceDuration('');
        setOneClickReorder(false);
        setReOrderLink("");
        setFeature([]);
        setFeatureList([]);
        setUploadedImageList([]);
        setSelectedVideo('');
        setVideo('');
        setVideoURL('');
        setFile([]);
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
        let files = event.target.files;
        if (Array.from(files).length > 7) {
            swal({
                title: `${files.length} images`,
                text: `Cannot upload images more then 7`,
                icon: `info`,
                buttons: `Try Again`
            });
            return false;
        }

        let images = [];
        let imageDetail = [];
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            images.push(URL.createObjectURL(file));
            imageDetail.push(file);
        }
        setFile(imageDetail);
        setUploadedImageList(images);
    };

    const handleUploadVideo = event => {
        let file = event.target.files[0];
        if (file.size > 50000000) {
            swal({
                title: `${Math.floor((file.size) / 1000000)}MB Size`,
                text: `Cannot upload video upto 50mb`,
                icon: `info`,
                buttons: `Try Again`
            });
            return false;
        }
        if (videoURL !== '') return false;
        let video = URL.createObjectURL(file);
        setVideo(video);
        setSelectedVideo(file);
    };

    const removeImageHandler = index => {
        const list = [...uploadedImageList];
        list.splice(index, 1);
        setUploadedImageList(list);
    };

    const deleteVideoHandler = () => {
        setVideo("");
        setVideoURL("");
        setSelectedVideo("");
    };

    const setfeatureObj = () => {
        let featuresObj = {};
        let featureArr = [...featuresList];
        let subFeatureArr = data?.sub_category_feature;

        for (let index = 0; index < subFeatureArr.length; index++) {
            const key = subFeatureArr[index];
            featuresObj[key] = featureArr[index] || null;
        }
        return featuresObj;
    };

    const insertProduct = (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            let emptyVideo = videoURL === '' && selectedVideo === '';
            let _feature = setfeatureObj();
            let reqBody = {
                product_name: data?.productName,
                company_email: data?.company_email,
                variant_type: data?.variantType,
                variants: data?.variantList,
                brand: data?.brand._id,
                category: data?.categoryId,
                sub_category: data?.subCategoryId,
                carousel_headings: carousel_headings || data.brand?.carousel_headings,
                carousel_text: carousel_text || data.brand?.carousel_text,
                product_description: product_description || data.brand?.product_description,
                general_warranty_duration,
                special_warranty_type,
                special_warranty_duration,
                free_brand_maintenance_duration,
                one_click_reorder_feature,
                reorder_link,
                survey_feature: survey_feature || data.brand?.survey_feature,
                survey_link: survey_link || data.brand?.survey_link,
                feature: _feature,
                videoURL,
                emptyVideo,
                image_list: __file.length === 0 && data.brand?.image_list,
                video_url: !emptyVideo && data.brand?.video_url
            };
            const formData = new FormData();
            for (let index = 0; index < __file.length; index++) {
                formData.append("image", __file[index]);
            }
            formData.append("video", selectedVideo);
            formData.append("reqBody", JSON.stringify(reqBody));

            let URL = `/api/insert-product`;
            insertProductToDB(token, URL, formData)
                .then(res => {
                    setSuccess(res?.data?.msg);
                    setLoading(false);
                    clearStates();
                    removeStatus(setSuccess);
                })
                .catch(error => {
                    setLoading(false);
                    setError(error);
                    removeStatus(setError);
                });

        } catch (error) {
            setLoading(false);
            setError(error.message);
            removeStatus(setError);
        }
    };

    if (isLoading) {
        return <Splash loading={isLoading} />;
    }
    return (
        <form className='form-sec width-100per' onSubmit={insertProduct}>
            <span className='direction-row'>
                <ArrowBackIcon fontSize='medium' onClick={() => nav(-1)} /> Back
            </span>
            <CustomizeTitle text={'Create Label'} />
            {error !== '' && <Alert severity="error">{error}</Alert>}
            {success !== '' && <Alert severity="success">{success}</Alert>}
            <div className='create-brand__flex'>
                <section className='brand_form'>
                    <div className='company_admin_form'>
                        {/* Carousel Heading */}
                        <div className='company_admin_form_field'>
                            <label>Carousel Headings</label>
                            <input placeholder='heading...' className='right-spacing' value={heading} onChange={e => setHeading(e.target.value)} />
                            <AddIcon className='addlist__icon'
                                onClick={() => handleAdd(carousel_headings, heading, setCarouselHeading, setHeading)}
                            />
                        </div>
                        {/* Carousel Text */}
                        <div className='company_admin_form_field'>
                            <label>Carousel Text</label>
                            <input placeholder='text...' className='right-spacing' value={text} onChange={e => setText(e.target.value)} />
                            <AddIcon className='addlist__icon'
                                onClick={() => handleAdd(carousel_text, text, setCarouselText, setText)}
                            />
                        </div>
                        <div className='company_admin_form_field'>
                            <label>Product Description</label>
                            <textarea placeholder='description...' value={product_description} onChange={e => setProductDescription(e.target.value)} />
                        </div>

                        <div className='company_admin_form_field'>
                            <label>Video Link</label>
                            <input placeholder='video link...' value={videoURL} onChange={e => setVideoURL(e.target.value)} />
                        </div>
                        {/* This features enable when request help is enable in brand  */}
                        <>
                            {isServiceFeatureEnable && <>
                                <div className='company_admin_form_field'>
                                    <label>General Warranty Duration</label>
                                    <input placeholder='12month, 24months...' value={general_warranty_duration} onChange={e => setGeneralWarrantyDuration(e.target.value)} />
                                </div>
                                <div className='company_admin_form_field'>
                                    <label>Special Warranty Type</label>
                                    <input placeholder='Compressor, Rotor...' value={special_warranty_type} onChange={e => setSpecialWarrantyType(e.target.value)} />
                                </div>
                                <div className='company_admin_form_field'>
                                    <label>Special Warranty Duration</label>
                                    <input placeholder='60month, 120months...' value={special_warranty_duration} onChange={e => setSpecialWarrantyDuration(e.target.value)} />
                                </div>
                                <div className='company_admin_form_field'>
                                    <label>Free Brand Maintenance Duration</label>
                                    <input placeholder='0months, 12months...' value={free_brand_maintenance_duration} onChange={e => setMaintenanceDuration(e.target.value)} />
                                </div>
                            </>}
                        </>
                        {one_click_reorder_feature &&
                            <div className='company_admin_form_field'>
                                <label>Reorder Link</label>
                                <input placeholder='Reorder link...' value={reorder_link} onChange={e => setReOrderLink(e.target.value)} />
                            </div>
                        }
                        {survey_feature &&
                            <div className='company_admin_form_field'>
                                <label>Survey Link</label>
                                <input placeholder='Survey link...' value={survey_link} onChange={e => setSurveyLink(e.target.value)} />
                            </div>
                        }
                        {/* Add Features */}
                        <div className='company_admin_form_field'>
                            <label>Features</label>
                            <input placeholder='features...' className='right-spacing feature' value={features} onChange={e => setFeature(e.target.value)} />
                            <AddIcon className='addlist__icon'
                                onClick={() => {
                                    if (data.sub_category_feature.length === featuresList.length) return false;
                                    handleAdd(featuresList, features, setFeatureList, setFeature);
                                }}
                            />
                            <div className='feature_list'>
                                {data?.sub_category_feature?.map((item, index) => {
                                    return (
                                        <div key={index} className='feature_list_item'>
                                            <h6 >{item}</h6>
                                            <h6 >{featuresList.length !== 0 && featuresList[index]}</h6>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>


                    {/* ============ UPLOADs ============ */}
                    {/* Uploaded Content */}
                    <div style={{ width: "40%", marginTop: '2%' }}>
                        <div className='upload-btns-group'>
                            <div>
                                <div className="upload-btn-wrapper">
                                    <FileUploadOutlinedIcon
                                        color="primary"
                                        sx={{ fontSize: 30 }}
                                    />
                                    <span>Images</span>
                                    <input type="file" onChange={handleUploadImage} multiple accept='image/*' />
                                </div>
                                <h6 className='subscript'>Max 7 Images Limit</h6>
                            </div>
                            <div>
                                <div className="upload-btn-wrapper" >
                                    <FileUploadOutlinedIcon
                                        color="primary"
                                        sx={{ fontSize: 30 }}
                                    />
                                    <span>Video</span>
                                    <input type="file" onChange={handleUploadVideo} accept='video/*' disabled={videoURL !== ''} />
                                </div>
                                <h6 className='subscript'>Max 50MB video Limit</h6>
                            </div>
                        </div>
                    </div>

                    {/* ================== BUTTONs & VIDEO PLAYER  =============== */}
                    {/* Submit Button */}
                    <button style={{ width: "100%", marginBottom: '5%' }}>Create Brand</button>
                    {/* Submit Button */}

                    {videoURL === '' && video_url !== '' && (
                        <div className='uploaded-video'>
                            <VideoPlayer source={video_url} />
                            <AppButton
                                Icon={CloseIcon}
                                Text={"Delete Video"}
                                Method={deleteVideoHandler}
                            />
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
                            <AppButton
                                Icon={CloseIcon}
                                Text={"Delete Video"}
                                Method={deleteVideoHandler}
                            />
                        </div>
                    }
                </section>
                <section className='brand-checkboxes'>
                    <div className='brand-checkbox'>
                        <div className='checkboxes'>
                            <label>Survey Feature</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='survey feature'
                                    control={
                                        <Checkbox onChange={(event) => setSurveyFeature(event.target.checked)} checked={survey_feature} />
                                    }
                                    label="Active"
                                />
                            </FormGroup>
                        </div>
                        <div className='checkboxes'>
                            <label>One Click Reorder Link</label>
                            <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel
                                    name='one client reorder'
                                    control={
                                        <Checkbox onChange={(event) => setOneClickReorder(event.target.checked)} checked={one_click_reorder_feature} />
                                    }
                                    label="Active"
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
                            {featuresList?.length !== 0 &&
                                <div style={{ margin: "15px 0" }}>
                                    <label>Features List</label>
                                    <div className='chips'>
                                        {featuresList?.map((item, index) => {
                                            return (
                                                <p
                                                    key={index}
                                                    onClick={() => handleRemove(featuresList, index, setFeatureList)}
                                                    className='sub-category-chips selected-chip'
                                                >{item} <CloseIcon /></p>
                                            );
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    {/* ============ IMAGE LIST =========== */}
                    <div className={'imageList'}>
                        {uploadedImageList.length !== 0 && uploadedImageList?.map((item, index) => (
                            <div
                                key={index}
                                className='imageList__container'
                                onClick={() => removeImageHandler(index)}
                            >
                                <img
                                    src={item}
                                    className={'imageList__img'}
                                    alt={'imageList__img'}
                                />
                                <div>
                                    <CloseIcon color={"secondary"}
                                        sx={{
                                            fontSize: 15,
                                            width: 20,
                                            height: 20,
                                            borderRadius: 30,
                                            bgcolor: '#000'
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </form>
    );
};

export default CreateProduct2;