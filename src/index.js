import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import MainLayout from "./layouts/MainLayouts/MainLayouts";
import store from "./stores/store.js";

render(
    <Provider store={store}>
        <MainLayout />
    </Provider>, document.querySelector("#redux"));