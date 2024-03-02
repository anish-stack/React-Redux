import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, total } from '../store/CartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let serialNumber = 0;

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  const totalPrice = cartItems.reduce((accumulator, item) => accumulator + item.price, 0)
  const roundedTotalPrice = Math.round(totalPrice);

  return (
    <div className="cart-container">
      <h3>Cart</h3>
      {cartItems && cartItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>Price</th>

              <th>Category</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{++serialNumber}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>

                <td>{item.category}</td>
                <td>
                  <img src={item.image} alt={item.title} style={{ maxWidth: '50px' }} />
                </td>
                <td>
                  <button className='btn' onClick={() => handleRemove(item.id)}>Remove</button>
                </td>
              </tr>

            ))}
            <tr>
              <td colSpan="2"></td>
              <td colSpan="2"></td>
              <td>Total:</td>
              <td>{roundedTotalPrice}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>
          <p>Your cart is empty.</p>
          <img src="https://img.freepik.com/free-vector/cart-basket-shopping-icons-finance_24911-45461.jpg?w=740&t=st=1709318087~exp=1709318687~hmac=6b31b49340f0a2490aa3b5eda32e00315c152d4352d84b05865ea55edd8c5b7d" className="imgs" alt="/" />
        </div>
      )}
    </div>
  );
};

export default Cart;
