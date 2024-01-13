import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Header from '../Header';
import Footer from "components/Footer1";
import Map from "components/Map/Index";
import Subscribe from "components/Subscribe/Index";
import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import {
  Button,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
  TextArea,
} from "components";



const ContactPage = () => {
  const [errors, setErrors] = useState({});
 const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const history = useNavigate();
  const dispatch = useDispatch();  
  
    const [inputFields, setInputFields] = useState({
      firstName: "",
      message: "",
      lastName: "",
      company: "",
      mobileNumber: "",
      subject: "",
      email: "",
    });

    const initialValues = {
      firstName: "",
      message: "",
      lastName: "",
      company: "",
      mobileNumber: "",
      subject: "",
      email: "",
    }

  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.mobileNumber.length < 15) {
      errors.mobileNumber = "Email is too short";
    }
    if (inputValues.firstName.length < 5) {
      errors.firstName = "Password is too short";
    }
    if (!inputValues.subject) {
      errors.age = "Subject fields is required";
    }
    if (!inputValues.message) {
      errors.age = "Message fields is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };
  
  const handleNext = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && submitting) {
        setLoading(true);
        await axios
          .post(`${process.env.API_URL}/addContactMessage`, inputFields)
          .then((response) => {
            setLoading(false);
            history.replace("/contactSuccess");
          })
          .catch((err) => {
            setLoading(false);
  
            if (err.response && err.response.data.message) {
              setErrors([err.response.data.message]);
            } else {
              setErrors([
                "An error occured, make sure you have a working network",
              ]);
            }
            console.log(err);
          });
        // history.push("/Contactsuccess");
      }
    };

  return (
    <>
      {/* <div className="bg-gray-100 flex flex-col font-montserrat sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full"> */}
        <Header />
        <div className="bg-cover bg-center  h-[950px] md:h-[1207px] mt-[-103px] md:px-5 relative w-full mb-16 sm:mb-4 sm:h-[950px]" style={{backgroundImage: "url('images/img_image21.png')"}}>
          {/* <Img
            className="h-[920px] m-auto object-cover w-full"
            src="images/img_image21.png"
            alt="imageTwentyOne"
          /> */}
          <Formik
              initialValues={initialValues}
              validate={validateValues}
              onSubmit={handleNext}
            >
                  <form  onSubmit={handleNext}>
                  <div className="col-lg-7 text-left">
                    {errors.length > 0
                      ? errors.map((xxx) => (
                          <p className="error-card alert-danger">{xxx}</p>
                        ))
                      : null}
                      {Object.keys(errors).length === 0 && submitting ? (
                        <span className="success">Successfully submitted ✓</span>
                      ) : null}
                    <div style={{ height: "10px" }} />
                  </div>
                  <div className="absolute flex flex-col md:gap-10 gap-[65px] inset-x-[0] items-center justify-start mx-auto top-[15%] sm:top-[12%] w-[84%]">


                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <Text
                        className="capitalize leading-[120.00%] md:mt-0 mt-[83px] md:text-5xl text-[64px] text-white-A700 tracking-[0.32px] sm:text-2xl sm:mt-[50px]"
                        size="txtMontserratRomanBold64"
                      >
                          We're always <br />
                          here for you
                      </Text>
                      <div className="bg-white-A700 flex flex-col items-start justify-start p-[58px] md:px-10 sm:py-[30px] rounded shadow-bs3 sm:px-[20px] sm:w-full">
                        <a
                          href="javascript:"
                          className="ml-3.5 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900_03 sm:text-xl"
                        >
                          <Text size="txtMontserratRomanBold24">Contact Us</Text>
                        </a>
                        <div className="flex flex-col gap-1 items-start justify-center ml-3.5 md:ml-[0] mt-[25px] w-[411px] sm:w-full">
                          <Text
                            className="text-base text-blue_gray-900_02 w-auto"
                            size="txtMontserratRomanLight16"
                          >
                            Name
                          </Text>
                          <input
                            name='firstName' id='firstName'
                            placeholder="Enter your name"
                            className="font-light leading-[normal] p-0 placeholder:text-gray-500_01 text-left text-sm w-full form-control"
                            wrapClassName="border border-gray-300_01 border-solid rounded w-full"
                            type="text"
                            color="white_A700_01"
                            size="xs"
                            variant="fill"
                            value={inputFields.firstName}
                            onChange={handleChange}
                            />
                            
                          
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-center ml-3.5 md:ml-[0] mt-[49px] w-[411px] sm:w-full">
                          <Text
                            className="text-base text-blue_gray-900_02 w-auto"
                            size="txtMontserratRomanLight16"
                          >
                            Email
                          </Text>
                          <input
                            type="text"
                            name="email"
                            placeholder="Enter email"
                            color="white_A700_01"
                            size="xs"
                            variant="fill"
                            className="font-light leading-[normal] p-0 placeholder:text-gray-500_01 text-left text-sm w-full"
                            wrapClassName="border border-gray-300_01 border-solid rounded w-full"
                            value={inputFields.email}
                            onChange={handleChange}
                          />
                           {errors.password ? (
                            <p className="error">
                              Password should be at least 5 characters long
                            </p>
                          ) : null}

                        </div>

                        <div className="flex flex-col gap-1 items-start justify-center ml-3.5 md:ml-[0] mt-[29px] w-[411px] sm:w-full">
                          <Text
                            className="text-base text-blue_gray-900_02 w-auto"
                            size="txtMontserratRomanLight16"
                          >
                            Phone Number
                          </Text>
                          <input
                            name='mobileNumber' id='mobileNumber' 
                            placeholder="Enter mobile number"
                            className="font-light leading-[normal] p-0 placeholder:text-gray-500_01 text-left text-sm w-full"
                            wrapClassName="border border-gray-300_01 border-solid rounded w-full"
                            type="tel"
                            color="white_A700_01"
                            size="xs"
                            variant="fill"
                            value={inputFields.mobileNumber}
                            onChange={handleChange}
                          ></input>
                          {errors.mobileNumber && (<p className="error-text">{errors.mobileNumber}</p>)}
                        </div>

                        <div className="flex flex-col gap-1 items-start justify-center ml-3.5 md:ml-[0] mt-[29px] w-[411px] sm:w-full">
                          <Text
                            className="text-base text-blue_gray-900_02 w-auto"
                            size="txtMontserratRomanLight16"
                          >
                            Message
                          </Text>
                          <TextArea
                            className="bg-white-A700_01 border border-gray-300_01 border-solid font-light leading-[normal] pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-[11px] rounded placeholder:text-gray-500_01 text-gray-500_01 text-left text-xs w-full"
                            name="frameSeventeen_Three"
                            placeholder="Enter message"
                          ></TextArea>
                        </div>
                        <Button
                          className="cursor-pointer font-semibold h-[60px] leading-[normal] mb-[3px] md:ml-[0] ml-[73px] mt-10 text-base text-center w-[294px] sm:w-[200px]"
                          shape="round"
                          color="blue_gray_900_03"
                          size="sm"
                          variant="fill"
                          type='submit'
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
              </form>
           </Formik>

        </div>
        <Subscribe />
        <Map />
        < Footer />
      {/* </div> */}
    </>
  );
};
                
export default ContactPage;
