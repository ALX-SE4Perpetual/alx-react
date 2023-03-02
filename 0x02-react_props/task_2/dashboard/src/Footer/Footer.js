import React from "react";
import './Footer.css';
import { getFullYear, getFooterCopy } from "../utils/utils";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="App-footer">
          <p>
            Copyright {getFullYear()} - {getFooterCopy()}
          </p>
        </footer>
      </React.Fragment>
    );
  }
};

export default App;