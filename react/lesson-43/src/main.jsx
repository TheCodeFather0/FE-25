import App from "./App";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./Context/UserContext";
import { IsLoggedInContextProvider } from "./Context/IsLoggedIn";

ReactDOM.createRoot(document.getElementById("root")).render(
  <IsLoggedInContextProvider>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </IsLoggedInContextProvider>
);
