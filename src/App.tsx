import { BrowserRouter } from "react-router-dom";
import Root from "./routes/root";

import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;
