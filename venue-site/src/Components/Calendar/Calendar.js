import React, { useState, useEffect } from "react";
import "./Calendar.css";
import CalendarContent from "./CalendarContent";
import CalendarDay from "./CalendarDay";
import Axios from "axios";
import HeadImg from "../../Assets/AdobeStock_100458960.jpeg";
import CalendarContentMobile from "./CalendarContentMobile";

const Calendar = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [num, setNum] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log("fetching");
    setLoading(true);
    let result;
    try {
      result = await Axios.get("http://localhost:5000/api/months/");
    } catch (err) {
      alert(err);
      setLoading(false);
      return;
    }

    setData(result.data.months);
    setLoading(false);
    console.log(result.data.months);
  };

  const update = (index, monthData) => {
    let newData = data;
    newData[index] = monthData;
    setData(newData);
  };

  const scrollLeft = () => {
    if (num === 0) {
      setNum(data.length - 1);
    } else {
      setNum(num - 1);
    }
  };

  const scrollRight = () => {
    if (num === data.length - 1) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  };

  let parallax
  let parallaxMobile
  useEffect(() => {
    parallax = document.getElementById("parallax")
    parallaxMobile = document.getElementById("parallaxMobile")

}, [])
  
  
  window.addEventListener("scroll", function ()
  {
    let offsetCalendar = window.pageYOffset;
    parallax.style.backgroundPositionY = offsetCalendar * 0.7 + "px";
  })

  window.addEventListener("scroll", function ()
  {
    let offsetCalendarMobile = window.pageYOffset;
    parallaxMobile.style.backgroundPositionY = offsetCalendarMobile * 0.7 + "px";
  })


  return (
    <wrapper className="parallax-wrapper">


      <div className="page-head" id="parallax">
        <div className="title-wrapper_left">
        <h3 className="page-title_light">Looking To Book An Event?</h3>
        <p className="page-details_light" style={{color: 'white'}}>Check out our schedule below to see what is available. <strong>After you find your desired date go to the contact page and send us a message. </strong></p>
        </div>


      </div>
        <div className="page-head_mobile" id="parallaxMobile">
        <div className="title-wrapper_mobile">
        <h3 className="page-title_mobile">Looking To Book An Event?</h3>
        <p className="page-details_mobile" style={{color: 'white'}}>Check out our schedule below to see what is available. <strong>After you find your desired date go to the contact page and send us a message. </strong></p>
        </div>
        </div>
      <div className="page-content">
        {data && (
          <div className="calendar_list">
            <div className="month_container">
              {data.map((item, index) => {
                return (
                  <div
                    className="month_button"
                    key={index}
                    onClick={() => setNum(index)}
                    style={{
                      backgroundColor:
                        index === num ? "rgb(224, 183, 94)" : "white",
                    }}
                  >
                    <h3>{item.monthString}</h3>
                    <p style={{ color: index === num ? "white" : "grey" }}>
                      {item.year}
                    </p>
                  </div>
                );
              })}
            </div>

            <CalendarContent
              monthProp={data[num].month}
              yearProp={data[num].year}
              key={Math.random()}
              update={update}
              index={num}
              data={data}
              item={data[num]}
              scrollLeft={scrollLeft}
              scrollRight={scrollRight}
            />
            <CalendarContentMobile 
                monthProp={data[num].month}
                yearProp={data[num].year}
                key={Math.random()}
                update={update}
                index={num}
                data={data}
                item={data[num]}
                scrollLeft={scrollLeft}
                scrollRight={scrollRight}
            
            />
         
          </div>
        )}
      </div>
    </wrapper>
  );
};

export default Calendar;
