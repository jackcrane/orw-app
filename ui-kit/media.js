import styled from "styled-components/native";

const Image = styled.Image`
  width: ${(props) => props.width || props.height || "150px"};
  height: ${(props) => props.height || props.width || "150px"};
  resize-mode: contain;
`;

export { Image };
