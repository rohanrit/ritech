import { FunctionComponent } from "react";

const FooterCopyRight: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[31px] max-w-full text-left text-xl text-background-paper font-body-l-medium md800:gap-[15px]">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <img
          className="flex-1 relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/line-3.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] md800:flex-wrap">
        <div className="flex flex-row items-start justify-start p-2.5 box-border max-w-full">
          <div className="relative leading-[150%] font-medium sm:text-base sm:leading-[24px]">
            RiTech 2024 © All right reserved
          </div>
        </div>
        <div className="flex flex-row items-start justify-start p-2.5">
          <div className="relative leading-[150%] font-medium sm:text-base sm:leading-[24px]">{`Terms & Condition`}</div>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyRight;
