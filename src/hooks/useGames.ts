import { GameType, GenresProps } from "../types";
import useData from "./useData";

//prettier-ignore
const useGames = (selectedGenre: GenresProps | null) => useData<GameType>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;
