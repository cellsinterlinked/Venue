import React, {useState} from 'react';
import './Calendar.css';
import CalendarDay from './CalendarDay';
import Axios from 'axios'
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';


const CalendarContent = ({index, data, update, item, scrollRight, scrollLeft}) => {

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
        <div className="calendar_container">
          
            <div className="calendar_body">
                <div className="calendar_title">
                    <BsChevronLeft className="month_left" onClick={scrollLeft}/>
                    <p>{item.monthString}</p>
                    <p>{item.year}</p>
                    <BsChevronRight className="month_right"  onClick={scrollRight} />
                     </div>
                <div className="calendar_head">
                    <div className="day_box">SUNDAY</div>
                    <div className="day_box">MONDAY</div>
                    <div className="day_box">TUESDAY</div>
                    <div className="day_box">WEDNESDAY</div>
                    <div className="day_box">THURSDAY</div>
                    <div className="day_box">FRIDAY</div>
                    <div className="day_box">SATURDAY</div>
                </div>
                <div className="calendar_content">
                    {item.days.map((item, index) => {
                        return (
                            <CalendarDay key={Math.random()} item={item} sendUpdate={sendUpdate} index={index} />
                            
                            )
                    })}
                    
                </div>
                    


                
            </div>
        </div>
    )
}

export default CalendarContent;