import React, { useState } from 'react';
import './App.css';
import logoimg from './logo.png';
import vector from './Vector.png';
import Eventroll from './components/Eventroll.js';

import log from './log.png';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
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
  return (
      <div className ='parent-container'>
         <div className='i-1'>
            <img className='logo' src={logoimg}/>
            <p className='overview'>Overview</p>
            <p className='details'>Details</p>
            <form class="search-bar" action="action_page.php">
               <input className='input' type="text" placeholder="Search" name="search"/>
               <button className='search-button' type="submit"><img class="search-img" src={vector}/></button>
            </form>
         </div>
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
         <div className='calander-area'>
          <p className='create'>Create Event</p>
          <img className='logimage' src={log}></img>
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
               <input className='duration' onChange={changeduration} type="text" placeholder="Duration" name="duration"/>
            </form>
            <form class="bar-2" action="action_page.php">
               <input className='title' onChange={changetitle} type="text" placeholder="Title" name="title"/>
            </form>
            <p className='field'>+  Add a Custom Field</p>
            <button className='create-button' onClick ={ display}>Create</button>
         </div>
      </div>
  );
}

export default App;