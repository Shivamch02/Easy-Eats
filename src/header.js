import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg"
import { useSelector } from "react-redux";
const Title = () =>{
    return(
           <a href="/">
               <img className="logo" src={logo} alt="Food Fire Logo"/>
           </a>
   );
   }
   const Header =()=>{
    const cartItems= useSelector((store)=>store.cart.items);
       return (
           <div className="header">
               <Title/>
               <div className="nav-items">
               <ul>
                 <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/contact">contact</Link></li>
                   <li ><Link to= "/cart">Cart-{cartItems.length}</Link></li>               
                </ul>
               </div>
           </div>
       )
   }
   export default Header