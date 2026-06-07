import React from "react";
import { Button } from "@mui/material";

const HeroPage: React.FC = () => {
  return (
    <section className="relative self-stretch bg-brand-dark overflow-hidden flex flex-row items-start justify-start pt-[23px] px-8 pb-[30px] box-border gap-[19px] max-w-full text-left text-42xl text-ghostwhite font-sans md800:pt-5 md800:pb-5 md800:box-border">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="ml-[-220px] h-[637px] w-[201px] flex flex-col items-start justify-start pt-[449px] px-0 pb-[187px] box-border shrink-0 md800:pt-[292px] md800:pb-[122px] md800:box-border lg:hidden">
        <div className="w-[15px] h-[15px] relative rounded-[50%] bg-brand-glow shadow-neon-glow" />
      </div>
      <div className="flex flex-col items-start justify-start pt-[55px] px-0 pb-0 md800:pt-9 md800:box-border lg:hidden">
        <div className="flex flex-col items-start justify-start gap-[473px]">
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
            <div className="h-[15px] w-[15px] relative rounded-[50%] bg-brand-purple shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
          </div>
          <div className="w-[15px] h-[15px] relative rounded-[50%] bg-brand-glow shadow-neon-glow" />
        </div>
      </div>
      <div className="w-[1318px] flex flex-col items-center justify-start gap-[6px] max-w-full shrink-0 lg:max-w-full mx-auto">
        <div className="w-[1175px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="h-[15px] w-[15px] relative rounded-[50%] bg-brand-glow shadow-neon-glow" />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[44px] max-w-full md800:gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-center relative max-w-full">
            <div className="h-[15px] w-[15px] absolute !m-[0] top-[-7px] right-[32px] rounded-[50%] bg-brand-glow shadow-neon-glow" />
            <div className="h-[15px] w-[15px] absolute !m-[0] bottom-[4px] left-[605px] rounded-[50%] bg-brand-purple shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
            <img
              className="h-10 w-10 absolute !m-[0] right-[498px] bottom-[80px] overflow-hidden shrink-0"
              alt=""
              src="/phstarfourfill.svg"
            />
            <div className="h-[557px] flex-1 flex flex-row items-start justify-center relative max-w-full z-[1]">
              <div className="w-[751px] !m-[0] absolute top-[0px] left-[0px] flex flex-col items-center justify-start gap-[40px] max-w-full">
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[130%] font-bold font-inherit text-center sm:text-18xl sm:leading-[48px] md800:text-30xl md800:leading-[63px] md:text-wrap">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan">Boost</span>
                  <span className="text-slate-300">{' Your Brand with Innovative '}</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-glow">{'Digital '}</span>
                  <span className="text-white">Marketing</span>
                </h1>
                <div className="w-[620px] flex flex-col items-center justify-start gap-[40px] max-w-full text-xl text-slate-300">
                  <div className="self-stretch relative leading-[150%] text-center sm:text-base sm:leading-[24px]">
                    Drive Engagement and Conversions with Advanced Digital
                    Marketing Strategies.
                  </div>
                  <div className="w-[429px] flex flex-row flex-wrap items-center justify-center gap-[19px] max-w-full">
                    <Button
                      className="h-[74px] w-[179px]"
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        fontSize: "16",
                        fontWeight: 600,
                        background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%)",
                        borderRadius: "20px",
                        "&:hover": {
                          background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #06B6D4 100%)",
                          opacity: 0.9,
                          boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)",
                        },
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
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        color: "#00F0FF",
                        fontSize: "16",
                        fontWeight: 600,
                        borderColor: "rgba(0, 240, 255, 0.3)",
                        borderRadius: "20px",
                        "&:hover": {
                          borderColor: "#00F0FF",
                          background: "rgba(0, 240, 255, 0.05)",
                          boxShadow: "0 0 20px rgba(0, 240, 255, 0.15)",
                        },
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
                <div className="absolute top-[49px] left-[129px] rounded-41xl bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-cyan/20 w-[439px] h-[500px]" />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                  alt=""
                  src="/bf1956e3514d4357ead73039af7615cbremovebgpreview-1@2x.png"
                />
              </div>
            </div>
            <img
              className="h-10 w-10 absolute !m-[0] top-[49px] right-[12px] overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/phstarfourfill.svg"
            />
          </div>
          <div className="w-[561px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="h-[15px] w-[15px] relative rounded-[50%] bg-brand-purple shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
