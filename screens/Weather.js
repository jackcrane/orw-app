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
import moment from "moment";

const colors = {
  0: ["#282828", "#ffffff"], // midnight
  1: ["#2c2c2c", "#ffffff"],
  2: ["#303030", "#ffffff"],
  3: ["#333333", "#ffffff"],
  4: ["#48372a", "#ffffff"], // dawn starts
  5: ["#725523", "#ffffff"],
  6: ["#a4741f", "#ffffff"],
  7: ["#db9719", "#000000"], // sunrise
  8: ["#f1bf6a", "#000000"],
  9: ["#f7d6a5", "#000000"],
  10: ["#fae9d2", "#000000"],
  11: ["#fcf5f9", "#000000"],
  12: ["#87ceeb", "#000000"], // midday
  13: ["#bcdded", "#000000"],
  14: ["#d2e7f0", "#000000"],
  15: ["#e6f0f3", "#000000"],
  16: ["#f2dcb8", "#000000"], // sunset starts
  17: ["#f0c791", "#000000"],
  18: ["#eeb46a", "#000000"],
  19: ["#ec9d43", "#000000"], // sunset ends
  20: ["#4f4b42", "#ffffff"],
  21: ["#3c3834", "#ffffff"],
  22: ["#323027", "#ffffff"],
  23: ["#2a2922", "#ffffff"], // almost midnight
};

const SideScrollView = styled.ScrollView`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 300px;
  width: 100%;
  flex-direction: row;
`;

const WeatherEventContainer = styled.View`
  width: 100px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  text-align: center;
  border-right: 2px solid #000;
  flex-direction: column;
`;

const RainBox = styled.View`
  width: 100%;
  height: ${(props) => props.rainPercent * 2 + 20}px;
  border: 0px solid ${(props) => props.color};
  border-top-width: 1px;
`;

const Image = styled.Image`
  width: 100%;
  height: 300px;
  resize-mode: contain;
`;

const WeatherEvent = (props) => {
  const startHour = new Date(props.period.startTime).getHours();
  // Today; 1:00 PM || Tomorrow; 3:00 PM || 5/1; 3:00 PM
  const niceTime = moment(props.period.startTime).calendar(null, {
    sameDay: "[Today, ] h A",
    nextDay: "[Tomorrow, ] h A",
    nextWeek: "M/D, h A",
    lastDay: "[Yesterday, ] h A",
    sameElse: "M/D, h A",
  });

  return (
    <WeatherEventContainer
      style={{
        backgroundColor: colors[startHour][0],
      }}
    >
      <>
        <Typography.Text
          style={{
            color: colors[startHour][1],
            textAlign: "center",
          }}
          size={15}
        >
          {niceTime}
          {"\n"}
          {props.period.temperature}°F
        </Typography.Text>
      </>
      <RainBox
        color={colors[startHour][1]}
        rainPercent={props.period.probabilityOfPrecipitation.value}
      >
        <Typography.Text
          style={{
            color: colors[startHour][1],
            textAlign: "center",
          }}
          size={15}
        >
          Precip {props.period.probabilityOfPrecipitation.value}%
        </Typography.Text>
      </RainBox>
    </WeatherEventContainer>
  );
};

const Weather = (props) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("https://orw.jackcrane.rocks/weather")
      .then((response) => response.json())
      .then((json) => setWeather(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Page.Page navigation={props.navigation} backable title="Weather">
        <Typography.Text>
          Checking the weather is an important part of a successful trip on the
          water. All weather information comes from the National Weather
          Service.
        </Typography.Text>
        {weather && (
          <>
            <SideScrollView horizontal>
              {weather?.properties?.periods?.map((period, i) => (
                <WeatherEvent key={i} period={period} />
              ))}
            </SideScrollView>
          </>
        )}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            Linking.openURL(
              "https://water.weather.gov/resources/hydrographs/ccno1_hg.png"
            )
          }
        >
          <Image
            source={{
              uri: "https://water.weather.gov/resources/hydrographs/ccno1_hg.png",
            }}
          />
        </TouchableOpacity>
      </Page.Page>
    </>
  );
};

export { Weather };
