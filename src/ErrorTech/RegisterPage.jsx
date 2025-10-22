import {useState}from 'react';
import './ErrorTech.css'
import {BiGridSmall } from "react-icons/bi";
import { Link,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './userContext';
import { ImCross } from 'react-icons/im';


function RegisterPage() {
    const [toggleOn, setToggleOn] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [userEmail,setUserEmail]=useState("");
    const [userPassword,setUserPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const {setIsRegistered,setIsLoggedIn}=useContext(UserContext);
    const navigate=useNavigate();

    const handleToggle = () => {
        setToggleOn(!toggleOn);
    };
    const handleRegister=()=>{
        if(userEmail==="" || userPassword==="" || confirmPassword===""){
            alert("All fields are required");
            setUserEmail("");
            setUserPassword("");
            setConfirmPassword("");
            return;
        }
        else if(userPassword!==confirmPassword){
            alert("Passwords do not match");
            setUserPassword("");
            setConfirmPassword("");
            return;
        }
        else{
            
            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
            if (existingUsers.some(user => user.email === userEmail)) {
                alert("User already exists,please login");
                setUserEmail("");
                setUserPassword("");
                setConfirmPassword("");
                navigate("/LoginPage");
                return;
            }
            else{
                const newUser = { email: userEmail, password: userPassword,cart: [] };
                existingUsers.push(newUser);
                localStorage.setItem("users", JSON.stringify(existingUsers));
                localStorage.setItem("currentUser", JSON.stringify(newUser));
                setIsLoggedIn(true);
                setIsRegistered(true);
                setUserEmail("");
                setUserPassword("");
                setConfirmPassword("");
                navigate("/");
            }
        }

    }
  document.body.className = toggleOn ? 'red-background' : '';
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"98vw",height:"97vh"}}>
        <div className='Navbar'>
            <div className='LogoContainer'>
                    <BiGridSmall style={{width:"30px",marginTop:"5px",height:"30px"}} className='Logo'/>
                    <Link className='link' to="/" style={toggleOn ? { color: 'lightblue'  } : {color:"#7d2804"}}><h2>ShopHub</h2></Link>
            </div>
            <div className='PagesCpntainer'>
                <Link className='link' to="/" style={toggleOn ? { color: 'lightblue'  } : {color:"#7d2804"}}><div>Home</div></Link>
                <Link className='link' to="/ShopPage/1"><div>Shop</div></Link>
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
            </div>
        </div>
        <div className='Product4' style={toggleOn ? { backgroundColor:"#172838",backgroundImage:"radial-gradient(#2f2c4f 8%,transparent 0)",boxShadow:" inset 0 0 5rem 2rem #000" } : null}>
            <div className='Tit'>
                <h1 style={toggleOn ? {color:"white"} : null}>Register</h1>
            </div>
            <div className='Tit'>
                <p style={toggleOn ? {color:"white"} : null}>E-mail:</p>
            </div>
            <div className='Input'>
                <input style={toggleOn ? {backgroundColor:"black",color:"white"} : null} type='text' placeholder='abc@example.com' value={userEmail} onChange={e=>setUserEmail(e.target.value)}/>
            </div>
            <div className='Tit'>
                <p style={toggleOn ? {color:"white"} : null}>Password:</p>
            </div>
            <div className='Input'>
                <input style={toggleOn ? {backgroundColor:"black",color:"white"} : null} type='password' value={userPassword} onChange={e=>setUserPassword(e.target.value)}/>
            </div>
            <div className='Tit'>
                <p style={toggleOn ? {color:"white"} : null}>Confirm Password:</p>
            </div>
            <div className='Input'>
                <input style={toggleOn ? {backgroundColor:"black",color:"white"} : null} type='password' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
            </div>
            <div className='ButtonContainer'>
                <button style={toggleOn ? { backgroundColor: '#677480',color:"lightblue"} : null} onClick={()=>handleRegister()}>Register</button>
            </div>

        </div>
        <div></div>
        <div className='Footer'>
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

export default RegisterPage