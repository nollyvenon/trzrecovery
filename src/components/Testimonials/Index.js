import React, { useRef, useState } from 'react';
import {
    Img,
    PagerIndicator,
    Slider,
    Text,
  } from "components";

function Index(){
    
  const sliderRef = useRef(null);
  const [sliderState, setsliderState] = useState(0);
  return (
     <div className="bg-gray-100 flex flex-col gap-[30px] h-[842px] pt-[62px] px-[120px] justify-start max-w-[100%] pb-[77px] mx-auto w-full">
            <div className="flex flex-col items-start justify-start ml-11 md:ml-[0] w-auto sm:w-full">
              <Text
                className="text-blue_gray-900 text-sm uppercase w-auto mb-2"
                size="txtMontserratRomanRegular14"
              >
                TESTIMONIALS
              </Text>
              <Text
                className="max-w-[519px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                size="txtMontserratRomanSemiBold36"
              >
                <span className="text-gray-900 font-montserrat text-left font-semibold">
                  We Offer Services to{" "}
                </span>
                <span className="text-blue-400 font-montserrat text-left font-semibold">
                  Elevate
                </span>
                <span className="text-gray-900 font-montserrat text-left font-semibold">
                  {" "}
                  Your Quality of Life.
                </span>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
              <Img
                className="h-6 w-6"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <div className="md:h-[495px] h-[499px] relative w-[94%] md:w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    activeIndex={sliderState}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 1 },
                      1050: { items: 2 },
                    }}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="flex gap-[370px] w-full"
                    items={[...Array(10)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="bg-blue-400 flex flex-col gap-3.5 items-center justify-center mx-2.5 p-[21px] sm:px-5 rounded-[16px]">
                          <div className="flex flex-col gap-2 items-center justify-start mt-[17px] w-auto">
                            <Img
                              className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                              src="images/img_ellipse7.png"
                              alt="ellipseSeven"
                            />
                            <Text
                              className="text-center text-white-A700 text-xl w-auto"
                              size="txtMontserratRomanSemiBold20"
                            >
                              @Mike
                            </Text>
                          </div>
                          <Text
                            className="leading-[145.00%] mb-[47px] text-center text-gray-100 text-xl w-full"
                            size="txtMontserratRomanRegular20Gray100"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                          </Text>
                        </div>
                      </React.Fragment>
                    ))}
                    renderDotsItem={({ isActive }) => {
                      if (isActive) {
                        return (
                          <div className="inline-block cursor-pointer rounded-[50%] h-5 border-blue_gray-900 border border-solid bg-blue_gray-900 w-5" />
                        );
                      }
                      return (
                        <div
                          className="inline-block cursor-pointer rounded-[50%] h-5 border-blue_gray-900 border border-solid w-5"
                          role="button"
                          tabIndex={0}
                        />
                      );
                    }}
                  />
                </div>
                <div className="absolute bg-blue_gray-900_03 flex flex-col gap-3.5 h-full inset-[0] items-center justify-center m-auto p-[38px] sm:px-5 rounded-[16px] w-[44%]">
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_ellipse7_1.png"
                      alt="ellipseSeven"
                    />
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtMontserratRomanSemiBold20"
                    >
                      @Jane
                    </Text>
                  </div>
                  <Text
                    className="leading-[145.00%] mb-[69px] text-center text-white-A700 text-xl w-[94%] sm:w-full"
                    size="txtMontserratRomanRegular20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                  </Text>
                </div>
              </div>
              <Img
                className="h-6 w-6"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
            <PagerIndicator
              className="flex gap-6 h-5 items-center justify-center m-auto w-[45%] md:w-full"
              count={5}
              activeCss="inline-block cursor-pointer rounded-[50%] h-5 border-blue_gray-900 border border-solid bg-blue_gray-900 w-5"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-5 border-blue_gray-900 border border-solid w-5"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
      </div> 
  )
}

export default Index
