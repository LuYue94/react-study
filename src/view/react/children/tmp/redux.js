import React, { Component } from 'react';
import './redux.scss';
import store from '../../store/store.js';
import { addToCart, deleteFromCart } from '../../actions/cart-actions';
import { addQuantity, delQuantity } from '../../actions/products-actions';

console.log('store.getState()', store.getState());

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );
// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// unsubscribe();

class ReduxV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: [],
        };
        // this.fnAddToCart = this.fnAddToCart.bind(this)
    }

    fnAddToCart(item, e) {
        store.dispatch(delQuantity(item));
        store.dispatch(addToCart(item));
    }

    fnDeleteFromCart(item, e) {
        store.dispatch(addQuantity(item));
        store.dispatch(deleteFromCart(item));
    }

    componentDidMount() {
        this.setState({
            products: store.getState().productsList.products,
            cart: store.getState().shoppingCart.cart,
        });
    }
    componentDidUpdate() {
        store.subscribe(() => {
            this.setState({
                products: store.getState().productsList.products,
                cart: store.getState().shoppingCart.cart,
            });
        });
    }

    render() {
        return (
            <div className="redux_container">
                <h2>redux</h2>
                <div>
                    <ul>
                        <p>商品列表</p>
                        <li>
                            <span>id</span>
                            <span>名字</span>
                            <span>数量</span>
                            <span>价格</span>
                        </li>
                        {this.state.products.map((item) => {
                            return (
                                <li key={'products_' + item.id}>
                                    <span>{item.id}</span>
                                    <span>{item.product}</span>
                                    <span>{item.quantity}</span>
                                    <span>{item.unitCost}</span>
                                    {item.quantity > 0 ? (
                                        <a
                                            onClick={(e) => {
                                                this.fnAddToCart(item, e);
                                            }}
                                        >
                                            加入购物车
                                        </a>
                                    ) : (
                                        <b>没有库存了</b>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <p>购物车</p>
                    <ul>
                        <li>
                            <span>id</span>
                            <span>名字</span>
                            <span>数量</span>
                            <span>价格</span>
                        </li>
                        {this.state.cart.map((item) => {
                            return (
                                <li key={'cart_' + item.id}>
                                    <span>{item.id}</span>
                                    <span>{item.product}</span>
                                    <span>{item.quantity}</span>
                                    <span>{item.unitCost}</span>
                                    <a
                                        onClick={(e) => {
                                            this.fnDeleteFromCart(item, e);
                                        }}
                                    >
                                        删除
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ReduxV;
