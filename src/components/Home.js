import React from "react";
import Products from "./Products";
import "../styles/home.css";

const Home = () => {
  return (
    <div className='home container'>
      <img
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
        className='home-img'
      />
      <div className='product__row'>
        <Products />
      </div>
    </div>
  );
};

export default Home;
