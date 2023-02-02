import React, { useEffect, useState } from "react";
import "./Photos.css";
import Modal from "../Modal/Modal";



const DUMMY_PHOTOS = [
  "https://images.unsplash.com/photo-1672928988471-ea4df686586b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1672777158319-9c81e5e0a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1672841828482-13d466cc8d85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1672376786877-e639ca2e0ec5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1672855944100-18c7123b6495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1672611945002-66915330b3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVudWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1534353341328-aede12f06b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVudWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1613067532651-7075a620c900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmVudWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1480455454781-1af590be2a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHZlbnVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1549620936-aa6278062ba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZlbnVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1571268373914-e888c6dafeff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHZlbnVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1525772764200-be829a350797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1569264630284-770de3d5935d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1605985687770-2e2e82c9b5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHx3ZWRkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

const Photos = () => {
  const [active, setActive] = useState();

  const cancel = () => {
    setActive();
  };

  const select = (index) => {
    setActive(index);
  };

  const scrollForward = () => {
    if (active === DUMMY_PHOTOS.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const scrollBackward = () => {
    if (active === 0) {
      setActive(DUMMY_PHOTOS.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  let photoParallax;
  let photoParallaxMobile

  useEffect(() => {
    photoParallax = document.getElementById("parallaxPhoto");
    photoParallaxMobile = document.getElementById("parallaxPhoto_mobile");
    return;
  }, []);

  window.addEventListener("scroll", function () {
    let offsetPhoto = window.pageYOffset;
    photoParallax.style.backgroundPositionY = offsetPhoto * 0.7 + "px";
  });
  
  window.addEventListener("scroll", function () {
    let offsetPhotoMobile = window.pageYOffset;
    photoParallaxMobile.style.backgroundPositionY = offsetPhotoMobile * 0.7 + "px";
  });

  return (
    <div className="parallax-wrapper">
      <div className="page-head_photo" id="parallaxPhoto">
        <div
          className="title-wrapper_left"
          style={{ marginTop: "4%", marginLeft: "5%" }}
        >
          <h3 className="page-title_light">Photo Album</h3>
          <p className="page-details">
            Check out some of the photos from our previous events.{" "}
            <strong> </strong>
          </p>
        </div>
      </div>

      <div className="page-head-mobile_photo" id="parallaxPhoto_mobile">
        <div
          className="title-wrapper_mobile"
          // style={{ marginTop: "4%", marginLeft: "5%" }}
        >
          <h3 className="page-title_mobile">Photo Album</h3>
          <p className="page-details_mobile" style={{color: "white"}}>
            Check out some of the photos from our previous events.{" "}
            <strong> </strong>
          </p>
        </div>
      </div>
      <div className="about-text_wrapper">
        <div className="about-text">
        <h2>Amet purus gravida quis blandit turpis.</h2>
        <p >
          Amet purus gravida quis blandit turpis. In arcu cursus euismod quis.
          Dolor morbi non arcu risus quis varius quam quisque. Id porta nibh
          venenatis cras. Eleifend donec pretium vulputate sapien nec. Ut diam
          quam nulla porttitor massa id neque. Pharetra pharetra massa massa
          ultricies mi quis hendrerit dolor. Urna molestie at elementum eu
          facilisis. Eget arcu dictum varius duis at consectetur. Ut enim
          blandit volutpat maecenas volutpat blandit. At quis risus sed
          vulputate odio ut. A lacus vestibulum sed arcu non odio euismod.
          Accumsan lacus vel facilisis volutpat est velit egestas. Lectus
          vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt
          ornare. Et netus et malesuada fames. Tellus pellentesque eu tincidunt
          tortor aliquam nulla facilisi cras. Odio ut sem nulla pharetra diam
          sit amet nisl suscipit. Facilisi etiam dignissim diam quis enim
          lobortis scelerisque. Aliquam vestibulum morbi blandit cursus risus.
        </p>


        </div>
      </div>

      <div className="photos_page">
        <Modal
          scrollBackward={scrollBackward}
          scrollForward={scrollForward}
          scroll={true}
          show={active}
          onCancel={cancel}
          modalStyle="image_modal"
          children={
            <div className="modal_image">
              <img alt="" src={DUMMY_PHOTOS[active]} />
            </div>
          }
        />
        <div className="photos_container">
          {/* <div className="photo_title">
                <h1><strong>P</strong>hotos</h1>
            </div> */}
          {DUMMY_PHOTOS.map((item, index) => {
            return (
              <div
                className="photo-list_container"
                key={Math.random()}
                onClick={() => select(index)}
              >
                <img alt="" src={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Photos;
