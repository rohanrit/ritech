import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";

export type AboutSectionProps = {
  solutionsTailoredSpecific?: string;
  weProvideCustomizedSoluti?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const AboutSection: FunctionComponent<AboutSectionProps> = ({
  solutionsTailoredSpecific,
  weProvideCustomizedSoluti,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-12 box-border gap-[60px] max-w-full text-left text-29xl text-background-paper font-body-l-medium mq800:gap-[30px] mq800:pb-[31px] mq800:box-border"
      style={frameDivStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[130%] font-bold font-inherit mq450:text-10xl mq450:leading-[37px] mq800:text-19xl mq800:leading-[50px]">
          {solutionsTailoredSpecific}
        </h1>
        <h3 className="m-0 w-[555px] relative text-5xl leading-[140%] font-normal font-inherit text-ghostwhite inline-block max-w-full mq450:text-lgi mq450:leading-[27px]">
          {weProvideCustomizedSoluti}
        </h3>
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
  );
};

export default AboutSection;
