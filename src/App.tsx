import React from "react";
import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import SearchTvShow from "./components/SearchTvShow/SearchTvShow";
import TvShowDisplay from "./components/TvShowDisplay/TvShowDisplay";



const App: React.FC = () => {
    return (
        <main className="container">
            <Toolbar />
            <Routes>
                <Route path="/" element={<SearchTvShow />} />
                <Route path="/shows/:id" element={<TvShowDisplay/>} />
                <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
        </main>
    );
};

export default App;
