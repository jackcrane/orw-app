import { Typography } from "..";
const { Text } = Typography;
import React from "react";
import renderer from "react-test-renderer";

describe("Styled Text Component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render the correct text", () => {
    const tree = renderer.create(<Text>Test</Text>).toJSON();
    const text = tree.children[0];
    expect(text).toBe("Test");
  });
  it("should render the correct basic style", () => {
    const tree = renderer.create(<Text>Test</Text>).toJSON();
    const style = tree.props.style;
    expect(style[0]).toEqual({
      color: "#333",
      fontSize: 20,
      fontFamily: "Inter_400Regular",
    });
  });
  it("should not pass styles down", () => {
    const tree = renderer
      .create(<Text style={{ color: "red" }}>Test</Text>)
      .toJSON();
    const style = tree.props.style;
    expect(style[0]).not.toContain({
      color: "red",
    });
  });
  it("should pass props down", () => {
    const tree = renderer.create(<Text test="test">Test</Text>).toJSON();
    const props = tree.props;
    expect(props).toMatchObject({
      test: "test",
    });
  });
});
