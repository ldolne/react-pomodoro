import React from "react";
import "modal.css";

const Modal = ({handleClose, show, children}) => {
    const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className={"modal-main"}>
                {children}
                <button onClick={handleClose}>{"Close"}</button>
            </section>
        </div>
    );
};

export default Modal;


/*

import React, {Component} from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Modal from "./components/modal";

class App extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
        };
    }

    showModal = () => {
        this.setState({
            show: true,
        });
    };

    hideModal = () => {
        this.setState({
            show: false,
        });
    };

    render() {
        //const {name} = this.props;
        return (
            <div className={"App"}>
                <Header />
                <Main />
                <Footer />
                <div>
                    <h1>{this.state.count}</h1>
                    <button type={"button"} onClick={this.handleClick}>{"Click on me"}</button>
                    <h1>{"React Modal"}</h1>
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        <p>{"Modal"}</p>
                        <p>{"Data"}</p>
                    </Modal>
                    <button type={"button"} onClick={this.showModal}>
                        {"Open"}
                    </button>
                </div>
            </div>
        );
    }
}

export default App;


 */
