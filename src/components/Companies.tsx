import React from "react";

const Companies: React.FC = () => {
  return (
    <section className="self-stretch bg-brand-surface/10 border-y border-brand-border flex flex-row items-start justify-start py-[34px] px-[60px] box-border max-w-full text-center text-5xl text-slate-300 font-sans md800:pl-[30px] md800:pr-[30px] md800:box-border">
      <div className="flex-1 flex flex-col items-start justify-start p-5 box-border gap-[62px] max-w-full sm:gap-[15px] md800:gap-[31px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <h3 className="m-0 relative text-inherit leading-[130%] font-semibold font-inherit sm:text-lgi sm:leading-[25px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-glow">{`Trusted by thousand companies `}</span>
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] lg:flex-wrap lg:justify-center">
          <div className="h-20 w-20 flex flex-row items-start justify-start relative gap-[10px]">
            <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30" />
            <img
              className="h-[60px] w-[calc(100%_-_20px)] absolute !m-[0] top-[10px] right-[10px] left-[10px] max-w-full overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/pinterest-symbolsvg.svg"
            />
          </div>
          <div className="h-20 w-20 flex flex-row items-start justify-start relative gap-[40px]">
            <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30" />
            <img
              className="h-[60px] w-[calc(100%_-_20px)] absolute !m-[0] top-[calc(50%_-_30px)] right-[10px] left-[10px] max-w-full overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/google-symbolsvg.svg"
            />
          </div>
          <div className="h-20 w-20 flex flex-row items-start justify-start relative gap-[40px]">
            <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30" />
            <img
              className="h-[58.1px] w-[calc(100%_-_20px)] absolute !m-[0] top-[10.2px] right-[10.2px] left-[9.8px] max-w-full overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/gojek-indonesia-symbolsvg.svg"
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-20 w-20 flex flex-row items-start justify-start relative gap-[40px]">
            <div className="self-stretch flex-1 relative rounded-[50%] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30" />
            <img
              className="h-[calc(100%_-_23.2px)] w-[50px] absolute !m-[0] top-[10px] bottom-[13.2px] left-[14px] max-h-full overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/shopifycom-symbolsvg.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-20 w-20 flex flex-row items-start justify-start relative gap-[40px]">
            <div className="self-stretch flex-1 relative rounded-[50%] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30" />
            <img
              className="h-[51px] w-[50px] absolute !m-[0] top-[calc(50%_-_26px)] left-[calc(50%_-_25px)] overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/unilever-symbolsvg.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-20 w-20 flex flex-row items-start justify-start relative gap-[40px]">
            <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30" />
            <img
              className="h-[60px] w-[calc(100%_-_20px)] absolute !m-[0] top-[10px] right-[10px] left-[10px] max-w-full overflow-hidden z-[1]"
              alt=""
              src="/spotify-symbolsvg.svg"
            />
          </button>
          <div className="h-20 w-20 flex flex-row items-start justify-start relative gap-[40px]">
            <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30" />
            <img
              className="h-[60px] w-[calc(100%_-_20px)] absolute !m-[0] top-[10px] right-[10px] left-[10px] max-w-full overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/tripadvisor-symbolsvg.svg"
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-20 w-20 flex flex-row items-start justify-start relative gap-[40px]">
            <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30" />
            <img
              className="h-[60px] w-[calc(100%_-_20px)] absolute !m-[0] top-[10px] right-[10px] left-[10px] max-w-full overflow-hidden z-[1]"
              alt=""
              src="/tripadvisor-symbolsvg-1.svg"
            />
          </button>
          <div className="h-20 w-20 flex flex-row items-start justify-start relative gap-[40px]">
            <div className="self-stretch flex-1 relative rounded-[50%] bg-gradient-to-br from-brand-blue/30 to-brand-purple/30" />
            <img
              className="h-[59.3px] w-[calc(100%_-_25px)] absolute !m-[0] top-[calc(50%_-_30px)] right-[12px] left-[13px] max-w-full overflow-hidden z-[1]"
              alt=""
              src="/airbnb-symbolsvg.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
