import React from "react";
import Imp_button from "../components/buttons/Imp_button";
import { GlobalStyle } from "../GlobalStyle";
import Form from './Form'
import Cards from "./MainPage/components/Cards";
import HeroSection from "./MainPage/components/HeroSection";
import Search from "./Search";
// import Login from "./Login";
// import Manager from './Manager';


function Dashboard() {
  const [Clicked, setClicked] = React.useState(false)  
  function onToggle(){
    setClicked(true);  
  }
    return (
    <>
      <HeroSection />
      <Cards />
    </>

    );
  }
  
  export default Dashboard;
  