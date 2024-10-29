import { Heading } from "@chakra-ui/react";
import { GameHeadingProps } from "../../types";

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const headingItems = ["Games"];
  if (gameQuery?.platform) headingItems.unshift(gameQuery.platform.name);
  if (gameQuery?.genre) headingItems.unshift(gameQuery.genre.name);
  return <Heading as="h1" marginY={5}>{headingItems.join(" ")}</Heading>;
};

export default GameHeading;
