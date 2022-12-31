import React, { useState, useRef } from "react";
import ReactImageMagnify from "react-image-magnify";

const ImageSwiper = ({ listOfImage }) => {
  const [element, setElement] = useState(listOfImage[0]?.url);
  const hoverHandler = (item, index) => {
    setElement(item);
    refs.current[index].classList.add("active-product");
    for (let i = 0; i < listOfImage.length; i++) {
      if (index !== i) refs.current[i].classList.remove("active-product");
    }
  };
  const refs = useRef();
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  return (
    <div className="image-swipper">
      <div className="image-left">
        <div className="image-list">
          {listOfImage.map((item, index) => {
            return (
              <div
                className={
                  index === 0
                    ? "element-wrapper active-product"
                    : "element-wrapper"
                }
                ref={addRefs}
                key={index}
                onMouseOver={() => hoverHandler(item.url, index)}
              >
                <img src={item?.url} alt="element-wrapper" />
              </div>
            );
          })}
        </div>
        <div className="image-list-element">
          <ReactImageMagnify
            {...{
              enlargedImagePosition: "over",
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                src: element,
                isFluidWidth: true,
              },
              largeImage: {
                src: element,
                width: 800,
                height: 800,
              },
              enlargedImageContainerDimensions: {
                width: "100%",
                height: "100%",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default ImageSwiper;
