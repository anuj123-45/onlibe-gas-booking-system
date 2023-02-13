import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import { Routes, Route,Link , useLocation} from "react-router-dom";
// import Account from "./Account";
// import FreeComponent from "./FreeComponent";
// import AuthComponent from "./AuthComponent";
// import ProtectedRoutes from "./ProtectedRoutes";
// import Login from "./Login";
// import Register from "./Register";
import React from "react";

function Navbar(){
  const location=useLocation();
  
    return(
    <Row >
       <br/>   <br/>   <br/>
        <Col className="text-center">
         
         <div style={{backgroundColor:"white",borderRadius:"3px",background:"lightgreen"}}>
         <marquee><h1 style={{color:"purple",fontFamily:"sans-serif",fontWeight:"bolder"}}>ONLINE GAS BOOKING</h1></marquee>
         </div>
          
        </Col>
      </Row>
    )
}

export default Navbar;
