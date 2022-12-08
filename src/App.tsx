import React, { useState, useEffect } from "react";
import { getPeople } from "./api/people";
import styled from "styled-components";
import "./App.css";
import { PersonView } from "./views/PersonView";
import { FormView } from "./views/FormView";





function App() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(true);
  const [starwars, setStarwars] = useState<string[]>([]);
  return (
    <div className="App">
      {isLoggedIn ? (
        <PersonView setStarwars={setStarwars} setLoggedIn={setLoggedIn} />
      ) : (
        <FormView starwars={starwars} setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
