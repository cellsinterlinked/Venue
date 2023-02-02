import React, {useState} from 'react';
import './CalendarMobile.css';
import CalendarDayMobile from './CalendarDayMobile';
import Axios from 'axios'
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';


const CalendarContentMobile = ({index, data, update, item, scrollRight, scrollLeft}) => {

const [loading, setLoading] = useState()

    

    const sendUpdate = async(indexUpdate, itemUpdate) => {
        setLoading(true)
        let newItem = item
        newItem[indexUpdate] = itemUpdate

        update(index, newItem)
         
        let results;
        try {
         results = await Axios.patch('http://localhost:5000/api/months/update', {updatedMonth: newItem})
            
        } catch (err) {
            alert(err)
            setLoading(false)
            return
        }

        setLoading(false)
        console.log(results)



        //this will send api update as well as update state of parent component 
    }
    
    
    return(
        <div className="calendar_container-mobile">
          
            <div className="calendar_body-mobile">
                <div className="calendar_title-mobile">
                    <BsChevronLeft className="month_left-mobile" onClick={scrollLeft}/>
                    <p>{item.monthString}</p>
                    <p>{item.year}</p>
                    <BsChevronRight className="month_right-mobile"  onClick={scrollRight} />
                     </div>
                <div className="calendar_head-mobile">
                    <div className="day_box-mobile">SUN</div>
                    <div className="day_box-mobile">MON</div>
                    <div className="day_box-mobile">TUE</div>
                    <div className="day_box-mobile">WED</div>
                    <div className="day_box-mobile">THU</div>
                    <div className="day_box-mobile">FRI</div>
                    <div className="day_box-mobile">SAT</div>
                </div>
                <div className="calendar_content-mobile">
                    {item.days.map((item, index) => {
                        return (
                            <CalendarDayMobile key={Math.random()} item={item} sendUpdate={sendUpdate} index={index} />
                            
                            )
                    })}
                    
                </div>
                    


                
            </div>
        </div>
    )
}

export default CalendarContentMobile;