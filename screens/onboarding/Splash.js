import React from "react";
import { Media, Micro, Typography } from "../../ui-kit";
import { ImageScaffold } from "../../ui-kit/scaffold";

const Splash = (props) => {
  return (
    <ImageScaffold>
      <Micro.FlexCenter>
        <Media.Image source={require("../../assets/images/logo.png")} />
        <Typography.Title align="center" color="white">
          Plan your next adventure.
        </Typography.Title>
      </Micro.FlexCenter>
    </ImageScaffold>
  );
};

export { Splash };
