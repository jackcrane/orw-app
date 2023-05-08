import styled from "styled-components/native";

const TextBuilder = styled.Text`
  font-size: ${(props) => props.size || "20px"};
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
`;

const Text = styled.Text`
  font-size: ${(props) => props.size || 20}px;
  font-family: ${(props) =>
    props.bold ? "Raleway_700Bold" : "Raleway_400Regular"};
  color: ${(props) => props.color || "black"};
`;

const Title = styled(TextBuilder)`
  font-size: 40px;
  font-family: "LibreFranklin_700Bold";
`;

const Subtitle = styled(TextBuilder)`
  font-size: 30px;
  font-family: "LibreFranklin_700Bold";
`;

const RalewaySubtitle = styled(TextBuilder)`
  font-size: {(props) => props.size || "30px"};
  font-family: "Raleway_700Bold";
`;

const Whisper = styled(Text)`
  font-size: 15px;
  font-family: "Raleway_400Regular";
  color: #a0a0a0;
`;

export { Text, Title, Whisper, Subtitle, RalewaySubtitle };
