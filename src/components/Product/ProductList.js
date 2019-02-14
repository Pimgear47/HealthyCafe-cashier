import React, { Component } from 'react';
import ProductItem from "./ProductItem";

class ProductList extends Component {
    showProducts() {
        return (
            this.props.products &&
            this.props.products.map(product => (
                <ProductItem key={product.productId} product={product} onAddOrder={this.props.onAddOrder} /> //productName={product.productName} unitPrice={product.unitPrice}
            ))
        );
    }

    render() {
        return (
            <div className="row"> {this.showProducts()}</div>
        );
    }
}

export default ProductList;
