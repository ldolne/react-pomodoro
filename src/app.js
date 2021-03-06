import React from "react";
import Header from "./components/header";
import MainContent from "./components/main";
import Footer from "./components/footer";

function App() {
    return (
        <div className={"app"}>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
