
import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Menubar from '../components/Menubar'
// import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Slider from '../components/Slider';
const Home = () => {
  return <div>
     <Menubar />
      {/* <Navbar/> */}
      <Slider/>
      <Categories/>
      <Products/>
      {/* <NewsLetter/> */}
      <Footer/>
  </div>;
};

export default Home;