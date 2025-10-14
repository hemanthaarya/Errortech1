import  { useState, useContext,useEffect } from 'react';
import './ErrorTech.css';
import { BiShoppingBag, BiGridSmall, BiPlus, BiTrash,BiMinus } from "react-icons/bi";
import { Link } from 'react-router-dom';
import UserContext from './userContext';
import { ImCross } from 'react-icons/im';

const CartPage = () => {
  const [toggleOn, setToggleOn] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { isLoggedIn } = useContext(UserContext);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [cartItems, setCartItems] = useState(currentUser?.cart || []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));

    if (currentUser) {
      const updatedUser = { ...currentUser, cart: cartItems };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
  }, [cartItems, currentUser]);

  const checkOut = () => {
    const confirmCheckout = window.confirm("Proceed to checkout?");
    if (!confirmCheckout) return;

    const newOrder = {
      id: Date.now(), // unique order ID
      items: cartItems,
      total: cartItems.reduce((sum, item) => sum + item.price * item.qty, 0),
      date: new Date().toLocaleString(),
    };

    const updatedUser = {
      ...currentUser,
      orders: [...(currentUser.orders || []), newOrder],
      cart: [],
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setCartItems([]);

    alert("✅ Order placed successfully!");
};


  const handleToggle = () => {
    setToggleOn(!toggleOn);
  };
  document.body.className = toggleOn ? 'red-background' : '';
  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };
  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0) 
    );
  };


  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);


  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"space-between", height:"95vh" }}>
      <div className='Navbar'>
            <div className='LogoContainer'>
                    <BiGridSmall style={{width:"30px",marginTop:"5px",height:"30px"}} className='Logo'/>
                    <h2>shophub</h2>
            </div>
            <div className='PagesCpntainer'>
                <Link className='link' to="/" style={toggleOn ? { color: 'lightblue'  } : {color:"#7d2804"}}><div>Home</div></Link>
                <Link className='link' to="/ShopPage/1"><div>Shop</div></Link>
                <Link className="link" to="/LoginPage"><div style={isLoggedIn ? {display:"none"}:{display:"block"}}>Login</div></Link>
                <Link className="link" to="/MyAccountPage"><div style={isLoggedIn ?{display:"block"}:{display:"none"}}>My Account</div></Link>
            </div>
            <div className={`ShopCOntainer ${isLoggedIn ? "show" : "hide"}`}>
                <Link to="/CartPage" className='link'>
                    <div className='Logo' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"20px",marginTop:"8px",height:"20px"}}/>
                    </div>
                </Link>
            </div>
            <div className='mobile-menu-container' onClick={()=>setToggleMenu(!toggleMenu)} style={toggleMenu ? { display: 'none' } : null}>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
            <div className='mobile-menu' style={toggleMenu ? { display: 'block' } : { display: 'none' }}>
                <span style={{textAlign:"end",cursor:"pointer",color:"red"}}><ImCross onClick={()=>{setToggleMenu(!toggleMenu)}}/></span>
                <Link className='link' to="/"><div>Home</div></Link>
                <Link className='link' to="/ShopPage/1"><div>Shop</div></Link>
                <Link className="link" to="/LoginPage"><div style={isLoggedIn ? {display:"none"}:{display:"block"}}>Login</div></Link>
                <Link className="link" to="/MyAccountPage"><div style={isLoggedIn ?{display:"block"}:{display:"none"}}>My Account</div></Link>
                <Link to="/CartPage" className='link'><div>Cart</div></Link>
            </div>
        </div>
      <div className='Product6' style={toggleOn ? { backgroundColor:"#172838", backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)", boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
        <div>
          <h2 style={{textAlign:"center"}}>Shopping Cart</h2>
        </div>
            <div className='cartContainer'>
                <table className='desktopCart'>
                    <thead style={cartItems.length === 0 ? {display:"none"} : null}>
                        <tr>
                        <th style={toggleOn ? { color: "white", borderColor: "#14ccc3" } : null}>
                            Product image
                        </th>
                        <th style={toggleOn ? { color: "white", borderColor: "#14ccc3" } : null}>
                            Product Name
                        </th>
                        <th style={toggleOn ? { color: "white", borderColor: "#14ccc3" } : null}>
                            Quantity
                        </th>
                        <th style={toggleOn ? { color: "white", borderColor: "#14ccc3" } : null}>
                            Price
                        </th>
                        </tr>
                    </thead>
                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <tbody >
                                <tr key={item.id}>
                                    <td style={toggleOn ? { color: "white", borderColor: "#14ccc3" } : null}>
                                    <img src={item.img} alt={item.name} style={{width:"50px"}}/>
                                    </td>
                                    <td style={toggleOn ? { color: "white", borderColor: "#14ccc3" } : null}>
                                    {item.name}
                                    </td>
                                    <td style={toggleOn ? { color: "white", borderColor: "#14ccc3" } : null}>
                                    {item.qty}
                                    </td>
                                    <td style={toggleOn ? { color: "white", borderColor: "#14ccc3" } : null}>
                                    {item.price*item.qty} $
                                    </td>
                                    <td>
                                        <button className='QtyButton' style={toggleOn ? { backgroundColor: '#677480', color:"lightblue"} : null} onClick={()=>increaseQty(item.id)}><BiPlus/></button>
                                        <button className='QtyButton' style={toggleOn ? { backgroundColor: '#677480', color:"lightblue"} : null} onClick={() => decreaseQty(item.id)}><BiMinus/></button>
                                        <button className='QtyButton' style={toggleOn ? { backgroundColor: '#677480', color:"lightblue"} : null} onClick={() => removeItem(item.id)}><BiTrash/></button>
                                    </td>
                                </tr>
                            </tbody>
                    ))) : (
                        <h3 style={{textAlign:"center"}}>Your cart is empty 🛒</h3>
                    )}
                    </table>
                <div className="mobileCart">
                  {cartItems.map((item) => (
                    <div className="mobileCartItem" key={item.id}>
                      <img src={item.img} alt={item.name} />

                      <div className="mobileCartDetails">
                        <h3>{item.name}</h3>
                        <p>Price: ₹{item.price}</p>
                        <p>Total: ₹{item.price * item.qty}</p>
                      </div>

                      <div className="mobileCartButtons">
                        <button
                          className="QtyButton"
                          onClick={() => decreaseQty(item.id)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="QtyButton"
                          onClick={() => increaseQty(item.id)}
                        >
                          +
                        </button>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>

            </div>

        <div className='MatterContainer'>
          <p style={toggleOn ? {color:"white"} : null}><b>Total:</b> {totalPrice} $</p>
          <p style={toggleOn ? {color:"white"} : null}><b>Shipping:</b> Free</p>
          <div className='ButtonContainer1'>
            <button disabled={cartItems.length === 0} onClick={()=>{checkOut()}}>Proceed to Checkout</button>
          </div>
        </div>
      </div>

      <div className='toggle-container' style={toggleOn ? { backgroundColor: 'black'} : null}>
        <label className='toggle-label'>
          <input type='checkbox' className='toggle-input' onChange={handleToggle}/>
          <span className='slider'></span>
        </label>
      </div>

      <div className='Footer'>
        <p style={toggleOn ? {color:"white"} : null}>copyrights @ 2023 | all rights reserved</p>
      </div>
    </div>
  );
};

export default CartPage;
