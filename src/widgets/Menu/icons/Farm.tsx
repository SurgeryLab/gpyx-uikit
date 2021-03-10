import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 14" {...props}>
      <path
        d="M10.2381 14H0.875842C0.612529 14 0.349215 13.8902 0.173672 13.6706C-0.00187012 13.451 -0.0311271 13.2039 0.0273871 12.9569L1.49024 8.2902C1.60727 7.93333 1.9291 7.68627 2.3387 7.68627H9.06782C9.47742 7.68627 9.82851 7.96079 9.91628 8.31765L11.0866 12.9843C11.1451 13.2314 11.0866 13.4784 10.911 13.6706C10.7647 13.8902 10.5014 14 10.2381 14ZM2.04612 12.3529H9.12634L8.36565 9.33333H2.98235L2.04612 12.3529Z" />
      <path
        d="M16.6747 6.31373H7.3124C7.04908 6.31373 6.78577 6.20392 6.61023 5.98431C6.43468 5.76471 6.40543 5.51765 6.46394 5.27059L7.9268 0.603922C8.04382 0.247059 8.36565 0 8.77525 0H15.2118C15.5921 0 15.9432 0.247059 16.0603 0.603922L17.5231 5.27059C17.6109 5.51765 17.5524 5.79216 17.3768 5.98431C17.2013 6.20392 16.938 6.31373 16.6747 6.31373ZM8.48268 4.66667H15.5044L14.5682 1.64706H9.41891L8.48268 4.66667Z" />
      <path
        d="M23.1112 14H13.749C13.4856 14 13.2223 13.8902 13.0468 13.698C12.8712 13.5059 12.8127 13.2314 12.8712 13.0118L14.0415 8.3451C14.1586 7.96078 14.5096 7.68627 14.9192 7.68627H21.6484C22.0287 7.68627 22.3798 7.93333 22.4968 8.2902L23.9597 12.9569C24.0474 13.2039 23.9889 13.4784 23.8134 13.6706C23.6378 13.8902 23.3745 14 23.1112 14ZM14.8607 12.3529H21.9409L21.0047 9.33333H15.6214L14.8607 12.3529Z" />
    </Svg>
  );
};

export default Icon;
