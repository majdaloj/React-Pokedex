import { SETTINGS_ACTIONS } from "./SettingsActions";

const SettingsReducer = (state, action) => {
  switch (action.type) {
    case SETTINGS_ACTIONS.TOGGLE_IS_DARK_MODE_ON:
      return {
        ...state,
        isDarkModeOn: !state.isDarkModeOn,
      };
    case SETTINGS_ACTIONS.TOGGLE_IS_MUSIC_ON:
      return {
        ...state,
        isMusicOn: !state.isMusicOn,
      };
    case SETTINGS_ACTIONS.UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default SettingsReducer;
