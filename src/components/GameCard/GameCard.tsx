import React from "react";
import { GameProps } from "../../types";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import CriticScore from "../CriticScore/CriticScore";
import { getCroppedImageUrl } from "../../services/image-url";
import RatingIcons from "../RatingIcons/RatingIcons"

const GameCard: React.FC<GameProps> = ({ game }) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading display="flex" justifyContent="space-between" fontSize={"2xl"}>{game.name}<RatingIcons rating={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
