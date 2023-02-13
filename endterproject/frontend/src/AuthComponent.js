import React, { useState }  from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";
import useRazorpay from "react-razorpay";

const cookies = new Cookies();
export default function AuthComponent() {

  const navigate=useNavigate();
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    localStorage.clear();
    window.location.href = "/";
  };

  const [state, setState] = useState(localStorage.getItem("Result"));

  const [payment, setPayment] = useState("");
  const [name, setName] = useState(localStorage.getItem("Name"));
  const [email, setEmail] = useState(localStorage.getItem("Email"));
  const [address, setAddress] = useState(localStorage.getItem("Address"));
  const book = () => {
  

    if (localStorage.getItem("Connection") === "1") {
      const configuration = {
        method: "post",
        url: "http://localhost:3001/book",
        data: {
          name,
          email,
          address,
          payment,
        },
      };
      axios(configuration)
        .then((result) => {})
        .catch((error) => {
          error = new Error();
          alert("You have reached the limit for bookings");
        });
      alert("ok");
   
    
    } else {
      
       
      
      alert("Connection Required!");

    
     
      
    }
  };

  const apply = () => {
    if (localStorage.getItem("Connection") === "1") {
      alert("Connection Already Exists");
    } else {
      const configuration = {
        method: "post",
        url: "http://localhost:3001/applyconnect",
        data: {
          name,
          email,
          address,
        },
       

      };
      axios(configuration)
        .then((result) => {
          alert("Connection Requested");
        })
        .catch((error) => {
          error = new Error();
          alert("Something went wrong");
        });
    }
  };

  return (
    <div style={{backgroundColor:"aqua",textAlign:"center"}}>
      <h1 className="text-center">Welcome, {localStorage.getItem("Name")}</h1>
      <div className="mb-2" style={{border:"8px solid black",width:"300px",margin:"0 auto",backgroundColor:"Tomato"}}>
        <h1>BOOK GAS</h1>
        <Form onSubmit={() => book()}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label><b style={{fontSize:"30px"}}>Payment Method</b></Form.Label>
            <Form.Group>
              <Form.Label style={{fontSize:"20px"}}>
               <b> ONLINE</b>
                <Form.Check
                  type="radio"
                  name="payment"
                  value={"Online"}
                  onChange={() => setPayment("Online")}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group>
            <Form.Label style={{fontSize:"20px"}}>
            <b>  CASH ON DELIVERY</b>
              <Form.Check
                type="radio"
                name="payment"
                value={"Cash On Delivery"}
                onChange={() => setPayment("Cash On Delivery")}
              />
              </Form.Label>
              </Form.Group>
          </Form.Group>
          <Button type="submit" variant="success">
            Book
          </Button>
        </Form>
      </div>
      <div className="mb-2">
        <h1>APPLY FOR CONNECTION</h1>
        <Button type="submit" onClick={() => apply()}>
          Apply
        </Button>
      </div>
      <div>
        <Button type="submit" variant="danger" onClick={() => logout()}>
          Logout
        </Button>
      </div>
      <br></br>
    </div>
  );
}
