import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-gray-100 flex flex-col items-center justify-start p-[27px] sm:px-5 w-full">
            <div className="flex flex-col gap-[47px] items-center justify-start mb-[62px] w-[87%] md:w-full">
              <Line className="bg-blue_gray-100_02 h-px w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-[35px] items-start justify-start w-auto">
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-gray-500 text-xl w-auto"
                      size="txtMontserratRomanRegular20Gray500"
                    >
                      Address:
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtMontserratRomanSemiBold20Bluegray900"
                    >
                      20 Lorem ipsum dolor sit amet
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-gray-500 text-xl w-auto"
                      size="txtMontserratRomanRegular20Gray500"
                    >
                      Opening time:
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtMontserratRomanSemiBold20Bluegray900"
                    >
                      07:00am - 09:00pm
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-gray-500 text-xl w-auto"
                      size="txtMontserratRomanRegular20Gray500"
                    >
                      Phone number:
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtMontserratRomanSemiBold20Bluegray900"
                    >
                      +12345678901234
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-gray-500 text-xl w-auto"
                      size="txtMontserratRomanRegular20Gray500"
                    >
                      Email:
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtMontserratRomanSemiBold20Bluegray900"
                    >
                      example@mail.com
                    </Text>
                  </div>
                </div>
                <div className="h-[441px] relative w-[66%] md:w-full">
                  <Img
                    className="h-[441px] m-auto object-cover rounded-[16px] w-full"
                    src="images/img_maps.png"
                    alt="maps"
                  />
                  <Img
                    className="absolute h-[70px] inset-x-[0] mx-auto top-[24%] w-[70px]"
                    src="images/img_carbonlocationfilled.svg"
                    alt="carbonlocationf"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-900_03 flex flex-col items-center justify-start p-7 sm:px-5 w-full">
            <Img
              className="h-[98px] md:h-auto object-cover w-[12%] sm:w-full"
              src="images/img_whatsappimage20231003.png"
              alt="whatsappimageTwenty_One"
            />
            <Text
              className="leading-[145.00%] mt-[9px] text-base text-center text-white-A700 w-[31%] sm:w-full"
              size="txtMontserratRomanRegular16WhiteA700"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut l
            </Text>
            <div className="flex flex-row gap-9 items-start justify-start mt-[30px] w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_riinstagramfill.svg"
                alt="riinstagramfill"
              />
              <Img
                className="h-6 w-6"
                src="images/img_rifacebookfill.svg"
                alt="rifacebookfill"
              />
              <Img
                className="h-6 w-6"
                src="images/img_bitwitter.svg"
                alt="bitwitter"
              />
            </div>
            <Line className="bg-gray-600 h-px mt-[26px] w-[87%]" />
            <Text
              className="mb-[15px] mt-[29px] text-[15px] text-blue_gray-100_87 tracking-[-0.20px]"
              size="txtMontserratRomanRegular15"
            >
              Copyright © 2020. LogoIpsum. All rights reserved.
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
