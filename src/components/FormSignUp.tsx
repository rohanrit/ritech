import { FunctionComponent } from "react";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";

const FormSignUp: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[145px] max-w-full text-left text-xs text-text-secondary font-components-badge-label mq750:gap-[72px] mq450:gap-[36px]">
      <div className="w-[264px] overflow-hidden flex flex-row items-end justify-start py-0 pr-5 pl-0 box-border gap-[11.8px]">
        <img
          className="h-10 w-[40.2px] relative shrink-0 [debug_commit:1de1738]"
          loading="lazy"
          alt=""
          src="/group.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.5px]">
          <img
            className="self-stretch h-[29.6px] relative max-w-full overflow-hidden shrink-0 [debug_commit:1de1738]"
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="w-[462px] flex flex-col items-end justify-start gap-[171px] max-w-full mq450:gap-[85px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-xl text-text-primary">
              <div className="relative tracking-[0.15px] leading-[160%] font-medium mq450:text-base mq450:leading-[26px]">
                Sign up to socialRepeat
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 gap-[22px] mq450:flex-wrap">
              <TextField
                className="[border:none] bg-[transparent] h-14 flex-1 font-components-badge-label text-base text-lightslategray min-w-[143px]"
                placeholder="First name"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
                  "& .MuiInputBase-root": { height: "56px" },
                  "& .MuiInputBase-input": { color: "#92929d" },
                }}
              />
              <TextField
                className="[border:none] bg-[transparent] h-14 flex-1 font-components-badge-label text-base text-lightslategray min-w-[143px]"
                placeholder="Last name"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
                  "& .MuiInputBase-root": { height: "56px" },
                  "& .MuiInputBase-input": { color: "#92929d" },
                }}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
              <TextField
                className="[border:none] bg-[transparent] h-14 flex-1 font-components-badge-label text-base text-text-primary max-w-full"
                label="Email Address"
                defaultValue="dev@domain.com"
                variant="outlined"
                sx={{
                  justifyContent: "flex-end",
                  "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
                  "& .MuiInputBase-root": { height: "56px" },
                  "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.87)" },
                }}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
              <TextField
                className="[border:none] bg-[transparent] h-14 flex-1 font-components-badge-label text-base text-text-primary max-w-full"
                label="Company name"
                defaultValue="socialhub"
                variant="outlined"
                sx={{
                  justifyContent: "flex-end",
                  "& fieldset": { borderColor: "#e2e2ea" },
                  "& .MuiInputBase-root": { height: "56px" },
                  "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.87)" },
                }}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 gap-[22px] mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[143px]">
                <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-[11px] border-[1px] border-solid border-gainsboro">
                  <div className="h-0.5 bg-background-paper flex flex-row items-center justify-start py-0 px-1 box-border">
                    <div className="relative tracking-[0.15px] leading-[12px]">
                      Country
                    </div>
                  </div>
                  <FormControl
                    className="self-stretch h-[54px] font-components-badge-label text-base text-text-primary w-auto"
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "89.0909090909091%",
                      height: "54px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "54px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "54px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "54px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "54px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "rgba(0, 0, 0, 0.87)",
                        fontSize: 16,
                        fontWeight: "Regular",
                        fontFamily: "Roboto",
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <InputLabel color="primary" />
                    <Select
                      color="primary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="24px"
                          height="24px"
                          src="/arrowdropdown.svg"
                          style={{}}
                        />
                      )}
                    >
                      <MenuItem>United states</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
              <TextField
                className="[border:none] bg-[transparent] h-14 flex-1 font-components-badge-label text-base text-text-primary min-w-[143px]"
                label="Phone #"
                defaultValue="+20"
                variant="outlined"
                sx={{
                  justifyContent: "flex-end",
                  "& fieldset": { borderColor: "#e2e2ea" },
                  "& .MuiInputBase-root": { height: "56px" },
                  "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.87)" },
                }}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-[11px] border-[1px] border-solid border-gainsboro">
                  <div className="h-0.5 bg-background-paper flex flex-row items-center justify-start py-0 px-1 box-border">
                    <div className="relative tracking-[0.15px] leading-[12px]">
                      Default timezone
                    </div>
                  </div>
                  <FormControl
                    className="self-stretch h-[54px] font-components-badge-label text-base text-text-primary w-auto"
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "94.8051948051948%",
                      height: "54px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "54px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "54px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "54px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "54px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "rgba(0, 0, 0, 0.87)",
                        fontSize: 16,
                        fontWeight: "Regular",
                        fontFamily: "Roboto",
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <InputLabel color="primary" />
                    <Select
                      color="primary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="24px"
                          height="24px"
                          src="/arrowdropdown-1.svg"
                          style={{}}
                        />
                      )}
                    >
                      <MenuItem>GMT+2</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <Button
                className="self-stretch h-[42px] shadow-[0px_3px_1px_-2px_rgba(0,_0,_0,_0.2),_0px_2px_2px_rgba(0,_0,_0,_0.14),_0px_1px_5px_rgba(0,_0,_0,_0.12)] mq450:pl-5 mq450:pr-5 mq450:box-border"
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "15",
                  background: "#ac6cff",
                  borderRadius: "4px",
                  "&:hover": { background: "#ac6cff" },
                  height: 42,
                }}
              >
                Sign up
              </Button>
              <Button
                className="self-stretch h-[42px] shadow-[0px_3px_1px_-2px_rgba(0,_0,_0,_0.2),_0px_2px_2px_rgba(0,_0,_0,_0.14),_0px_1px_5px_rgba(0,_0,_0,_0.12)] mq450:pl-5 mq450:pr-5 mq450:box-border"
                variant="contained"
                sx={{
                  color: "#000",
                  fontSize: "15",
                  background: "#e2fe30",
                  borderRadius: "4px",
                  "&:hover": { background: "#e2fe30" },
                  height: 42,
                }}
              >
                BACK to login
              </Button>
            </div>
          </div>
          <footer className="flex flex-row items-start justify-end py-0 px-[71px] box-border max-w-full text-left text-sm text-text-primary font-components-badge-label mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <div className="relative tracking-[0.15px] leading-[143%]">
                Terms and conditions
              </div>
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="w-[5px] h-[5px] relative rounded-[50%] bg-black" />
              </div>
              <div className="relative tracking-[0.15px] leading-[143%]">
                Privacy policy
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
