import React from "react";
import { Button } from "@mui/material";

const HeroPage: React.FC = () => {
  return (
    <section className="self-stretch bg-darkslategray-200 overflow-hidden flex flex-row items-start justify-start pt-[23px] px-8 pb-[30px] box-border gap-[19px] max-w-full text-left text-42xl text-yellow font-body-l-medium md800:pt-5 md800:pb-5 md800:box-border">
      <div className="ml-[-220px] h-[637px] w-[201px] flex flex-col items-start justify-start pt-[449px] px-0 pb-[187px] box-border shrink-0 md800:pt-[292px] md800:pb-[122px] md800:box-border lg:hidden">
        <div className="w-[15px] h-[15px] relative rounded-[50%] bg-yellow" />
      </div>
      <div className="flex flex-col items-start justify-start pt-[55px] px-0 pb-0 md800:pt-9 md800:box-border lg:hidden">
        <div className="flex flex-col items-start justify-start gap-[473px]">
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
            <div className="h-[15px] w-[15px] relative rounded-[50%] bg-mediumorchid" />
          </div>
          <div className="w-[15px] h-[15px] relative rounded-[50%] bg-lavender" />
        </div>
      </div>
      <div className="w-[1318px] flex flex-col items-end justify-start gap-[6px] max-w-[calc(100%_-_259px)] shrink-0 lg:max-w-full">
        <div className="w-[1175px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="h-[15px] w-[15px] relative rounded-[50%] bg-yellow" />
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[44px] max-w-full md800:gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[15px] w-[15px] absolute !m-[0] top-[-7px] right-[32px] rounded-[50%] bg-yellow" />
            <div className="h-[15px] w-[15px] absolute !m-[0] bottom-[4px] left-[605px] rounded-[50%] bg-primary-lilac" />
            <img
              className="h-10 w-10 absolute !m-[0] right-[498px] bottom-[80px] overflow-hidden shrink-0"
              alt=""
              src="/phstarfourfill.svg"
            />
            <div className="h-[557px] flex-1 flex flex-row items-start justify-start relative max-w-full z-[1] ">
              <div className="w-[751px] !m-[0] absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[40px] max-w-full">
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[130%] font-bold font-inherit sm:text-18xl sm:leading-[48px] md800:text-30xl md800:leading-[63px] md:text-wrap">
                  <span>Boost</span>
                  <span className="text-ghostwhite">{` Your Brand with Innovative `}</span>
                  <span className="text-primary-lilac">{`Digital `}</span>
                  <span>Marketing</span>
                </h1>
                <div className="w-[620px] flex flex-col items-start justify-start gap-[40px] max-w-full text-xl text-ghostwhite">
                  <div className="self-stretch relative leading-[150%] sm:text-base sm:leading-[24px]">
                    Drive Engagement and Conversions with Advanced Digital
                    Marketing Strategies.
                  </div>
                  <div className="w-[429px] flex flex-row flex-wrap items-start justify-start gap-[19px] max-w-full">
                    <Button
                      className="h-[74px] w-[179px]"
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "16",
                        background: "#ac6cff",
                        borderRadius: "20px",
                        "&:hover": { background: "#ac6cff" },
                        width: 179,
                        height: 74,
                      }}
                    >
                      Start Now
                    </Button>
                    <Button
                      className="h-[74px] flex-1 min-w-[150px]"
                      startIcon={
                        <img width="20px" height="20px" src="/biplayfill.svg" />
                      }
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#ac6cff",
                        fontSize: "16",
                        background: "#e2fe30",
                        borderRadius: "20px",
                        "&:hover": { background: "#e2fe30" },
                        height: 74,
                      }}
                    >
                      Watch Demo
                    </Button>
                  </div>
                </div>
                <img
                  className="w-[35px] h-[35px] absolute !m-[0] top-[184px] left-[326px] overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/phstarfourfill-1.svg"
                />
              </div>
              <div className="h-full w-[587px] absolute !m-[0] top-[0px] bottom-[0px] left-[731px] z-[2] text-xs-8 text-darkslategray-100 font-varela-round lg:hidden">
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <div className="absolute top-[49px] left-[129px] rounded-41xl bg-yellow w-[439px] h-[500px]" />
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    alt=""
                    src="/bf1956e3514d4357ead73039af7615cbremovebgpreview-1@2x.png"
                  />
                </div>
                <div className="absolute top-[16px] left-[38px] w-[190px] h-[190px] flex flex-row items-start justify-start gap-[10px] z-[2]">
                  <div className="h-full w-full absolute rounded-[50%] bg-ghostwhite" />
                </div>
              </div>
            </div>
            <img
              className="h-10 w-10 absolute !m-[0] top-[49px] right-[12px] overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/phstarfourfill.svg"
            />
          </div>
          <div className="w-[561px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="h-[15px] w-[15px] relative rounded-[50%] bg-primary-lilac" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
