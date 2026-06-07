import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";

export type ExpressionEvolverType = {
  starterPlan?: string;
  calculationCasement?: string;
  responsiveWebsiteDesignAn?: string;
  basicSEO?: string;
  socialMediaManagement?: string;
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding1?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ExpressionEvolver: FunctionComponent<ExpressionEvolverType> = ({
  starterPlan,
  calculationCasement,
  responsiveWebsiteDesignAn,
  basicSEO,
  socialMediaManagement,
  propPadding,
  propGap,
  propAlignSelf,
  propPadding1,
  propMinWidth,
}) => {
  const expressionEvolverStyle: CSSProperties = useMemo(() => {
    return { padding: propPadding };
  }, [propPadding]);

  const functionFolderStyle: CSSProperties = useMemo(() => {
    return { gap: propGap };
  }, [propGap]);

  const logicLabStyle: CSSProperties = useMemo(() => {
    return { alignSelf: propAlignSelf, padding: propPadding1 };
  }, [propAlignSelf, propPadding1]);

  const calculationCasementStyle: CSSProperties = useMemo(() => {
    return { minWidth: propMinWidth };
  }, [propMinWidth]);

  return (
    <div
      className="group relative flex-1 rounded-11xl border border-brand-border bg-surface-gradient p-6 shadow-panel-glow hover:border-brand-purple/40 transition-all min-w-[232px] text-left text-5xl text-ghostwhite font-sans sm:pt-[26px] sm:pb-[26px] sm:box-border"
      style={expressionEvolverStyle}
    >
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand-purple/10 blur-2xl group-hover:bg-brand-cyan/15 transition-all" />
      <div
        className="flex-1 flex flex-col items-center justify-start gap-[20px] relative z-10"
        style={functionFolderStyle}
      >
        <div
          className="self-stretch flex flex-col items-center justify-start py-0 px-[65px] gap-[10px] sm:pl-5 sm:pr-5 sm:box-border"
          style={logicLabStyle}
        >
          <h3 className="m-0 relative text-inherit leading-[34px] font-semibold font-inherit sm:text-lgi sm:leading-[27px]">
            {starterPlan}
          </h3>
          <div
            className="relative text-21xl tracking-[-0.02em] leading-[130%] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-glow inline-block min-w-[102px] whitespace-nowrap sm:text-5xl sm:leading-[31px] md800:text-13xl md800:leading-[42px]"
            style={calculationCasementStyle}
          >
            {calculationCasement}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] text-base sm:gap-[20px]">
          <div className="self-stretch relative leading-[150%] text-slate-300">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li className="mb-0">{responsiveWebsiteDesignAn}</li>
              <li className="mb-0">{basicSEO}</li>
              <li>{socialMediaManagement}</li>
            </ul>
          </div>
          <Button
            className="w-[120px] h-12"
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
              width: 120,
              height: 48,
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpressionEvolver;
