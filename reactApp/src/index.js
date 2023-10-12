import React from "react";
import * as ReactDOM from "react-dom/client"
import Application from "./application/app";

import { Provider } from "react-redux";
import store from "./application/state/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
React Redux includes a <Provider /> component, 
which makes the Redux store available to the rest of your app
*/
root.render(
    <Provider store={store}>
        <Application/>
    </Provider>
)