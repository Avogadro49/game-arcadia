import { useState } from "react";
import { Box, Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenresList from "./components/GenreList/GenreList";
import { GameQuery } from "./types";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import SortSelector from "./components/SortSelector/SortSelector";
import GameHeading from "./components/GameHeading/GameHeading";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "max-content 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenresList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
          </GridItem>
        </Show>
        <Show below="lg">
          <Box position="absolute" zIndex={10}>
            <Button onClick={toggleMenu} aria-label="Toggle">
              <GiHamburgerMenu />
            </Button>
            {isMenuOpen && (
              <GridItem area="aside" paddingX={5} top={0} left={0} >
                <GenresList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
              </GridItem>
            )}
          </Box>
        </Show>
        <GridItem area="main" padding="none">
          <Box paddingLeft={8}>
            <GameHeading gameQuery={gameQuery} />
            <HStack padding={0}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} selectedPlatform={gameQuery.platform} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
