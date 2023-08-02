import { Image } from "expo-image";

export const NhlTeamIcon = (props) => {
  return (
    <Image
      {...props}
      contentFit="scale-down"
      source={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.id}.svg`}
    />
  );
};

export const PlayerThumbnail = (props) => {
  return (
    <Image
      {...props}
      source={`https://cms.nhl.bamgrid.com/images/headshots/current/60x60/${props.id}.jpg`}
    />
  );
};
