import React from "react";

import Header from "../Header";
import Map from "components/Map/Index";
import Subscribe from "components/Subscribe/Index";
import Testimonial from 'components/Testimonial'
import Footer1 from "components/Footer1";
import { Button, Img, Input, Text } from "components";
import { NavLink, Link} from "react-router-dom";

const LandingPagePage = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const handleClick = () => {
    window.location.replace('/contact');
  };

  return (
    <>
      <Header theme="dark"/>

      <div className="bg-gray-100 flex justify-between items-center mt-[140px] overflow-hidden w-full md:flex-col md:h-auto md:pb-[50px]">
        <div className="w-[50%] pl-[120px] md:pl-[30px] md:w-full md:px-[30px] " >
          <Text
            className=" leading-[70px] left-[120px] md:text-4xl text-7xl text-gray-900 top-[40px] sm:w-[80%] md:left-9 sm:top-[140px] md:top-[40px] sm:text-2xl z-0 "
            size="txtMontserratRomanSemiBold72"
          >
            <span className="text-gray-900 font-montserrat text-left font-semibold  ">
              Unlock a{" "}
            </span>
            <span className="text-blue-400 font-montserrat text-left font-bold ">
              Healthier
            </span>
            <br />
            <span className="text-gray-900 font-montserrat text-left font-semibold ">
              {" "}
              & Happier You
            </span>
          </Text>

          <Text
            className="w-[65%] mt-[100px] text-gray-900 text-left text-xl font-light md:w-[90%] md:mt-[280px] "
            size=""
          >
            TRZ was brought into existence to offer a revolutionary technology that not only athletes could benefit from, but also the everyday person. Rather they are young, or of age we have provided excellent service to professional athletes, sports teams, celebrities, families, & much more.
          </Text>

          <Button
            className="cursor-pointer font-semibold py-[20px] mt-[50px] leading-[normal] text-base text-center w-[294px] sm:mt-[20px] sm:py-[15px] ml-5"
            shape="round"
            color="blue_gray_900_01"
            size="sm"
            variant="fill"
            onClick={handleClick}
          >
            Get in touch
          </Button>

          <Button
            className="cursor-pointer font-semibold py-[20px] mt-[50px] leading-[normal] text-base text-center w-[294px] sm:mt-[20px] sm:py-[15px] ml-5"
            shape="round"
            color="blue_gray_900_01"
            size="sm"
            variant="fill" role="link"
        onClick={() => openInNewTab("https://schedule.trzrecovery.com/ScheduleEvent/")}
          >
            Book an Appointment
          </Button>
        </div>
        <div className="relative pr-[120px] md:px-[30px]">
          <Img
            className="h-[722px] w-[486px] mt-5 object-cover right-[0] rounded-tl-[250px] rounded-tr-[250px] md:h-[auto] md-w-full sm:mt-7"
            src="images/img_rectangle2.png"
            alt="rectangleTwo"
          />
          <Img
            className="absolute bottom-[-80px] left-[-120px] h-[365px] sm:h-[250px] sm:w-[250px]  rounded-[50%] w-[365px] md:left-[-50px] md:bottom-[-50px]"
            src="images/img_ellipse1.png"
            alt="ellipseOne"
          />
        </div>

      </div>

        <div
          className="bg-cover bg-no-repeat h-[520px] relative w-full overflow-hidden z-50 sm:h-[500px] sm:mt-[40px]"
        style={{ backgroundImage: "url('images/Rectangle 3.png')" }}
        >
          <div className="absolute bottom-[0] h-[470px] right-[0] w-[68%] md:w-full">
            <Img
              className="h-[470px] m-auto object-cover w-full sm:hidden"
              src="images/img_noisetexture.png"
              alt="noisetexture"
            />
            <div className="absolute bottom-[18%] flex flex-col gap-3 items-start justify-start right-[12%] w-auto sm:left-[30px] sm:bottom-[30%]">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-auto sm:text-2xl"
                size="txtMontserratRomanSemiBold48"
              >
                Bring out the new you...
              </Text>
              <Text
                className="leading-[145.00%] max-w-[563px] md:max-w-full text-gray-100 text-xl sm:text-lg"
                size="txtMontserratRomanRegular20Gray100"
              >
                Cryotherapy is a treatment that exposes the body to extremely cold temperatures for a short period of time. Our Cryotherapy device uses pressurized CO2 gas at -110º F to target a local area of the body
              </Text>
            </div>
          </div>
          <Img
            className="absolute h-[449px] left-[0] object-cover top-[10px] w-[45%] sm:hidden"
            src="images/img_intersect.png"
            alt="intersect"
          />
        </div>

      <div
        class="bg-cover bg-center h-[1600px] mt-[-450px] sm:h-[auto]"
        style={{ backgroundImage: "url('images/BG 29.png')" }}
      >
        <div className="flex flex-col gap-[30px] sm:gap-0 items-start justify-start pt-[450px] px-[120px] pb-[89px] w-full sm:px-[30px] sm:pt-[420px]">
          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
            <Text
              className="text-blue_gray-900 text-sm uppercase w-auto"
              size="txtMontserratRomanRegular14"
            >
              Benefits
            </Text>
            <Text
              className="leading-[145.00%] text-4xl sm:text-[32px] md:text-[34px] text-gray-900 sm:text-2xl"
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
          <div className="flex flex-col items-start justify-start w-auto md:w-full sm:mt-5">
            <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="bg-blue-400 border border-gray-200 border-solid flex flex-1 flex-col items-center justify-start p-11 md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start mb-[58px] w-[500px] sm:w-full">
                  <Text
                    className="capitalize text-3xl md:text-[28px] text-white-A700 w-auto sm:text-xl"
                    size="txtMontserratRomanSemiBold30"
                  >
                    Wrinkle reduction
                  </Text>
                  <Text
                    className="leading-[145.00%] max-w-[500px] md:max-w-full text-white-A700 text-xl sm:text-lg"
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
                    className="capitalize text-3xl md:text-[28px] text-gray-900_01 w-auto sm:text-xl"
                    size="txtMontserratRomanSemiBold30Gray90001"
                  >
                    Antioxidant effect
                  </Text>
                  <Text
                    className="leading-[145.00%] max-w-[500px] md:max-w-full text-gray-700 text-xl sm:text-lg"
                    size="txtMontserratRomanRegular20Gray700"
                  >
                    Cryotherapy positively affects blood flow to promote
                    delivery of antioxidants and other healing materials to the
                    skin to reduce and prevent aging.
                  </Text>
                </div>
              </div>
              <div className="bg-gray-100_01 sm:bg-blue-400  border border-blue_gray-100 border-solid flex flex-1 flex-col items-center justify-start p-[43px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-[500px] sm:w-full">
                  <Text
                    className="capitalize text-3xl md:text-[28px] text-gray-900_01 sm:text-white-A700_01 w-auto sm:text-xl"
                    size="txtMontserratRomanSemiBold30Gray90001"
                  >
                    Anti-Inflammatory
                  </Text>
                  <Text
                    className="leading-[145.00%] max-w-[500px] md:max-w-full text-gray-700  sm:text-white-A700_01 text-xl sm:text-lg"
                    size="txtMontserratRomanRegular20Gray700"
                  >
                    <span className="text-gray-700 font-montserrat text-left font-normal sm:text-white-A700_01 ">
                      Cryotherapy reduces inflammation through cooling the skin
                      and clearing toxins from your blood, additionally
                      decreasing itching and feeling hot.{" "}
                    </span>
                    <span className="text-blue_gray-800 font-montserrat text-left font-medium sm:text-white-A700_01 ">
                      
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-blue-400 border sm:bg-gray-50 border-gray-200 border-solid flex flex-1 flex-col items-center justify-start p-11 md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-[500px] sm:w-full">
                  <Text
                    className="capitalize text-3xl md:text-[28px] text-white-A700  sm:text-gray-700 w-auto sm:text-xl"
                    size="txtMontserratRomanSemiBold30"
                  >
                    Fat reduction
                  </Text>
                  <Text
                    className="leading-[145.00%] max-w-[500px] md:max-w-full text-white-A700  sm:text-gray-700  text-xl sm:text-lg"
                    size="txtMontserratRomanRegular20"
                  >
                    <span className="text-white-A700 font-montserrat text-left font-normal  sm:text-gray-700 ">
                      Cryotherapy is the perfect tool for body sculpting and fat
                      reduction by safely targeting fat cells. Through the use
                      of cold treatment, cryolipolysis{" "}
                    </span>
                    <span className="text-gray-100 font-montserrat text-left font-medium  sm:text-gray-700 ">
                      
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-[72px] sm:gap-0 items-end w-full relative pt-[72px] sm:flex-col-reverse sm:px-[00px] sm:pt-[0px]">
          <div className="relative w-[50%] h-[553px] overflow-hidden sm:w-full sm:h-[300px] left-[137px]">
            <Img
              className="absolute h-[500px] w-full bottom-0 sm:h-[300px]"
              src="images/Ellipse 6.png"
              alt="rectangle"
            />
            <Img
              className="h-[100%] w-[512px] sm:h-[300px] sm:mt-[60px] mt-[60px]"
              src="images/Picture14.jpg"
              alt="rectangle"
            />
          </div>

          <div className="w-[50%] sm:w-full sm:px-[30px]">
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <Text
                className="text-blue_gray-900 text-sm uppercase w-auto"
                size="txtMontserratRomanRegular14"
              >
                SERVICES
              </Text>
              <Text
                className="leading-[145.00%] text-4xl sm:text-[32px] md:text-[34px] text-gray-900 sm:text-xl"
                size="txtMontserratRomanSemiBold36"
              >
                <span className="text-gray-900 font-montserrat text-left font-semibold">
                  We Offer Services to
                </span>
                <br />
                <span className="text-blue-400 font-montserrat text-left font-semibold">
                  Elevate
                </span>
                <span className="text-gray-900 font-montserrat text-left font-semibold">
                   Your Quality of Life.
                </span>
              </Text>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto mt-[30px] sm:text-lg"
                size="txtMontserratRomanSemiBold48Gray900"
              >
                Compression Therapy
              </Text>
              <Text
                className="leading-[150.00%] max-w-[565px] md:max-w-full text-blue_gray-900_02 text-xl mt-[12px] sm:text-lg"
                size="txtMontserratRomanRegular20Bluegray90002"
              >
                Compression therapy involves applying compression to tight,
                stiff, and sore muscles. Typically, compression therapy is
                usually for the limbs, but some methods help you compress the
                entire body. When you apply compression to a specific body part,
                it causes an increase in circulation to the affected area. As a
                result, blood flow improves to the affected muscle group,
                flooding the tissue with oxygenated, nutrient-rich blood that
                helps repair the damage to the tissues.
              </Text>

              <a href="/beauty">
                <Button
                  className="cursor-pointer font-semibold py-[20px] sm:py-[15px] sm:mt-[20px] leading-[normal] text-base text-center w-[294px] mt-[40px]"
                  shape="round"
                  color="blue_gray_900"
                  size="sm"
                  variant="outline"
                >
                  Learn More
                </Button>
              </a>  
            </div>
          </div>

          <Text
            className="absolute top-[45%] left-[37px] text-[120px] opacity-10 text-blue_gray-900 font-montserrat font-extrabold sm:text-[50px] sm:text-center sm:left-[0px] sm:top-[20%]"
            size="txtMontserratRomanSemiBold48Gray900"
          >
            <span>Compression Therapy</span>
          </Text>
        </div>
      </div>

      <div className="flex justify-center w-full items-center py-[93px] mt-[270px] sm:flex-col sm:mt-0 sm:py-[40px] sm:px-[30px]">
        <div className="w-[50%] ml-[120px] relative sm:ml-0 sm:w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto sm:text-2xl"
            size="txtMontserratRomanSemiBold48Gray900"
          >
            Cryotherapy
          </Text>
          <Text
            className="leading-[150.00%] max-w-[434px] md:max-w-full text-blue_gray-900_02 text-xl mt-4 sm:text-lg"
            size="txtMontserratRomanRegular20Bluegray90002"
          >
            The cryotherapy machine uses pressurized CO2 gas to target a local
            area of the body and cause “thermal shock.” The sudden decrease in
            temperature rapidly activates the body’s healing response to relax
            muscles, promote flow of blood and nutrients, and reduce pain.
            You’ll be amazed how quickly cryotherapy treatment can reduce your
            pain and speed your recovery!
          </Text>
          <a href="/recoveryservices">
            <Button
              className="cursor-pointer font-semibold py-[20px] sm:py-[15px] sm:mt-[20px] leading-[normal] mt-[40px] text-base text-center w-[294px]"
              shape="round"
              color="blue_gray_900"
              size="sm"
              variant="outline"
            >
              Learn More
            </Button>
          </a>

          <Text
            className="absolute top-[45%] left-[-115px] text-[120px] sm:text-center opacity-10 text-blue_gray-900 font-montserrat font-extrabold sm:text-[50px] sm:left-[-10px]"
            size="txtMontserratRomanSemiBold48Gray900"
          >
            <span>Cryotherapy</span>
          </Text>

        </div>
        <div className="w-[50%] relative h-[500px] sm:w-full sm:h-[300px]">

          <Img className="absolute top-[-35px] h-[371px] right-[127px] object-cover rounded-[300px] w-[429px] sm:h-[221px] sm:w-[289px] sm:right-[-20px] sm:top-[20px]"
                  src="images/img_rectangle5.png"
                  alt="rectangleSix"
                />
          <Img className="absolute h-[357px] object-cover top-[170px] left-[-40px] rounded-t-full w-[355px] sm:h-[170px] sm:w-[170px] sm:top-[150px] sm:left-[-20px]"
                  src="images/img_rectangle6.png"
                  alt="rectangleSix"
                />
          <div className="absolute rounded-lg top-[70px] left-[-100px] flex gap-6 sm:gap-3 justify-center items-center py-[22px] px-[27px] bg-gray-300 sm:top-[70px] sm:py-[10px] sm:px-[15px] sm:left-[-20px]">
                  <Img src="images/img_nounexercise2404318_1.svg" alt="noun-exercise-2404318 1"/>
                  <p className="font-montserrat text-gray-900_02 font-medium text-xl sm:text-sm">Done by Professionals</p>
          </div>

          <div className="absolute rounded-lg bottom-[20px] right-[80px] flex gap-6 sm:gap-3 justify-center items-center py-[22px] px-[27px] bg-gray-300 sm:py-[10px] sm:px-[15px] sm:right-[-20px] sm:bottom-[-20px] ">
                  <Img src="images/img_nouncryogenicchamber3312571_1.svg" alt="noun-exercise-2404318 1"/>
                  <p className="font-montserrat text-gray-900_02 font-medium text-xl sm:text-sm">Done by Professionals</p>
          </div>
       
        </div>
      </div>

     

      <Testimonial />
      <Subscribe />
      <Map />
      <Footer1 />
    </>
  );
};

export default LandingPagePage;
