import React from "react";
import './Login.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App-body">
                    <p>Login to access the full dashboard</p>
                    <form>
                        <label htmlFor="email" className="email">
                        Email:
                        </label>
                        <input type="email" name="email" id="email" /> <br />
                        <label htmlFor="password" className="password">
                        Password:
                        </label>
                        <input type="password" name="password" id="password" /> <br />
                        <button type="submit" id="submit">
                        OK
                        </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
};

export default App;
