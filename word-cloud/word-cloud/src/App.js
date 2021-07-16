import React from "react";
import {HashRouter  , Route, Link}from "react-router-dom";
import AppShell from "./AppShell";
import Home from "./Home";
import Texts from "./Texts";
import Words from "./Words";

function App()
{
  return(
      <HashRouter>
          <AppShell>
          <div>
            <Route  exact path="/" component={Home}/>
            <Route  exact path="/texts" component={Texts}/>
            <Route  exact path="/words" component={Words}/>
          </div>
        </AppShell>
      </HashRouter>

  );
}

export default App;