import React, { Fragment} from "react";
import Banner from "../banner/Banner";
import ContentList from "../content/ContentList";
import Slider from "../slider/Slider";
import Footer from "../layout/Footer";
import HeaderSignIn from "../layout/HeaderSignIn";


const HomeSignin =() =>{
    return (
      <div className="w-full max-w-[1120px] m-auto mt-[48px]">
      <Fragment>
        <HeaderSignIn />
        <Banner />
        <ContentList />
        <Slider />
        <Footer />
      </Fragment>
      </div>
    );
  };
  
  export default HomeSignin;