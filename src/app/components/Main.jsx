import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ConnectedDashboard } from "./Dashboard";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";

export const Main = () => (
    <Router history={ history }>
        <div>
            <Navbar/>
            <main role="main" className="flex-shrink-0">
            <div className="container">
                <Provider store={ store }>
                    <Route exact path="/dashboard" render={ () => (<ConnectedDashboard/>) } />
                </Provider>
            </div>
            </main>
            <Footer/>
        </div>
    </Router>
);