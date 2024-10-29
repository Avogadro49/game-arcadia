// import { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import { GameGridProps } from "../../types";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import { range } from "../../utils/range";

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, loading } = useGames(gameQuery);
  const Skeletons = range(1, 10);
  // const [displayedGames, setDisplayedGames] = useState<GameType[]>([]);

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
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={6}
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
