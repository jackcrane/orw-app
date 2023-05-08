import React, { useEffect, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Interactables, Micro, Page, Typography } from "../ui-kit";
import {
  Linking,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { VesselRequirements } from "../ui-kit/vesselrequirements";
import { LinearGradient } from "expo-linear-gradient";
import { fromCSS } from "@bacons/css-to-expo-linear-gradient";
import styled from "styled-components/native";

const ECContainer = styled(TouchableOpacity)``;
const ECImage = styled.ImageBackground`
  width: 100%;
  height: 200px;
  background-color: #ccc;
  border-radius: 10px;
  border: 1px solid black;
  overflow: hidden;
`;
const ECGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  padding: 10px;
  justify-content: flex-end;
`;
const ECContent = styled.View`
  /* width: 70%; */
`;
const ECHistory = styled.View`
  background-color: #ff0000;
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

function isHistory(dateString) {
  try {
    const dateRegex =
      /(Mon|Tue|Wed|Thu|Fri|Sat|Sun|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),?\s+\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{2,4}/g;
    const timeRegex = /\b\d{2}:\d{2}\b/g;

    const dates = [...dateString.matchAll(dateRegex)].map((match) => match[0]);
    const times = [...dateString.matchAll(timeRegex)].map((match) => match[0]);

    const endDateStr = `${dates[dates.length - 1]} ${
      times[times.length - 1] || ""
    }`;
    const endDate = new Date(endDateStr);

    const now = new Date();
    // return endDate < now;
    if (endDate < now) {
      return "history";
    } else {
      return "future";
    }
  } catch (e) {
    console.log(e);
    return "unknown";
  }
}

const EventCard = ({ event }) => {
  return (
    <>
      <ECContainer
        onPress={() =>
          Linking.openURL("https://www.ohioriverway.org" + event.link)
        }
        activeOpacity={0.5}
      >
        <ECImage source={{ uri: event.image }}>
          <ECGradient
            {...fromCSS(
              `linear-gradient(15deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 80%, rgba(255,255,255,0.1) 100%);`
            )}
          >
            <ECContent>
              <Typography.RalewaySubtitle size="20px">
                {event.title}
              </Typography.RalewaySubtitle>
              <Typography.Text size="15px">{event.date}</Typography.Text>
            </ECContent>
            {isHistory(event.date) === "history" && (
              <ECHistory>
                <Typography.Text color="#FFFFFF" size="15px" bold>
                  Past Event
                </Typography.Text>
              </ECHistory>
            )}
            {isHistory(event.date) === "unknown" && (
              <ECHistory>
                <Typography.Text color="#FFFFFF" size="15px" bold>
                  Could not determine if this event is in the past or future.
                </Typography.Text>
              </ECHistory>
            )}
          </ECGradient>
        </ECImage>
      </ECContainer>
      <Micro.Spacer />
    </>
  );
};

const Events = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://orw.jackcrane.rocks/events")
      .then((response) => response.json())
      .then((json) => setEvents(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Page.Page
        navigation={props.navigation}
        backable
        title="Rivertown Events"
      >
        {events.length === 0 && (
          <Typography.Text>Loading events...</Typography.Text>
        )}
        {events.map((event) => (
          // <Typography.Text>{event.title}</Typography.Text>
          <EventCard event={event} />
        ))}
      </Page.Page>
    </>
  );
};

export { Events };
