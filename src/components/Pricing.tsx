import { FunctionComponent } from "react";
import ExpressionEvolver from "./ExpressionEvolver";

const Pricing: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-brand-dark overflow-hidden flex flex-col items-center justify-start pt-[50px] pb-[150px] pr-[21px] pl-5 box-border gap-[50px] max-w-full text-left text-13xl text-ghostwhite font-sans md800:gap-[25px] md800:pt-8 md800:pb-[97px] md800:box-border">
      <div className="w-[969px] flex flex-row items-start justify-center py-0 pr-0 pl-0.5 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-row items-start justify-start py-0 px-14 sm:pl-5 sm:pr-5 sm:box-border">
            <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[42px] font-semibold font-inherit sm:text-lgi sm:leading-[25px] md800:text-7xl md800:leading-[33px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan">Pricing Plans</span>
            </h1>
          </div>
          <div className="relative text-xl leading-[150%] text-slate-300 sm:text-base sm:leading-[24px]">
            The Best Solution for Our Clients
          </div>
        </div>
      </div>
      <div className="w-[969px] flex flex-row flex-wrap items-start justify-center gap-[21px] max-w-full text-5xl text-ghostwhite">
        <ExpressionEvolver
          starterPlan="Starter Plan"
          calculationCasement="$500"
          responsiveWebsiteDesignAn="Responsive website design and development (5 pages)"
          basicSEO="Basic SEO"
          socialMediaManagement="Social media management"
          propPadding="45px 18px"
          propGap="9px"
          propAlignSelf="unset"
          propPadding1="unset"
          propMinWidth="124px"
        />
        <ExpressionEvolver
          starterPlan="Bussiness Plan"
          calculationCasement="$1000"
          responsiveWebsiteDesignAn="Advanced Business plan"
          basicSEO="Responsive website design and development (10 pages)"
          socialMediaManagement="PPC advertising campaign "
          propPadding="45px 18px"
          propGap="9px"
          propAlignSelf="unset"
          propPadding1="unset"
          propMinWidth="124px"
        />
        <ExpressionEvolver
          starterPlan="Premium Plan"
          calculationCasement="$2000"
          responsiveWebsiteDesignAn="Advanced Premium plan"
          basicSEO="Regular content creation"
          socialMediaManagement="Performance analysis and monthly reporting"
          propPadding="45px 18px"
          propGap="9px"
          propAlignSelf="unset"
          propPadding1="unset"
          propMinWidth="124px"
        />
      </div>
    </section>
  );
};

export default Pricing;
