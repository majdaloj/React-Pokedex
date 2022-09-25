import { SettingsProvider } from "./contexts/SettingsContext";
import AppContainer from "./components/AppContainer/AppContainer";

function App() {
  return (
    <SettingsProvider>
      <AppContainer />
    </SettingsProvider>
  );
}

export default App;
