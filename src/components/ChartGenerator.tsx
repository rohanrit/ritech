import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const ChartGenerator: FunctionComponent = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[90px] min-w-[436px] max-w-full text-left text-21xl text-ghostwhite font-body-l-medium sm:gap-[22px] md800:gap-[45px] md800:min-w-full">
      <div className="flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <div className="flex flex-row items-start justify-start gap-[20px] max-w-full md800:flex-wrap">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[130%] font-semibold font-inherit inline-block max-w-full sm:text-5xl sm:leading-[31px] md800:text-13xl md800:leading-[42px]">
            Why Choose Us?
          </h1>
          <div className="flex flex-col items-start justify-start pt-7 px-0 pb-0">
            <div className="w-[204px] h-1 relative box-border border-t-[4px] border-solid border-ghostwhite md:hidden" />
          </div>
        </div>
      </div>
      <div className="w-[532px] flex flex-row items-start justify-start pt-0 px-10 pb-5 box-border max-w-full">
        <img
          className="h-[500px] flex-1 relative rounded-t-21xl rounded-br-21xl rounded-bl-none max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-69@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[130px] box-border gap-[60px] max-w-full text-29xl text-background-paper md800:gap-[30px] md800:pb-[84px] md800:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[130%] font-bold font-inherit sm:text-10xl sm:leading-[37px] md800:text-19xl md800:leading-[50px]">
            Creative Excellence Elevates Every Project
          </h1>
          <div className="w-[559px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-5xl text-ghostwhite">
            <h3 className="m-0 flex-1 relative text-inherit leading-[140%] font-normal font-inherit inline-block max-w-full sm:text-lgi sm:leading-[27px]">
              Creative excellence drives our work. From concept to execution, we
              aim for exceptional results.
            </h3>
          </div>
        </div>
        <Button
          className="w-[190px] h-[74px]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#ac6cff",
            fontSize: "16",
            background: "#e2fe30",
            borderRadius: "20px",
            "&:hover": { background: "#e2fe30" },
            width: 190,
            height: 74,
          }}
        >
          Learn More
        </Button>
      </div>
      <div className="w-[534px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <img
          className="h-[500px] flex-1 relative rounded-t-21xl rounded-br-none rounded-bl-21xl max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-71@2x.png"
        />
      </div>
    </div>
  );
};

export default ChartGenerator;
