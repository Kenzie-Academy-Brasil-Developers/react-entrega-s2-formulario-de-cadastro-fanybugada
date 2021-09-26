import { useHistory, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import React from "react";
import "./styles.css";

function HomePage() {
  const history = useHistory();
  const { user } = useParams();

  return (
    <div className="homeContainer">
      <div>
        <h1>Bem Vind@, {user}!</h1>
      </div>
      <div>
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          onClick={() => history.push("/")}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
export default HomePage;
