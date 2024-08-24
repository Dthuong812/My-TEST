import React, { Fragment} from "react";
import Header from "../layout/Header";
import Banner from "../banner/Banner";
import ContentList from "../content/ContentList";
import Slider from "../slider/Slider";
import Footer from "../layout/Footer";


const HomePage =() =>{
    return (
      <div className="w-full max-w-[1120px] m-auto mt-[48px]">
        <Fragment>
        <Header />
        <Banner />
        <ContentList />
        <Slider />
        <Footer />
      </Fragment>
      </div>
      
    );
  };
  
  export default HomePage;