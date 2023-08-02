import { useEffect, useState } from "react";
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
  const imgPath = `https://cms.nhl.bamgrid.com/images/headshots/current/60x60/${props.id}.jpg`;
  const [useDefault, setUseDefault] = useState(false);
  const defaultImgPath =
    "https://cms.nhl.bamgrid.com/images/headshots/current/60x60/skater.jpg";
  useEffect(() => {
    async function checkImage(request) {
      try {
        const response = await fetch(request);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
      } catch (error) {
        setUseDefault(true);
      }
    }
    checkImage(imgPath);
  }, []);

  return <Image {...props} source={useDefault ? defaultImgPath : imgPath} />;
};
