import React, {Component} from "react";
import Timer from "./timer";
import TimerButton from "./timer-button";

/* TODO
    - Display a big timer (minutes and seconds).
    - Buttons
        - plus (+) and minus (-), they will allow the user to adjust the minutes counter - only when it's stopped.
        - start, to run the timer (it will then change to stop), to serve as a toggle button
        - reset, to… reset the timer to its original value
    - At the end of the timer, show a modal to invite user to take a break. The modal will have two buttons:
        - One to close the modal
        - Another to close the modal and start a new timer
    */

class Pomodoro extends Component {
    state = {
        timer: 1500,
        isActive: false,
    };

    displayTimer = () => {
        const seconds = this.state.timer % 60;
        const minutes = (this.state.timer / 60) % 60;

        function addLeadingZeroes(time) {
            return time < 10 ? `0${time}` : time;
        }
        return `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
    }

    addMinute = () => {
        if (this.state.isActive === false) {
            console.log("Plus!");
        }
    }

    substractMinute = () => {
        if (this.state.isActive === false) {
            console.log("Minus!");
        }
    }

    startTimer = () => {
        this.setState(prevState => {
           return {
               ...prevState,
               isActive: true,
           };
        });

        console.log(this.state.isActive);
        console.log("startTimer");
    }

    resetTimer = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                isActive: false,
            };
        });

        console.log(this.state.isActive);
        console.log("resetTimer");
    }

    render() {
        return (
            <div>
                <Timer
                    displayTimer={this.displayTimer}
                    count={this.state.timer}
                />
                <div>
                    <TimerButton
                        name={"plusButton"}
                        handleClick={this.addMinute}
                    />
                    <TimerButton
                        name={"minusButton"}
                        handleClick={this.substractMinute}
                    />
                    <TimerButton
                        name={"startButton"}
                        handleClick={this.startTimer}
                    />
                    <TimerButton
                        name={"resetButton"}
                        handleClick={this.resetTimer}
                    />
                </div>
            </div>
        );
    }
}

export default Pomodoro;


/*import {Card, Button, ButtonGroup} from "react-bootstrap";
import React, {useState} from "react";

const Pomodoro = props => {
    const [timer] = useState(props.workingSession);
    function displaytimer() {
        const seconds = timer % 60;
        const minutes = parseInt(timer / 60) % 60;
        function addLeadingZeroes(time) {
            return time < 10 ? `0${time}` : time;
        }
        return `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
    }
    return (
        <div className={"w-100 d-flex flex-column align-items-center"}>
            <Card className={"bg-warning mb-3 w-50"}>
                <Card.Body>
                    <div className={"d-flex flex-column align-items-center"}>
                        <p className={"time"}>{displaytimer()}</p>
                        <ButtonGroup className={"w-50"}>
                            <Button className={"btn btn-info"}>{"+"}</Button>
                            <Button className={"btn btn-success"}>
                                {"START"}
                            </Button>
                            <Button className={"btn btn-danger"}>
                                {"RESET"}
                            </Button>
                            <Button className={"btn btn-info"}>{"-"}</Button>
                        </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

Pomodoro.defaultProps = {
    //in seconds = 25 mins - 1500
    workingSession: 1500,

    //in seconds = 5 min - 300s
    breakSession: 300,
};*/
