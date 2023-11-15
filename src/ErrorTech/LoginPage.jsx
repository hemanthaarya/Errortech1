import React, {  useState } from 'react';
import './ErrorTech.css'
import {BiShoppingBag,BiGridSmall,BiSearchAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';

function LoginPage() {
    const [toggleOn, setToggleOn] = useState(false);

  const handleToggle = () => {
    setToggleOn(!toggleOn);
  };
  const handleLogin = () => {
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'mor_2314',
        password: '83r5^_',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  };
  document.body.className = toggleOn ? 'red-background' : '';
    
   
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100vw",height:"100vh"}}>
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
                <Link className='link' to="/LoginPage"><div style={toggleOn ? { color: 'lightblue'  } : {color:"#7d2804"}}>Login</div></Link>
                <Link className='link' to="/RegisterPage"><div>Register</div></Link>
                <Link className='link' to="/MyAccountPage"><div>My Account</div></Link>
            </div>
            <div className='ShopCOntainer'>
                <Link to="/CartPage" className='link'>
                    <div className='Logo' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"20px",marginTop:"8px",height:"20px"}}/>
                    </div>
                </Link>
            </div>
        </div>

        <div className='Product3' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
            <div className='Tit'>
                <h1 style={toggleOn ? {color:"white"} : null}>Login</h1>
            </div>
            <div className='Tit'>
                <p style={toggleOn ? {color:"white"} : null}>E-mail:</p>
            </div>
            <div className='Input'>
                <input style={toggleOn ? {backgroundColor:"black",color:"white"} : null}  type='text' placeholder='abc@example.com'/>
            </div>
            <div className='Tit'>
                <p style={toggleOn ? {color:"white"} : null}>Password:</p>
            </div>
            <div className='Input'>
                <input style={toggleOn ? {backgroundColor:"black",color:"white"} : null}  type='password'/>
            </div>
            <div className='ButtonContainer'>
                <button style={toggleOn ? { backgroundColor: '#677480',color:"lightblue"} : null} onClick={handleLogin}>Login</button>
            </div>

        </div>
        <div></div>
        <Link to="/SearchPage" className='link'>
                <div className='L3' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                    <BiSearchAlt2  style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                </div>
        </Link>
        <div className='toggle-container' style={toggleOn ? {backgroundColor:"black"} : null}>
            <label className='toggle-label'>
                <input type='checkbox' className='toggle-input'  onChange={handleToggle} />
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
                <input  id='switch' type='checkbox'/>
            </div>
        </div>
    </div>
  )
}

export default LoginPage