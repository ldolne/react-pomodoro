import React from "react";

function Modal(props) {
    const modalClassName = props.showModal
        ? "modal display-block"
        : "modal display-none";
    return (
        <div className={modalClassName}>
            <section className={"modal__main"}>
                <h2 className={"modal__main__title"}>
                    {"Working session is over!"}
                </h2>
                <p className={"modal__main__text"}>
                    {"Your working session is over, it's time to take a break!"}
                </p>
                <div className={"modal__main__buttons"}>
                    <button
                        type={"button"}
                        className={"modal__main__buttons__button"}
                        onClick={props.handleRestartTimer}>
                        {"Close and start a new session"}
                    </button>
                    <button
                        type={"button"}
                        className={"modal__main__buttons__button"}
                        onClick={props.handleClose}>
                        {"Close"}
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Modal;
