import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { token } from "../../../utils/actions";
import { verifyDSN } from "../../../utils/userActions";
import Splash from "../../../components/splash";

// MUI ICONS
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import HowToRegIcon from "@mui/icons-material/HowToReg";
// CSS
// import "./productDisplayPage.css";
import "./productPageStyle.css";
import { merge } from "../../../utils/merging";
import { CONNECTS } from "../../../utils/data";
import ProductImageSwiper from "../../../components/Swiper";

const ProductDisplayPage = () => {
  const navigate = useNavigate();
  const { type, dsN } = useParams();
  let userAuthToken = localStorage.getItem("_venls");
  // States
  const [productDetail, setProductDetail] = useState({ data: [], error: "" });

  useEffect(() => {
    if (type === "ds1" || type === "ds2") {
      if (!userAuthToken && type === "ds2") {
        navigate("/user/login");
      }
      const fetchProductDetail = () => {
        verifyDSN(token, `/api/product-details/${dsN}`)
          .then((res) => setProductDetail({ data: res.data.data, error: "" }))
          .catch((error) => {
            setProductDetail({ data: [], error });
          });
      };
      fetchProductDetail();
    } else navigate("/", { replace: true });
  }, []);

  let productData = productDetail.data;
  let hasOwnedBy = productData?.length !== 0 && productData?.owner.msg; // Hidden if not owned
  let PRODUCT_IMAGES = productData?.productDetail?.image_list;
  let PRODUCT_HEADINGS = productData?.productDetail?.carousel_headings;
  let PRODUCT_TEXTS = productData?.productDetail?.carousel_text;
  let FEATURES_LIST = productData?.productDetail?.feature;
  let error = productDetail.error;

  const content = useMemo(
    () => merge(PRODUCT_IMAGES, PRODUCT_HEADINGS, PRODUCT_TEXTS),
    [PRODUCT_IMAGES, PRODUCT_HEADINGS, PRODUCT_TEXTS]
  );

  const handleErrorReporting = () => {
    let reportAttributes = {
      brand_name: productData?.brand?.brand,
      product_name: productData?.productDetail.product_name,
      product_image: PRODUCT_IMAGES[0] || "",
    };
    navigate("report-error", { state: reportAttributes });
  };

  const handleRegisterWarranty = () => {
    navigate("register-warranty", { state: `${type}/${dsN}` });
  };

  const servicesToShow = () => {
    let brand = productData?.brand;
    if (brand === undefined) return;
    let services = [];

    for (let index = 0; index < CONNECTS.length; index++) {
      const service = brand[CONNECTS[index].enableKey];

      if (service) {
        let info = brand[CONNECTS[index].info];
        let name = CONNECTS[index].Service;
        let Icon = CONNECTS[index].Icon;

        services.push({ name, info, Icon });
      }
    }

    return services;
  };

  let services = useMemo(() => servicesToShow(), [productData]);

  if (error) return <p>{error}</p>;

  if (productData?.length === 0) return <Splash token={true} />;
  return (
    <main className="-pdp-main">
      <div className="-product-display-container">
        {hasOwnedBy && (
          <section className="-label-owned-msg">
            <HowToRegIcon />
            <h1>{hasOwnedBy}</h1>
          </section>
        )}

        <section className="-pdp-section1">
          <article className="-brand-details">
            <aside>
              <h2>{productData?.brand?.brand}</h2>
              <h6>{productData?.productDetail.product_name}</h6>
              <button onClick={handleRegisterWarranty}>
                Register Warranty
              </button>
            </aside>
            <img src={PRODUCT_IMAGES[0].url || ""} alt={"brand"} />
          </article>
        </section>

        <section className="-pdp-section2">
          {services?.map(({ name, Icon, info }, index) => (
            <article key={index} className="-services-info">
              <aside className="-icon-container">
                <Icon />
              </aside>
              <aside>
                <h6>{name}</h6>
                <h5>Connect Now</h5>
              </aside>
            </article>
          ))}
        </section>

        <section className="-pdp-section3">
          <article>
            <h6>Description</h6>
            <p>{productData.productDetail.product_description} </p>
          </article>
        </section>

        <section className="-pdp-section4">
          {Object.entries(FEATURES_LIST).map(([keys, values]) => (
            <article key={keys + values} className="chips">
              <RadioButtonCheckedIcon />
              <aside>
                <h6>{values}</h6>
                <h6>{keys}</h6>
              </aside>
            </article>
          ))}
        </section>

        <button onClick={handleErrorReporting} className="-reporterror-btn">
          Report Error
        </button>

        <div className="-pdp-section5">
          <ProductImageSwiper slides={content} />
        </div>
      </div>

      {/* <section className="product_content_container">
        <article className="brand_details">
          <aside>
            <h1>{productData?.brand?.brand}</h1>
            <h6>{productData?.productDetail.product_name}</h6>
            <button onClick={handleRegisterWarranty}>Register Warranty</button>
          </aside>
          <img src={PRODUCT_IMAGES[0].url || ""} alt={"brand"} />
        </article>

        <article className="brand_connects">
          {CONNECTS.map(({ Service, Icon, enableKey }, index) => (
            <>
              {productData?.brand[enableKey] === true && (
                <aside className="connect_info" key={index}>
                  <Icon />
                  <p>
                    {Service} <br /> <span>Connect Now</span>
                  </p>
                </aside>
              )}
            </>
          ))}
        </article>

        <article>
          <h6>Description</h6>
          <p>{productData.productDetail.product_description} </p>
        </article>

        <button className="report-error-btn" onClick={handleErrorReporting}>
          Report Error
        </button>
        <ProductImageSwiper slides={content} />
      </section>
      {hasOwnedBy && (
        <section className="label_message_container">
          <img
            src={require("../../../assets/images/label.png")}
            alt={"label"}
          />
          <p>{hasOwnedBy}</p>
        </section>
      )} */}
    </main>
  );
};

export default ProductDisplayPage;
