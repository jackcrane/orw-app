import React from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Interactables, Micro, Page, Typography } from "../ui-kit";
import { Linking } from "react-native";

const Safety = (props) => {
  return (
    <>
      <Page.Page navigation={props.navigation} backable title="Safety" compact>
        <Typography.Text>
          Planning and awareness are important to make sure you have a
          productive day on the river!
        </Typography.Text>
        <Micro.Spacer height={30} />
        <Typography.Title>Emergency Contacts</Typography.Title>
        <Micro.Spacer />
        <Typography.Text>
          Make sure you have access to all appropriate emergency contact
          information. Dialing 911 may work even when you do not have phone
          reception.
        </Typography.Text>
        <Micro.Spacer />
        <Interactables.EmergencyButton />
        <Micro.Spacer height={30} />
        <Typography.Title>Be aware of the weather</Typography.Title>
        <Micro.Spacer />
        <Typography.Text>
          Always check the weather conditions of your route and destination in
          advance.
        </Typography.Text>
        <Micro.Spacer />
        <Interactables.ButtonOutline
          onPress={() => props.navigation.navigate("Main:Weather")}
        >
          <Typography.Text>Check the weather</Typography.Text>
          {/* TODO: Route this to the weather page */}
        </Interactables.ButtonOutline>
        <Micro.Spacer height={30} />
        <Typography.Title>Bring the right equipment</Typography.Title>
        <Micro.Spacer />
        <Typography.Text>
          Be prepared with the right safety equipment
        </Typography.Text>
        <Micro.Spacer />
        <Interactables.ButtonOutline
          onPress={() =>
            // Toast.show({
            //   type: "info",
            //   text1: "Coming Soon",
            //   text2: "This feature is not ready yet.",
            // })
            Linking.openURL(
              "https://ohiodnr.gov/wps/wcm/connect/gov/371feeee-ce73-4bb9-b6f9-40dc90bc5ea7/Req+Eqpt.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE.Z18_M1HGGIK0N0JO00QO9DDDDM3000-371feeee-ce73-4bb9-b6f9-40dc90bc5ea7-nINWAkd"
            )
          }
        >
          <Typography.Text>View the table</Typography.Text>
        </Interactables.ButtonOutline>
        <Interactables.ButtonOutline
          onPress={() => props.navigation.navigate("Main:RequiredEquipment")}
        >
          <Typography.Text>Use the safety widget</Typography.Text>
        </Interactables.ButtonOutline>
        <Micro.Spacer height={30} />
        <Typography.Title>
          Make a float plan and leave it with family and friends
        </Typography.Title>
        <Micro.Spacer />
        <Typography.Text>
          You can use the US Coast Guard’s float plan template to leave
          important rescue and checkpoint information with family and friends
        </Typography.Text>
        <Micro.Spacer />
        <Interactables.ButtonOutline
          onPress={() =>
            Linking.openURL(
              "https://floatplancentral.cgaux.org/download/USCGFloatPlan.pdf"
            )
          }
        >
          <Typography.Text>Open the guide</Typography.Text>
        </Interactables.ButtonOutline>
        <Micro.Spacer height={30} />
        <Typography.Title>Bring the optional equipment</Typography.Title>
        <Micro.Spacer />
        <Typography.Text>
          {`
          Coming prepared with optional equipment can help you have a more enjoyable day!

          • Dry bag for clothes, camera, etc.
          • Waterproof case for phone (not zip-lock bags!)
          • Sun screen/lip balm
          • Hat and sun glasses with keeper straps
          • Water, energy drink, snacks
          • Flashlight
          • Water shoes
          • Extra clothes/windproof jacket
          • Mooring lines, rope, anchor
          • Cup or can for bailing
          • Insect repellent
          • First aid kit`
            .split("  ")
            .join("")}
        </Typography.Text>
        {/* <Micro.Spacer height={30} />
        <Typography.Title>Disclaimer</Typography.Title>
        <Micro.Spacer />
        <Interactables.ButtonOutline
          onPress={() =>
            Toast.show({
              type: "info",
              text1: "Coming Soon",
              text2: "This feature is not ready yet.",
            })
          }
        >
          <Typography.Text>View the legal stuff</Typography.Text>
        </Interactables.ButtonOutline> */}
      </Page.Page>
    </>
  );
};

export { Safety };
