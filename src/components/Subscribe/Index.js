import React, { useState } from "react";
import {
  Button,
  Img,
  Input,
  Text
} from "components";
import { useForm } from "react-hook-form";
import { addSubscriberAction } from "../../features/subscriberActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Index() {
  const [customError, setCustomError] = useState(null);
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const submitForm = (data) => {
    console.log(data);
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();

    dispatch(addSubscriberAction(data));
    setEmail("");
    setCustomError("Message submitted successfully.");
    navigate("/subscriberSuccess");

    //console.log(dispatch(addContactAction(data)));
  };
  return (
    <div className="bg-blue_gray-100_01 h-[373px] relative w-full">
      <Img
        className="h-[373px] m-auto object-cover w-full"
        src="images/img_bg29_373x1440.png"
        alt="bgTwentyNine"
      />
      <ul
        className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[45%] md:w-full common-column-list sm:px-[30px]">
        <li>
          <Text
            className="sm:text-[38px] md:text-[44px] text-[52px] text-white-A700 sm:text-2xl sm:text-center"
            size="txtMontserratRomanBold52"
          >
            Subscribe for daily tips
          </Text>
        </li>
        <li>
          <Text
            className="mt-3 text-base text-green-50 sm:text-sm sm:text-center"
            size="txtMontserratRomanRegular16"
          >
            Get the latest from our newsletters
          </Text>
        </li>
        <li>
          <div className="flex md:flex-col flex-row gap-[19px] items-start justify-start mt-10 md:w-full">
            <form onSubmit={handleSubmit(submitForm)}>
              <input
                placeholder="Type your email address..."
                className="font-montserrat py-[20px] px-[15px] p-0 rounded-[30px] placeholder:text-gray-500 text-base text-left w-full sm:p-[15px]"
                type="email"
                autoComplete="new-email" {...register("email")} color="blue_gray_50"
                size="sm"
                required
              />
              <Button
                className="cursor-pointer font-montserrat font-semibold py-[20px]  text-base text-center w-[198px] sm:w-full sm:p-[15px]"
                shape="round"
                color="blue_400"
                size="sm"
                variant="fill"
                type="submit"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Index;
