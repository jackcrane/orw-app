import styled from "styled-components/native";

const FlexCenter = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  justify-content: ${(props) => (props.between ? "space-between" : "center")};
`;

const Directional = styled.View`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => (props.direction ? "space-between" : "center")};
  align-items: ${(props) => (props.direction ? "flex-start" : "center")};
`;

const Row = styled(Directional)`
  flex-direction: row;
`;

const Spacer = styled.View`
  height: ${(props) => props.height || "10px"};
  width: ${(props) => props.width || "10px"};
`;

const Absolute = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${(props) => props.bottom || null};
  z-index: 10000;
  align-items: center;
`;

const Center = styled.View`
  display: flex;
  justify-content: ${(props) => (props.between ? "space-between" : "center")};
  width: 100%;
  align-items: center;
  flex-direction: ${(props) => props.direction || "column"};
`;

export { FlexCenter, Row, Spacer, Directional, Absolute, Center };
