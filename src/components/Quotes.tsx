import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const Quotes: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-primary-indigo-light overflow-hidden flex flex-row items-start justify-start pt-[49px] px-[71px] pb-6 box-border gap-[261px] max-w-full text-left text-21xl text-background-paper font-body-l-medium sm:gap-[33px] md800:gap-[65px] xxl:flex-wrap xxl:gap-[130px] xxl:pl-[35px] xxl:pr-[35px] xxl:box-border">
      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[45px] max-w-full sm:gap-[22px]">
          <div className="flex flex-row items-start justify-start p-2.5">
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[130%] font-semibold font-inherit sm:text-5xl sm:leading-[31px] md800:text-13xl md800:leading-[42px]">
              “Stand out online and make an impact”
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5 box-border max-w-full text-xl">
            <div className="relative leading-[150%] font-medium sm:text-base sm:leading-[24px]">
              David Smith - CEO of a Tech Startup
            </div>
          </div>
        </div>
      </div>
      <Button
        className="h-[74px] w-[179px]"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#f8f9ff",
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
    </section>
  );
};

export default Quotes;
