import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const Root = ({ children }) => (
  <div>
    <Navbar />
    <div id="main" className="container-fluid">
      { children }
    </div>
    <Footer />
  </div>
)

export default Root;


