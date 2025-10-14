import  {  useState,useContext } from 'react';
import './ErrorTech.css'
import {BiGridSmall } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './userContext';
import { ImCross } from 'react-icons/im';

function LoginPage() {
    const [toggleOn, setToggleOn] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [userEmail,setUserEmail]=useState("");
    const [userPassword,setUserPassword]=useState("");
    const Navigate=useNavigate();
    const {setIsRegistered,setIsLoggedIn}=useContext(UserContext);
    
    const existingUsers = JSON.parse(localStorage.getItem("users"));
    const handleLogin=()=>{
        if(userEmail==="" || userPassword===""){
            alert("All fields are required");
        }
        else{
            if(existingUsers && existingUsers.some(user => user.email === userEmail && user.password === userPassword)){
                setIsLoggedIn(true);
                localStorage.setItem("currentUser", JSON.stringify(existingUsers.find(user => user.email === userEmail)));
                setIsRegistered(true);
                Navigate("/");
            }
            else{
                alert("Invalid credentials, please register");
                Navigate("/RegisterPage");
                setUserEmail("");
                setUserPassword("");
            }
        }
    }
    const handleToggle = () => {
        setToggleOn(!toggleOn);
    };
    document.body.className = toggleOn ? 'red-background' : '';
    
   
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100vw",height:"95vh"}}>
        <div className='Navbar'>
            <div className='LogoContainer'>
                    <BiGridSmall style={{width:"30px",marginTop:"5px",height:"30px"}} className='Logo'/>
                    <h2>shophub</h2>
            </div>
            <div className='PagesCpntainer'>
                <Link className='link' to="/" style={toggleOn ? { color: 'lightblue'  } : {color:"#7d2804"}}><div>Home</div></Link>
                <Link className='link' to="/ShopPage/1"><div>Shop</div></Link>
                <Link className="link" to="/LoginPage"><div>Login</div></Link>
            </div>
            <div>
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
                <Link className="link" to="/LoginPage"><div>Login</div></Link>
            </div>
        </div>

        <div className='Product3' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
            <div className='Tit'>
                <h1 style={toggleOn ? {color:"white"} : null}>Sign-in</h1>
            </div>
            <div className='Tit'>
                <p style={toggleOn ? {color:"white"} : null}>E-mail:</p>
            </div>
            <div className='Input'>
                <input style={toggleOn ? {backgroundColor:"black",color:"white"} : null}  type='text' placeholder='abc@example.com' value={userEmail} onChange={e=>setUserEmail(e.target.value)}/>
            </div>
            <div className='Tit'>
                <p style={toggleOn ? {color:"white"} : null}>Password:</p>
            </div>
            <div className='Input'>
                <input style={toggleOn ? {backgroundColor:"black",color:"white"} : null}  type='password' value={userPassword} onChange={e=>setUserPassword(e.target.value)}/>
            </div>
            <div className='ButtonContainer'>
                <button style={toggleOn ? { backgroundColor: '#677480',color:"lightblue"} : null} onClick={()=>handleLogin()}>Sign-In</button>
            </div>
            <h4 className='font'>Are you new here?, click here to <Link to="/RegisterPage">Register</Link></h4>
        </div>
        <div className='Footer'>
            <div>

            </div>
            <div>
                <p style={toggleOn ? {color:"white"} : null}>copyrights @ 2023 | all rights reserved</p>
            </div>
            <div className='toggle-container' style={toggleOn ? {backgroundColor:"black"} : null}>
                <label className='toggle-label'>
                    <input type='checkbox' className='toggle-input'  onChange={handleToggle} />
                    <span className='slider'></span>
                </label>
            </div>
        </div>
    </div>
  )
}

export default LoginPage