import { SvgUri } from "react-native-svg";

export const NhlTeamSvg = (props) => {
  return (
    <SvgUri
      {...props}
      uri={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.id}.svg`}
    />
  );
};
