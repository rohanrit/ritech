import { FunctionComponent } from "react";
import CopyButton from "./CopyButton";

const Metrics: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-primary-indigo-dark overflow-hidden flex flex-row items-start justify-center py-[75px] pr-5 pl-[21px] box-border max-w-full text-left text-13xl text-ghostwhite font-body-l-medium sm:pt-[49px] sm:pb-[49px] sm:box-border">
      <div className="w-[953px] flex flex-col items-start justify-start gap-[70px] max-w-full md800:gap-[87px] lg:gap-[35px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[42px] font-semibold font-inherit sm:text-lgi sm:leading-[25px] md800:text-7xl md800:leading-[43px]">
            Work with RiTech
          </h1>
        </div>
        <div className="self-stretch flex flex-row justify-center gap-[170px] md1050:gap-[80px] md800:flex-col md800:items-center md800:gap-[70px]">
          <CopyButton
            f7person3="/f7person3.svg"
            logicLink="10,000+"
            happyCustomers="Happy Customers"
            propWidth="190px"
            propMinWidth="129px"
          />
          <CopyButton
            f7person3="/uitprocess.svg"
            logicLink="20,000+"
            happyCustomers="Success Processes"
            propWidth="190px"
            propMinWidth="129px"
          />
          <CopyButton
            f7person3="/solarstarlinear.svg"
            logicLink="20,000+"
            happyCustomers="Success Processes"
            propWidth="190px"
            propMinWidth="129px"
          />
        </div>
      </div>
    </section>
  );
};

export default Metrics;
