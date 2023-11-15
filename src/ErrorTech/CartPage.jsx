import React, { useState } from 'react';
import './ErrorTech.css'
import {BiShoppingBag,BiGridSmall,BiPlus,BiTrash,BiSearchAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';

const CartPage = () => {
    const [toggleOn, setToggleOn] = useState(false);

  const handleToggle = () => {
    setToggleOn(!toggleOn);
  };
  document.body.className = toggleOn ? 'red-background' : '';

    const [count]=useState(0);
    const [productCount]=useState(0)
    const [productPrice]=useState(0)
    const [poductText]=useState("")
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"95vh"}}>
        <div className='Navbar'>
            <div className='LogoContainer'>
                <div className='Logo' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                    <BiGridSmall style={{width:"30px",marginTop:"5px",height:"30px"}}/>
                </div>
                <h2>shophub</h2>
            </div>
            <div className='PagesCpntainer'>
                <Link className='link' to="/"><div>Home</div></Link>
                <Link className='link' to="/ShopPage"><div>Shop</div></Link>
                <Link className='link' to="/BlogPage"><div>Blog</div></Link>
                <Link className='link' to="/ContactPage"><div>Contact</div></Link>
                <Link className='link' to="/LoginPage"><div>Login</div></Link>
                <Link className='link' to="/RegisterPage"><div>Register</div></Link>
                <Link className='link' to="/MyAccountPage"><div>My Account</div></Link>
            </div>
            <div className='ShopCOntainer'>
                <div className='Logo' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                    <BiShoppingBag style={{width:"20px",marginTop:"8px",height:"20px"}}/>
                </div>
            </div>
        </div>
        <div className='Product6' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
            <div>
                <h2 style={{textAlign:"center"}}>Shopping Cart new</h2>
            </div>
            {count > 0 && (
                <div className='cartContainer'>
                <div>
                    <img src="" alt="shoeimage" />
                </div>
                <div style={{width:"20vw"}}>
                    <h3>{poductText}</h3>
                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                    <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiTrash style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                    <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        {productCount >0 && (
                            <p style={{width:"25px",marginTop:"10px",height:"25px",marginLeft:"5px"}}>{productCount}</p>
                        )}
                    </div>
                    <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiPlus style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                    <div style={{width:"10vw"}}>
                        <p>{productPrice} $</p>
                    </div>
                </div>
            </div>
            )}
            <div className='MatterContainer'>
                <p style={toggleOn ? {color:"white"} : null}><b>Total:</b>{productPrice}</p>
                <p style={toggleOn ? {color:"white"} : null}><b>Shopping Bag:</b>Free shipping</p>
                <div className='ButtonContainer'>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
        <Link to="/SearchPage" className='link'>
                <div className='L3' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                    <BiSearchAlt2  style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                </div>
        </Link>
        <div className='toggle-container' style={toggleOn ? { backgroundColor: 'black'} : null}>
            <label className='toggle-label'>
                <input type='checkbox' className='toggle-input' onChange={handleToggle}/>
                <span className='slider'></span>
            </label>
        </div>
        <div className='Footer'>
            <div>
                
            </div>
            <div>
                <p style={toggleOn ? {color:"white"} : null}>copyrights @ 2023 | all rights reserved</p>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default CartPage