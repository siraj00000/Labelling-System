import { useState } from "react";
import "./swiper.css";
const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
};

const ProductImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
        backgroundImage: `url(${slides[currentIndex].img.url})`,
    };

    return (
        <div className={"sliderStyles"}>
            <div>
                <div onClick={goToPrevious} className={"leftArrowStyles"}>
                    ❰
                </div>
                <div onClick={goToNext} className={"rightArrowStyles"}>
                    ❱
                </div>
            </div>
            <div style={slideStylesWidthBackground} className={"slideStyles"}></div>
            <div className="dotsContainerStyles">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        <span className={slideIndex === currentIndex ? "dotActive" : "dotInactive"}></span>
                    </div>
                ))}
            </div>
            <div>
                <h4 className="-product-heading">{slides[currentIndex]?.heading}</h4>
                <h5 className="-product-text">{slides[currentIndex]?.text}</h5>
            </div>
        </div>
    );
};

export default ProductImageSlider;