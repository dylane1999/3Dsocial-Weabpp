import { Slide } from "material-auto-rotating-carousel";
import React from "react";
import styles1 from "./ServiceStyle.module.css";

const { red } = require("@material-ui/core/colors");
const { withStyles } = require("@material-ui/core/styles");

const styles = {
  root: {
    backgroundColor: "transparent",
  },
  media: {
    fontSize: "2px",
  },
};
const StyledSlide = withStyles(styles)(Slide);

function StyledCard(props) {
  const { classes } = props;
  return (
    <StyledSlide
      media={<img src={props.image} />}
      title={props.title}
      mediaBackgroundStyle={{ backgroundColor: props.mediaBg }}
      subtitle={props.subtitle}
    />
  );
}

export default StyledCard;
