import React, { useState,useEffect } from 'react';
import {BiX} from "react-icons/bi";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

const SearchPage = () => {
    const [input,setInput]=useState("");
    const [products, setProducts] = useState({});
    const navigate = useNavigate();

    let response;
    useEffect(()=>{
        !_.isEmpty(products) && navigate(`/ShopPage`,{state:products})
    },[products])

    const fetchData = async () => {
        try {
            response = await axios.get(`https://fakestoreapi.com/products/${input}`);
            console.log(response.data,"response from fetch")
            response.data && setProducts(response.data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
        };

    const handleClick= async ()=>{
        if(input===""){
            alert("write something")
        }
        else{
            await void fetchData();
        }
    }
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",backgroundColor:"#f8d4bd"}}>
        <div>
            <Link to="/" className='link'>
                <div style={{marginLeft:"95vw"}} className='L1'>
                    <BiX style={{width:"25px",marginTop:"5px",height:"25px",marginLeft:"5px",color:"black"}}/>
                </div>
            </Link>
        </div>
        <div style={{marginBottom:"400px"}}>
            <div style={{marginBottom:"20px",}} className='Input'>
                <input type='number' placeholder='search id from 1 to 20' onChange={(e)=>{setInput(e.target.value)}}/>
            </div>
            <div className='ButtonContainer'>
                <button onClick={handleClick} >search</button>
            </div>
        </div>
    </div>
  )
}

export default SearchPage 