import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "layouts";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
};

export default App;
