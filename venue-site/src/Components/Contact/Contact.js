import React, {useState, useEffect} from 'react'

import './Contact.css';






const Contact = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [date, setDate] = useState()
    const [message, setMessage] = useState()
    const [nameError, setNameError] = useState()
    const [emailError, setEmailError] = useState()
    const [phoneError, setPhoneError] = useState()
    const [dateError, setDateError] = useState()
    const [messageError, setMessageError] = useState()

    const nameValidate = () => {
        if (name.length < 4) {
            setNameError("Name must be at least 4 characters")
        }
    }

    const nameHandler = (e) => {
        setName(e)
        if(nameError && e.length > 4) {
            setNameError()
        }
    }

    const emailValidate = () => {
        if (email.length < 1) {
            setEmailError("Please enter a valid Email")
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmailError("Please enter a valid Email")
        }
    }

    const emailHandler = (e) => {
        setEmail(e)
        if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)) {
            setEmailError()
        }
    }

    const phoneValidate = () => {
        if(phone.length < 1) {
            setPhoneError("Please enter a phone number.")
        } else if (phone.length > 12) {
            setPhoneError("Please enter a valid phone number.")
        } else if( phone.length < 10) {
            setPhoneError("Please enter your full phone number.")
        }
    }

    const phoneHandler = (e) => {
        setPhone(e)
        if(e.length > 8 && e.length < 13 ) {
            setPhoneError()
        }
    }

    const dateValidate = () => {
        if(date.length < 1) {
            setDateError("Please enter a date.")
        } else if (date.length > 10) {
            setDateError("Please enter a valid date (ex. 01/31/2023).")
        } else if( date.length < 10) {
            setDateError("Please enter the entire date")
        }
    }

    const dateHandler = (e) => {
        setDate(e)
        if(e.length > 9 && e.length < 11) {
            setDateError()
        }
    }

    let contactParallax
    let contactParallax_mobile
    useEffect(() => {
        contactParallax = document.getElementById("parallaxContact")
        contactParallax_mobile = document.getElementById("parallaxContact_mobile")

        return
    }, [])


    window.addEventListener("scroll", function ()
    {
      let offsetContact = window.pageYOffset;
      contactParallax.style.backgroundPositionY = offsetContact * 0.7 + "px";
    })

    window.addEventListener("scroll", function ()
    {
      let offsetContactMobile = window.pageYOffset;
      contactParallax_mobile.style.backgroundPositionY = offsetContactMobile * 0.7 + "px";
    })
  


    return(
        <div className="parallax-wrapper">
     <div className="page-head_contact" id="parallaxContact">
        <div className="title-wrapper_right" style={{marginTop: "4%"}}>
        <h3 className="page-title">Ready To Book?</h3>
        <p className="page-details">Fill out the <strong>contact form</strong> below and lets get the process <strong>started!</strong></p>
        </div>

      </div>

      <div className="page-head-mobile_contact" id="parallaxContact_mobile">
        <div className="title-wrapper_mobile" style={{marginTop: "4%"}}>
        <h3 className="page-title_mobile">Ready To Book?</h3>
        <p className="page-details_mobile">Fill out the <strong>contact form</strong> below and lets get the process <strong>started!</strong></p>
        </div>

      </div>

        <div className="contact_container">
            <div className="contact-color"></div>
            <div className="contact-background"></div>
            <form
            className="contact-form"
            initialValues={{ name: "", email: ""}}
            
            onSubmit={values => {
                console.log(values)
            }}
            >
               
                    {/* <form className="contact-form"> */}
            <div className="contact-head">
                <h3><strong className="start-letter">C</strong>ontact</h3>
                <p>Have <strong className="text-stress">questions</strong> or want to <strong className="text-stress">book</strong> a date? Send us a <strong className="text-stress">message</strong>!</p>
            </div>
                        <input name="name" className="sm-field" placeholder="Name" onChange={(e) => nameHandler(e.target.value)} onBlur={nameValidate}/>
                       
                            {nameError && <div className="contact-error">{nameError}</div>}
                       
                         <input name="email" className="sm-field" placeholder="Email" onChange={(e) => emailHandler(e.target.value)} onBlur={emailValidate}/>
                       
                           {emailError && <div className="contact-error">{emailError}</div>}
                       
                           <input name="phone" className="sm-field" placeholder="Phone #" onChange={(e) => phoneHandler(e.target.value)} onBlur={phoneValidate}/>
                       
                            {phoneError && <div className="contact-error">{phoneError}</div>}
                       
                              <input name="date" className="sm-field" placeholder="Date (ex. 01/31/2023)" onChange={(e) => dateHandler(e.target.value)} onBlur={dateValidate}/>
                      
                           {dateError &&  <div className="contact-error">{dateError}</div>}

                           <textarea name="message" className="lg-field" placeholder="Write your message or event details here..." />

                           {messageError && <div className="contact-error">{messageError}</div>}
                 
                        <button type="submit" className="contact-submit">SUBMIT</button>
                    </form>
            






            {/* </form> */}
        </div>
        </div>
    )
}

export default Contact