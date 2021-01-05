import React, {useState} from 'react';
import './eventroll.css';
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Eventroll = () => {
    const [count, setCount] = useState(8); 
    const [name, setName] = useState('Lorem Ipsum');  
	const makeEvent = (eventCount, name) =>{
		var array = [];
         for(var i =0; i<eventCount; i++)
         {
            array.push(<div className='holder'>
            	<div className='c'>
                    <p className='view'>View Details</p>
            	</div>
            	 <p className='name'>{name}</p>
            	 </div>
            	)
         }
         return array;
	}
     
     const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
	return(

        <div className ='card-holder'>
        <Slider {...settings}>
          {makeEvent(count, name)}
        </Slider>
         </div>
		);
        }
export default Eventroll;