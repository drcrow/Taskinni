import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedNavbar } from "./Navbar";
import { Footer } from "./Footer";
import { ConnectedDashboard } from "./Dashboard";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedTaskDetail } from "./TaskDetail";

export const Main = () => (
    <Router history={ history }>
        <Provider store={ store }>
            <div>
                <ConnectedNavbar/>
                <main role="main">
                <div className="container">
                    <br/>
                    <Route exact path="/dashboard" render={ () => (<ConnectedDashboard />) } />
                    <Route exact path="/task/:id" render={ ({ match }) => (<ConnectedTaskDetail match={ match } />) } />
                </div>
                </main>
                <Footer/>
            </div>
        </Provider>
    </Router>
);