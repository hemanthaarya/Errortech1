import React,{useState}from 'react';
import './ErrorTech.css'
import {BiShoppingBag,BiGridSmall,BiExpand,BiSearchAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';

function BlogPage() {
    const [toggleOn, setToggleOn] = useState(false);

  const handleToggle = () => {
    setToggleOn(!toggleOn);
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
                <Link className='link' to="/"><div style={toggleOn ? { ':hover': { color: 'lightblue' } } : {':hover': { color: '#7d2804' }}}>Home</div></Link>
                <Link className='link' to="/ShopPage"><div>Shop</div></Link>
                <Link className='link' to="/BlogPage"><div style={toggleOn ? { color: 'lightblue'  } : {color:"#7d2804"}}>Blog</div></Link>
                <Link className='link' to="/ContactPage"><div>Contact</div></Link>
                <Link className='link' to="/LoginPage"><div>Login</div></Link>
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
        <div className='ProductsContainer1'>
            <div className='Product' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                <div className='Lexpand'>
                    <div className='L1'style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                </div>
                <div>
                    <div className='C1'>
                        <svg width="200" height="200">
                            <circle stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
                        </svg>
                    </div>
                </div>
                <div style={{height:"150px"}}>
                    <img className='img' src='https://shophub-demo.netlify.app/images/shoe1.png' alt='shoeimage'/>
                </div>
                <div>
                    <h3 style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}}>
                        Nike air max 270 to
                        chuck taylors 
                    </h3>
                    <p style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}}>336</p>
                </div>
            </div>
            <div className='Product' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                <div className='Lexpand'>
                    <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                </div>
                <div>
                    <div className='C2'>
                        <svg width="200" height="200">
                            <circle stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
                        </svg>
                    </div>
                </div>
                <div style={{height:"150px"}}>
                    <img className='img' src='https://shophub-demo.netlify.app/images/shoe2.png' alt='shoeimage'/>
                </div>
                <div>
                    <h3 style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}}>
                        Nike air max 1
                    </h3>
                    <p style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}}>300</p>
                </div>

            </div>
            <div className='Product' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                <div className='Lexpand'>
                    <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                </div>
                <div>
                    <div className='C3'>
                        <svg width="200" height="200">
                            <circle stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
                        </svg>
                    </div>
                </div>
                <div style={{height:"150px"}}>
                    <img className='img' src='https://shophub-demo.netlify.app/images/shoe3.png' alt='shoeimage'/>
                </div>
                <div>
                    <h3 style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}}>
                        Nike air max 95
                    </h3>
                    <p style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}}>400</p>
                </div>

            </div>
            <div className='Product' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                <div className='Lexpand'>
                    <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                </div>
                <div>
                    <div className='C4'>
                        <svg width="200" height="200">
                            <circle stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
                        </svg>
                    </div>
                </div>
                <div style={{height:"150px"}}>
                    <img className='img' src='https://shophub-demo.netlify.app/images/shoe4.png' alt='shoeimage'/>
                </div>
                <div>
                    <h3 style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}}>
                        Nike air max 97
                    </h3>
                    <p style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}}>500</p>
                </div>
            </div>
        </div>
        <Link to="/SearchPage" className='link'>
                <div className='L3' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                    <BiSearchAlt2  style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                </div>
        </Link>
        <div className='toggle-container' style={toggleOn ? {backgroundColor:"black"} : null}>
            <label className='toggle-label' style={toggleOn ? {color:"white"} : null}>
                <input type='checkbox' className='toggle-input'  onChange={handleToggle} />
                <span className='slider' style={toggleOn ? {color:"black"} : null}></span>
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

export default BlogPage