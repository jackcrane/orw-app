import styled from "styled-components/native";

const TextBuilder = styled.Text`
  font-size: ${(props) => props.size || "20px"};
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
`;

const Text = styled.Text`
  font-size: 20px;
  font-family: "Raleway_400Regular";
`;

const Title = styled(TextBuilder)`
  font-size: 32px;
  font-family: "LibreFranklin_700Bold";
`;

export { Text, Title };
