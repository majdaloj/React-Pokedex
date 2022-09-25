import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import "./SettingsModal.css";
import Toggle from "../Toggle/Toggle";
import { SettingsContext } from "../../contexts/SettingsContext";

const SettingsModal = ({ open, onClose }) => {
  const {
    isDarkModeOn,
    isMusicOn,
    name,
    toggleIsDarkModeOn,
    toggleIsMusicOn,
    updateName,
  } = useContext(SettingsContext);

  const [nameField, setNameField] = useState(name);

  const handleNameChanges = (e) => {
    e.preventDefault();
    setNameField(e.target.value);
  };

  const saveName = () => {
    updateName(nameField);
  };

  if (!open) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <>
        <div className="settings-modal-overlay"></div>
        <div className="settings">
          <header className="settings-header">
            <FaTimes color="#777" onClick={onClose} className="close-icon" />
            <h2 className="settings-title">Settings</h2>
          </header>
          <label htmlFor="name" className="settings-pokedex-name">
            Your Name:
            <input
              type="text"
              name="name"
              placeholder={nameField ? nameField : "Enter your name..."}
              onChange={(e) => handleNameChanges(e)}
            />
            <button onClick={saveName}>Save</button>
          </label>
          <div className="settings-toggle">
            <p>Dark Mode:</p>
            <Toggle
              isActive={isDarkModeOn}
              toggleIsActive={toggleIsDarkModeOn}
            />
          </div>
          <div className="settings-toggle">
            <p>Music:</p>
            <Toggle isActive={isMusicOn} toggleIsActive={toggleIsMusicOn} />
          </div>
        </div>
      </>,
      document.getElementById("portal")
    );
  }
};

export default SettingsModal;
