import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Text,
} from "components";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect, useRef } from "react";
const Header = () => {
    
  return (

    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
        <Img
        className="h-[93px] md:h-auto object-cover ml-40"
        src="images/img_whatsappimage20231003.png"
        alt="whatsappimageTwenty"
        />
        <div className="flex sm:flex-1 sm:flex-col flex-row gap-[82px] items-start justify-start w-auto sm:w-full mr-40">
        <div className="flex flex-col items-center justify-start w-auto">
        <Text
            className="text-blue-300 text-lg w-auto"
            size="txtMontserratRomanRegular18Bluegray10001"
        >
            <Link to="/">Home</Link>
        </Text>
        </div> 
        <div className="flex flex-col items-center justify-start w-auto">
            <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
            <Text className="text-blue-300 text-lg w-auto" size="txtMontserratRomanRegular18Bluegray10001">
                Services
            </Text>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/compressiontherapy">Compression therapy</Dropdown.Item>
                <Dropdown.Item href="/cryotherapy">Cryotherapy</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
            <Text
            className="text-lg text-blue-300 w-auto"
            size="txtMontserratRomanSemiBold18WhiteA700"
            >
            <Link to="/aboutus">About Us</Link>
            </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-auto">
            <Text
            className="text-blue-300 text-lg w-auto"
            size="txtMontserratRomanRegular18Bluegray10001"
            >
            <Link to="/faq">FAQ</Link>
            </Text>
        </div>
                <Button
                    className="absolute cursor-pointer font-semibold h-[52px] leading-[normal] right-[22%] rounded-[26px] text-base text-center top-[7%] w-[180px]"
                    color="white_A700"
                    size="xs"
                    variant="outline"
                >
                    Contact Us
                </Button>
        </div>
    </div>
  
        /*<div className="absolute flex sm:flex-col flex-row gap-[52px] items-center justify-center right-[24%] top-[9%] w-auto">
            <Img
                className="h-[93px] md:h-auto object-cover ml-40"
                src="images/img_whatsappimage20231003.png"
                alt="whatsappimageTwenty"
              />


            <Text
              className="text-blue_gray-100_01 text-lg w-auto"
              size="txtMontserratRomanRegular18Bluegray10001"
            >
              Home
            </Text>
            
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-blue_gray-100_01 text-lg w-auto"
                size="txtMontserratRomanRegular18Bluegray10001"
              >
                About Us
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-blue_gray-100_01 text-lg w-auto"
                size="txtMontserratRomanRegular18Bluegray10001"
              >
                FAQ
              </Text>
            </div>
            <Button
                className="absolute cursor-pointer font-semibold h-[52px] leading-[normal] right-[22%] rounded-[26px] text-base text-center top-[7%] w-[180px]"
                color="white_A700"
                size="xs"
                variant="outline"
              >
                Contact Us
              </Button>
  </div>*/

    );
};
export default Header;
