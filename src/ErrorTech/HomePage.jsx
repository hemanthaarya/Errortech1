import {useState,useContext} from 'react';
import './ErrorTech.css';
import {BiShoppingBag,BiGridSmall,BiExpand } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import data from './Data.js';
import UserContext from './userContext';

function HomePage() {
    const [toggleOn, setToggleOn] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const {isLoggedIn}=useContext(UserContext)
    const handleToggle = () => {
        setToggleOn(!toggleOn);
    };
  const [sortedData, setSortedData] = useState(data);  

  const handleSort = (e) => {
    const value = e.target.value;
    let sortedArray = [...data];  

    if (value === "Ascending") {
      sortedArray.sort((a, b) => a.price - b.price); 
    } else if (value === "Descending") {
      sortedArray.sort((a, b) => b.price - a.price); 
    } else if (value === "Latest") {
    const customOrder = [3,4,1,2];
    sortedArray.sort((a, b) => customOrder.indexOf(a.id) - customOrder.indexOf(b.id));
  }
    setSortedData(sortedArray);
  };
  document.body.className = toggleOn ? 'red-background' : '';
  return (
    <div className={`main-container ${toggleOn ? '' : ''}`}>
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
        <div className='OrangeContainer' style={toggleOn ? { backgroundColor: '#2c59c9'  } : null}>
            <div className='Home' style={toggleOn ? { color: 'black'  } : null}>Home<span style={toggleOn ? { color: 'white'  } : {color:"black"}}>/shop</span></div>
            <div className='select'>
                <p style={toggleOn ? {color:"white"} : null}>showing results of 1-4/4</p>
                <select onChange={handleSort}>
                    <option>default sorting</option>
                    <option>Ascending</option>
                    <option>Descending</option>
                    <option>Latest</option>
                </select>
            </div>
        </div>
        <div className="ProductsSection">
            <div className='ProductsContainer'>
                {
                    sortedData.map((item)=>(
                        <div className='Product' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                            <div className='Lexpand'>
                                <Link to={`/ShopPage/${item.id}`} className='link'>
                                    <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                                        <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                                    </div>
                                </Link>
                                <Link to={`/ShopPage/${item.id}`} className='link'>
                                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <div className='C2' style={toggleOn ? { backgroundColor:"#252625"  } : null}>
                                    <svg width="200" height="200">
                                        <circle style={toggleOn ? { fill: '#2c59c9',stroke:"#2f2c4f" } : null} stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
                                    </svg>
                                </div>
                            </div>
                            <div style={{height:"150px"}}>
                                <img className='img' src={item.img} alt='shoeimage'/>
                            </div>
                            <div>
                                <h3 style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}} >
                                    {item.imgText}
                                </h3>
                                <p style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}}>{item.price}$</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div>
            <h1 style={toggleOn ?{color:"white",textAlign:"center",fontSize:"25px"}:{textAlign:"center",fontSize:"25px"}}>Related Products</h1>
        </div>
        <div className="ProductsSection">
            <div className='ProductsContainer1'>
                {
                    data.map((item)=>(
                        <div className='R_Product' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                            <div className='Lexpand'>
                                <Link to={`/ShopPage/${item.id}`} className='link'>
                                    <div className='L1' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                                        <BiExpand style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                                    </div>
                                </Link>
                                <Link to={`/ShopPage/${item.id}`} className='link'>
                                    <div className='L2' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                                        <BiShoppingBag style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <div className='C2' style={toggleOn ? { backgroundColor:"#252625"  } : null}>
                                    <svg width="200" height="200">
                                        <circle style={toggleOn ? { fill: '#2c59c9',stroke:"#2f2c4f" } : null} stroke='white' strokeWidth={5} cx="90" cy="40" r="60" fill='#f57e2f'></circle>
                                    </svg>
                                </div>
                            </div>
                            <div style={{height:"150px"}}>
                                <img className='img' src={item.img} alt='shoeimage'/>
                            </div>
                            <div>
                                <h3 style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}} >
                                    {item.imgText}
                                </h3>
                                <p style={toggleOn ? {textAlign:"center",color:"orange",fontWeight:"bold"} : {textAlign:"center",color:"#4412b8",fontWeight:"bold"}}>{item.price}$</p>
                            </div>
                        </div>
                    ))
                }
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
                <p style={toggleOn ? {color:"white"} : null}>copyrights @ 2023 | all rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default HomePage