import { FunctionComponent } from "react";

const FooterLink: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-left text-11xl text-background-paper font-montserrat">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[6px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full lg:min-w-full">
          <div className="w-[948px] flex flex-row items-end justify-between max-w-full gap-[20px] md800:flex-wrap">
            <div className="flex flex-row items-start justify-start p-2.5 gap-[5px]">
              <img
                className="h-[50px] w-[50px] relative object-contain"
                alt=""
                src="/atom-editor-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                <h2 className="m-0 relative text-inherit font-semibold font-inherit sm:text-lg md800:text-5xl">
                  RiTech
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[15px] box-border max-w-full text-5xl text-primary-lilac font-body-l-medium">
              <div className="flex flex-row items-start justify-start gap-[60px] sm:flex-wrap sm:gap-[30px]">
                <h3 className="m-0 relative text-inherit leading-[34px] font-semibold font-inherit sm:text-lgi sm:leading-[27px]">
                  Our Services
                </h3>
                <h3 className="m-0 relative text-inherit leading-[34px] font-semibold font-inherit sm:text-lgi sm:leading-[27px]">
                  Explore More
                </h3>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[50px] max-w-full text-xl font-body-l-medium md800:gap-[25px] lg:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start p-2.5 box-border min-w-[344px] max-w-full md800:min-w-full">
              <div className="flex-1 relative leading-[150%] font-medium inline-block max-w-full sm:text-base sm:leading-[24px]">
                RiTech is a leading digital marketing agency dedicated to
                driving success for businesses online. With expertise in SEO,
                PPC, social media, content creation, and more, we offer tailored
                solutions to maximize ROI.
              </div>
            </div>
            <div className="w-[423px] flex flex-row items-start justify-start gap-[3px] min-w-[423px] max-w-full text-base sm:flex-wrap md800:min-w-full lg:flex-1">
              <div className="flex-1 relative leading-[150%] font-semibold inline-block min-w-[136px]">
                <p className="m-0">SEO Marketing</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Research Topic Trends</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Email Marketing</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Google PPC</p>
              </div>
              <div className="flex-1 relative leading-[150%] font-semibold inline-block min-w-[136px]">
                <p className="m-0">About Us</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Feature</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Our Works</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Resource</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border text-5xl text-primary-lilac font-body-l-medium">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] sm:gap-[20px]">
            <h3 className="m-0 relative text-inherit leading-[34px] font-semibold font-inherit sm:text-lgi sm:leading-[27px]">
              Contact Us
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-base text-ghostwhite">
              <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <div className="h-10 w-10 relative rounded-[50%] bg-ghostwhite" />
                  <img
                    className="h-[30px] w-[30px] absolute !m-[0] top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/ionlocation.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[150%] font-medium">
                  Jl. Medan Merdeka No. 35 Jakarta Selatan
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <div className="h-10 w-10 relative rounded-[50%] bg-ghostwhite" />
                  <img
                    className="h-[30px] w-[30px] absolute !m-[0] top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/mingcutephonefill.svg"
                  />
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[104px]">
                  (021) 234567
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <div className="h-10 w-10 relative rounded-[50%] bg-ghostwhite" />
                  <img
                    className="h-[30px] w-[30px] absolute !m-[0] top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/fluentphone16filled.svg"
                  />
                </div>
                <div className="relative leading-[150%] font-medium inline-block min-w-[123px] whitespace-nowrap">
                  +62 812 9188 72
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLink;
