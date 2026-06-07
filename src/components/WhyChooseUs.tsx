import { FunctionComponent } from "react";
import ChartGenerator from "./ChartGenerator";
import ScrollView from "./ScrollView";

const WhyChooseUs: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-darkslategray-200 overflow-hidden flex flex-row flex-wrap items-end justify-start pt-20 pb-[146px] pr-[59px] pl-[69px] box-border [row-gap:20px] max-w-full text-left text-21xl text-ghostwhite font-body-l-medium md800:pt-[22px] md800:pb-10 md800:pr-[29px] md800:pl-[34px] md800:box-border lg:pt-[34px] lg:pb-[62px] lg:box-border xxl:pt-[52px] xxl:pb-[95px] xxl:box-border">
      <ChartGenerator />
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[110px] box-border min-w-[436px] min-h-[1720px] max-w-full ml-[-30px] text-29xl text-background-paper sm:pb-[30px] sm:box-border md800:min-w-full lg:pb-[46px] lg:box-border lg:ml-0 xxl:pb-[71px] xxl:box-border">
        <ScrollView />
      </div>
    </section>
  );
};

export default WhyChooseUs;
