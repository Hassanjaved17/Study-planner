import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import Focus from "./pages/Focus";
import Progress from "./pages/Progress";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/planner" element={<Planner />} />
                    <Route path="/focus" element={<Focus />} />
                    <Route path="/progress" element={<Progress />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
