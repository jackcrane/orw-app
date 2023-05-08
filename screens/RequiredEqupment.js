import React, { useEffect, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Interactables, Micro, Page, Typography } from "../ui-kit";
import { Linking } from "react-native";
import { VesselRequirements } from "../ui-kit/vesselrequirements";

const RequiredEquipment = (props) => {
  const [vesselType, setVesselType] = useState(null);
  const [vesselClass, setVesselClass] = useState(null);

  useEffect(() => {
    setVesselClass(null);
  }, [vesselType]);

  return (
    <>
      <Page.Page
        navigation={props.navigation}
        backable
        title="Required Equipment"
      >
        <Typography.Text>
          Understanding the equipment requirements helps decrease the risk
          factor of paddling and boating. This tool is not a replacement for
          using the official table. Note that even if a vessel is exempted from
          carrying specific equipment, that does not mean a wise skipper would
          not carry it anyway!
        </Typography.Text>
        <Micro.Spacer height={30} />
        <Typography.Title>Vessel Class</Typography.Title>
        <Micro.Spacer />
        <Typography.Text>
          Select what type of vessel you plan to use.
        </Typography.Text>
        <Micro.Spacer />
        <Interactables.SelectGroup
          onSelect={setVesselType}
          value={vesselType}
          options={[
            {
              title: "Powerboats",
              subtitle: "Including electric motors",
              value: "pb",
            },
            {
              title: "Sailboats",
              subtitle: "If attached, use powerboats",
              value: "sb",
            },
            {
              title: "Manually Propelled",
              subtitle: "No motor or sail",
              value: "mp",
            },
          ]}
        />
        <Micro.Spacer height={30} />
        <Typography.Title>Vessel Details</Typography.Title>
        <Micro.Spacer />
        <Typography.Text>
          Pick a few more details on your vessel.
        </Typography.Text>
        <Micro.Spacer />
        <Interactables.SelectGroup
          onSelect={setVesselClass}
          value={vesselClass}
          key={vesselType}
          options={(vesselType === "mp"
            ? [
                { title: "Canoe/Kayak", subtitle: "", value: "canoe" },
                { title: "Rowboat", subtitle: "", value: "row" },
                {
                  title: "Inflatable Boats",
                  subtitle: "",
                  value: "inflatable",
                },
                {
                  title: "Others",
                  subtitle:
                    "Kiteboards, Paddleboards, Belly Boats, Float Tubes",
                  value: "other",
                },
              ]
            : [
                vesselType === "pb"
                  ? {
                      title: "Personal Watercraft",
                      subtitle: "Less than 16",
                      value: "pwc",
                    }
                  : null,
                { title: "Class A", subtitle: "Less than 16'", value: "a" },
                {
                  title: "Class 1",
                  subtitle: "16 feet but less than 26 feet in length",
                  value: "1",
                },
                {
                  title: "Class 2",
                  subtitle: "26 feet but less than 40 feet in length",
                  value: "2",
                },
                {
                  title: "Class 3",
                  subtitle: "40 feet but less than 65 feet in length",
                  value: "3",
                },
              ]
          ).filter((x) => x !== null)}
        />
        <Micro.Spacer />
        <Typography.Title>Requirements</Typography.Title>
        <Micro.Spacer />
        <Typography.Text>
          This is a summary of requirements affecting your vessel. This is not a
          substitute for knowledge and reference to the specifics of Ohio and
          Kentucky boating laws.
        </Typography.Text>
        <Micro.Spacer />
        <VesselRequirements vesselType={vesselType} vesselClass={vesselClass} />
      </Page.Page>
    </>
  );
};

export { RequiredEquipment };
