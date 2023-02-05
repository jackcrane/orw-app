import React, { useEffect } from "react";
import { Interactables, Media, Micro, Typography } from "../../ui-kit";
import { ImageScaffold } from "../../ui-kit/scaffold";

const Splash = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <ImageScaffold>
      <Micro.FlexCenter between>
        <Media.Image source={require("../../assets/images/logo.png")} />
        <Typography.Title align="center" color="white">
          Plan your next adventure.
        </Typography.Title>
        <Interactables.Button
          onPress={() => props.navigation.navigate("Onboarding:Legal")}
        >
          Get started
        </Interactables.Button>
      </Micro.FlexCenter>
    </ImageScaffold>
  );
};

export { Splash };
