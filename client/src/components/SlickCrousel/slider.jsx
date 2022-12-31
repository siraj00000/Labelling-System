import { useState } from "react";
import Slider from "react-slick";
import "./slider.css";

// import icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const images = [
  "https://res.cloudinary.com/m-y-cloud-app/image/upload/v1661592799/label/l7awojyeu88gc9sf6yu0.png",
    require("../../assets/Product/slider_image1.jpg"),
    require("../../assets/Product/slider_image2.jpg"),
    require("../../assets/Product/slider_image3.jpg"),
    require("../../assets/Product/slider_image4.jpg"),
    // require("../../assets/Product/slider_image5.jpg"),
];
const carouselHeader = [
  "Carousel Header",
  "Carousel Header",
  "Carousel Header",
  "Carousel Header",
  "Carousel Header",
];

const carouselText = [
  "Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text",
  "Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text",
  "Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text",
  "Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text",
  "Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text",
];

const CONTEXT = [
  {
    img: require("../../assets/Product/slider_image1.jpg"),
    heading: "Carousel Header",
    text: "Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text Carousel Text",
  },
];

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}
function EmptyArrow({ onClick }) {
  return <div></div>;
}

const SliderComp = ({ content }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   // autoplaySpeed: 1000,
  //   beforeChange: (current, next) => setSlideIndex(next),
  //   centerMode: true,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   SliderendDots: (dots) => (
  //     <div>
  //       <ul style={{ margin: "0px" }}> {dots} </ul>
  //     </div>
  //   ),
  //   customPaging: (current, next) => (
  //     <div className={current === slideIndex ? "dot dot-active" : "dot"}></div>
  //   ),
  //   responsive: [
  //     {
  //       breakpoint: 993,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: true,
  //         nextArrow: <EmptyArrow />,
  //         prevArrow: <EmptyArrow />,
  //       },
  //     },
  //   ],
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  let _CONTENT = content[0][0];
  console.log(["a", "b", "c"].map((i) => i));
  return (
    <div className="container">
      <div className="slider">
        <Slider {...settings}>
          {images.map((img, index) => (
            <section key={index}>
              <div
                className={
                  index === slideIndex ? "slide slide-active" : "slide"
                }
              >
                <img src={img} alt="slider" />
              </div>
            </section>
          ))}

          {/* {content[0][0].map((item, index) => (
            <section key={index}>
              <div
                className={
                  index === slideIndex ? "slide slide-active" : "slide"
                }
              >
                <img src={item} alt="slider" />
              </div>
              <h2
                className={
                  index === slideIndex ? " slide-active" : "slide hidden"
                }
              >
                {content[0][1][index]}
              </h2>
              <p
                className={
                  index === slideIndex ? " slide-active" : "slide hidden"
                }
              >
                {content[0][2][index]}
              </p>
            </section>
          ))} */}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComp;
