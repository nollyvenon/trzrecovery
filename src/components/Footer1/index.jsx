import React from "react";
import {
  Img,
  Line,
  Text,
} from "components";
const Footer1 = () => {
  return (
    <>
      <footer >
        <div className="flex flex-col gap-10 items-center justify-center w-full mb-[-20px]">
    
        
          <div className="flex flex-col items-center justify-start w-full">
            
            <div className="bg-blue_gray-900_03 flex flex-col items-center justify-start p-7 sm:px-5 w-full">
              
              <Img
                className="h-[93px] md:h-auto object-cover sm:h-[70px]"
                src="images/img_whatsappimage20231003.png"
                alt="whatsappimageTwenty"
              />
              <Text
                className="leading-[145.00%] mt-[9px] text-base text-center text-white-A700 w-[31%] sm:w-full sm:text-sm"
                size="txtMontserratRomanRegular16WhiteA700"
              >
                TRZ was brought into existence to offer a revolutionary technology that not only athletes could benefit from, but also the everyday person.
              </Text>
              <div className="flex flex-row gap-9 items-start justify-start mt-[30px] w-auto">
                <a href="https://instagram.com/trzrecovery"><Img className="h-6 w-6" src="images/img_riinstagramfill.svg" target="_blank" alt="riinstagramfill" /></a>
                <a href="https://facebook.com/trzrecovery"><Img className="h-6 w-6" src="images/img_rifacebookfill.svg" target="_blank" alt="rifacebookfill" /></a>
                <a href="https://twitter.com/trzrecovery"><Img className="h-6 w-6" src="images/img_bitwitter.svg" target="_blank" alt="bitwitter" /></a>
              </div>
              <Line className="bg-gray-600 h-px mt-[26px] w-[87%]" />
              <Text
                className="mb-[15px] mt-[29px] text-[15px] text-blue_gray-100_87 tracking-[-0.20px] text-center sm:text-sm"
                size="txtMontserratRomanRegular15"
              >
                Copyright © 2023. TRZ Recovery. All rights reserved.  <a href="https://schedule.trzrecovery.com/admin/" target="_blank">Admin Portal</a>
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
