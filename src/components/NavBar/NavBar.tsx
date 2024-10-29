import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/images/themes/logo/logo(1).png";
import style from "./NavBar.module.css";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";
import { SearchInputProps } from "../../types";

const NavBar = ({onSearch}: SearchInputProps) => {
  return (
    <HStack padding={"10px"}>
      <Image className={style.navbar_logo} src={logo}></Image>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
