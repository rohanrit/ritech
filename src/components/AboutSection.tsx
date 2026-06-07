import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";

export type AboutSectionProps = {
  solutionsTailoredSpecific?: string;
  weProvideCustomizedSoluti?: string;
  propPadding?: CSSProperties["padding"];
};

const AboutSection: FunctionComponent<AboutSectionProps> = ({
  solutionsTailoredSpecific,
  weProvideCustomizedSoluti,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return { padding: propPadding };
  }, [propPadding]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-12 box-border gap-[60px] max-w-full text-left text-29xl text-ghostwhite font-sans md800:gap-[30px] md800:pb-[31px] md800:box-border"
      style={frameDivStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[130%] font-bold font-inherit sm:text-10xl sm:leading-[37px] md800:text-19xl md800:leading-[50px]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-glow">{solutionsTailoredSpecific}</span>
        </h1>
        <h3 className="m-0 w-[555px] relative text-5xl leading-[140%] font-normal font-inherit text-slate-300 inline-block max-w-full sm:text-lgi sm:leading-[27px]">
          {weProvideCustomizedSoluti}
        </h3>
      </div>
      <Button
        className="w-[190px] h-[74px]"
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
