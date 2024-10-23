import { Button, HStack, VStack, Image, ListItem } from "@chakra-ui/react";
import { GenreListItemProps } from "../../types";
import { getCroppedImageUrl } from "../../services/image-url";

const GenreListItem = ({selectedGenre,genre,onSelectGenre,}: GenreListItemProps) => {
  const SelectedCategory = selectedGenre && genre.id === selectedGenre.id ? "bold" : "normal";
  return (
    <ListItem key={genre.id}>
      <HStack paddingY={1}>
        <Image
          boxSize="32px"
          borderRadius={8}
          src={getCroppedImageUrl(genre.image_background)}
        />
        <VStack>
          <Button
            fontWeight={SelectedCategory}
            onClick={() => onSelectGenre(genre)}
            fontSize={"lg"}
            variant="link"
          >
            {genre.name}
          </Button>
        </VStack>
      </HStack>
    </ListItem>
  );
};

export default GenreListItem;
