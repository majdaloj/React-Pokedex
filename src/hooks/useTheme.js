import { useEffect, useContext } from "react";
import themeColours from "../assets/theme-colours.json";
import { SettingsContext } from "../contexts/SettingsContext";

const useTheme = () => {
  const { isDarkModeOn } = useContext(SettingsContext);

  useEffect(() => {
    if (isDarkModeOn) {
      for (const colour in themeColours.variableNames) {
        document.documentElement.style.setProperty(
          themeColours.variableNames[`${colour}`],
          themeColours.dark[`${colour}`]
        );
      }
    } else {
      for (const colour in themeColours.variableNames) {
        document.documentElement.style.setProperty(
          themeColours.variableNames[`${colour}`],
          themeColours.light[`${colour}`]
        );
      }
    }
  }, [isDarkModeOn]);
};

export default useTheme;
