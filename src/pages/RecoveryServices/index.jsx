import React from "react";

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
import Header from '../Header';
import Map from "components/Map/Index";
import Subscribe from "components/Subscribe/Index";
import Testimonial from 'components/Testimonial'
import Footer1 from "components/Footer1";

const LandingPageCryotherapyTherapyPage = () => {
  return (
    <>
      < Header />
        <div className="h-[762px] flex w-full bg-blue_gray-900_03 mt-[-103px] sm:flex-col-reverse sm:h-[auto] sm:px-[30px] sm:pb-[40px] sm:gap-7">
            <Img
              className="h-[762px] w-[843px] object-cover sm:w-full sm:h-[400px]"
              src="images/Picture1.png"
              alt="rectangle"
            />
            
                
              <div className="flex flex-col gap-4 items-start justify-start pt-[232px] pl-[120px] pr-[172px] sm:px-[0px] sm:pt-[200px]">
                <Text
                  className="leading-[136.00%] md:text-5xl text-7xl text-white-A700 w-full sm:text-3xl"
                  size="txtMontserratRomanSemiBold72WhiteA700"
                >
                  <span className="text-blue-400">
                    Recovery 
                  </span><br/>
                  Services
                </Text>
                <Text
                  className="leading-[145.00%] font-montserrat font-thin text-gray-100 text-xl w-[89%] sm:w-[100%] sm:text-lg"
                  size=""
                >
                  The cryotherapy machine uses pressurized CO2 gas to target a
                  local area of the body and cause “thermal shock.” The sudden
                  decrease in temperature rapidly activates the body’s healing
                  response to relax muscles, promote flow of blood and
                  nutrients, and reduce pain. You’ll be amazed how quickly
                  cryotherapy treatment can reduce your pain and speed your
                  recovery!
                </Text>
              </div>
        </div>

        <div className="bg-gray-100 flex flex-col items-start justify-end md:pr-10 sm:pr-5 pr-[66px] py-[66px] w-full sm:px-[30px] sm:pb-[0px]">
          <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start mt-[13px] w-[97%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[120px] justify-start w-[55%] md:w-full">
              <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[120px] w-auto sm:w-full">
                <Text
                  className="text-blue_gray-900 text-sm uppercase w-auto"
                  size="txtMontserratRomanRegular14"
                >
                  Effects
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto sm:text-3xl"
                  size="txtMontserratRomanSemiBold36"
                >
                  <span className="text-gray-900 font-montserrat text-left font-semibold">
                    Cryotherapy{" "}
                  </span>
                  <span className="text-blue-400 font-montserrat text-left font-semibold">
                    Principal
                  </span>
                  <span className="text-gray-900 font-montserrat text-left font-semibold">
                    {" "}
                    Effects
                  </span>
                </Text>
              </div>
              <Img
                className="h-[674px] sm:h-auto mr-14 object-cover w-[93%] md:w-full"
                src="images/img_image11.png"
                alt="imageEleven"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-2 md:mt-0 mt-[100px] w-[45%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="bg-blue_gray-900_03 flex flex-col gap-6 items-start justify-center p-3.5 rounded-lg shadow-bs2 w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center ml-1 md:ml-[0] mt-12 w-[70px]"
                    shape="circle"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_nounhealth3214394.svg"
                      alt="nounhealth32143"
                    />
                  </Button>
                  <div className="flex flex-col gap-1.5 items-start justify-start mb-[41px] w-auto">
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                      size="txtMontserratRomanSemiBold22"
                    >
                      Anti-inflammatory
                    </Text>
                    <Text
                      className="leading-[145.00%] max-w-[259px] md:max-w-full text-gray-100 text-xl sm:text-sm"
                      size="txtMontserratRomanRegular20Gray100"
                    >
                      Reduces the temperature and metabolic rate of wounded
                      tissue to constrict blood vessels, limiting blood flow and
                      reducing edema.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-6 items-start justify-center p-[17px] rounded-lg w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center mt-[45px] w-[70px]"
                    shape="circle"
                    color="blue_gray_900_03"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_nounanalgesic5737276.svg"
                      alt="nounanalgesicFiftySeven"
                    />
                  </Button>
                  <div className="flex flex-col gap-1.5 items-start justify-start mb-24 w-auto">
                    <Text
                      className="text-[22px] text-gray-900_01 sm:text-lg md:text-xl w-auto"
                      size="txtMontserratRomanSemiBold22Gray90001"
                    >
                      Analgesic
                    </Text>
                    <Text
                      className="leading-[145.00%] max-w-[253px] md:max-w-full text-blue_gray-900_02 text-xl  sm:text-sm"
                      size="txtMontserratRomanRegular20Bluegray90002"
                    >
                      Slows nerve signal transmission to decrease pain impulse
                      transmission.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start w-full mt-[58px] sm:mt-[0px]">
                <div className="bg-white-A700 flex flex-col gap-6 items-start justify-center p-[17px] rounded-lg w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center mt-[45px] w-[70px]"
                    shape="circle"
                    color="blue_gray_900_03"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_nounmuscle5300413.svg"
                      alt="nounmuscle53004"
                    />
                  </Button>
                  <div className="flex flex-col gap-1.5 items-start justify-start mb-24 w-auto">
                    <Text
                      className="text-[22px] text-gray-900_01 sm:text-lg md:text-xl w-auto"
                      size="txtMontserratRomanSemiBold22Gray90001"
                    >
                      Muscle relaxant
                    </Text>
                    <Text
                      className="leading-[145.00%] max-w-[253px] md:max-w-full text-blue_gray-900_02 text-xl  sm:text-sm"
                      size="txtMontserratRomanRegular20Bluegray90002"
                    >
                      Reduces muscle spasms and enhances pain and healing by
                      slowing nerve activity.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-6 items-start justify-center p-[17px] rounded-lg w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center mt-[45px] w-[70px]"
                    shape="circle"
                    color="blue_gray_900_03"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_nounthermometer1066112.svg"
                      alt="nounthermometer"
                    />
                  </Button>
                  <div className="flex flex-col gap-1.5 items-start justify-start mb-24 w-auto">
                    <Text
                      className="text-[22px] text-gray-900_01 sm:text-lg md:text-xl w-auto"
                      size="txtMontserratRomanSemiBold22Gray90001"
                    >
                      Vasomotor
                    </Text>
                    <Text
                      className="leading-[145.00%] max-w-[253px] md:max-w-full text-blue_gray-900_02 text-xl  sm:text-sm"
                      size="txtMontserratRomanRegular20Bluegray90002"
                    >
                      The Cryotherapy promotes healthy blood flow and can reduce
                      damaging blood vessel constriction.
                    </Text>
                  </div>
                </div>
              </div>
            </List>
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
        
        <div className="bg-gray-100 flex flex-col items-start justify-end p-[66px] md:px-10 sm:px-5 w-full sm:pb-0">
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[79px] mt-[13px] w-auto sm:w-full">
            <Text
              className="text-blue_gray-900 text-sm uppercase w-auto"
              size="txtMontserratRomanRegular14"
            >
              TREATMENT
            </Text>
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto sm:text-3xl"
              size="txtMontserratRomanSemiBold36"
            >
              <span className="text-gray-900 font-montserrat text-left font-semibold">
                What it{" "}
              </span>
              <span className="text-blue-400 font-montserrat text-left font-semibold">
                Treats
              </span>
            </Text>
          </div>
          <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center max-w-[1200px] mt-5 mx-auto w-full">
            <Img
              className="flex-1 h-[466px] md:h-auto object-cover rounded-[16px] w-full sm:-h-[300px]"
              src="images/img_frame51.png"
              alt="frameFiftyOne"
            />
            <Img
              className="flex-1 h-[466px] md:h-auto object-cover rounded-[16px] w-full sm:-h-[300px]"
              src="images/img_frame53.png"
              alt="frameFiftyThree"
            />
            <Img
              className="flex-1 h-[466px] md:h-auto object-cover rounded-[16px] w-full sm:-h-[300px]"
              src="images/img_frame54.png"
              alt="frameFiftyFour"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-center justify-center md:ml-[0] ml-[258px] mt-6 w-auto md:w-full">
            <Img
              className="h-[466px] sm:h-auto object-cover rounded-[16px] w-96 md:w-full sm:-h-[300px]"
              src="images/img_frame51_466x384.png"
              alt="frameFiftyOne_One"
            />
            <Img
              className="h-[466px] sm:h-auto object-cover rounded-[16px] w-96 md:w-full sm:-h-[300px]"
              src="images/img_frame54_466x384.png"
              alt="frameFiftyFour_One"
            />
            <Img
              className="h-[466px] sm:h-auto object-cover rounded-[16px] w-96 md:w-full sm:-h-[300px]"
              src="images/Picture2.png"
              alt="frameFiftyFour_One"
            />
          </div>
        </div>

        <div className="h-[562px] flex w-full bg-blue_gray-900_03 mt-5 sm:flex-col-reverse sm:h-[auto] sm:px-[30px] sm:pb-[40px] sm:gap-7">
            <Img
              className="h-[562px] w-[543px] object-cover sm:w-full sm:h-[400px]"
              src="images/Picture5.jpg"
              alt="Compression Therapy"
            />
                
            <div className="flex flex-col gap-4 items-start justify-start pt-[62px] pl-[120px] pr-[172px] sm:px-[0px] sm:pt-[200px]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto sm:text-3xl"
                size="txtMontserratRomanSemiBold36"
              >
                <span className="text-blue-400 font-montserrat text-left font-semibold">
                Compression 
                </span><br/>
                Therapy
              </Text>
              <Text
                className="leading-[145.00%] font-montserrat font-thin text-gray-100 text-xl w-[89%] sm:w-[100%] sm:text-lg"
                size=""
              >
                Compression therapy involves applying compression to tight, stiff, and sore muscles. Typically, compression therapy is usually for the limbs, but some methods help you compress the entire body.
              When you apply compression to a specific body part, it causes an increase in circulation to the affected area. As a result, blood flow improves to the affected muscle group, flooding the tissue with oxygenated, nutrient-rich blood that helps repair the damage to the tissues.
Compression therapy is an old practice, and many athletes wear compression sleeves to support joints and muscles, preventing injury.
              </Text>
            </div>
        </div>

        <div className="h-[1200px] flex w-full  mt-5 sm:flex-col-reverse sm:h-[auto] sm:px-[30px] sm:pb-[40px] sm:gap-7">
            <Img
              className="h-[582px] object-cover w-full sm:h-[400px]"
              src="images/Picture8.jpg" 
              alt="Compression Therapy"
            />
                
            <div className="flex flex-col gap-4 items-start justify-start pt-[62px] pl-[120px] pr-[172px] sm:px-[0px] sm:pt-[200px]">
              <Text
                className="leading-[100.00%] md:text-4xl text-5xl text-black-A800 w-full sm:text-3xl"
                size="txtMontserratRomanSemiBold52BlackA600"
              >
                <span className="text-blue-400 font-montserrat text-left font-semibold">
                What are the Benefits of
                </span><br/>
                Compression Therapy? 
              </Text>
              <Text
                className="leading-[145.00%] font-montserrat  text-xl w-[89%] sm:w-[100%] sm:text-lg "
                size=""
              >
              <p>Including compression therapy with your recovery strategy yields impressive results. There are plenty of benefits to compression therapy, and here are our top reasons why you should consider including it in your recovery strategy.</p>
              <Text className="md:text-4xl text-4xl text-blue-400 mt-4 w-full sm:text-3xl font-semibold" 
                    size="txtMontserratRomanSemiBold62BlueA700">Fast-Track Recovery</Text>
                <p>Applying compression therapy post-workout reduces the time it takes the muscular and nervous systems to recover from the effects of workout-induced stress. The increase in circulation helps to drive blood to the muscles, fast-tracking your recovery. With regular use of compression therapy, you avoid injury and improve your recovery time.</p>
                <Text className="md:text-4xl text-4xl text-blue-400 mt-4 w-full sm:text-3xl font-semibold" 
                    size="txtMontserratRomanSemiBold62BlueA700">Remove Lactic Acid</Text>
                <p>When we train, the muscles start to fill with lactic acid as a byproduct of metabolism and effort to use the muscular system. This lactic acid buildup results in a feeling of stiffness and soreness in the muscles. Compression therapy pushes this lactic acid out of the muscular system, where the lymphatic system clears it from the body.</p>
                <Text className="md:text-4xl text-4xl text-blue-400 mt-4 w-full sm:text-3xl font-semibold" 
                    size="txtMontserratRomanSemiBold62BlueA700">
                        Improve Healing Time</Text>
                <p>If you have an injury, compression therapy will accelerate your healing time. Applying compression to a joint or muscle supports it, preventing the worsening of the injury. The compression also improves circulation, speeding up your healing time.</p>
                <Text className="md:text-4xl text-4xl text-blue-400 mt-4 w-full sm:text-3xl font-semibold" 
                    size="txtMontserratRomanSemiBold62BlueA700">Remove Stiffness and Soreness</Text>
                <p>If you find yourself needing a wheelchair after your last squat workout, consider signing up for some compression therapy. The compressive effect helps loosen up your muscular system, relieving the pain and stiffness associated with hard exercise. You’ll find you recover faster from hard workouts, allowing you to increase performance and hit that PR in the gym.</p>
                <p>Cryotherapy is a treatment that exposes the body to extremely cold temperatures for a short period of time.</p>
                <p>The Cryotherapy device uses pressurized CO2 gas at -110º F to target a local area of the body and cause</p>
                <b>"thermal shock".</b> The sudden decrease in temperature rapidly activates the body's healing responses via <b>Four Principal Effects:</b>
                <li><b>Vasomotor:</b> Vasoconstriction during treatment causes local blood to leave the area carrying away inflammatory waste. Vasodilation immediately after treatment allows blood enriched with oxygen and nutrients to rush to the site.</li>
                <li><b>Analgesic:</b> Slows nerve signal transmission to decrease pain</li>
                <li><b>Muscle Relaxant:</b> Reduces muscle spasms and promotes healing by slowing nerve activity</li>
                <li><b>Anti-Inflammatory:</b> Reduces the temperature and metabolic rate of wounded tissue to cause vasoconstriction leading to decreased blood flow and reducing edema.</li>
                <li>Our certified practitioners will work with you to determine whether cryotherapy is appropriate for your specific needs and develop a personalized treatment plan tailored to your goals.</li>

              </Text>
            </div>
        </div>

        


      <Testimonial />
      <Subscribe />
      <Map />
      <Footer1 />

    </>
  );
};

export default LandingPageCryotherapyTherapyPage;
