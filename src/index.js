import React, { lazy, Suspense } from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index.js';
import { Toaster } from 'react-hot-toast';

const App = lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Suspense>
                <App />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    toastOptions={{
                        duration: 5000,
                        style: {
                          background: '#363636',
                          color: '#fff',
                        },
                    }}
                />
            </Suspense>
        </Provider>
    </BrowserRouter>
);

