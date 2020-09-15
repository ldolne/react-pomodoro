import React from "react";

function Modal(props) {
    const modalClassName = props.showModal ? "modal display-block" : "modal display-none";
    return (
        <div className={modalClassName}>
            <section className={"modal-main"}>
                <h2>{"Working session is over!"}</h2>
                <p>
                    {"Your working session is over, it's time to take a break!"}
                </p>
                <button onClick={props.restartTimer}>
                    {"Close and start new session"}
                </button>
                <button onClick={props.handleClose}>
                    {"Close"}
                </button>
            </section>
        </div>
    );
}

export default Modal;
