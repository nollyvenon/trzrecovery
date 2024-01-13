import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Error";
import Success from "../../components/Success";
import Header from "../Header";
import Footer from "components/Footer1";
import Map from "components/Map/Index";
import Subscribe from "components/Subscribe/Index";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import {
  Button,
  Img,
  Text
} from "components";
import { addContactAction } from "../../features/contactActions";


const ContactPage = () => {
  // const { loading, contactInfo, error, success } = useSelector((state) => state.contact);
  const [customError, setCustomError] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [contmessage, setContMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onNameChanged = (e) => setName(e.target.value);
  const submitForm = (data) => {
    console.log(data);
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();

    dispatch(addContactAction(data));
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setContMessage("");
    setCustomError("Message submitted successfully.");
    navigate("/contactSuccess");

    //console.log(dispatch(addContactAction(data)));
  };

  return (
    <>
      {/* <div className="bg-gray-100 flex flex-col font-montserrat sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full"> */}
      <Header />
      <div
        className="bg-cover bg-center  h-[950px] md:h-[1207px] mt-[-103px] md:px-5 relative w-full mb-16 sm:mb-4 sm:h-[950px]"
        style={{ backgroundImage: "url('images/img_image21.png')" }}>
        {/* <Img
            className="h-[920px] m-auto object-cover w-full"
            src="images/img_image21.png"
            alt="imageTwentyOne"
          /> */}
        <form onSubmit={handleSubmit(submitForm)}>

          {customError && <Error>{customError}</Error>}
          <div
            className="absolute flex flex-col md:gap-10 gap-[65px] inset-x-[0] items-center justify-start mx-auto top-[15%] sm:top-[12%] w-[84%]">


            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">

              <Text
                className="capitalize leading-[120.00%] md:mt-0 mt-[83px] md:text-5xl text-[64px] text-white-A700 tracking-[0.32px] sm:text-2xl sm:mt-[50px]"
                size="txtMontserratRomanBold64"
              >
                We're always <br />
                here for you
              </Text>
              <div
                className="bg-white-A700 flex flex-col items-start justify-start p-[58px] md:px-10 sm:py-[30px] rounded shadow-bs3 sm:px-[20px] sm:w-full">
                <a
                  href="javascript:"
                  className="ml-3.5 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-900_03 sm:text-xl"
                >
                  <div className="txtMontserratRomanBold24">Contact Us</div>
                </a>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <input id="fullname" name="fullname" className="form-control" placeholder="Name"
                           onChange={onNameChanged}
                           type="text" {...register("name")} required />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <input id="phone" name="phone" placeholder="Phone" className="form-control"
                           type="text" {...register("phone")}
                           required />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <input
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email" {...register("email")} className="form-control"
                      required
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <input
                      placeholder="Subject"
                      type="text"
                      autoComplete="new-email" {...register("subject")} className="form-control"
                      required
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <input
                      placeholder="Enter message"
                      autoComplete="new-email" {...register("contmessage")} className="form-control"
                      required
                      type="textarea"
                    />
                  </InputGroup>
                </FormGroup>

                <Button
                  className="cursor-pointer font-montserrat font-semibold py-[20px]  text-base text-center w-[198px] sm:w-full sm:p-[15px]"
                  shape="round"
                  color="blue_400"
                  size="sm"
                  variant="fill"
                  type="submit"
                >
                  Submit
                </Button>
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

export default ContactPage;
