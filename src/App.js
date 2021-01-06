import React, { useState } from 'react';
import './App.css';
import logoimg from './logo.png';
import vector from './Vector.png';
import Eventroll from './components/Eventroll.js';
import logo1 from './logo1.png';
import log from './log.png';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import admin from './admin.png';
  const App = () => {
    const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);    
     var [date, setDate] = useState("");
     var [time, settime] = useState("");
     var [title, settitle] = useState("");
     var [route, setroute] = useState("overview");
     var [page, setpage] = useState("loggedout");
     var [email, setemail] = useState("");
     var [password, setpassword] = useState("");
    const display = () => {
      console.log(date);
      console.log(time);
      console.log(title);
    }
   const changeduration = (event) => {
       settime(event.target.value);
   }
  const changetitle = (event) => {
       settitle(event.target.value);
   }
   const changeroute = (value) => {
       setroute(value);
       if(value == "overview"){       
       var element =  document.getElementById("overview");
       element.style.borderBottom = "3px solid #D89E5A";
       var element1 =  document.getElementById("details");
       element1.style.borderBottom = "none";
     }
     else
     {
          var element =  document.getElementById("details");
       element.style.borderBottom = "3px solid #D89E5A";
       var element1 =  document.getElementById("overview");
       element1.style.borderBottom = "none";
     }
   }
  
   const createrows = () => {
         var arr = [];
        for(var i = 1 ; i<=8; i++)
        {
          if(i%2 !== 0)
          {
          arr.push(  
           <div className='row'>
                <p className='info'>event</p>
                <p className='info'>150</p>
                <p className='info'>12 jan,2012</p>
                <p className='info'>15:02 pm</p>
                <p className='info'>nothing</p>
            </div>)
        }
        else{
          arr.push(<div className='uselessrow'></div>)
        }
      }
        console.log(arr);
        return arr;
   }
   const changepage = (value) =>{
        setpage(value);
        setroute("overview");
   }
   const getemail = (event) => {
     setemail(event.target.value)
   }
     const getpass = (event) => {
     setpassword(event.target.value)
   }
   const login = () =>{
      if(email == "ok" && password == "12")
      {
        changepage("loggedin");
        setemail("");
        setpassword("");
        var value = document.getElementById("warning");
        value.style.display = "none";
      }
      else{
       var value = document.getElementById("warning");
       value.style.display = "inline";
        
      }
   }   
      {if(page == "loggedout")
        {
          return(<div className='login-container'>
                  <img className='logo1' src={logo1}/>
                  <form class="search-bar-email" >
                     <input className='input-email' onChange={getemail} type="email" autoComplete="off" placeholder="Email Id" name="email"/>
                 </form>
                 <form class="search-bar-password" >
                     <input className='input-password' onChange={getpass} type="Password" placeholder="Password" name="Password"/>
                 </form>
                 <p className='warning' id='warning'>Wrong Password or Email</p>
                 <button className='login-button' onClick={login}>Login</button>
                 <img className='admin' src={admin}/>
            </div>);
        }
      else{
        return(
        <div className ='parent-container'>
         <div className='i-1'>
            <img className='logo' src={logoimg}/>
            <p className='overview' id="overview" onClick={() => changeroute("overview")}>Overview</p>
            <p className='details'  id="details" onClick={() => changeroute("details")}>Details</p>
            <form class="search-bar" action="action_page.php">
               <input className='input' type="text" autoComplete="off" placeholder="Search" name="search"/>
               <button className='search-button' type="submit"><img class="search-img" src={vector}/></button>
            </form>
         </div>
         {route == "overview" ? 
         <div>
         <div className='i-2'>
            <h1 className='h-1'>Event Archives</h1>
               <Eventroll />
         </div>
         <div className='i-3'>
            <p className='stats'>Statastics</p>
            <div className='s-1'></div>
            <div className='s-2'></div>
            <div className='s-3'></div>
         </div>
          </div>
          :
             <div className='i-4'>
                <h1 className='h-i-1'>Event List</h1>
                <div className='table'>
                   <div className='headings'>
                      <p className='h-p'>Title</p>
                      <p className='h-p'>Registrations</p>
                      <p className='h-p'>Date</p>
                      <p className='h-p'>Time</p>
                      <p className='h-p'>Edit</p>
                   </div>
                   {createrows()}
                </div>
             </div>
       }
         
         <div className='calander-area'>
          <p className='create'>Create Event</p>
          <img className='logimage' onClick={() => changepage("loggedout")} src={log}></img>
          <p className='create-1'>Select Date</p>
           <DateRange className='calander'
 
  editableDateInputs={true}
  onChange={item => {setState([item.selection])
        if(item.selection.startDate !== item.selection.endDate)
        {
          console.log(item.selection);
          setDate(item.selection);
        }
  }
}
  moveRangeOnFirstSelection={false}
  ranges={state}
/>
           <form class="bar-1" action="action_page.php">
               <input className='duration' autoComplete="off" onChange={changeduration} type="text" placeholder="Duration" name="duration"/>
            </form>
            <form class="bar-2" action="action_page.php">
               <input className='title' autoComplete="off" onChange={changetitle} type="text" placeholder="Title" name="title"/>
            </form>
            <p className='field'>+  Add a Custom Field</p>
            <button className='create-button' onClick ={ display}>Create</button>
         </div>
      </div>
      );
      }  
  }
      
}

export default App;