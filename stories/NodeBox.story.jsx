import React from "react";
import PropTypes from "prop-types";
import NodeBox from "../components/NodeBox";

export const NodeBoxStory = ({ ...props }) => {
  return <NodeBox {...props} />;
};

NodeBoxStory.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  title: PropTypes.string,
  pieces: PropTypes.array,
};

NodeBoxStory.defaultProps = {
  x: 0,
  y: 0,
  title: "デフォルトタイトル",
};
