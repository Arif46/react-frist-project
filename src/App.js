import React from 'react';
import './App.css';
import NavbarPage from "./Components/header/NavbarPage";
import CarouselPage from './Components/slider/CarouselPage';
import EcommercePage from './Components/card/EcommercePage';
import Footer from './Components/footer/Footer';
// import FormPage from "./Components/header/FormPage";

function App() {
  return (
    <div className="App">
      <div className="container">
      <NavbarPage/>
      {/* <FormPage /> */}
       <CarouselPage />
       <EcommercePage />
       <Footer/>
      </div>
        
    </div>
  );
}

export default App;
