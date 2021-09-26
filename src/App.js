import { Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/HomePage/:user">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
