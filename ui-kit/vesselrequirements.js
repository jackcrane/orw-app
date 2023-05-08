// import data from ../assets/requirements.json
import { Micro, Typography } from ".";
import requirements from "../assets/requirements.json";
import React from "react";

export const VesselRequirements = ({ vesselType, vesselClass }) => {
  const vt = vesselType + "-" + vesselClass;
  return (
    <>
      {requirements.sections.map((section) => (
        <>
          <Typography.Subtitle>{section.title}</Typography.Subtitle>
          <Typography.Whisper>({section.reference})</Typography.Whisper>
          {section.items &&
            section.items.map((item) => (
              <>
                <Typography.Text>
                  {item["required-classes"].includes(vt) ? "✅" : "❌"}{" "}
                  {item["required-classes"].includes(vt)
                    ? item["required-text"]
                    : item["not-required-text"]}
                </Typography.Text>
              </>
            ))}
          <Micro.Spacer />
        </>
      ))}
    </>
  );
};
