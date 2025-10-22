import { useState, useContext } from 'react';
import './ErrorTech.css';
import { BiShoppingBag, BiGridSmall } from "react-icons/bi";
import { Link } from 'react-router-dom';
import UserContext from './userContext';

function MyAccountPage() {
  const [toggleOn, setToggleOn] = useState(false);
  const { setIsLoggedIn } = useContext(UserContext);
  const [up, setUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const orders = currentUser?.orders || [];

  const handleToggle = () => setToggleOn(!toggleOn);

  document.body.className = toggleOn ? 'red-background' : '';

  const handlePasswordUpdate = () => {
    if (!email || !password || !newPassword || !retypePassword) {
      alert("Please fill all details");
      return;
    }

    if (newPassword !== retypePassword) {
      alert("New Password and Retype Password do not match");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(u => u.email === email && u.password === password);

    if (userIndex === -1) {
      alert("Invalid email or current password");
      setEmail("");
      setPassword("");
      setNewPassword("");
      setRetypePassword("");
      return;
    }

    users[userIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Password updated successfully ✅");
    setEmail("");
    setPassword("");
    setNewPassword("");
    setRetypePassword("");
    setUp(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "98vw", height: "97vh" }}>
      
      <div className='Navbar'>
        <Link className='link' to="/">
          <div className='LogoContainer'>
            <BiGridSmall style={{width:"30px",marginTop:"5px",height:"30px"}} className='Logo'/>
            <Link className='link' to="/" style={toggleOn ? { color: 'lightblue'  } : {color:"#7d2804"}}><h2>ShopHub</h2></Link>
          </div>
        </Link>
        <div className='PagesCpntainer'>
          <Link className='link' to="/"><div>Home</div></Link>
          <Link className='link' to="/ShopPage/1"><div>Shop</div></Link>
          <Link className='link' to="/MyAccountPage">
            <div style={toggleOn ? { color: 'lightblue' } : { color: "#7d2804" }}>My Account</div>
          </Link>
        </div>
        <div className='ShopCOntainer'>
          <Link to="/CartPage" className='link'>
            <div className='Logo' style={toggleOn ? { backgroundColor: 'black', color: "white" } : null}>
              <BiShoppingBag style={{ width: "20px", marginTop: "8px", height: "20px" }} />
            </div>
          </Link>
        </div>
      </div>

      <div className='Product5' style={toggleOn ? { backgroundColor: "#172838", backgroundImage: "radial-gradient(#2f2c4f 8%,transparent 0)", boxShadow: "inset 0 0 5rem 2rem #000" } : null}>
        <div style={{ marginTop: "15px" }}>
          <div className='Tit'>
            <h1 style={toggleOn ? { color: "white" } : null}>Order Details</h1>
          </div>

          <div className="OrdersContainer">
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <div key={index} className="OrderCard" style={toggleOn ? { borderColor: "#14ccc3" } : null}>
                  <h3 style={toggleOn ? { color: "lightblue" } : null}>
                    🧾 Order #{index + 1} — {order.date}
                  </h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Size</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, i) => (
                        <tr key={i}>
                          <td>{item.name}</td>
                          <td>{item.size}</td>
                          <td>{item.qty}</td>
                          <td>${item.price}</td>
                          <td>${item.qty*item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))
            ) : (
              <h4 style={{ textAlign: "center" }}>No orders found in this account 🛍️</h4>
            )}
          </div>

          {up && (
            <div className='UpdatePasswordBox'>
              <h2 style={toggleOn ? { color: "white" } : null}>Update Password</h2>

              <label style={toggleOn ? { color: "white" } : null}>E-mail:</label>
              <input
                style={toggleOn ? { backgroundColor: "black", color: "white" } : null}
                type='text'
                placeholder='abc@example.com'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <label style={toggleOn ? { color: "white" } : null}>Current Password:</label>
              <input
                style={toggleOn ? { backgroundColor: "black", color: "white" } : null}
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              <label style={toggleOn ? { color: "white" } : null}>New Password:</label>
              <input
                style={toggleOn ? { backgroundColor: "black", color: "white" } : null}
                type='password'
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
              />

              <label style={toggleOn ? { color: "white" } : null}>Re-type Password:</label>
              <input
                style={toggleOn ? { backgroundColor: "black", color: "white" } : null}
                type='password'
                value={retypePassword}
                onChange={e => setRetypePassword(e.target.value)}
              />

              <div className='ButtonContainer'>
                <button style={toggleOn ? { backgroundColor: '#677480', color: "lightblue" } : null} onClick={handlePasswordUpdate}>Update Password</button>
                <button style={toggleOn ? { backgroundColor: '#677480', color: "lightblue" } : null} onClick={() => setUp(false)}>Cancel</button>
              </div>
            </div>
          )}
        </div>

        <div className='ButtonContainer' style={{ marginBottom: "20px" }}>
          <button onClick={() => setUp(true)}>Update Account Details</button>
          <Link to="/" className='link1'>
            <button onClick={() => setIsLoggedIn(false)}>Sign Out</button>
          </Link>
        </div>
      </div>

      <div className='toggle-container' style={toggleOn ? { backgroundColor: "black" } : null}>
        <label className='toggle-label'>
          <input type='checkbox' className='toggle-input' onChange={handleToggle} />
          <span className='slider'></span>
        </label>
      </div>

      <div className='Footer'>
        <p style={toggleOn ? { color: "white" } : null}>copyrights @ 2023 | all rights reserved</p>
      </div>
    </div>
  );
}

export default MyAccountPage;
