import { FunctionComponent } from "react";
import FooterLink from "./FooterLink";
import FooterCopyRight from "./FooterCopyRight";

const Footer: FunctionComponent = () => {
  return (
    <footer className="self-stretch bg-primary-lilac overflow-hidden flex flex-col items-start justify-start pt-[60px] pb-[37px] pr-[61px] pl-[70px] box-border gap-[85px] max-w-full text-left text-11xl text-background-paper font-montserrat sm:gap-[21px] md800:gap-[42px] md800:pt-[39px] md800:pb-6 md800:pr-[30px] md800:pl-[35px] md800:box-border">
      <FooterLink />
      <FooterCopyRight />
    </footer>
  );
};

export default Footer;
