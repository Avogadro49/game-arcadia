import { Icon } from "@chakra-ui/react";
import { GiAnarchy, GiAce, GiBleedingEye } from "react-icons/gi";
import { IconProps } from "../../types";
import { IconType } from "react-icons";

const RatingIcons = ({ rating, ...props }: IconProps) => {
  if (rating < 3) return null;

  const iconMap: { [key: number]: IconType } = {
    3: GiAnarchy,
    4: GiAce,
    5: GiBleedingEye,
  };

  const SelectedIcon = iconMap[rating];

  return <Icon as={SelectedIcon} {...props} />;
};

export default RatingIcons;
