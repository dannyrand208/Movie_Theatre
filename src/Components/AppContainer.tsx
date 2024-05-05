import React from "react";
import { BrowserRouter } from "react-router-dom"; 
import Body from "../layouts/Body";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const AppContainer = () => {
    return (
        <BrowserRouter> 
            {/* Header */}
            <Header />
            {/* Body */}
            <Body />
            {/* Footer */}
            <Footer />
        </BrowserRouter> 
    );
};

export default AppContainer; 
