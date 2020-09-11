import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Pomodoro from "./components/pomodoro";

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
            <Pomodoro />
        </div>
    );
}

/*class App extends React.Component {
    render() {
        const {name} = this.props;
        return (
            <div className={"App"}>
                <h1>
                    <Pomodoro />
                    {name}
                </h1>
            </div>
        );
    }
}*/

export default App;
