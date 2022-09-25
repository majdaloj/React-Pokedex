import React, { useState, useContext } from "react";
import "./Header.css";
import { BsGearFill } from "react-icons/bs";
import SettingsModal from "../SettingsModal/SettingsModal";
import { SettingsContext } from "../../contexts/SettingsContext";
import themeColours from "../../assets/theme-colours.json";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { name, isDarkModeOn } = useContext(SettingsContext);
  const history = useHistory();

  const toTitleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
  }

  return (
    <header className="main-header">
      <h1 className="pokemon-title" onClick={() => history.push('/')}>{name ? toTitleCase(name) + "'s " : ""}Pokedex</h1>
      <div className="settings-icon">
        <BsGearFill
          color={
            isDarkModeOn
              ? themeColours.dark.colour2
              : themeColours.light.colour2
          }
          size={30}
          onClick={() => setIsSettingsOpen(true)}
        />
        <SettingsModal
          open={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
