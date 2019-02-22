import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Monitor from "../components/Monitor/Monitor";
import { connect } from "react-redux";
import { productsFetch } from "../actions/ProductActions";

class Home extends Component {

  componentDidMount() {
    this.props.productsFetch();
  }

  render() {
    return (
      <div>
        <Header />

        <Monitor products={this.props.products} />

        <Footer company="KUNJANAPHORN" email="Kunjanaphorn.b@gmail.com" />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products }
}

export default connect(mapStateToProps, { productsFetch })(Home);
