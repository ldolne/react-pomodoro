import React from "react";
import Pomodoro from "./component/pomodoro";

class App extends React.Component {
    render() {
        const {name} = this.props;
        return (
            <div className={"App"}>
                <h1>
                    <Pomodoro />
                    {name}
                    {name}
                    {name}
                    {name}
                </h1>
            </div>
        );
    }
}

export default App;
