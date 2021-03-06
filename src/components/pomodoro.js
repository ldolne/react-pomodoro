import React, {useState, useEffect} from "react";
import Timer from "./timer";
import TimerButton from "./timer-button";
import Modal from "./modal";

function Pomodoro(props) {
    const [timer, setTimer] = useState(props.workingSession);
    const [isActive, setIsActive] = useState(false);
    const [isModalShowing, setIsModalShowing] = useState(false);

    // Timer functions
    function displayTimer() {
        const seconds = timer % 60;
        const minutes = Math.floor(timer / 60);
        function addLeadingZeroes(time) {
            return time < 10 ? `0${time}` : time;
        }
        return `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
    }

    // Modal
    function openModal() {
        setIsModalShowing(true);
    }

    function closeModal() {
        setIsModalShowing(false);
    }

    // Buttons functions
    function addMinute() {
        if (isActive === false && timer < 3540) {
            setTimer(prevTimer => prevTimer + 60);
        }
    }

    function substractMinute() {
        if (isActive === false && timer > 0) {
            setTimer(prevTimer => {
                let newTimer = prevTimer - 60;
                if (newTimer < 0) {
                    newTimer = 0;
                }
                return newTimer;
            });
        }
    }

    function startTimer() {
        setIsActive(true);
    }

    function pauseTimer() {
        setIsActive(false);
    }

    function resetTimer() {
        setIsActive(false);
        setTimer(props.workingSession);
    }

    function handleRestartTimer() {
        closeModal();
        resetTimer();
        setIsActive(true);
    }

    // Lifecycle methods

    useEffect(() => {
        let intervalId;
        if (isActive && timer !== 0) {
            intervalId = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isActive]);

    useEffect(() => {
        if (isActive && timer === 0) {
            setIsActive(false);
            openModal();
        }
    }, [timer]);

    // Components rendering
    return (
        <div
            className={
                "pomodoro animate__animated animate__fadeIn animate__slow"
            }>
            <Timer displayTimer={displayTimer} />
            <div className={"pomodoro__buttons"}>
                {!isActive && (
                    <TimerButton
                        name={<i className={"fas fa-plus fa-2x"} />}
                        handleClick={addMinute}
                    />
                )}
                <TimerButton
                    name={
                        isActive ? (
                            <i className={"fas fa-pause fa-2x"} />
                        ) : (
                            <i className={"fas fa-play fa-2x"} />
                        )
                    }
                    handleClick={isActive ? pauseTimer : startTimer}
                />
                <TimerButton
                    name={<i className={"fas fa-undo-alt fa-2x"} />}
                    handleClick={resetTimer}
                />
                {!isActive && (
                    <TimerButton
                        name={<i className={"fas fa-minus fa-2x"} />}
                        handleClick={substractMinute}
                    />
                )}
            </div>
            <Modal
                showModal={isModalShowing}
                handleClose={closeModal}
                restartTimer={handleRestartTimer}
            />
        </div>
    );
}

Pomodoro.defaultProps = {
    //in seconds
    workingSession: 1500,
};

export default Pomodoro;
