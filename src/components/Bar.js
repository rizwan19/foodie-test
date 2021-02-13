import  React, { useState }  from "react";
import {Navbar,Nav,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useAuth} from "./../contexts/AuthContext";
import {Link,useHistory} from "react-router-dom";



const Bar=()=>{
  const {currUser}=useAuth();
  let islogin=true;
  const [error,setError]=useState('');
  const {currentUser,logout}= useAuth();
  const history=useHistory();
  const handleLogout= async()=>{
    setError("");
    try {
        await logout().then(()=>{
            history.push("/login");
            islogin=false;
        })
        
    } catch (error) {
        setError(error);
    }
}
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Foodie</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        

    </Nav>
    <Nav>
    <Nav.Link href="/help">Help & Support</Nav.Link>

      
       <Nav.Link eventKey={2} href="">{currentUser && currentUser.email}</Nav.Link>
       <div>
       {/* <Button varient ="Link" onClick={handleLogout}> Log Out</Button>   */}
       {currentUser? <Button variant="dark" size="sm" onClick={handleLogout}> Log Out</Button>:<></>}  
       </div>        
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}

export default Bar;