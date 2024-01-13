import React from "react";
import Map from "components/Map/Index";
import Subscribe from "components/Subscribe/Index";
import Testimonial from 'components/Testimonial'
import {
  Img,
  Text,Button,List,
} from "components";


import Footer1 from "components/Footer1";
import Header from '../Header';


const LandingPageCompressionTherapyPage = () => {
  return (
    <><Header />
      <div className="h-[762px] flex w-full bg-blue_gray-900_03 mt-[-103px] sm:flex-col sm:h-[auto] sm:justify-center sm:items-center sm:pb-[80px]">
              <div className="flex flex-col gap-4 items-start justify-start pt-[232px] pl-[120px] pr-[142px] pb-[80px] sm:px-[30px] sm:pt-[150px] sm:pb-[40px]">
                <Text
                  className="leading-[136.00%] md:text-5xl text-7xl text-white-A700 w-full sm:text-4xl"
                  size="txtMontserratRomanSemiBold72WhiteA700"
                >
                  <span className="text-blue-400">
                  Your Effective,  
                  </span><br/>
                  Gentle Beauty Solution
                </Text>
                <Text
                  className="leading-[145.00%] font-montserrat font-thin text-gray-100 text-xl w-[89%] sm:w-full sm:text-lg"
                  size=""
                >
                  The sudden decrease in temperature rapidly activates the body’s healing response to remove toxins from the skin, promote growth of healthy collagen fibers, contours the body, and reduces fat through Cryolipolysis. Even tightens skin and reduces face puffiness! You’ll be amazed what even 5 minutes of cryotherapy can do for your skin and overall health!

                </Text>
              </div>
              <Img
                className="h-[762px] w-[543px] object-cover sm:h-[400px] sm:w-[82%]"
                src="images/Rectangle.png"
                alt="rectangle"
              />
  
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
                className="h-[974px] sm:h-auto mr-14 object-cover w-[93%] md:w-full"
                src="images/Picture1.jpg"
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
                      Wrinkle reduction
                    </Text>
                    <Text
                      className="leading-[145.00%] md:max-w-full text-gray-100 text-xl sm:text-sm"
                      size="txtMontserratRomanRegular20Gray100"
                    >
                      Cryotherapy relaxes the muscles of the face, reducing wrinkles without the need for injections.
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
                      Anti-Inflammatory
                    </Text>
                    <Text
                      className="leading-[145.00%] md:max-w-full text-blue_gray-900_02 text-xl  sm:text-sm"
                      size="txtMontserratRomanRegular20Bluegray90002"
                    >
                      Cryotherapy reduces inflammation through cooling the skin and clearing toxins from your blood, additionally decreasing itching and feeling hot. Continued treatments boost the immune response to fight acne-causing bacteria.

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
                      Antioxidant effect
                    </Text>
                    <Text
                      className="leading-[145.00%] md:max-w-full text-blue_gray-900_02 text-xl  sm:text-sm"
                      size="txtMontserratRomanRegular20Bluegray90002"
                    >
                      Cryotherapy positively affects blood flow to promote delivery of antioxidants and other healing materials to the skin to reduce and prevent aging.

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
                      Fat reduction
                    </Text>
                    <Text
                      className="leading-[145.00%] md:max-w-full text-blue_gray-900_02 text-xl  sm:text-sm"
                      size="txtMontserratRomanRegular20Bluegray90002"
                    >
                     Cryotherapy is the perfect tool for body sculpting and fat reduction by safely targeting fat cells. Through the use of cold treatment, Cryolipolysis (commonly referred to as fat freezing) targets specific areas of fat deposits or bulges that do not respond to diet and exercise.

                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>

        <div className="h-[562px] flex w-full bg-blue_gray-900_03 mt-5 sm:flex-col-reverse sm:h-[auto] sm:px-[30px] sm:pb-[40px] sm:gap-7">
            <Img
              className="h-[562px] w-[543px] object-cover sm:w-full sm:h-[400px]"
              src="images/Picture9.jpg"
              alt="Compression Therapy"
            />
                
            <div className="flex flex-col gap-4 items-start justify-start pt-[62px] pl-[120px] pr-[142px] sm:px-[0px] sm:pt-[200px]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[39px] text-gray-900 w-auto sm:text-3xl"
                size="txtMontserratRomanSemiBold36"
              >
                <span className="text-blue-400 font-montserrat text-left font-semibold">
                CryoFacials 
                </span><br/>
                & CryoSlimming 
              </Text>
              <Text
                className="font-montserrat font-thin text-gray-100 text-xl w-[89%] sm:w-[100%] sm:text-lg"
                size=""
              >
               <span className="font-montserrat text-left font-semibold mt-4">Natural Slimming with the use of Cold...</span><br></br>

                <p><span className="font-montserrat text-left mt-5">The cryotherapy machine uses pressurized CO2 gas to target a local area of the body and cause “thermal shock.” The sudden decrease in temperature rapidly activates the body’s healing response.</span></p>
                <li>Remove toxins from the skin</li>
                <li>promote growth of healthy collagen fibers</li>
                <li>contours the body</li>
                <li>Reduces fat through Cryolipolysis.</li>

              </Text>
            </div>
        </div>

        <div className="h-[562px] flex w-full bg-blue_gray-900_03 mt-5 sm:flex-col-reverse sm:h-[auto] sm:px-[30px] sm:pb-[40px] sm:gap-7">
            <Img
              className="h-[562px] w-[543px] object-cover sm:w-full sm:h-[400px]"
              src="images/Picture10.jpg"
              alt="Compression Therapy"
            />
                
            <div className="flex flex-col gap-4 items-start justify-start pt-[62px] pl-[120px] pr-[142px] sm:px-[0px] sm:pt-[200px]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[39px] text-gray-900 w-auto sm:text-3xl"
                size="txtMontserratRomanSemiBold36"
              >
                <span className="text-blue-400 font-montserrat text-left font-semibold">
                The Benefits Of Cryotherapy  
                </span><br/>
                For Skin And Body
              </Text>
              <Text
                className="font-montserrat font-thin text-gray-100 text-xl w-[89%] sm:w-[100%] sm:text-lg"
                size=""
              >
               <span className="font-montserrat text-left font-semibold mt-[40px]">How it works:</span><br></br>

                The Cryotherapy device uses pressurized CO2 to target a local area and cause thermal shock and cryolypolysis – a treatment used that could reduce fat cells by freezing within the temperature range of 24 to 41 degrees Fahrenheit. The cold treatment causes apoptosis, or cell death, of subcutaneous fat tissues. Results can be seen immediately, although the injured fat cells are gradually eliminated by the body as the cells breakdown. This can take up to 72 hours post-treatment. Following a full course of treatment, cells will continue to breakdown up to 4 to 6 weeks.

              </Text>
            </div>
        </div>
        

      <div className="bg-gray-100 flex flex-col font-montserrat items-center justify-start mx-auto">
       
        <div className="bg-gray-100 flex flex-col items-center justify-end p-[72px] md:px-10 sm:px-5 w-full sm:pb-[20px]">
          <div className="flex flex-col  items-center justify-start max-w-[1200px] mt-[7px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full sm:flex-col-reverse sm:gap-5 mb-[140px]">
              <Img
                className="h-[50%] md:h-auto object-cover rounded-bl-lg rounded-tl-lg rounded-tr-lg rounded-br-lg"
                src="images/Picture3.jpg"
                alt="frameFortyTwo"
              />

              <Img
                className="h-[50%] md:h-auto object-cover rounded-bl-lg rounded-tl-lg rounded-tr-lg rounded-br-lg ml-5"
                src="images/Picture4.jpg"
                alt="frameFortyTwo"
              />
              
            </div>



            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full mb-[63px] sm:gap-5 sm:mb-[40px]">
              <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-full">
                <Text
                  className="text-blue_gray-900 text-sm uppercase w-auto"
                  size="txtMontserratRomanRegular14"
                >
                  Benefits
                </Text>
                <Text
                  className="max-w-[100%] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 sm:text-2xl"
                  size="txtMontserratRomanSemiBold36"
                >
                  <span className="text-gray-900 font-montserrat text-left font-semibold">
                    What are the Benefits of{" "}
                  </span>
                  <span className="text-blue-400 font-montserrat text-left font-semibold">
                    Compression
                  </span>
                  <span className="text-gray-900 font-montserrat text-left font-semibold">
                    {" "}
                    Therapy?
                  </span>
                </Text>
              </div>
              <Text
                className="max-w-[50%] leading-[150.00%] md:mt-0 mt-5 text-blue_gray-900_02 text-xl sm:max-w-full"
                size="txtMontserratRomanRegular20Bluegray90002"
              >
                Including compression therapy with your recovery strategy yields
                impressive results. There are plenty of benefits to compression
                therapy, and here are our top reasons why you should consider
                including it in your recovery strategy.
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full sm:flex-col-reverse sm:gap-5">
              <Img
                className="h-[519px] md:h-auto object-cover rounded-bl-lg rounded-tl-lg rounded-tr-lg"
                src="images/img_frame42.png"
                alt="frameFortyTwo"
              />
              <div className="flex sm:flex-1 flex-col gap-3 items-start justify-start md:mt-0 mt-[26px] w-auto sm:w-full ">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto sm:text-2xl"
                  size="txtMontserratRomanSemiBold48Gray900"
                >
                  Fast-Track Recovery
                </Text>
                <Text
                  className="leading-[150.00%] md:max-w-full max-w-lg text-blue_gray-900_02 text-xl sm:text-lg"
                  size="txtMontserratRomanRegular20Bluegray90002"
                >
                  Applying compression therapy post-workout reduces the time it
                  takes the muscular and nervous systems to recover from the
                  effects of workout-induced stress. The increase in circulation
                  helps to drive blood to the muscles, fast-tracking your
                  recovery. With regular use of compression therapy, you avoid
                  injury and improve your recovery time.
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full sm:mt-10 sm:gap-5">
              <div className="flex sm:flex-1 flex-col gap-3 items-start justify-start md:mt-0 mt-[83px] w-auto sm:w-full ">
                <Text
                  className="leading-[145.00%] text-5xl sm:text-[38px] md:text-[44px] text-gray-900 sm:text-2xl"
                  size="txtMontserratRomanSemiBold48Gray900"
                >
                  <span className="text-gray-900 font-montserrat text-left font-semibold">
                    Remove{" "}
                  </span>
                  <span className="text-blue-400 font-montserrat text-left font-semibold">
                    Stiffness
                  </span>
                  <span className="text-gray-900 font-montserrat text-left font-semibold">
                    <>
                      {" "}
                      <br />&{" "}
                    </>
                  </span>
                  <span className="text-blue-400 font-montserrat text-left font-semibold">
                    Soreness
                  </span>
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[505px] md:max-w-full text-blue_gray-900_02 text-xl sm:text-lg"
                  size="txtMontserratRomanRegular20Bluegray90002"
                >
                  <span className="text-blue_gray-900_02 font-montserrat text-left font-normal">
                    If you find yourself needing a wheelchair after your last
                    squat workout, consider signing up for some compression
                    therapy. The compressive effect helps{" "}
                  </span>
                  <span className="text-blue_gray-900_02 font-montserrat text-left font-normal">
                    loosen up your muscular system
                  </span>
                  <span className="text-blue_gray-900_02 font-montserrat text-left font-normal">
                    , relieving the pain and stiffness associated with hard
                    exercise. You’ll find you recover faster from hard workouts,
                    allowing you to increase performance and hit that PR in the
                    gym.
                  </span>
                </Text>
              </div>
              <Img
                className="h-[519px] md:h-auto object-cover rounded-bl-lg rounded-br-lg rounded-tr-lg"
                src="images/img_frame43.png"
                alt="frameFortyThree"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full sm:mt-10 sm:flex-col-reverse sm:gap-5">
              <Img
                className="h-[519px] md:h-auto object-cover rounded-bl-lg rounded-tl-lg rounded-tr-lg "
                src="images/img_frame44.png"
                alt="frameFortyFour"
              />
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto sm:text-2xl"
                  size="txtMontserratRomanSemiBold48Gray900"
                >
                  Remove Lactic Acid
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[488px] md:max-w-full text-blue_gray-900_02 text-xl sm:text-lg"
                  size="txtMontserratRomanRegular20Bluegray90002"
                >
                  When we train, the muscles start to fill with lactic acid as a
                  byproduct of metabolism and effort to use the muscular system.
                  This lactic acid buildup results in a feeling of stiffness and
                  soreness in the muscles. Compression therapy pushes this
                  lactic acid out of the muscular system, where the lymphatic
                  system clears it from the body.
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full sm:mt-10 sm:gap-5">
              <div className="flex sm:flex-1 flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[145.00%] max-w-[349px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-gray-900 sm:text-2xl"
                  size="txtMontserratRomanSemiBold48Gray900"
                >
                  Improve Healing Time
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[507px] md:max-w-full text-blue_gray-900_02 text-xl sm:text-lg"
                  size="txtMontserratRomanRegular20Bluegray90002"
                >
                  If you have an injury, compression therapy will accelerate
                  your healing time. Applying compression to a joint or muscle
                  supports it, preventing the worsening of the injury. The
                  compression also improves circulation, speeding up your
                  healing time.
                </Text>
              </div>
              <Img
                className="h-[519px] md:h-auto object-cover rounded-bl-lg rounded-br-lg rounded-tr-lg"
                src="images/img_frame45.png"
                alt="frameFortyFive"
              />
            </div>

          </div>

          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full sm:mt-10 sm:gap-5">
              <div className="flex sm:flex-1 flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[145.00%] max-w-[349px] md:max-w-full text-3xl sm:text-[18px] md:text-[24px] text-gray-900 sm:text-2xl"
                  size="txtMontserratRomanSemiBold20Gray900"
                >
                  How many treatments will I need to see results?
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[507px] md:max-w-full text-blue_gray-900_02 text-xl sm:text-lg"
                  size="txtMontserratRomanRegular20Bluegray90002"
                >
                  The number of treatments required varies based on your individual needs and goals. Our team of experts will work with you to create a customized treatment plan that is tailored to your specific needs and goals.
                </Text>
              </div>

              <div className="flex sm:flex-1 flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[145.00%] max-w-[349px] md:max-w-full text-3xl sm:text-[18px] md:text-[24px] text-gray-900 sm:text-2xl"
                  size="txtMontserratRomanSemiBold20Gray900"
                >
                  Are your medical spa treatments covered by insurance?
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[507px] md:max-w-full text-blue_gray-900_02 text-xl sm:text-lg"
                  size="txtMontserratRomanRegular20Bluegray90002"
                >
                  Generally, medical spa treatments are considered elective and are not covered by insurance. However, we offer competitive pricing and financing options to make our services affordable and accessible.
                </Text>
              </div>

              <div className="flex sm:flex-1 flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[145.00%] max-w-[349px] md:max-w-full text-3xl sm:text-[18px] md:text-[24px] text-gray-900 sm:text-2xl"
                  size="txtMontserratRomanSemiBold20Gray900"
                >
                  What services do you offer at your spa?
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[507px] md:max-w-full text-blue_gray-900_02 text-xl sm:text-lg"
                  size="txtMontserratRomanRegular20Bluegray90002"
                >
                  We strive to meet your unique needs and goals with a variety of services, including Cryo Facials, Abdominal Cryosculpting, Legs Cryosculpting, Facial treatment, and Arms Cryosculpting. As we continue to innovate and expand, we are committed to providing our customers with the best possible experience and adding new services to meet their needs.
                </Text>
              </div>
              
            </div>
        </div>
      </div>

      

      
      <Testimonial />
      <Subscribe />
      <Map />
      <Footer1 />
    </>
  );
};

export default LandingPageCompressionTherapyPage;
