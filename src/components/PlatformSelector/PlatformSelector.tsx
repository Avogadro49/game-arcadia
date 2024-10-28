import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";
import { Platform, PlatformSelectorProps } from "../../types";

const PlatformSelector = ({onSelectPlatform, selectedPlatform,}: PlatformSelectorProps) => {
  const { data } = usePlatforms();
  console.log(selectedPlatform)
  const flattenedPlatforms = data.reduce<Platform[]>((acc, platform) => {
    if (platform.platforms && Array.isArray(platform.platforms)) {
      return [...acc, ...platform.platforms];
    } else {
      return [...acc, platform];
    }
  }, []);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {flattenedPlatforms.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
