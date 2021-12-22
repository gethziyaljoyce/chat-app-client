import React from "react";
import { BrowserRouter,Route,Switch} from "react-router-dom";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App=()=>{
return (
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={Join}></Route>
  <Route path="/chat" component={Chat}></Route>
  </Switch>
  </BrowserRouter>
);
}

export default App;
