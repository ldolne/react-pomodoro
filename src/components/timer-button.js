import React from "react";

function TimerButton(props) {
    return (
        <button
            type={"button"}
            className={"pomodoro__buttons__button"}
            onClick={props.handleClick}>
            {props.name}
        </button>
    );
}

export default TimerButton;

// pass functions to be executed on buttons via props

/*class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) =>{
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        });
    }

    render() {
        return (
            <div>
                <Button login={this.state.isLoggedIn} handleClick={this.handleClick} text={this.state.isLoggedIn ? "Log out" : "Log in"} />
            </div>
        )
    }
}

export default App




// SOLUCE

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        )
    }
}

export default App*/
