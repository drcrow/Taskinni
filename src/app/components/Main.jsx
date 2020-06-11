import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedNavbar } from "./Navbar";
import { Footer } from "./Footer";
import { ConnectedDashboard } from "./Dashboard";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";

export const Main = () => (
    <Router history={ history }>
        <Provider store={ store }>
            <div>
                <ConnectedNavbar/>
                <main role="main" className="flex-shrink-0">
                <div className="container">
                    <Route exact path="/dashboard" render={ () => (<ConnectedDashboard/>) } />
                </div>
                </main>
                <Footer/>
            </div>
        </Provider>
    </Router>
);