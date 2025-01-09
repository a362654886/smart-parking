import ReactDOM from "react-dom/client";
import Home from "./pages/smartParking";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    Smart Phone
    <Home />
  </div>
);
