import React,{useEffect, useState}from 'react';
import {BiShoppingBag,BiGridSmall,BiExpand,BiSearchAlt2,BiSolidStar,BiSolidChevronRight,BiSolidChevronLeft,BiSolidStarHalf} from "react-icons/bi";
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';


function ShopPage() {
    const [toggleOn, setToggleOn] = useState(false);
    
    const [image, setImage] = useState("https://shophub-demo.netlify.app/images/shoe1.png");
    let a = useLocation().state;
    useEffect(() => {
        if (a && typeof a === 'object' && 'image' in a) {
          setImage(a.image);
        }
      }, [a]);

    

  function handleToggle() {
        setToggleOn(!toggleOn);
    }
  document.body.className = toggleOn ? 'red-background' : '';
  return (
    <div>
        <div className='Navbar'>
            <div className='LogoContainer'>
                <div className='Logo' style={toggleOn ? { backgroundColor: 'black',color:"white"} : null}>
                    <BiGridSmall style={{width:"30px",marginTop:"5px",height:"30px"}}/>
                </div>
                <h2>shophub</h2>
            </div>
            <div className='PagesCpntainer'>
                <Link className='link' to="/"><div>Home</div></Link>
                <Link className='link' to="/ShopPage"><div style={toggleOn ? { color: 'lightblue'  } : {color:"#7d2804"}}>Shop</div></Link>
                <Link className='link' to="/BlogPage"><div>Blog</div></Link>
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
        <div className='OrangeContainer' style={toggleOn ? { backgroundColor: '#2c59c9'  } : null}>
            <div className='Home'>Home<span style={{color:"black"}}>/Product Details</span></div>
            <div className='Shop'>
                <h3>Product Details</h3>
            </div>
            <div className='select1'>
                <div style={{backgroundColor:"#f1d6c4",borderRadius:"50%",height:"30px"}}><BiSolidChevronLeft style={{height:"30px",width:"30px"}}/></div>
                <div style={{backgroundColor:"#f1d6c4",borderRadius:"50%",height:"30px"}}><BiSolidChevronRight style={{height:"30px",width:"30px"}}/></div>
            </div>
        </div>
        <div className='ProductsContainer2'>
                    <div className='Product1' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                        <div className='TitlesContainer'>
                            <h1 style={{color:"#4412b8",marginLeft:"20px",marginTop:"10px"}}>Nike Air Max 270 to Chunk Taylors</h1>
                            <p style={{color:"gray",marginLeft:"20px",marginTop:"5px",fontWeight:"bold"}}>Nike's Air Force 1s were among the most popular sneakers this year</p>
                            <div className='ImgContainer'>
                                <div style={{backgroundColor:"#ffecc5",boxShadow:"inset 0 0 2rem 0.5rem #fff",padding:"10px",borderRadius:"10px",cursor:"pointer"}}>
                                    <img style={{width:"100px",height:"50px"}} src="https://shophub-demo.netlify.app/images/shoe2.png" alt="shoe image2" />
                                </div>
                                <div style={{backgroundColor:"#fa8907",padding:"10px",borderRadius:"10px",cursor:"pointer"}}>
                                    <img style={{width:"100px",height:"50px"}} src="https://shophub-demo.netlify.app/images/shoe3.png" alt="shoe image3" />
                                </div>
                                <div style={{backgroundColor:"#ffecc5",boxShadow:"inset 0 0 2rem 0.5rem #fff",padding:"10px",borderRadius:"10px",cursor:"pointer"}}>
                                    <img style={{width:"100px",height:"50px"}} src="https://shophub-demo.netlify.app/images/shoe4.png" alt="shoe image4" />
                                </div>
                            </div>

                        </div>
                        <div className='ProdContainer'>
                            <div className='Circle' style={toggleOn ? { backgroundColor:"#172838",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                                <img style={{width:"220px",height:"100px"}} src={image} alt="shoeimage" />
                            </div>

                        </div>
                        <div className='ReviewContainer'>
                            <div className='reviewTitle'>
                                <h3>Review:</h3>
                            </div>
                            <div className='Stars'>
                                <BiSolidStar style={{width:"25px",height:"25px",color:"orange"}}/>
                                <BiSolidStar style={{width:"25px",height:"25px",color:"orange"}}/>
                                <BiSolidStar style={{width:"25px",height:"25px",color:"orange"}}/>
                                <BiSolidStar style={{width:"25px",height:"25px",color:"orange"}}/>
                                <BiSolidStarHalf style={{width:"25px",height:"25px",color:"orange"}}/>
                                <span style={{fontSize:"20px",fontWeight:"bold"}}>4.5(60)</span>
                            </div>
                            <div className='ColorTitle'>
                                <h3>Select Color:</h3>
                            </div>
                            <div className='ColorContainer'>
                                <svg width={50} height={50}>
                                    <circle style={toggleOn ? { fill: '#1c3d1c',stroke:"black" } : null} stroke='white' strokeWidth={5} cy={20} cx={20} r={15} fill='rgb(240, 150, 158)'></circle>
                                </svg>
                                <svg width={50} height={50}>
                                    <circle style={toggleOn ? { fill: '#252625',stroke:"black" } : null} stroke='white' strokeWidth={5} cy={20} cx={20} r={15} fill='rgb(213, 213, 212)'></circle>
                                </svg>
                                <svg width={50} height={50}>
                                    <circle style={toggleOn ? { fill: 'white',stroke:"black" } : null} stroke='white' strokeWidth={5} cy={20} cx={20} r={15}></circle>
                                </svg>
                                <svg width={50} height={50}>
                                    <circle style={toggleOn ? { fill: '#14ccc3',stroke:"black" } : null} stroke='white' strokeWidth={5} cy={20} cx={20} r={15} fill='rgb(203, 20, 26)'></circle>
                                </svg>
                            </div>
                            <div className='SizeTitle'>
                                <h3>Select Size:</h3>
                            </div>
                            <div className='SizeContainer'>
                                <div className='Size' style={toggleOn ? { backgroundColor: '#172838',color:"white",boxShadow:" inset 0 0 5rem 2rem #000"} : null}>41</div>
                                <div className='Size' style={toggleOn ? { backgroundColor: '#172838',color:"white",boxShadow:" inset 0 0 5rem 2rem #000"} : null}>42</div>
                                <div className='Size' style={toggleOn ? { backgroundColor: '#172838',color:"white",boxShadow:" inset 0 0 5rem 2rem #000"} : null}>43</div>
                                <div className='Size' style={toggleOn ? { backgroundColor: '#172838',color:"white",boxShadow:" inset 0 0 5rem 2rem #000"} : null}>44</div>
                                <div className='Size' style={toggleOn ? { backgroundColor: '#172838',color:"white",boxShadow:" inset 0 0 5rem 2rem #000"} : null}>45</div>
                                <div className='Size' style={toggleOn ? { backgroundColor: '#172838',color:"white",boxShadow:" inset 0 0 5rem 2rem #000"} : null}>46</div>
                                <div className='Size' style={toggleOn ? { backgroundColor: '#172838',color:"white",boxShadow:" inset 0 0 5rem 2rem #000"} : null}>47</div>
                                <div className='Size' style={toggleOn ? { backgroundColor: '#172838',color:"white",boxShadow:" inset 0 0 5rem 2rem #000"} : null}>48</div>
                            </div>
                            <div className='ButtonContainer' >
                                <button style={toggleOn ? { backgroundColor: '#677480',color:"lightblue"} : null} disabled>Add To Cart</button>
                            </div>
                        </div>
                    </div>
        </div>
        <div style={{marginTop:"50px"}}>
            <h1 style={toggleOn ?{color:"white",textAlign:"center",fontSize:"25px"}:{textAlign:"center",fontSize:"25px"}}>Related Products</h1>
        </div>
        <Link to="/SearchPage" className='link'>
                <div className='L3'>
                    <BiSearchAlt2  style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px"}}/>
                </div>
        </Link>
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

export default ShopPage