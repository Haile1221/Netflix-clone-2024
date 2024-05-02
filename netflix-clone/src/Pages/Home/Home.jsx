// netflixComponents/Home/Home.js
import React from 'react';
import Header from '../../netflixComponents/Header/Header';
import Footer from '../../netflixComponents/Footer/Footer';


import Banner from '../../netflixComponents/Banner/Banner'
import RowList from '../../netflixComponents/Rows/RowList/RowList';



const Home = () => {
  return (
    <> 
      <Header />        
    < Banner  />
    
    <RowList/>


      <Footer />
    </>
  );
};

export default Home;
