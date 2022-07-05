import MasterTemplate from "./templates/master";
import { globalStyles } from "./styles/global";

function App() {
  globalStyles();

  return <MasterTemplate>H1</MasterTemplate>;
}

export default App;
