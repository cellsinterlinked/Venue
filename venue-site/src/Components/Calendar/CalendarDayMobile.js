import React, {useState} from 'react';
import './Calendar.css';

import SmallModal from '../Modal/SmallModal';

import Backdrop from '../Modal/Backdrop';

const CalendarDayMobile = ({item, sendUpdate, index}) => {
    const [status, setStatus] = useState(item.status)


    const [modal, setModal] = useState(false)


    const mobileSchedule = () => {
        if (status === true) {
            setStatus(false)
            item.status = false
            sendUpdate(index, item)
            setModal(false)
        }

        if (status === false) {
            setStatus(true)
            item.status = true
            sendUpdate(index, item)
            setModal(false)
        }
    }

    const activateModal = () => {
        setModal(!modal)
    }

    return(
        <div 
        className={item.num !== 0 ? "calendar_box-mobile" : "dead_box-mobile"}
        style={{backgroundColor: status === false ? "rgba(187, 50, 50, 0.616)" : ""}}
        onClick={activateModal}
        >
        {modal && <Backdrop onClick={() => setModal(false)} />}
        <SmallModal 
        show={modal} 
        children={
        <div className="mobile-option_wrapper">
            {status === true && <h1>Are you sure you want to book this date?</h1>}
            {status === false && <h1>Are you sure you want to free up this date??</h1>}
            <button className="green-button" onClick={mobileSchedule}>
                YES
            </button>
            <button className="red-button" onClick={() => setModal(false)}>
                NO
            </button>


        </div>
    
    
    }
        />
        {item.num}
        {item.status === false && <p className="booked-mobile">BOOKED</p>}

        </div>
    )
}

export default CalendarDayMobile;