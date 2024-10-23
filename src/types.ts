import { ReactNode } from "react";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type GameType = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: string[];
};

export type GamesResponse = {
  count: number;
  results: GameType[];
};

export type GameProps = {
  game: GameType;
};

export type GameGridProps = {
  selectedGenre: GenresProps | null;
};

export type PlatformListProps = {
  platforms: Platform[];
};

export type CriticScoreProps = {
  score: number;
};

export type GameCardContainerProps = {
  children: ReactNode;
};

export type GenresProps = {
  id: number;
  name: string;
  image_background: string;
};

export type GenreListProps = {
  onSelectGenre: (genre: GenresProps) => void;
  selectedGenre: GenresProps | null;
};

export type GenreListItemProps = {
  genre: GenresProps;
  selectedGenre: GenresProps | null;
  onSelectGenre: (genre: GenresProps) => void;
};

export type DataResponse<T> = {
  count: number;
  results: T[];
};
