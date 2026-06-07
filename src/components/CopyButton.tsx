import { FunctionComponent, useMemo, CSSProperties } from "react";

export type CopyButtonType = {
  f7person3?: string;
  logicLink?: string;
  happyCustomers?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const CopyButton: FunctionComponent<CopyButtonType> = ({
  f7person3,
  logicLink,
  happyCustomers,
  propWidth,
  propMinWidth,
}) => {
  const copyButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const logicLinkStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="w-full sm:w-full flex flex-col items-center justify-center gap-8 text-left text-13xl text-ghostwhite font-body-l-medium"
      style={copyButtonStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-8 pl-8">
        <button className="cursor-pointer border-none p-0 bg-transparent h-24 flex-1 flex flex-row items-start justify-start relative gap-4">
          <div className="h-full w-full absolute top-0 left-0 rounded-full bg-primary-lilac" />
          <img
            className="h-16 w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-10"
            alt=""
            src={f7person3}
          />
        </button>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center py-0 pr-4 pl-4 md800:pr-8">
        <div className="flex flex-row items-center justify-center py-0 px-4">
          <div
            className="relative tracking-wide leading-10 font-semibold inline-block sm:text-lgi md800:text-7xl"
            style={logicLinkStyle}
          >
            {logicLink}
          </div>
        </div>
        <div className="relative text-base leading-loose font-medium">
          {happyCustomers}
        </div>
      </div>
    </div>
  );
};

export default CopyButton;
