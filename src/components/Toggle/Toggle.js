import React, { useState, useEffect } from "react";
import "./Toggle.css";

const Toggle = ({ isActive, toggleIsActive }) => {
  const [classes, setClasses] = useState({
    toggle: "toggle",
    slider: "toggle-slider",
  });

  useEffect(() => {
    setClasses(
      isActive
        ? {
            toggle: "toggle toggle-active",
            slider: "toggle-slider toggle-slider-active",
          }
        : {
            toggle: "toggle",
            slider: "toggle-slider",
          }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    if (!isActive) {
      setClasses({
        toggle: "toggle toggle-active",
        slider: "toggle-slider toggle-slider-active",
      });
    } else {
      setClasses({
        toggle: "toggle .toggle-backward-animation",
        slider: "toggle-slider toggle-slide-backward-animation",
      });
    }
    toggleIsActive();
  };

  return (
    <div className={classes.toggle}>
      <div className={classes.slider} onClick={toggle}></div>
    </div>
  );
};

export default Toggle;
