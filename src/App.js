import React from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import CarouselContainer from "./component/CarouselContainer";
import Family from "./component/Family";
import PastProjects from "./component/PastProjects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CarouselContainer />
      <Family />
      <PastProjects />
    </div>
  );
}

export default App;
