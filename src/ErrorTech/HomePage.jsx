import React,{useState,useEffect} from 'react';
import './ErrorTech.css';
import axios from 'axios';
import {BiShoppingBag,BiGridSmall,BiExpand,BiSearchAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';
import ShopPage from './ShopPage';
import CartPage from './CartPage';

function HomePage() {
    const [toggleOn, setToggleOn] = useState(false);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
            console.log(products)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);


  const handleToggle = () => {
    setToggleOn(!toggleOn);
  };
  const linkClass = toggleOn ? 'link-hover-effect' : 'link';
  document.body.className = toggleOn ? 'red-background' : '';
  return (
    <div className={`main-container ${toggleOn ? '' : ''}`}>
        <div className='Navbar'>
            <div className={`LogoContainer ${toggleOn ? 'red-background' :''}`}>
                <div className='Logo' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                    <BiGridSmall style={{width:"30px",marginTop:"5px",height:"30px"}}/>
                </div>
                <h2>shophub</h2>
            </div>
            <div className={`PagesCpntainer ${toggleOn ? 'new_PagesCpntainer' :' '}`}>
                <Link className='link' to="/"><div style={toggleOn ? { color: 'lightblue'  } : {color:"#7d2804"}}>Home</div></Link>
                <Link className='link' to="/ShopPage"><div>Shop</div></Link>
                <Link className='link' to="/BlogPage"><div>Blog</div></Link>
                <Link className='link' to="/ContactPage"><div>Contact</div></Link>
                <Link className='link' to="/LoginPage"><div>Login</div></Link>
                <Link className='link' to="/RegisterPage"><div>Register</div></Link>
                <Link className='link' to="/MyAccountPage"><div>My Account</div></Link>
            </div>
            <div>
                <Link to="/CartPage" className='link'>
                    <div className='Logo' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"20px",marginTop:"8px",height:"20px"}}/>
                    </div>
                </Link>
            </div>
        </div>
        <div className='OrangeContainer' style={toggleOn ? { backgroundColor: '#2c59c9'  } : null}>
            <div className='Home' style={toggleOn ? { color: 'black'  } : null}>Home<span style={toggleOn ? { color: 'white'  } : {color:"balck"}}>/shop</span></div>
            <div className='Shop'>
                <h3 style={toggleOn ? {color:"white"} : null}>Shop</h3>
            </div>
            <div className='select'>
                <p style={toggleOn ? {color:"white"} : null}>showing results of 1-12/36</p>
                <select>
                    <option>default sorting</option>
                    <option>Latest</option>
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
            </div>
        </div>
        <div className='ProductsContainer'>
            <div className='Product' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                <div className='Lexpand'>
                    <Link to="/ShopPage" className='link'>
                        <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                            <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                        </div>
                    </Link>
                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                </div>
                <div>
                    <div className='C1' style={toggleOn ? { backgroundColor:"#1c3d1c"  } : null}>
                        <svg width="200" height="200">
                            <circle style={toggleOn ? { fill: '#2c59c9',stroke:"#2f2c4f" } : null} stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
                        </svg>
                    </div>
                </div>
                <div style={{height:"140px"}}>
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
                    <Link to="/ShopPage" className='link'>
                        <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                            <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                        </div>
                    </Link>
                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                </div>
                <div>
                    <div className='C2' style={toggleOn ? { backgroundColor:"#252625"  } : null}>
                        <svg width="200" height="200">
                            <circle style={toggleOn ? { fill: '#2c59c9',stroke:"#2f2c4f" } : null} stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
                        </svg>
                    </div>
                </div>
                <div style={{height:"150px"}}>
                    <img className='img' src='https://shophub-demo.netlify.app/images/shoe2.png' alt='shoeimage'/>
                </div>
                <div>
                    <h3 style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}} >
                        Nike air max 1
                    </h3>
                    <p style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}}>300</p>
                </div>

            </div>
            <div className='Product' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                <div className='Lexpand'>
                    <Link to="/ShopPage" className='link'>
                        <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                            <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                        </div>
                    </Link>
                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                </div>
                <div>
                    <div className='C3' style={toggleOn ? { backgroundColor:"white"  } : null}>
                        <svg width="200" height="200">
                            <circle style={toggleOn ? { fill: '#2c59c9',stroke:"#2f2c4f" } : null} stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
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
                    <Link to="/ShopPage" className='link'>
                        <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                            <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                        </div>
                    </Link>
                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                </div>
                <div>
                    <div className='C4' style={toggleOn ? { backgroundColor:"#14ccc3"  } : null}>
                        <svg width="200" height="200">
                            <circle style={toggleOn ? { fill: '#2c59c9',stroke:"#2f2c4f" } : null} stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
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
        <div style={{marginTop:"50px"}}>
            <h1 style={toggleOn ?{color:"white",textAlign:"center",fontSize:"25px"}:{textAlign:"center",fontSize:"25px"}}>Related Products</h1>
        </div>
        <Link to="/SearchPage" className='link'>
                <div className='L3' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                    <BiSearchAlt2  style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                </div>
        </Link>
        <div className='ProductsContainer1'>
            <div className='Product' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                <div className='Lexpand'>
                    <Link to="/ShopPage" className='link'>
                        <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                            <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                        </div>
                    </Link>
                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                </div>
                <div>
                    <div className='C1' style={toggleOn ? { backgroundColor:"#1c3d1c"  } : null}>
                        <svg width="200" height="200">
                            <circle style={toggleOn ? { fill: '#2c59c9',stroke:"#2f2c4f" } : null} stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
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
                    <Link to="/ShopPage" className='link'>
                        <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                            <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                        </div>
                    </Link>
                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                </div>
                <div>
                    <div className='C2' style={toggleOn ? { backgroundColor:"#252625"  } : null}>
                        <svg width="200" height="200">
                            <circle style={toggleOn ? { fill: '#2c59c9',stroke:"#2f2c4f" } : null} stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
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
                    <Link to="/ShopPage" className='link'>
                        <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                            <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                        </div>
                    </Link>
                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                </div>
                <div>
                    <div className='C3' style={toggleOn ? { backgroundColor:"white"  } : null}>
                        <svg width="200" height="200">
                            <circle style={toggleOn ? { fill: '#2c59c9',stroke:"#2f2c4f" } : null} stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
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
                    <Link to="/ShopPage" className='link'>
                        <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                            <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                        </div>
                    </Link>
                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                    </div>
                </div>
                <div>
                    <div className='C4' style={toggleOn ? { backgroundColor:"#14ccc3"  } : null}>
                        <svg width="200" height="200">
                            <circle style={toggleOn ? { fill: '#2c59c9',stroke:"#2f2c4f" } : null} stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
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
        <div className='toggle-container' style={toggleOn ? { backgroundColor: 'black'} : null}>
            <label className='toggle-label' style={toggleOn ? {color:"black"} : null}>
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

            </div>
        </div>
    </div>
    

  )
}

export default HomePage