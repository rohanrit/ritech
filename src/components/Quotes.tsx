import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const Quotes: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-brand-surface border-y border-brand-border overflow-hidden flex flex-row items-start justify-start pt-[49px] px-[71px] pb-6 box-border gap-[261px] max-w-full text-left text-21xl text-ghostwhite font-sans sm:gap-[33px] md800:gap-[65px] xxl:flex-wrap xxl:gap-[130px] xxl:pl-[35px] xxl:pr-[35px] xxl:box-border">
      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[45px] max-w-full sm:gap-[22px]">
          <div className="flex flex-row items-start justify-start p-2.5">
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[130%] font-semibold font-inherit sm:text-5xl sm:leading-[31px] md800:text-13xl md800:leading-[42px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan">{`\u201C`}</span>
              <span className="text-white"> Stand out online and make an impact</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-glow">{`\u201D`}</span>
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5 box-border max-w-full text-xl">
            <div className="relative leading-[150%] font-medium text-slate-300 sm:text-base sm:leading-[24px]">
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
    </section>
  );
};

export default Quotes;
