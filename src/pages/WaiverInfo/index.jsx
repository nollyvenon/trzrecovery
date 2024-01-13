import React, { useCallback, useState } from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Header from "../Header";
import Footer1 from "components/Footer1";
import Map from "components/Map/Index";
import Subscribe from "components/Subscribe/Index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addWaiverAction } from "../../features/WaiverActions";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const ourServicesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" }
];


const LandingPageTwoPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [fullname, setFullname] = useState("");
  const [guardian, setGuardian] = useState("");
  const [signature, setSignature] = useState("");
  const [customError, setCustomError] = useState(null);
  const [state, setState] = useState(null);
  const [email, setEmail] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    console.log(data);

    dispatch(addWaiverAction(data));
    setEmail("");
    setCustomError("Message submitted successfully.");
    navigate("/waiverSuccess");

    //console.log(dispatch(addContactAction(data)));
  };


  return (
    <>
      <Header />
      <div
        className="bg-gray-100 flex flex-col font-montserrat mt-[-103px] sm:gap-10 md:gap-10 gap-[76px] items-center justify-start mx-auto w-full">
        <div
          className="bg-gradient-to-b from-[rgba(18,45,66,0.81)] via-[rgba(18,45,66,0.2)] to-transparent flex flex-col items-center justify-start p-8 sm:px-5 w-full">
          <div className="flex flex-col justify-start max-w-[1200px] mb-0.5 mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-3.5 items-center justify-start mt-[200px] w-auto md:w-full sm:mt-[150px]">
              <Text
                className="capitalize text-2xl md:text-[22px] text-black-A700 sm:text-xl w-auto"
                size="txtMontserratRomanBold24WhiteA700"
              >
                WAIVER OF LIABILITY AND HOLD HARMLESS AGREEMENT

              </Text>
              <Text
                className=" text-gray-900 w-auto sm:text-2xl"
                size="txtMontserratRoman"
              >
                To enable us to ensure your comfort and safety in all services we provide, please, take time to
                carefully read this form and answer ALL QUESTIONS to your best ability.
                All provided information is CONFIDENTIAL and protected – we will never share it with any 3rd parties,
                unless required by law.

              </Text>
            </div>
          </div>
        </div>
        <div className="to-transparent flex flex-col items-center justify-start p-8 sm:px-5 w-full">
          <div className="flex flex-col justify-start max-w-[1200px] mb-0.5 mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-3.5 items-left justify-start mt-[50px] w-auto md:w-full sm:mt-[150px]">
              <Text
                className="capitalize text-2xl md:text-[22px] text-black-A700 sm:text-xl w-auto"
                size="txtMontserratRomanBold24WhiteA700"
              >
                Introduction. What is localized high impact cryotherapy
              </Text>
              <Text
                className=" text-gray-900 w-auto sm:text-2xl"
                size="txtMontserratRoman"
              >
                <p> For localized cryotherapy services, we use one of the newest and most effective technologies on the
                  market.</p><br></br>
                <p>The procedure includes spraying the treatment area with dry vapor of carbon dioxide (CO2), as cold as
                  -108° F, under pressure as high as 50 bar, in short 90-second increments. The combination of precise
                  targeting, extremely low temperatures, and strength of the flow result in more rapid and deeper
                  cooling of the affected tissue, producing better results faster. </p><br></br>
                <p>This technique is not considered a medical treatment, but rapid cooling of the skin and underlying
                  tissue can be used for pain management, stimulation of cell regeneration, tightening and brightening
                  of the skin, anti-aging facials, and reduction of stubborn fat deposits and cellulite.</p><br></br>
                <p>Thermal shock improves blood flow in the treatment area and helps reduce inflammation. If applied to
                  fat cells that are more sensitive to cold than any other cell in the body, cooling triggers a process
                  called cryolipolysis and results in apoptosis – controlled permanent destruction of subcutaneous fat
                  tissue.</p><br></br>
                <p>Localized cryotherapy is safe for most people, but some contraindications have been identified and
                  negative side effects are possible. Familiarizing yourself with the below information will help you
                  avoid unwanted consequences. </p>

                Please note that this list is indicative but not exhaustive - if you have any injury, illness, a serious
                medical condition, or a health-related concern, we strongly suggest consulting a physician prior to
                using localized high impact cryotherapy.


              </Text>
            </div>

            <div className="flex flex-col gap-3.5 items-left justify-start mt-[50px] w-auto md:w-full sm:mt-[150px]">
              <Text
                className="capitalize text-2xl md:text-[22px] text-black-A700 sm:text-xl w-auto"
                size="txtMontserratRomanBold24WhiteA700"
              >
                Part I. Advisements and contraindications
              </Text>
              <Text
                className=" text-gray-900 w-auto sm:text-2xl"
                size="txtMontserratRoman"
              >
                <p> Having any of the contraindications described in this document will require you to use discretion
                  for your own well-being. </p><br></br>
                <p>Cold applications can feel slightly uncomfortable and leave the skin pink for a short period
                  following the session, while the skin temperature is returning to normal, but there is no damage and
                  no recovery required. In case of experiencing burning sensation, pain, or significant discomfort at
                  any time during our treatments, we strongly advise you to terminate the session immediately upon your
                  own volition. </p><br></br>

              </Text>
            </div>

            <div className="flex flex-col gap-3.5 items-left justify-start mt-[50px] w-auto md:w-full sm:mt-[150px]">
              <Text
                className="capitalize text-2xl md:text-[22px] text-black-A700 sm:text-xl w-auto"
                size="txtMontserratRomanBold24WhiteA700"
              >
                Localized high impact cryotherapy for pain management

              </Text>
              <Text
                className=" text-gray-900 w-auto sm:text-2xl"
                size="txtMontserratRoman"
              >
                <p>We use a high-pressure flow of gas from CO2 to lower the tissue temperature in the treated area. The
                  process called cryostimulation causes constriction of the blood vessels in response to cold, followed
                  by dilation and improved blood flow post-treatment, reducing inflammation and swelling and stimulating
                  release of hormones like noradrenaline and Beta-Endorphins which are powerful natural pain killers.
                  Applications include athletic recovery, recovery from soft tissue, muscle, tendon, or overuse injuries
                  or surgery, and painful motion-limiting medical conditions.</p><br></br>
                <p>This treatment does not impose health risks but should NOT be applied to highly sensitive skin or
                  open wounds and should be avoided in case of cold allergies or any other cold-induced condition.</p>
                <br></br>
              </Text>
            </div>

            <div className="flex flex-col gap-3.5 items-left justify-start mt-[50px] w-auto md:w-full sm:mt-[150px]">
              <Text
                className="capitalize text-2xl md:text-[22px] text-black-A700 sm:text-xl w-auto"
                size="txtMontserratRomanBold24WhiteA700"
              >
                Localized high impact cryotherapy for fat freezing/ body sculpting

              </Text>
              <Text
                className=" text-gray-900 w-auto sm:text-2xl"
                size="txtMontserratRoman"
              >
                <p>In this process, we use a phenomenon called cryolipolysis. Cooling the problem areas to the point
                  when subcutaneous fat cells that are very sensitive to low temperatures get damaged and die leads to
                  gradual slimming. Post-treatment, the body uses the lymphatic system to permanently expel the damaged
                  cells. </p><br></br>
                <p>Because of the strain that the need to eliminate the cellular debris puts on the body, you should NOT
                  do fat freezing treatments if you are pregnant, undergoing dialysis, having only one kidney or any
                  type of kidney or liver disease, or impaired circulatory system. Being oversensitive or allergic to
                  cold, having active cancer, or going through chemotherapy are also contraindicated.
                </p><br></br>
              </Text>
            </div>

            <div className="flex flex-col gap-3.5 items-left justify-start mt-[50px] w-auto md:w-full sm:mt-[150px]">
              <Text
                className="capitalize text-2xl md:text-[22px] text-black-A700 sm:text-xl w-auto"
                size="txtMontserratRomanBold24WhiteA700"
              >
                High impact cryo facials

              </Text>
              <Text
                className=" text-gray-900 w-auto sm:text-2xl"
                size="txtMontserratRoman"
              >
                <p>Cold applied to the face, neck, or decolletage causes blood vessels to constrict, then dilate,
                  improving circulation and making the skin look firmer and better toned. The process also soothes
                  inflammation, helps fight bacterial infections like acne and stimulates collagen production that has
                  an anti-aging effect. </p><br></br>
                <p>You should NOT use cold if you are cold-intolerant or your skin is highly sensitised by sun or
                  treatments like chemical peels. You should take a 2-week break after procedures like Botox or
                  fillers. </p><br></br>
              </Text>
            </div>

            <div className="flex flex-col gap-3.5 items-left justify-start mt-[50px] w-auto md:w-full sm:mt-[150px]">
              <Text
                className="capitalize text-2xl md:text-[22px] text-black-A700 sm:text-xl w-auto"
                size="txtMontserratRomanBold24WhiteA700"
              >
                Part II. Liability waiver


              </Text>
              <Text
                className=" text-gray-900 w-auto sm:text-2xl"
                size="txtMontserratRoman"
              >
                <p>In consideration of using the localized cryotherapy services offered by TRZ Recovery and by filling
                  out and signing this Intake Form prior to or during your first visit, you have acknowledged the
                  following:</p><br></br>
                <p>You have been truthful in disclosing your current health condition, as well as past health-related
                  events, including but not limited to the ones listed as definite contraindications.</p><br></br>
                <p>You understand that the services provided by TRZ Recovery, although they may have certain health
                  benefits, have been designed to enhance health, appearance and vitality in generally healthy
                  individuals. You have been advised that all services have contraindications and that you should ONLY
                  use any treatments if you either don’t have the related risks or have discussed these risks with your
                  doctor and obtained their written consent.</p><br></br>
                <p>You recognize the importance of informing TRZ Recovery personnel about any changes in your health
                  condition, including pregnancy, as they may compromise effectiveness and/or safety of the services you
                  will be receiving. </p><br></br>
                <p>You are aware of the need to postpone your appointments with TRZ Recovery if you are feeling sick and
                  have symptoms like fever, congestion, cough, shortness of breath, chest pain, dizziness, nausea, rash,
                  or if you get an acute infection of any kind. </p><br></br>
                <p>You have been informed that results, especially when it comes to fat loss, cellulite, or aging, are
                  not always immediate, and some benefits will continue to develop over weeks, or even months,
                  post-treatment. Because your body and lifestyle are unique, so will be your progress. In some cases,
                  treatment may not be successful, especially if you fail to follow treatment number and frequency
                  recommendations given to you by TRZ Recovery staff. Commitment to minimum 5 sessions followed by a
                  proper maintenance protocol is paramount for success. </p><br></br>
                <p>You consent to commit to promptly following all safety and other behaviour- and treatment-related
                  instructions posted through the studio or given to you by TRZ Recovery personnel.</p><br></br>
                <p>You accept the responsibility to immediately inform TRZ Recovery if you feel discomfort or experience
                  any adverse effects from any treatment that you are undergoing, as they may indicate the need to
                  discontinue the service.</p><br></br>
                <p>You confirm that you have been explained and understand the administration of the localized high
                  impact cryotherapy services provided by TRZ Recovery, including possible adverse reactions, side
                  effects, or complications. They are rare, but, when extreme cold is involved, minor frostbites may
                  occur and may lead to long-term sensitivity of the affected area to heat or cold post-event. </p>
                <br></br>
                <p>Based on the above, YOU VOLUNTARILY ASSUME FULL RESPONSIBILITY for engaging in the said services and
                  AGREE TO INDEMNIFY AND HOLD TRZ Recovery HARMLESS from any consequences and related costs that may
                  incur due to your use of any of the treatments.</p><br></br>
                <p>You also acknowledge that you have been given no warranty or guarantee of any particular results. You
                  understand that the outcome depends not only on the treatments, but also diet, lifestyle choices and
                  numerous other factors outside TRZ Recovery control.</p><br></br>
              </Text>
            </div>

            <div className="flex flex-col gap-3.5 items-left justify-start mt-[50px] w-auto md:w-full sm:mt-[150px]">
              <Text
                className="capitalize text-2xl md:text-[22px] text-black-A700 sm:text-xl w-auto"
                size="txtMontserratRomanBold24WhiteA700"
              >
                Part III. Consent to use the clinical photographs

              </Text>
              <Text
                className=" text-gray-900 w-auto sm:text-2xl"
                size="txtMontserratRoman"
              >
                <p>Except for pain management, clinical photographs play a key role in monitoring your progress over the
                  weeks of treatment and education of our staff. They also help inform equipment suppliers in the
                  process of continuous development of new applications and better technologies. </p><br></br>
                <p>Different types of consent are required according to the way in which clinical images will be used.
                  Please CHOOSE ONE of the below. If you do not fully understand what each option implies, please ask.
                  Please note that we must take photographs to monitor your progress; so, at least the lowest level of
                  consent (case notes) is REQUIRED.</p><br></br>
                <p>Your choice of consent level will not affect your treatment in any way. </p><br></br>

                <p>_____ CONSENT TO OPEN PUBLICATION. I give my consent to ANONYMOUS publication of my progress images
                  in a journal, textbook, marketing materials or open access websites which may be seen by wellness
                  professionals outside TRZ Recovery, as well as members of the general public. Anonymity means focusing
                  only on the treated body part and not showing my full face or disclosing my name. </p><br></br>
                <p>_____ CONSENT TO RESTRICTED EDUCATIONAL USE. I agree with ANONYMOUS use of my progress images only by
                  professionals for the purposes of cryotherapy research and education of people seeking to become
                  professionals. Anonymity means focusing only on the treated body part and not showing my full face or
                  disclosing my name. </p><br></br>
                <p>_____ CONSENT TO CASE NOTES ONLY. I understand that the illustrations requested here, to which I have
                  agreed, will only form part of my confidential treatment records and will be used by nobody but the
                  TRZ Recovery staff directly involved in providing the services of my choice.</p><br></br>
              </Text>
            </div>
            <form onSubmit={handleSubmit(submitForm)}>
              <div
                className="flex flex-col gap-3.5 items-left justify-start mt-[50px] w-auto md:w-full sm:mt-[150px] mt-4">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-black-A700 sm:text-xl w-auto"
                  size="txtMontserratRomanBold24WhiteA700"
                >
                  Authorization, waiver, and consent
                </Text>
                <Text
                  className=" text-gray-900 w-auto sm:text-2xl mt-4"
                  size="txtMontserratRoman"
                >
                  <p>I am: <Input
                    id="fullname"
                    placeholder="Enter Name"
                    className="font-light leading-[normal] p-0 placeholder:text-gray-500_01 text-left text-sm w-full"
                    wrapClassName="border border-gray-300_01 border-solid rounded w-full"
                    type="text"
                    color="white_A700_01"
                    size="xs"
                    variant="fill"
                    onChange={(data) => setFullname(data)}
                    {...register("fullname")} required
                  ></Input> the client
                    <div className="col-md-6 mt-4">
                      <Input
                        id="guardian"
                        placeholder="Enter Guardian"
                        className="font-light leading-[normal] p-0 placeholder:text-gray-500_01 text-left text-sm w-full"
                        wrapClassName="border border-gray-300_01 border-solid rounded w-full"
                        type="text"
                        color="white_A700_01"
                        size="xs"
                        variant="fill"
                        onChange={(data) => setGuardian(data)}
                        {...register("guardian")} required
                      ></Input>
                    </div>a parent/legal guardian of the client under 18
                  </p>
                  <br></br>
                  <p>I hereby confirm that all information provided by me herein is correct to the best of my knowledge,
                    and I have disclosed all health-related risk factors that I know of. I understand that treatment
                    safety may depend on my health status.</p><br></br>
                  <p>By signing this document, I CONFIRM THAT I HAVE READ, UNDERSTOOD AND AGREED with the
                    treatment-related risks, liability waiver, and provisions of TRZ Recovery Service Terms and
                    Conditions. </p><br></br>
                  <p>By signing this document, I ALSO CONFIRM THAT I HAVE BEEN EXPLAINED AND AGREE with the choice of
                    consent level related to the use of the “before” and “after” photographs. </p><br></br>
                  <p>I am aware that, to withdraw my earlier given consent that I could do any time without any impact
                    on the services I will be receiving, I must request it in writing.</p><br></br>
                </Text>
              </div>


              <div className="row">
                <div className="form-group">
                  <div className="col-md-6 mt-4">

                    <Input
                      id="signature"
                      placeholder="Enter Signature"
                      className="font-light leading-[normal] p-0 placeholder:text-gray-500_01 text-left text-sm w-full "
                      wrapClassName="border border-gray-300_01 border-solid rounded w-full"
                      type="text"
                      color="white_A700_01"
                      size="xs"
                      variant="fill"
                      {...register("signature")} required
                      onChange={(data) => setSignature(data)}
                    ></Input>
                  </div>
                  <div className="col-md-4 mt-4">
                    Date:
                    <DatePicker selected={startDate}
                                id="date"
                                {...register("startDate")} required
                                className="font-light leading-[normal] p-0 placeholder:text-gray-500_01 text-left text-sm w-full "
                                wrapClassName="border border-gray-300_01 border-solid w-full"
                                onChange={(date) => setStartDate(date)} />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Button
                  className="cursor-pointer font-semibold h-[60px] leading-[normal] mb-[3px] md:ml-[0] ml-[0px] mt-10 text-base text-center w-[294px] sm:w-[200px] "
                  shape="round"
                  color="blue_gray_900_03"
                  size="sm"
                  variant="fill"
                  type="submit"
                >
                  Submit
                </Button>
              </div>

            </form>


          </div>
        </div>

      </div>
      <Subscribe />
      <Map />
      <Footer1 />
    </>
  );
};

export default LandingPageTwoPage;
