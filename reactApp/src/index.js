import React from "react";
import * as ReactDOM from "react-dom/client"
import Application from "./application/app";

import { Provider } from "react-redux";
import store from "./application/state/store";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <Provider store={store}>
        <Application/>
    </Provider>
)