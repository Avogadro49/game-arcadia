import { GameQuery, GameType } from "../types";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) =>
  useData<GameType>(
    "/games",
    { params: { genres: gameQuery.genre?.id, ordering: gameQuery.sortOrder } },
    [gameQuery]
  );

export default useGames;
