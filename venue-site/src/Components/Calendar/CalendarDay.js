import React, {useState} from 'react';
import './Calendar.css';
import  {FiChevronDown} from 'react-icons/fi';

const CalendarDay = ({item, sendUpdate, index}) => {
    const [status, setStatus] = useState(item.status)

    const [active, setActive] = useState(false)

    const schedule = () => {
        if (status === true) {
            setStatus(false)
            item.status = false
            setActive(false)
            sendUpdate(index, item)
        }
    }

    const unschedule = () => {
        if (status === false) {
            setStatus(true)
            item.status = true
            setActive(false)
            sendUpdate(index, item)
        }
    }

    return(
        <div 
        className={item.num !== 0 ? "calendar_box" : "dead_box"}
        style={{backgroundColor: status === false ? "rgba(187, 50, 50, 0.616)" : ""}}
        >
        {item.num}
        {item.status === false && <p className="booked">BOOKED</p>}
        <div className="drop_container">
            <div className={active ? "drop-inner_active" :"drop_inner"} onClick={() => setActive(!active)}>
                <FiChevronDown className={active ? "drop-icon_rotate" : "drop_icon"} />
                <div className={active ? "options-container_active": "options_container"}>
                    <div className={active ? "calendar-option_active" : "calendar_option"}>
                        <p onClick={schedule}>SCHEDULE</p>
                    </div>
                    <div className={active ? "calendar-option_active" : "calendar_option"}>
                        <p onClick={unschedule}>UNSCHEDULE</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CalendarDay;