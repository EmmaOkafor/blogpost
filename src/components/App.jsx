import React from "react";
import Header from "./temps/Header"
import Footer from "./temps/Footer"
import Banner from "./temps/Banner"
import Home from "./blog/Home"

function App() {
  return (
    <>
    <Header />
    <Banner img="/images/bg.jpg" />
    <Home />    
    <Footer />

    </>
  );
}

export default App;
