import { useEffect, useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

const useMusic = () => {
  const { isMusicOn } = useContext(SettingsContext);

  var audio = new Audio("../../assets/music.mp3");

  useEffect(() => {
    audio.play();
  }, []);
};

export default useMusic;
