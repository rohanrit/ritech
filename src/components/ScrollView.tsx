import { FunctionComponent } from "react";
import AboutSection from "./AboutSection";

const ScrollView: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[110px] max-w-full text-left text-29xl text-background-paper font-body-l-medium mq450:gap-[27px] mq800:gap-[55px]">
      <AboutSection
        solutionsTailoredSpecific="Solutions Tailored Specifically to Your Business Needs"
        weProvideCustomizedSoluti="We provide customized solutions for your business needs, ensuring relevance and success."
      />
      <div className="w-[552px] flex flex-row items-start justify-end py-0 px-[11px] box-border max-w-full">
        <img
          className="h-[500px] flex-1 relative rounded-t-21xl rounded-br-none rounded-bl-21xl max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-70@2x.png"
        />
      </div>
      <AboutSection
        solutionsTailoredSpecific="Client Satisfaction is Our Main Focus"
        weProvideCustomizedSoluti="Our main goal is your satisfaction, and we work tirelessly to ensure that you are pleased with the results we achieve together."
        propPadding="unset"
      />
    </div>
  );
};

export default ScrollView;
