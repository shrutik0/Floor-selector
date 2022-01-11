import styled from "styled-components";

export const PathStyle = styled.path`
  fill: none;
  pointer-events: bounding-box;
  cursor: pointer;
  fill-opacity: 0;
  transition: all 150ms linear;
  :hover {
    fill: dodgerblue;
    fill-opacity: 0.36;
    stroke: navy;
  }
`;
