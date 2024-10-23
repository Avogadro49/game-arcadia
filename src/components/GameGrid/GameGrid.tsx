// import { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import { GameGridProps } from "../../types";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import { range } from "../../utils/range";

const GameGrid = ({ selectedGenre }: GameGridProps) => {
  const { data, error, loading } = useGames(selectedGenre);
  // const [displayedGames, setDisplayedGames] = useState<GameType[]>([]);
  const Skeletons = range(1, 10);

  // useEffect(() => {
  //   if (selectedGenre) {
  //     setDisplayedGames(
  //       data.filter((game) =>
  //         game.genres.some((genre) => genre.name === selectedGenre.name)
  //       )
  //     );
  //     console.log(selectedGenre);
  //   } else {
  //     setDisplayedGames(data);
  //   }
  // }, [data, selectedGenre]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {loading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
