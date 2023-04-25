import React, { useState } from 'react';

const Redux: React.FC = () => {
    const [count, setCount] = useState<number>(0);

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
                    {/* {
          this.state.products.map((item) => {
            return (
              <li key={'products_' + item.id}>
                <span>{item.id}</span>
                <span>{item.product}</span>
                <span>{item.quantity}</span>
                <span>{item.unitCost}</span>
                {
                  item.quantity > 0 ?
                    <a onClick={(e) => { this.fnAddToCart(item, e) }}>加入购物车</a> :
                    <b>没有库存了</b>
                }

              </li>
            )
          })
        } */}
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
                    {/* {
          this.state.cart.map((item) => {
            return (
              <li key={'cart_' + item.id}>
                <span>{item.id}</span>
                <span>{item.product}</span>
                <span>{item.quantity}</span>
                <span>{item.unitCost}</span>
                <a onClick={(e) => { this.fnDeleteFromCart(item, e) }}>删除</a>
              </li>
            )
          })
        } */}
                </ul>
            </div>
        </div>
    );
};

export default Redux;
