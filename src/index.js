import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store";
import { QueryClientProvider, QueryClient } from "react-query";
import "./index.css";

const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
);