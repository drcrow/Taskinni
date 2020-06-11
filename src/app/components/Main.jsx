import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ConnectedDashboard } from "./Dashboard";

export const Main = () => (
    <div>
        <Navbar/>
        <Provider store={store}>    
            <ConnectedDashboard/>
        </Provider>
        <Footer/>
    </div>
);