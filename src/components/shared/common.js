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
