import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";

const ourServicesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const LandingPageOnePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="md:h-[1808px] h-[3556px] md:px-5 relative w-full">
          <div className="absolute h-[1808px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[1808px] m-auto object-cover w-full"
              src="images/img_bg29.png"
              alt="bgTwentyNine"
            />
            <div className="absolute bottom-[24%] flex flex-col gap-[30px] inset-x-[0] items-start justify-start mx-auto p-12 md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[72px] w-auto sm:w-full">
                <Text
                  className="text-blue_gray-900 text-sm uppercase w-auto"
                  size="txtMontserratRomanRegular14"
                >
                  Benefits
                </Text>
                <Text
                  className="leading-[145.00%] text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                  size="txtMontserratRomanSemiBold36"
                >
                  <span className="text-gray-900 font-montserrat text-left font-semibold">
                    Your{" "}
                  </span>
                  <span className="text-blue-400 font-montserrat text-left font-semibold">
                    Effective
                  </span>
                  <span className="text-gray-900 font-montserrat text-left font-semibold">
                    <>
                      , <br />
                      Gentle Beauty Solution
                    </>
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mb-[41px] md:ml-[0] ml-[72px] w-auto md:w-full">
                <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-blue-400 border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start p-11 md:px-10 sm:px-5 rounded-[12px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start mb-[58px] w-[500px] sm:w-full">
                      <Text
                        className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                        size="txtMontserratRomanSemiBold30"
                      >
                        Wrinkle reduction
                      </Text>
                      <Text
                        className="leading-[145.00%] max-w-[500px] md:max-w-full text-white-A700 text-xl"
                        size="txtMontserratRomanRegular20"
                      >
                        Cryotherapy relaxes the muscles of the face, reducing
                        wrinkles without the need for injections.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100_01 border border-blue_gray-100 border-solid flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 rounded-[12px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[500px] sm:w-full">
                      <Text
                        className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01 w-auto"
                        size="txtMontserratRomanSemiBold30Gray90001"
                      >
                        Antioxidant effect
                      </Text>
                      <Text
                        className="leading-[145.00%] max-w-[500px] md:max-w-full text-gray-700 text-xl"
                        size="txtMontserratRomanRegular20Gray700"
                      >
                        Cryotherapy positively affects blood flow to promote
                        delivery of antioxidants and other healing materials to
                        the skin to reduce and prevent aging.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100_01 border border-blue_gray-100 border-solid flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 rounded-[12px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[500px] sm:w-full">
                      <Text
                        className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01 w-auto"
                        size="txtMontserratRomanSemiBold30Gray90001"
                      >
                        Anti-Inflammatory
                      </Text>
                      <Text
                        className="leading-[145.00%] max-w-[500px] md:max-w-full text-gray-700 text-xl"
                        size="txtMontserratRomanRegular20Gray700"
                      >
                        <span className="text-gray-700 font-montserrat text-left font-normal">
                          Cryotherapy reduces inflammation through cooling the
                          skin and clearing toxins from your blood, additionally
                          decreasing itching and feeling hot.{" "}
                        </span>
                        <span className="text-blue_gray-800 font-montserrat text-left font-medium">
                          Read more...
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-blue-400 border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start p-11 md:px-10 sm:px-5 rounded-[12px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[500px] sm:w-full">
                      <Text
                        className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                        size="txtMontserratRomanSemiBold30"
                      >
                        Fat reduction
                      </Text>
                      <Text
                        className="leading-[145.00%] max-w-[500px] md:max-w-full text-white-A700 text-xl"
                        size="txtMontserratRomanRegular20"
                      >
                        <span className="text-white-A700 font-montserrat text-left font-normal">
                          Cryotherapy is the perfect tool for body sculpting and
                          fat reduction by safely targeting fat cells. Through
                          the use of cold treatment, cryolipolysis{" "}
                        </span>
                        <span className="text-gray-100 font-montserrat text-left font-medium">
                          Read more...
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[2%] w-full">
              <div
                className="bg-cover bg-no-repeat md:h-[470px] h-[497px] relative w-full"
                style={{ backgroundImage: "url('images/img_frame3.svg')" }}
              >
                <div className="absolute bottom-[0] h-[470px] right-[0] w-[68%] md:w-full">
                  <Img
                    className="h-[470px] m-auto object-cover w-full"
                    src="images/img_noisetexture.png"
                    alt="noisetexture"
                  />
                  <div className="absolute bottom-[18%] flex flex-col gap-3 items-start justify-start right-[12%] w-auto">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto"
                      size="txtMontserratRomanSemiBold48"
                    >
                      Lorem ipsum
                    </Text>
                    <Text
                      className="leading-[145.00%] max-w-[563px] md:max-w-full text-gray-100 text-xl"
                      size="txtMontserratRomanRegular20Gray100"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[449px] left-[0] object-cover top-[0] w-[45%]"
                  src="images/img_intersect.png"
                  alt="intersect"
                />
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-100 md:h-[722px] h-[892px] inset-x-[0] mx-auto p-[7px] top-[0] w-full">
            <Img
              className="absolute h-[93px] left-[8%] object-cover top-[4%] w-[11%]"
              src="images/img_whatsappimage20231003.png"
              alt="whatsappimageTwenty"
            />
            <div className="absolute bottom-[1%] md:h-[722px] h-[762px] inset-x-[0] mx-auto w-[84%] md:w-full">
              <Img
                className="absolute h-[722px] object-cover right-[0] rounded-tl-[250px] rounded-tr-[250px] top-[0] w-[41%]"
                src="images/img_rectangle2.png"
                alt="rectangleTwo"
              />
              <Img
                className="absolute bottom-[0] h-[365px] right-[22%] rounded-[50%] w-[365px]"
                src="images/img_ellipse1.png"
                alt="ellipseOne"
              />
              <Text
                className="absolute leading-[145.00%] left-[0] md:text-5xl text-7xl text-gray-900 top-[15%] w-[59%] sm:w-full"
                size="txtMontserratRomanSemiBold72"
              >
                <span className="text-gray-900 font-montserrat text-left font-semibold">
                  Unlock a{" "}
                </span>
                <span className="text-blue-400 font-montserrat text-left font-bold">
                  Healthier
                </span>
                <span className="text-gray-900 font-montserrat text-left font-semibold">
                  {" "}
                  & Happier You
                </span>
              </Text>
              <div className="absolute bottom-[24%] flex flex-col gap-10 items-start justify-start left-[0] w-[38%]">
                <Text
                  className="leading-[145.00%] text-gray-700 text-xl w-full"
                  size="txtMontserratRomanRegular20Gray700"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                </Text>
                <Button
                  className="cursor-pointer font-semibold h-[60px] leading-[normal] text-base text-center w-[294px]"
                  shape="round"
                  color="blue_gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-[52px] items-center justify-center right-[8%] top-[7%] w-auto">
              <Text
                className="text-gray-900_01 text-lg w-auto"
                size="txtMontserratRomanSemiBold18"
              >
                Home
              </Text>
              <SelectBox
                className="text-gray-500 text-left text-lg w-[29%] sm:w-full"
                placeholderClassName="text-gray-500"
                indicator={
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="frameTwentyTwo"
                options={ourServicesOptionsList}
                isSearchable={false}
                placeholder="Our Services"
                size="xs"
              />
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtMontserratRomanRegular18"
                >
                  About Us
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtMontserratRomanRegular18"
                >
                  FAQ
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col gap-[35px] inset-x-[0] justify-center mx-auto sm:pr-5 pr-9 py-9 w-full">
            <div className="h-[619px] mt-10 relative w-full">
            <div className="flex mt-auto mx-auto w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[553px] items-center justify-end my-auto pt-[53px] w-[49%]"
                  style={{ backgroundImage: "url('images/img_frame14.png')" }}
                >
                  <Img
                    className="h-[499px] md:h-auto object-cover w-full"
                    src="images/img_rectangle.png"
                    alt="rectangle"
                  />
                </div>
                <Text
                  className="ml-[-646px] mr-auto my-auto md:text-5xl text-[120px] text-blue_gray-900_63 z-[1]"
                  size="txtMontserratRomanBold120"
                >
                  Compression Therapy
                </Text>
              
              <div className="flex flex-col gap-10 items-start justify-start mb-[undefinedpx] ml-auto mr-[83px] mt-auto w-[41%] z-[1]">
                <div className="flex flex-col items-start justify-start mb-[-58px] ml-auto mr-[129px] w-auto z-[1]">
                  <Text
                    className="text-blue_gray-900 text-sm uppercase w-auto"
                    size="txtMontserratRomanRegular14"
                  >
                    SeRVICES
                  </Text>
                  <Text
                    className="leading-[145.00%] max-w-[519px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
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
                <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
                    size="txtMontserratRomanSemiBold48Gray900"
                  >
                    Compression Therapy
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[565px] md:max-w-full text-blue_gray-900_02 text-xl"
                    size="txtMontserratRomanRegular20Bluegray90002"
                  >
                    Compression therapy involves applying compression to tight,
                    stiff, and sore muscles. Typically, compression therapy is
                    usually for the limbs, but some methods help you compress
                    the entire body. When you apply compression to a specific
                    body part, it causes an increase in circulation to the
                    affected area. As a result, blood flow improves to the
                    affected muscle group, flooding the tissue with oxygenated,
                    nutrient-rich blood that helps repair the damage to the
                    tissues.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold h-[60px] leading-[normal] text-base text-center w-[294px]"
                  shape="round"
                  color="blue_gray_900"
                  size="sm"
                  variant="outline"
                >
                  Learn More
                </Button>
              </div>
            </div>  
              
            </div>
            <div className="h-[547px] sm:h-[552px] md:h-[760px] mb-[25px] ml-2 md:ml-[0] mr-[49px] relative w-[96%] md:w-full">
              <div className="absolute sm:h-[527px] h-[547px] md:h-[735px] inset-[0] justify-center m-auto w-[97%] md:w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex md:flex-col flex-row md:gap-[49px] items-start justify-between w-full">
                    <div className="flex flex-col gap-[29px] justify-start md:mt-0 mt-[45px]">
                      <div className="h-[393px] relative w-full">
                        <div className="flex flex-col gap-3 items-start justify-start mb-[-145.06px] ml-28 mt-auto w-auto z-[1]">
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
                            size="txtMontserratRomanSemiBold48Gray900"
                          >
                            Cryotherapy
                          </Text>
                          <Text
                            className="leading-[150.00%] max-w-[434px] md:max-w-full text-blue_gray-900_02 text-xl"
                            size="txtMontserratRomanRegular20Bluegray90002"
                          >
                            The cryotherapy machine uses pressurized CO2 gas to
                            target a local area of the body and cause “thermal
                            shock.” The sudden decrease in temperature rapidly
                            activates the body’s healing response to relax
                            muscles, promote flow of blood and nutrients, and
                            reduce pain. You’ll be amazed how quickly
                            cryotherapy treatment can reduce your pain and speed
                            your recovery!
                          </Text>
                        </div>
                        <Text
                          className="capitalize mt-auto mx-auto md:text-5xl text-9xl text-blue_gray-900_63"
                          size="txtMontserratRomanBold128"
                        >
                          Cryotherapy
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold h-[60px] leading-[normal] ml-28 md:ml-[0] text-base text-center w-[294px]"
                        shape="round"
                        color="blue_gray_900"
                        size="sm"
                        variant="outline"
                      >
                        Learn More
                      </Button>
                    </div>
                    <Img
                      className="h-[371px] md:h-auto object-cover rounded-[185px]"
                      src="images/img_rectangle5.png"
                      alt="rectangleFive"
                    />
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[357px] object-cover right-[15%] rounded-[177px] w-[28%]"
                  src="images/img_rectangle6.png"
                  alt="rectangleSix"
                />
              </div>
              <Input
                name="frameNine"
                placeholder="Done by Professionals"
                className="font-medium leading-[normal] p-0 placeholder:text-gray-900_02 text-left text-xl w-full"
                wrapClassName="flex mr-[375px] mt-[83px] right-[28%] top-[15%] w-1/4"
                prefix={
                  <Img
                    className="mr-6 right-[2%] absolute my-auto"
                    src="images/img_nounexercise2404318_1.svg"
                    alt="noun-exercise-2404318 1"
                  />
                }
                shape="round"
                color="gray_300"
                size="md"
                variant="fill"
              ></Input>
              <Input
                name="frameTwelve"
                placeholder="Revitalize Your Body"
                className="font-medium leading-[normal] p-0 placeholder:text-gray-900_02 text-left text-xl w-full"
                wrapClassName="bottom-[6%] flex mb-[33px] right-[0] w-1/4"
                prefix={
                  <Img
                    className="h-10 mr-6 right-[2%] absolute my-auto"
                    src="images/img_nouncryogenicchamber3312571_1.svg"
                    alt="noun-cryogenic-chamber-3312571 1"
                  />
                }
                shape="round"
                color="gray_300"
                size="md"
                variant="fill"
              ></Input>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col items-center justify-start p-[62px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-[30px] justify-start max-w-[1288px] mb-[15px] mx-auto w-full">
            <div className="flex flex-col items-start justify-start ml-11 md:ml-[0] w-auto sm:w-full">
              <Text
                className="text-blue_gray-900 text-sm uppercase w-auto"
                size="txtMontserratRomanRegular14"
              >
                TESTIMONIAS
              </Text>
              <Text
                className="leading-[145.00%] max-w-[519px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
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
              className="flex gap-6 h-5 items-start justify-start md:ml-[0] ml-[546px] w-[196px]"
              count={5}
              activeCss="inline-block cursor-pointer rounded-[50%] h-5 border-blue_gray-900 border border-solid bg-blue_gray-900 w-5"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-5 border-blue_gray-900 border border-solid w-5"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
        </div>
        <div className="bg-blue_gray-100_01 h-[373px] md:h-[413px] mt-10 md:px-5 relative w-full">
          <Img
            className="h-[373px] m-auto object-cover w-full"
            src="images/img_bg29_373x1440.png"
            alt="bgTwentyNine_One"
          />
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[45%]">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
              size="txtMontserratRomanBold52"
            >
              Subscribe for daily tips
            </Text>
            <Text
              className="mt-3 text-base text-green-50"
              size="txtMontserratRomanRegular16"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
            <div className="flex md:flex-col flex-row gap-[19px] items-start justify-start mt-10 w-auto md:w-full">
              <Input
                name="frameThirtyEight"
                placeholder="Type your email address..."
                className="md:h-auto p-0 placeholder:text-gray-500 sm:h-auto text-base text-left w-full"
                wrapClassName="rounded-[30px] w-[67%] md:w-full"
                type="email"
                color="blue_gray_50"
                size="sm"
                variant="fill"
              ></Input>
              <Button
                className="cursor-pointer font-semibold h-[60px] leading-[normal] text-base text-center w-[198px]"
                shape="round"
                color="yellow_800"
                size="sm"
                variant="fill"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-10 md:px-5 w-full" />
      </div>
    </>
  );
};

export default LandingPageOnePage;
