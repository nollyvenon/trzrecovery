import React from 'react'
import {
    Img,
    Line,
    Text,
  } from "components";

function Index() {
  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-start pt-[82px] p-[27px] sm:px-5 w-full sm:pt-[40px]">
              <div className="flex flex-col gap-[47px] items-center justify-start mb-[62px] w-[87%] md:w-full">
                <Line className="bg-blue_gray-100_02 h-px w-full" />
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex flex-col gap-[35px] sm:gap-5 items-start justify-start w-auto sm:items-center sm:justify-center">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto sm:items-center sm:justify-center">
                      <Text
                        className="text-gray-500 text-xl w-auto sm:text-sm sm:text-center"
                        size="txtMontserratRomanRegular20Gray500"
                      >
                        Address:
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-xl w-auto sm:text-sm sm:text-center"
                        size="txtMontserratRomanSemiBold20Bluegray900"
                      >
                        Hurst, TX
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto sm:items-center sm:justify-center">
                      <Text
                        className="text-gray-500 text-xl w-auto sm:text-sm sm:text-center"
                        size="txtMontserratRomanRegular20Gray500"
                      >
                        Opening time:
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-xl w-auto sm:text-sm sm:text-center"
                        size="txtMontserratRomanSemiBold20Bluegray900"
                      >
                        07:00am - 09:00pm via appointment
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto sm:items-center sm:justify-center">
                      <Text
                        className="text-gray-500 text-xl w-auto sm:text-sm sm:text-center"
                        size="txtMontserratRomanRegular20Gray500"
                      >
                        Phone number:
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-xl w-auto sm:text-sm sm:text-center"
                        size="txtMontserratRomanSemiBold20Bluegray900"
                      >
                        469-300-1935
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto sm:items-center sm:justify-center">
                      <Text
                        className="text-gray-500 text-xl w-auto sm:text-sm sm:text-center"
                        size="txtMontserratRomanRegular20Gray500"
                      >
                        Email:
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-xl w-auto sm:text-sm sm:text-center"
                        size="txtMontserratRomanSemiBold20Bluegray900"
                      >
                        info@trzrecovery.com
                      </Text>
                    </div>
                  </div>
                  <div className="h-[441px] relative w-[66%] md:w-full sm:h-[200px]">
                    <Img
                      className="h-[441px] m-auto object-cover rounded-[16px] w-full sm:h-[250px]"
                      src="images/img_maps.png"
                      alt="maps"
                    />
                    <Img
                      className="absolute h-[70px] inset-x-[0] mx-auto top-[24%] w-[70px] sm:h-[30px] sm:top-[50%]"
                      src="images/img_carbonlocationfilled.svg"
                      alt="carbonlocationf"
                    />
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Index
