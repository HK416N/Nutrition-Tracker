// src/App.jsx

import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import TrackedFoodPage from "./pages/TrackedFoodPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <h1>Nuitrition Tracker</h1>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/tracked" element={<TrackedFoodPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
};

export default App;