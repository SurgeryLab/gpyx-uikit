import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 26" {...props}>
      <path d="M13.0002 0.199951C5.9314 0.199951 0.200195 5.93115 0.200195 13C0.200195 20.0688 5.9314 25.7999 13.0002 25.7999C20.069 25.7999 25.8002 20.0688 25.8002 13C25.8002 5.93115 20.069 0.199951 13.0002 0.199951ZM18.021 16.5125C18.4381 16.9296 18.4381 17.6037 18.021 18.0208C17.813 18.2288 17.5399 18.3333 17.2669 18.3333C16.9938 18.3333 16.7207 18.2288 16.5127 18.0208L13.0002 14.5082L9.48766 18.0208C9.27966 18.2288 9.00659 18.3333 8.73353 18.3333C8.46046 18.3333 8.1874 18.2288 7.97939 18.0208C7.56233 17.6037 7.56233 16.9296 7.97939 16.5125L11.4919 13L7.97939 9.48742C7.56233 9.07035 7.56233 8.39622 7.97939 7.97915C8.39646 7.56208 9.07059 7.56208 9.48766 7.97915L13.0002 11.4917L16.5127 7.97915C16.9298 7.56208 17.6039 7.56208 18.021 7.97915C18.4381 8.39622 18.4381 9.07035 18.021 9.48742L14.5085 13L18.021 16.5125Z"/>
    </Svg>
  );
};

export default Icon;
