import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Header from '../Header';
import Footer1 from "components/Footer1";
import Map from "components/Map/Index";
import Subscribe from "components/Subscribe/Index";

const ourServicesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const WaiverInfo = () => {
  return (
    <>
      < Header />
      <div className="bg-gray-100 flex flex-col font-montserrat mt-[-103px] sm:gap-10 md:gap-10 gap-[76px] items-center justify-start mx-auto w-full">
        <div className="bg-gradient-to-b from-[rgba(18,45,66,0.81)] via-[rgba(18,45,66,0.2)] to-transparent flex flex-col items-center justify-start p-8 sm:px-5 w-full">
          <div className="flex flex-col justify-start max-w-[1200px] mb-0.5 mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-3.5 items-center justify-start mt-[200px] w-auto md:w-full sm:mt-[150px]">
              <Text
                className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtMontserratRomanBold24WhiteA700"
              >
                FAQ
              </Text> 
              <Text
                className="capitalize md:text-5xl text-7xl text-gray-900 w-auto sm:text-2xl"
                size="txtMontserratRomanSemiBold72"
              >
                Have any questions?
              </Text>
            </div>
            {/*<div className="flex flex-col items-start justify-start md:ml-[0] ml-[166px] mt-[124px] w-[77%] md:w-full sm:mt-[80px]">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[104px] items-center justify-between md:ml-[0] w-auto md:w-full sm:gap-[20px]">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-gray-900_01 w-auto cursor-pointer sm:text-lg"
                  size="txtMontserratRomanSemiBold24"
                >
                  General
                </Text>
                <Text
                  className="capitalize text-2xl md:text-[22px] text-gray-700 sm:text-lg w-auto cursor-pointer"
                  size="txtMontserratRomanRegular24"
                >
                  Cryotherapy
                </Text>
                <Text
                  className="capitalize text-2xl md:text-[22px] text-gray-700 sm:text-lg w-auto cursor-pointer"
                  size="txtMontserratRomanRegular24"
                >
                  Compression Therapy
                </Text>
                <Text
                  className="capitalize text-2xl md:text-[22px] text-gray-700 sm:text-lg w-auto cursor-pointer"
                  size="txtMontserratRomanRegular24"
                >
                  Others
                </Text>
              </div>
              <Line className="bg-blue-400 h-px mt-0.5 w-[11%] sm:hidden" />
            </div>*/}
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col items-center justify-start p-[67px] mx-[53px] mb-[34px] md:px-10 sm:px-5 w-full sm:pt-[0px] sm:pb-5">
          <div className="flex flex-col items-start justify-start max-w-[1200px] mb-[34px] mx-auto w-full">
            <div className="gap-20 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                  size="txtMontserratRomanMedium24"
                >
                  What is cryotherapy and how does it work?
                </Text>
                <Text
                  className="leading-[145.00%] max-w-[560px] md:max-w-full text-gray-700 text-lg sm:text-sm"
                  size="txtMontserratRomanRegular18Gray700"
                >
                  Cryotherapy is a treatment that exposes the body to extremely cold temperatures for a short period of time. Our Cryotherapy device uses pressurized CO2 gas at -110º F to target a local area of the body and cause "thermal shock", which activates the body's healing responses.

                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                  size="txtMontserratRomanMedium24"
                >
                  Is cryotherapy safe?

                </Text>
                <Text
                  className="leading-[145.00%] max-w-[560px] md:max-w-full text-gray-700 text-lg sm:text-sm"
                  size="txtMontserratRomanRegular18Gray700"
                >
                  Yes, cryotherapy is generally considered safe when done by a certified practitioner. Our practitioners are trained and certified to perform cryotherapy safely and effectively.
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                  size="txtMontserratRomanMedium24"
                >
                  How often should I receive cryotherapy?

                </Text>
                <Text
                  className="leading-[145.00%] max-w-[560px] md:max-w-full text-gray-700 text-lg sm:text-sm"
                  size="txtMontserratRomanRegular18Gray700"
                >
                  The frequency of cryotherapy sessions depends on your specific needs and goals.
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                  size="txtMontserratRomanMedium24"
                >
                  How long does a typical session last?
                </Text>
                <Text
                  className="leading-[145.00%] max-w-[560px] md:max-w-full text-gray-700 text-lg sm:text-sm"
                  size="txtMontserratRomanRegular18Gray700"
                >
                  Our session lengths vary depending on the service, ranging from as short as 2 minutes to as long as an hour. Contact us to discuss your needs and help us tailor the most appropriate services for you.
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                  size="txtMontserratRomanMedium24"
                >
                  How many treatments will I need to see results?
                </Text>
                <Text
                  className="leading-[145.00%] max-w-[560px] md:max-w-full text-gray-700 text-lg sm:text-sm"
                  size="txtMontserratRomanRegular18Gray700"
                >
                  The number of treatments required varies based on your individual needs and goals. Our team of experts will work with you to create a customized treatment plan that is tailored to your specific needs and goals.
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                  size="txtMontserratRomanMedium24"
                >
                  Are your medical spa treatments covered by insurance?
                </Text>
                <Text
                  className="leading-[145.00%] max-w-[560px] md:max-w-full text-gray-700 text-lg sm:text-sm"
                  size="txtMontserratRomanRegular18Gray700"
                >
                  Generally, medical spa treatments are considered elective and are not covered by insurance. However, we offer competitive pricing and financing options to make our services affordable and accessible.
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                  size="txtMontserratRomanMedium24"
                >
                  What services do you offer at your spa?
                </Text>
                <Text
                  className="leading-[145.00%] max-w-[560px] md:max-w-full text-gray-700 text-lg sm:text-sm"
                  size="txtMontserratRomanRegular18Gray700"
                >
                  We strive to meet your unique needs and goals with a variety of services, including Cryo Facials, Abdominal Cryosculpting, Legs Cryosculpting, Facial treatment, and Arms Cryosculpting. As we continue to innovate and expand, we are committed to providing our customers with the best possible experience and adding new services to meet their needs.

                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full sm:flex-col-reverse sm:gap-5 mb-[140px]">
          <Img
            className="h-[50%] md:h-auto object-cover rounded-bl-lg rounded-tl-lg rounded-tr-lg rounded-br-lg"
            src="images/Picture11.jpg"
            alt="frameFortyTwo"
          />

          <Img
            className="h-[50%] md:h-auto object-cover rounded-bl-lg rounded-tl-lg rounded-tr-lg rounded-br-lg ml-5"
            src="images/Picture12.jpg"
            alt="frameFortyTwo"
          />

<Img
            className="h-[50%] md:h-auto object-cover rounded-bl-lg rounded-tl-lg rounded-tr-lg rounded-br-lg ml-5"
            src="images/Picture13.jpg"
            alt="frameFortyTwo"
          />

<Img
            className="h-[50%] md:h-auto object-cover rounded-bl-lg rounded-tl-lg rounded-tr-lg rounded-br-lg ml-5"
            src="images/Picture14.jpg"
            alt="frameFortyTwo"
          />

<Img
            className="h-[50%] md:h-auto object-cover rounded-bl-lg rounded-tl-lg rounded-tr-lg rounded-br-lg ml-5"
            src="images/Picture15.jpg"
            alt="frameFortyTwo"
          />

<Img
            className="h-[50%] md:h-auto object-cover rounded-bl-lg rounded-tl-lg rounded-tr-lg rounded-br-lg ml-5"
            src="images/Picture16.jpg"
            alt="frameFortyTwo"
          />
          
        </div>
       
      </div>
      <Subscribe />
      <Map /> 
      <Footer1 />
    </>
  );
};

export default WaiverInfo;
