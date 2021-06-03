import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Games from "./Components/Games/Games.jsx";
import TopStream from "./Components/TopStreams/TopStreams";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Live from "./Components/Live/Live";
import GameStreams from "./Components/GameStreams/GameStreams";
import Resultats from "./Components/Resultats/Resultats";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Games} />
          <Route exact path="/top-streams" component={TopStream} />
          <Route exact path="/live/:slug" component={Live} />
          <Route exact path="/game/:slug" component={GameStreams} />
          <Route exact path="/resultats/:slug" component={Resultats} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
