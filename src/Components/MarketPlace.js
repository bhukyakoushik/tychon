import React, { useState } from 'react';
import Header from "./Header";
//import Footer from "./Footer";
import SearchBar from "./SearchBar";

function MarketPlace() {

    return (
        <React.Fragment>
           <Header/> 
        <div className="container">
          <SearchBar />
          {/* <CardList results={state.results} /> */}
      </div>
      </React.Fragment>
    );
  }

export default MarketPlace
