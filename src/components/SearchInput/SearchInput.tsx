import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchInputProps } from "../../types";

const SearchInput = ({onSearch}: SearchInputProps) => {
    const ref = useRef<HTMLInputElement>(null)
  return (
    <form  onSubmit={(event) => {
        event.preventDefault()
        if(ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
