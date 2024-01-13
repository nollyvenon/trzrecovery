import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Header from "../Header";
import Footer from "components/Footer1";
import Map from "components/Map/Index";
import Subscribe from "components/Subscribe/Index";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Button,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
  TextArea
} from "components";
import Error from "../../components/Error";
import { FormGroup, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";


const subscriberSuccess = () => {

  return (
    <>
      {/* <div className="bg-gray-100 flex flex-col font-montserrat sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full"> */}
      <Header />
      <div
        className="bg-cover bg-center  h-[950px] md:h-[1207px] mt-[-90px] md:px-5 relative w-full mb-16 sm:mb-4 sm:h-[950px]"
        style={{ backgroundImage: "url('images/img_image21.png')" }}>
        <form>

          <div
            className="absolute flex flex-col md:gap-10 gap-[65px] inset-x-[0] items-center justify-start mx-auto top-[15%] sm:top-[12%] w-[84%]">


            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">

              <Text
                className="capitalize leading-[120.00%] md:mt-0 mt-[83px] md:text-5xl text-[64px] text-white-A700 tracking-[0.32px] sm:text-2xl sm:mt-[50px]"
                size="txtMontserratRomanBold64"
              >
                Thank you for subscribing to our newsletter
              </Text>
              <div
                className="bg-white-A700 flex flex-col items-start justify-start p-[58px] md:px-10 sm:py-[30px] rounded shadow-bs3 sm:px-[20px] sm:w-full">


              </div>
            </div>
          </div>
        </form>
      </div>
      <Subscribe />
      <Map />
      < Footer />
      {/* </div> */}
    </>
  );
};

export default subscriberSuccess;
