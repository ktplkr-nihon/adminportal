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
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "react-js-pagination";
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
     var [item1 , setitem1] = useState(["ok", "lol"]);
     var [item2 , setitem2] = useState([]);
     var [item3 , setitem3] = useState([]);
     var [item4 , setitem4] = useState([]);
     var [item5 , setitem5] = useState([]);
     var [pagenumber , setpagenumber] = useState(1);
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
        for(var i = 0 ; i<10; i++)
        {
          if(i%2==0){
          arr.push(<tr className='rows'>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>{item1[0]}</td>
        </tr>)
        }
        else{
          arr.push(<tr className='rows-1'>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@anything</td>
        </tr>)
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

   const handlePageChange = (pagenumber) => {
    console.log(`active page is ${pagenumber}`);
    setpagenumber(pagenumber);

  }
  const loginbybutton = (event) => {
     if(event.key === "Enter"){
      
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
  } 
   const login = (event) =>{
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
          return(<div onKeyPress={loginbybutton} className='login-container'>
                  <img className='logo1' src={logo1}/>
                  <div class="search-bar-email" >
                     <input className='input-email' onChange={getemail} type="email" autoComplete="off" placeholder="Email Id" name="email"/>
                 </div>
                 <div class="search-bar-password" >
                     <input className='input-password' onChange={getpass} type="Password" placeholder="Password" name="Password"/>
                 </div>
                 <p className='warning' id='warning'>Wrong Password or Email</p>
                 <button className='login-button' id="login-button" onClick={login} >Login</button>
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
                <Table borderless>
                <thead>
                   <tr className='heading'>
                      <th>Title</th>
                      <th>Registrations</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Edit</th>
                   </tr>
                </thead>
                <tbody>
                {createrows()}
                </tbody>
                </Table>
                 <Pagination
      activePage={pagenumber}
      itemsCountPerPage={1}
      totalItemsCount={20}
      onChange={handlePageChange}
    />
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