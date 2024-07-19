import React from "react";
import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import SearchTvShow from "./components/SearchTvShow/SearchTvShow";


const App: React.FC = () => {
    return (
        <main className="container">
            <Toolbar />
            <Routes>
                <Route path="/" element={<SearchTvShow />} />
                <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
        </main>
    );
};

export default App;
