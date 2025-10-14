import {useEffect, useState,useContext}from 'react';
import {BiShoppingBag,BiGridSmall,BiExpand,BiSolidStar,BiSolidChevronRight,BiSolidChevronLeft,BiSolidStarHalf} from "react-icons/bi";
import { Link,useParams } from 'react-router-dom';
import data from './Data.js';
import UserContext from './userContext.jsx';
import { ImCross } from 'react-icons/im';


function ShopPage() {
    const [toggleOn, setToggleOn] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const { id } = useParams();
    const product = data.find((item) => item.id === parseInt(id));
    const [image, setImage] = useState(product ? product.img : '');
    const [selectedSize, setSelectedSize] = useState(0);
    const {isLoggedIn}=useContext(UserContext);


    useEffect(() => {
        setImage(product.img);
    }, [product]);
    if (!product) {
        return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product Not Found</h2>;
    }
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<BiSolidStar key={i} style={{ width: "20px", height: "20px", color: "orange" }} />);
    }

    if (hasHalfStar) {
        stars.push(<BiSolidStarHalf key="half" style={{ width: "20px", height: "20px", color: "orange" }} />);
    }

    while (stars.length < 5) {
        stars.push(<BiSolidStar key={`empty-${stars.length}`} style={{ width: "20px", height: "20px", color: "lightgray" }} />);
    }

    const addToCart = (product, selectedSize) => {
    if (!selectedSize) {
        alert("Please select a size before adding to cart.");
        return;
    }

    // get currentUser from localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) {
            alert("You must log in to add items to cart.");
            return;
        }

        // get existing cart or empty
        let updatedCart = currentUser.cart || [];

        // check if item already exists
        const existingItemIndex = updatedCart.findIndex(
            (item) => item.id === product.id && item.size === selectedSize
        );

        if (existingItemIndex !== -1) {
            // increase qty
            updatedCart[existingItemIndex].qty += 1;
        } else {
            updatedCart.push({
            id: product.id,
            name: product.imgText,
            size: selectedSize,
            qty: 1,
            price: product.price,
            img: product.img,
            });
        }

        // update currentUser
        const updatedUser = { ...currentUser, cart: updatedCart };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));

        // update users list also
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = users.map((u) =>
            u.email === currentUser.email ? updatedUser : u
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        setSelectedSize(0);
    };



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
                <Link className='link' to="/ShopPage/1"><div style={toggleOn ? { color: 'lightblue'  } : {color:"#7d2804"}}>Shop</div></Link>
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
        <div className='OrangeContainer' style={{zIndex:"-1",...(toggleOn ? { backgroundColor: '#2c59c9'  } : null)}}>
            <div className='Home'>Home<span style={{color:"black"}}>/Product Details</span></div>
            <div className='Shop'>
                <h3>Product Details</h3>
            </div>
            <div className='select1'>
                <div style={{backgroundColor:"#f1d6c4",borderRadius:"50%",height:"30px"}}><BiSolidChevronLeft style={{height:"30px",width:"30px"}}/></div>
                <div style={{backgroundColor:"#f1d6c4",borderRadius:"50%",height:"30px"}}><BiSolidChevronRight style={{height:"30px",width:"30px"}}/></div>
            </div>
        </div>
        <div className='ProductsContainer2' style={{zIndex:"1"}}>
                <div className='Product1' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                    <div className='ProdContainer'>
                        <div className='Circle' style={toggleOn ? { backgroundColor:"#172838",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
                            <img src={image} alt="shoeimage" />
                        </div>
                        <div className='TitlesContainer'>
                            <h1 style={toggleOn ? {color:"white"} : null }>{product.imgText}</h1>
                        </div>
                    </div>
                    <div className='detailsContainer' style={toggleOn ? {color:"white"} : null}>
                        <div className='ReviewContainer'>
                            <div>
                                <div className='reviewTitle' style={{textAlign:"center"}}>
                                    <h3>Review:</h3>
                                </div>
                                <div className='Stars'>
                                    {stars}
                                    <span style={{fontSize:"20px",fontWeight:"bold"}}>{product.rating}</span>
                                </div>
                            </div>
                            <div>
                                <div className='ColorTitle'>
                                    <h3>Select Color:</h3>
                                </div>
                                <div className='ColorContainer'>
                                    {data.map((item,index)=>(
                                        <Link to={`/ShopPage/${item.id}`} key={index} className='link'>
                                            <svg key={index} width={50} height={50}>
                                                <circle style={toggleOn ? { fill:item.color,stroke:"black" } : null} stroke='white' strokeWidth={5} cy={20} cx={20} r={15} fill={item.color}></circle>
                                            </svg>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className='SizeTitle'>
                                    <h3>Select Size:</h3>
                                </div>
                                <div className='SizeContainer'>
                                {product.size.map((item) => (
                                    <div className='Size' onClick={() => {setSelectedSize(item);}}
                                    style={{
                                        backgroundColor: selectedSize === item 
                                        ? "#4412b8"
                                        : toggleOn 
                                            ? "#172838" 
                                            : "white",
                                        color: selectedSize === item ? "white" : toggleOn ? "white" : "black",
                                        boxShadow: selectedSize === item 
                                        ? "0px 0px 10px rgba(0,0,0,0.4)" 
                                        : toggleOn 
                                            ? "inset 0 0 5rem 2rem #000" 
                                            : "none",
                                        cursor: "pointer",
                                        padding: "8px 15px",
                                        borderRadius: "8px",
                                        margin: "5px"
                                    }}
                                    >
                                    {item}
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                        <div className='ButtonContainer' >
                            <button style={toggleOn ? { backgroundColor: '#677480',color:"lightblue"} : null} onClick={()=>addToCart(product,selectedSize)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
        </div>
        <div className='Relate'>
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