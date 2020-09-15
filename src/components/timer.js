import React from "react";

function Timer(props) {
    return (
        <div className={"pomodoro__timer"}>
            <p className={"pomodoro__timer__clock"}>{props.displayTimer()}</p>
        </div>
    );
}

export default Timer;
