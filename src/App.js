import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductItem from "./components/Product/ProductItem";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductItem productName="Iphone X" unitPrice="45000" />
        <ProductItem productName="Ipad pro" unitPrice="35000" />
        <ProductItem productName="Ipad Mini" unitPrice="25000" />
        <Footer company="CPE CMU" email="Pim@gmail.com"/>
      </div>
    );
  }
}

export default App;
