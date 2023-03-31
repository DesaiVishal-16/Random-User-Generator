
import { useState } from "react";
import './App.css';
import Axios from "axios"
import { useEffect } from "react";




function App() {  
  const [details,setDetails]=useState({})
     
     const fetchDetails=async()=>{
          const {data}=await Axios.get('https://randomuser.me/api')

          const details=data.results[0]
          setDetails(details)
     }
    useEffect(() => {
     fetchDetails();
    }, [])
  
    const dob=details.dob?.date
    const date=new Date(dob)
    const newDobs=date.toLocaleDateString('en-GB');
      
    
    
     
    
  return (
    <div className="App" style={{paddingTop:"60px",backgroundColor:"black",paddingBottom:"15%"}}>

      <button onClick={fetchDetails} style={{background: "linear-gradient(to right, gray,black)",color:"white",fontWeight:"600",width:"12%",height:"35px",borderRadius:"3px",border:"1px solid white",position:"relative",left:"40.5%"}}>DISPLAY RANDOM USER </button>
         <div className="profile-img">
         <img className="img" src={details.picture?.large} alt="profile-pictures" style={{borderRadius:"50%",position:"relative",left:"42%",top:"50px", border: "5px solid white"}}/>
         </div>

        <div className="details" style={{display:"flex",gap:"110px",paddingTop:"120px",paddingLeft:"15%"}}> 

       <div className="user-details" style={{border:"1px solid white",paddingRight:"25px",backgroundColor:""}}>
        <ul style={{listStyle:"none",color:"white"}}>
        <li> <h3 style={{color:"",}}>User Details</h3> </li>
        <li><p style={{backgroundColor:"white",width:"100%",height:"2px"}}></p></li>
        <li><p>FIrst Name <span style={{paddingLeft:"25px"}}> : {details.name?.first} </span></p></li>
        <li><p>Last  Name <span style={{paddingLeft:"25px"}}>: {details.name?.last}</span></p></li>
        <li><p>Gender   <span style={{paddingLeft:"48px"}}> : {details.gender} </span></p></li>
        <li><p>Date of Birth <span style={{paddingLeft:"11px"}}>: {newDobs} </span></p></li>
        <li><p>Age  <span style={{paddingLeft:"75px"}}>: {details.dob?.age} </span></p></li>
        </ul>
        </div>

        <div className="Address" style={{border:"1px solid white",paddingRight:"30px",backgroundColor:""}}>
        <ul style={{listStyle:"none",color:"white"}}>
        <li> <h3 style={{color:"",}}>Address</h3> </li>
        <li><p style={{backgroundColor:"white",width:"100%",height:"2px"}}></p></li>
        <li><p>Country <span style={{paddingLeft:"10px"}}> : {details.location?.country} </span></p></li>
        <li><p>State  <span style={{paddingLeft:"30px"}}>: {details.location?.state}: </span></p></li>
        <li><p>City  <span style={{paddingLeft:"39px"}}> : {details.location?.city} </span></p></li>
        <li><p>Postcode <span style={{paddingLeft:"3px"}}> : {details.location?.postcode}</span></p></li>
        <li><p>Area  <span style={{paddingLeft:"35px"}}> : {details.location?.street?.name}</span></p></li>
        </ul>
        </div>

       <div className="Contact" style={{border:"1px solid white",paddingRight:"25px",backgroundColor:""}}>
        <ul style={{listStyle:"none",color:"white"}}>
        <li> <h3 style={{color:"",}}>Contact Details</h3> </li>
        <li><p style={{backgroundColor:"white",width:"100%",height:"2px"}}></p></li>
        <li><p>Email <span style={{paddingLeft:"40px"}}>: {details.email} </span></p></li>
        <li><p>Phone No.  <span style={{paddingLeft:"5px"}}>:  {details.phone}</span></p></li>
        <li><p>Cell No. <span style={{paddingLeft:"25px"}}> : {details.cell} </span></p></li>
       </ul>
       </div>
       </div>
     </div>
      
     
 
  );
}

export default App;
