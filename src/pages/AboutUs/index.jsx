import React from "react";
import Header from '../Header';
import Map from "components/Map/Index";
import Subscribe from "components/Subscribe/Index";
import Testimonial from 'components/Testimonial'
import {
  Img,
  List,
  Text,
} from "components";
import Footer1 from "components/Footer1";

const AboutUsPage = () => {
  return (
    <>
    < Header/>
      <div className="bg-gray-100 flex flex-col mt-[-103px] font-montserrat items-center justify-start mx-auto w-full">
        <div className="bg-gradient-to-b from-[rgba(18,45,66,0.81)] via-[rgba(18,45,66,0.2)] to-transparent  h-[500px] w-full">
          <div className="flex flex-col items-start mt-[240px] justify-start max-w-[1200px] mb-[98px] sm:px-[30px]">
            <Text
              className="capitalize md:text-5xl text-7xl ml-[120px] text-gray-900 w-[76%] sm:w-full sm:ml-[0px] sm:text-2xl"
              size="txtMontserratRomanSemiBold72"
            >
              <span className="text-gray-900 font-montserrat text-left font-semibold">
                Our team helps you get your life{" "}
              </span>
              <span className="text-blue-400 font-montserrat text-left font-semibold">
                back on track
              </span>
              <span className="text-gray-900 font-montserrat text-left font-semibold">
                .
              </span>
            </Text>
          </div>
        </div>

        <div className="bg-gray-100 flex flex-col items-center justify-start py-[79px] px-[120px] w-full sm:px-[30px] sm:mt-[-100px] sm:pt-0 sm:bg-transparent" >
          <div className="flex flex-col gap-5 items-start justify-start max-w-[1235px] mb-4 mx-auto w-full">
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <Text
                className="text-blue_gray-900 text-sm uppercase w-auto mb-2"
                size="txtMontserratRomanRegular14"
              >
                our story
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto font-semibold"
                size="txtMontserratRomanSemiBold36"
              >
                About Us
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[34px] items-center justify-between w-full">
              <Text
                className="leading-[145.00%] text-gray-700 text-lg"
                size="txtMontserratRomanRegular18Gray700"
              >
                <p>TRZ was brought into existence to offer a revolutionary technology that not only athletes could benefit from, but also the everyday person. Rather they are young, or of age we have provided excellent service to professional athletes, sports teams, celebrities, families, & much more. TRZ mission is to make it’s services, and other innovative
recovery solutions available to everyone. Equipped with cutting-edge technology that stands to redefine the effects of cooling on the body as it is known today. TRZ has established itself as the go-to specialists in the industry. </p>

<p>We value pricing with options to fit your time, needs, and budget. We believe repetition is the key to improve the Quality of Life. With that belief these services need to be affordable to everyone in order to be sustainable. </p>

<p>TRZ strongly believes in helping you maintain your health and wellness.</p>
{" "}  
              </Text>
              <Img
                className="h-[393px] md:h-auto object-cover rounded-[16px]"
                src="images/img_pexelsfauxels3183197.png"
                alt="pexelsfauxelsThirtyOne"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 h-[526px] md:h-[586px] md:px-5 py-[89px] relative w-full sm:h-[800px]">
          <div className="absolute bg-blue_gray-900_03 flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
            <Img
              className="h-[150px] object-cover w-full sm:h-[600px]"
              src="images/img_noisetexture_150x1440.png"
              alt="noisetexture"
            />
          </div>
          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto py-[70px] px-[102px] md:px-10 sm:px-5 rounded-[16px] w-[75%]">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[153px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                <div className="bg-blue-50 flex flex-col h-[120px] items-center justify-start p-[25px] sm:px-5 rounded-[50%] w-[120px] sm:h-[90px] sm:w-[90px]">
                  <Img
                    className="h-[70px] w-[70px] sm:h-[50px] sm:w-[50px]"
                    src="images/img_noundoctor1143792.svg"
                    alt="noundoctor11437"
                  />
                </div>
                <div className="flex flex-col gap-[5px] items-center justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto sm:text-center"
                    size="txtMontserratRomanSemiBold32"
                  >
                    1500
                  </Text>
                  <Text
                    className="text-gray-700 text-xl w-auto sm:text-center"
                    size="txtMontserratRomanRegular20Gray700"
                  >
                    Satisfied Patients
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                <div className="bg-blue-50 flex flex-col h-[120px] items-center justify-start p-[25px] sm:px-5 rounded-[50%] w-[120px] sm:h-[90px] sm:w-[90px]">
                  <Img
                    className="h-[70px] w-[70px] sm:h-[50px] sm:w-[50px]"
                    src="images/img_nouncalender4800936.svg"
                    alt="nouncalender480"
                  />
                </div>
                <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto sm:text-center"
                    size="txtMontserratRomanSemiBold32"
                  >
                    1500
                  </Text>
                  <Text
                    className="text-gray-700 text-xl w-auto sm:text-center"
                    size="txtMontserratRomanRegular20Gray700"
                  >
                    Appointments
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                <div className="bg-blue-50 flex flex-col h-[120px] items-center justify-start p-6 sm:px-5 rounded-[50%] w-[120px] sm:h-[90px] sm:w-[90px]">
                  <Img
                    className="h-[70px] w-[70px] sm:h-[50px] sm:w-[50px]"
                    src="images/img_nounaward1984270.svg"
                    alt="nounaward198427"
                  />
                </div>
                <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto sm:text-center"
                    size="txtMontserratRomanSemiBold32"
                  >
                    1500
                  </Text>
                  <Text
                    className="text-gray-700 text-xl w-auto sm:text-center"
                    size="txtMontserratRomanRegular20Gray700"
                  >
                    Certified Experts
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>

        <div className="bg-gray-100 h-[659px] flex md:flex-col flex-row gap-[51px] items-start justify-start p-[70px] md:px-10 sm:px-5 w-full sm:py-[30px] sm:h-[1150px]">
          <Img
            className="md:flex-1 h-[393px] sm:h-auto md:mt-0 mt-[91px] object-cover rounded-[16px] w-[46%] md:w-full"
            src="images/img_pexelsfauxels3183197_393x589.png"
            alt="pexelsfauxelsThirtyOne_One"
          />
          <div className="items-center justify-start mb-7 md:mt-0 mt-[9px] w-[48%] md:w-full">
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <Text
                className="text-blue_gray-900 text-sm uppercase w-auto mb-2"
                size="txtMontserratRomanRegular14"
              >
                Mission
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto mb-7"
                size="txtMontserratRomanSemiBold36"
              >
                Our Mission
              </Text>
            </div>
            <Text
              className="leading-[145.00%] text-gray-700 text-lg w-full sm:mb-[800px]"
              size="txtMontserratRomanRegular18Gray700"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing eli. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing eli. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
              consectetur adipiscing eli. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
              consectetur adipiscing eli. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
              consectetur adipiscing eli.{" "}
            </Text>
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

export default AboutUsPage;
