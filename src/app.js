import React from "react";

class App extends React.Component {
    render() {
        const {name} = this.props;
        return (
            <div className={"App"}>
                <h1>{name}</h1>
            </div>
        );
    }
}

export default App;
