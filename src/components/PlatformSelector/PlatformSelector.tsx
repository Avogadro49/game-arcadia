import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";
import { PlatformSelectorProps } from "../../types";

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: PlatformSelectorProps) => {
  const { data } = usePlatforms();
  console.log(selectedPlatform);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        <Accordion allowMultiple>
          {data.map((platform) => (
            <AccordionItem key={platform.id} border="none">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" onClick={() => onSelectPlatform(platform)}>
                        {platform.name}
                      </Box>
                      {platform.platforms && platform.platforms.length > 0 ? isExpanded ? <BsChevronUp /> : <BsChevronDown /> : null}
                    </AccordionButton>
                  </h2>
                  {platform.platforms && platform.platforms.length > 0 && (
                    <AccordionPanel paddingBottom={4}>
                      {platform.platforms.map((child) => (
                        <MenuItem onClick={() => onSelectPlatform(child)} key={child.id}>
                          {child.name}
                        </MenuItem>
                      ))}
                    </AccordionPanel>
                  )}
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </MenuList>
    </Menu>
    // <Menu>
    //   <MenuButton as={Button} rightIcon={<BsChevronDown />}>
    //     {selectedPlatform?.name || "Platform"}
    //   </MenuButton>
    //   <MenuList>
    //     {flattenedPlatforms.map((platform) => (
    //       <MenuItem
    //         onClick={() => onSelectPlatform(platform)}
    //         key={platform.id}
    //       >
    //         {platform.name}
    //       </MenuItem>
    //     ))}
    //   </MenuList>
    // </Menu>
  );
};

export default PlatformSelector;
