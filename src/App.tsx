import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid/GameGrid";
import GenresList from "./components/GenreList/GenreList";
import { GenresProps } from "./types";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenresProps | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenresList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
