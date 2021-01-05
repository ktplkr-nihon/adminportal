import React from 'react';
import './calander.css';
import {useState} from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';

const Calander = () => {
     const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);    
     var [date, setDate] = useState("");
   return (
      <DateRange className='calander'
  editableDateInputs={true}
  onChange={item => {setState([item.selection])
        if(item.selection.startDate !== item.selection.endDate)
        {
          console.log(item.selection);
          setDate(item.selection);
          console.log(date);
        }
  }
}
  moveRangeOnFirstSelection={false}
  ranges={state}
/>
   	);
}
export default Calander;