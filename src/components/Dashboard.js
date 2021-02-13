import  React, { useState }  from "react";
import {useAuth} from "./../contexts/AuthContext";
import {Link,useHistory} from "react-router-dom";
import Food from '../components/Food';
import About from '../components/About'
//import Bar from "./Bar";
const Dashboard=()=>{
    // const [error,setError]=useState('');
    // const {currentUser,logout}= useAuth();
    // const history=useHistory();
    // const handleLogout= async()=>{
    //     setError("");
    //     try {
    //         await logout().then(()=>{
    //             history.push("/login");
    //         })
            
    //     } catch (error) {
    //         setError(error);
    //     }
    // }
    let [flag,setflag]= useState("false");
    const [data, setData] = useState();
    const handleSubmit = (event)=>{
        event.preventDefault();
        //console.log(data);
        setflag(true);
    }
    const handleChange=(event)=>{
        //console.log(event.target.value);
        setData(event.target.value);
        //setflag("true");
        setflag(false);
    }
    
    return(<div>
        <div className="container">
        <div className ="row">
            <section className="col s6 offset-s4">
                <form action="" onSubmit={handleSubmit} className="mt-5">
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Search Your Desired Recipe" onChange={handleChange}/>
                    </div>
                </form>
                {flag===true?<Food data={data}/>:""}
            </section>
        </div>
    </div>


{/* 
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
        <div className="w-100" style={{maxWidth:"400px"}}><div>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error? <Alert variant="danger"> {JSON.stringify(error)} </Alert>: ""}
                <strong>Email: </strong>
                {currentUser && currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3" >Update Profile</Link>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Button varient ="Link" onClick={handleLogout}> Log Out</Button>
            
        </div>
        </div>
        
    </div>
    </Container> */}
    </div>);
}
export default Dashboard;