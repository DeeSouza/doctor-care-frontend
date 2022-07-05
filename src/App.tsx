import MasterTemplate from "./templates/master";
import WebRoutes from "./routes";

import { globalStyles } from "./styles/global";

function App() {
  globalStyles();

  return (
    <MasterTemplate>
      <WebRoutes />
    </MasterTemplate>
  );
}

export default App;
